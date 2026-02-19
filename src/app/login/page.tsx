"use client"
import React, { useState, useEffect } from 'react';
import {
  Briefcase, MapPin, Plus, Edit2, Trash2, Users, Eye, LogOut, User,
  Calendar, DollarSign, Building, Download, ExternalLink, Phone, Mail,
  Globe, FileText, X, Filter, Search, ChevronDown, Save
} from 'lucide-react';
import logo from '../../../assets/smash_logo.svg';

// ─── Constants ────────────────────────────────────────────────────────────────

// const API_BASE = 'https://test-api-v8gp.onrender.com';
const API_BASE = 'http://127.0.0.1:8000';

// ─── Types & Interfaces ───────────────────────────────────────────────────────

interface SelectOption {
  value: string;
  label: string;
}

interface AuthForm {
  username: string;
  email: string;
  password: string;
}

interface JobForm {
  title: string;
  description: string;
  requirements: string;
  responsibility: string;
  location: string;
  job_type: string;
  salary_range: string;
  application_deadline: string;
  is_active: boolean;
}

interface Job {
  id: number;
  title: string;
  description: string;
  requirements: string;
  responsibility: string;
  location: string;
  job_type: string;
  salary_range: string | null;
  application_deadline: string | null;
  is_active: boolean;
  created_at: string;
}

interface Application {
  id: number;
  job_id: number;
  first_name: string;
  middle_name?: string;
  last_name: string;
  email: string;
  phone: string;
  dob: string;
  state_of_origin: string;
  address: string;
  portfolio?: string;
  social_link?: string;
  cv_filename?: string;
  cover_letter?: string;
  status?: ApplicationStatus;
  applied_at: string;
}

type ApplicationStatus = 'pending' | 'reviewed' | 'accepted' | 'rejected';
type DateFilterOption = 'all' | 'today' | 'week' | 'month' | 'latest' | 'oldest';

interface ExpandedMap {
  [jobId: number]: boolean;
}

// ─── Sub-component Props ──────────────────────────────────────────────────────

interface CVPreviewProps {
  application: Application;
  onClose: () => void;
}

interface CoverLetterPreviewProps {
  application: Application;
  onClose: () => void;
}

// ─── Helper: auth headers ─────────────────────────────────────────────────────

const getAuthHeaders = (): Record<string, string> => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
};

// ─── CV Preview Component ─────────────────────────────────────────────────────

const CVPreview: React.FC<CVPreviewProps> = ({ application, onClose }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getFileType = (filename: string | undefined): string => {
    if (!filename) return '';
    const actual = filename.includes('/') ? filename.split('/').pop()! : filename;
    return actual.split('.').pop()?.toLowerCase() ?? '';
  };

  const getDisplayFilename = (filename: string | undefined): string => {
    if (!filename) return 'CV';
    return filename.includes('/') ? filename.split('/').pop()! : filename;
  };

  const downloadCV = async (app: Application): Promise<void> => {
    if (!app.cv_filename) {
      alert('No CV file available for this application');
      return;
    }
    try {
      let response = await fetch(`${API_BASE}/applications/${app.id}/download-cv`, {
        headers: getAuthHeaders(),
      });
      if (!response.ok) {
        const downloadUrl = app.cv_filename.startsWith('http')
          ? app.cv_filename
          : `${API_BASE}/${app.email.split('@')[0]}/cv/${app.cv_filename}`;
        response = await fetch(downloadUrl);
      }
      if (!response.ok) throw new Error(`Server responded with status: ${response.status}`);
      const blob = await response.blob();
      if (blob.size === 0) throw new Error('Downloaded file is empty');

      let filename = `${app.first_name}_${app.last_name}_CV`;
      const contentDisposition = response.headers.get('content-disposition');
      if (contentDisposition) {
        const match = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        if (match?.[1]) filename = match[1].replace(/['"]/g, '');
      } else if (app.cv_filename) {
        filename = app.cv_filename.includes('/')
          ? app.cv_filename.split('/').pop()!
          : app.cv_filename;
      }

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      alert(`Error downloading CV: ${(err as Error).message}`);
    }
  };

  useEffect(() => {
    let objectUrl: string | null = null;

    const loadPreview = async (): Promise<void> => {
      if (!application.cv_filename) {
        setError('No CV file available');
        setLoading(false);
        return;
      }
      try {
        const fileUrl = application.cv_filename.startsWith('http')
          ? application.cv_filename
          : `${API_BASE}/${application.email.split('@')[0]}/cv/${application.cv_filename}`;

        const response = await fetch(fileUrl);
        if (!response.ok) throw new Error(`Failed to load CV preview. Status: ${response.status}`);
        const blob = await response.blob();
        if (blob.size === 0) throw new Error('CV file is empty or corrupted');

        objectUrl = window.URL.createObjectURL(blob);
        setPreviewUrl(objectUrl);
      } catch (err) {
        setError(`Error loading CV: ${(err as Error).message}`);
      } finally {
        setLoading(false);
      }
    };

    loadPreview();
    return () => {
      if (objectUrl) window.URL.revokeObjectURL(objectUrl);
    };
  }, [application]);

  const fileType = getFileType(application.cv_filename);
  const displayFilename = getDisplayFilename(application.cv_filename);
  const isImage = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'].includes(fileType);
  const isPdf = fileType === 'pdf';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold">
            CV Preview – {application.first_name} {application.last_name}
            <span className="text-sm text-gray-500 ml-2">({displayFilename})</span>
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => downloadCV(application)}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm flex items-center gap-1 transition-colors"
            >
              <Download size={14} /> Download
            </button>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-1 rounded transition-colors">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-4" style={{ height: 'calc(90vh - 100px)' }}>
          {loading && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
                <div className="text-gray-500">Loading CV preview...</div>
              </div>
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center max-w-md">
                <FileText size={48} className="text-red-400 mx-auto mb-3" />
                <div className="text-red-600 mb-2 font-medium">{error}</div>
                <div className="text-sm text-gray-600 mb-4">
                  The CV file might not be accessible or the file path might be incorrect.
                </div>
                <button
                  onClick={() => downloadCV(application)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2 mx-auto transition-colors"
                >
                  <Download size={16} /> Try Download Instead
                </button>
              </div>
            </div>
          )}

          {previewUrl && !loading && !error && (
            <>
              {isImage && (
                <div className="flex items-center justify-center h-full">
                  <img
                    src={previewUrl}
                    alt="CV Preview"
                    className="max-w-full max-h-full object-contain shadow-lg rounded-lg"
                    onError={() => setError('Failed to display image')}
                  />
                </div>
              )}
              {isPdf && (
                <iframe
                  src={previewUrl}
                  className="w-full h-full border-0 shadow-lg rounded-lg"
                  title="CV Preview"
                  onError={() => setError('Failed to display PDF')}
                />
              )}
              {!isImage && !isPdf && (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <FileText size={48} className="text-gray-400 mx-auto mb-2" />
                    <div className="text-gray-600 mb-4">
                      Preview not available for {fileType?.toUpperCase()} files
                    </div>
                    <div className="text-sm text-gray-500 mb-4">
                      Supported preview formats: PDF, JPG, PNG, GIF
                    </div>
                    <button
                      onClick={() => downloadCV(application)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2 mx-auto transition-colors"
                    >
                      <Download size={16} /> Download to View
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Cover Letter Preview Component ──────────────────────────────────────────

const CoverLetterPreview: React.FC<CoverLetterPreviewProps> = ({ application, onClose }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isTextContent, setIsTextContent] = useState<boolean>(false);

  const getFileType = (filename: string | undefined): string => {
    if (!filename) return '';
    const actual = filename.includes('/') ? filename.split('/').pop()! : filename;
    return actual.split('.').pop()?.toLowerCase() ?? '';
  };

  const getDisplayFilename = (filename: string | undefined): string => {
    if (!filename) return 'Cover Letter';
    return filename.includes('/') ? filename.split('/').pop()! : filename;
  };

  const downloadCoverLetter = async (app: Application): Promise<void> => {
    if (!app.cover_letter) {
      alert('No cover letter file available for this application');
      return;
    }
    if (app.cover_letter.length < 255 && !app.cover_letter.includes('.')) {
      const blob = new Blob([app.cover_letter], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `${app.first_name}_${app.last_name}_CoverLetter.txt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      return;
    }
    try {
      let response = await fetch(`${API_BASE}/applications/${app.id}/download-cover-letter`, {
        headers: getAuthHeaders(),
      });
      if (!response.ok) {
        const downloadUrl = app.cover_letter.startsWith('http')
          ? app.cover_letter
          : `${API_BASE}/${app.email.split('@')[0]}/cover_letter/${app.cover_letter}`;
        response = await fetch(downloadUrl);
      }
      if (!response.ok) throw new Error(`Server responded with status: ${response.status}`);
      const blob = await response.blob();
      if (blob.size === 0) throw new Error('Downloaded file is empty');

      let filename = `${app.first_name}_${app.last_name}_CoverLetter`;
      const contentDisposition = response.headers.get('content-disposition');
      if (contentDisposition) {
        const match = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        if (match?.[1]) filename = match[1].replace(/['"]/g, '');
      } else if (app.cover_letter) {
        filename = app.cover_letter.includes('/')
          ? app.cover_letter.split('/').pop()!
          : app.cover_letter;
      }

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      alert(`Error downloading cover letter: ${(err as Error).message}`);
    }
  };

  useEffect(() => {
    let objectUrl: string | null = null;

    const loadPreview = async (): Promise<void> => {
      if (!application.cover_letter) {
        setError('No cover letter available');
        setLoading(false);
        return;
      }
      if (application.cover_letter.length < 255 && !application.cover_letter.includes('.')) {
        setIsTextContent(true);
        setLoading(false);
        return;
      }
      try {
        const fileUrl = application.cover_letter.startsWith('http')
          ? application.cover_letter
          : `${API_BASE}/${application.email.split('@')[0]}/cover_letter/${application.cover_letter}`;

        const response = await fetch(fileUrl);
        if (!response.ok) throw new Error(`Failed to load cover letter. Status: ${response.status}`);
        const blob = await response.blob();
        if (blob.size === 0) throw new Error('Cover letter file is empty or corrupted');

        objectUrl = window.URL.createObjectURL(blob);
        setPreviewUrl(objectUrl);
      } catch (err) {
        setError(`Error loading cover letter: ${(err as Error).message}`);
      } finally {
        setLoading(false);
      }
    };

    loadPreview();
    return () => {
      if (objectUrl) window.URL.revokeObjectURL(objectUrl);
    };
  }, [application]);

  const fileType = getFileType(application.cover_letter);
  const displayFilename = getDisplayFilename(application.cover_letter);
  const isPdf = fileType === 'pdf';
  const isDoc = ['doc', 'docx'].includes(fileType);
  const isText = fileType === 'txt' || isTextContent;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold">
            Cover Letter Preview – {application.first_name} {application.last_name}
            {!isTextContent && (
              <span className="text-sm text-gray-500 ml-2">({displayFilename})</span>
            )}
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => downloadCoverLetter(application)}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm flex items-center gap-1 transition-colors"
            >
              <Download size={14} /> Download
            </button>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-1 rounded transition-colors">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-4" style={{ height: 'calc(90vh - 100px)' }}>
          {loading && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
                <div className="text-gray-500">Loading cover letter preview...</div>
              </div>
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center max-w-md">
                <FileText size={48} className="text-red-400 mx-auto mb-3" />
                <div className="text-red-600 mb-2 font-medium">{error}</div>
                <div className="text-sm text-gray-600 mb-4">
                  The cover letter file might not be accessible or the file path might be incorrect.
                </div>
                <button
                  onClick={() => downloadCoverLetter(application)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2 mx-auto transition-colors"
                >
                  <Download size={16} /> Try Download Instead
                </button>
              </div>
            </div>
          )}

          {isTextContent && !loading && !error && (
            <div className="h-full overflow-y-auto">
              <div className="bg-gray-50 p-6 rounded-lg h-full">
                <h4 className="font-semibold mb-4 text-gray-800">Cover Letter Content:</h4>
                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {application.cover_letter}
                </div>
              </div>
            </div>
          )}

          {previewUrl && !loading && !error && !isTextContent && (
            <>
              {isPdf && (
                <iframe
                  src={previewUrl}
                  className="w-full h-full border-0 shadow-lg rounded-lg"
                  title="Cover Letter Preview"
                  onError={() => setError('Failed to display PDF')}
                />
              )}
              {isText && (
                <div className="h-full overflow-y-auto">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <iframe
                      src={previewUrl}
                      className="w-full h-full border-0"
                      title="Cover Letter Preview"
                      onError={() => setError('Failed to display text file')}
                    />
                  </div>
                </div>
              )}
              {isDoc && (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <FileText size={48} className="text-gray-400 mx-auto mb-2" />
                    <div className="text-gray-600 mb-4">
                      Preview not available for {fileType?.toUpperCase()} files
                    </div>
                    <div className="text-sm text-gray-500 mb-4">
                      Microsoft Word documents require download to view
                    </div>
                    <button
                      onClick={() => downloadCoverLetter(application)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2 mx-auto transition-colors"
                    >
                      <Download size={16} /> Download to View
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const AdminDashboard: React.FC = () => {
  // ── Auth state ──────────────────────────────────────────────────────────────
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  // ── Preview state ───────────────────────────────────────────────────────────
  const [showCVPreview, setShowCVPreview] = useState<boolean>(false);
  const [showCoverLetterPreview, setShowCoverLetterPreview] = useState<boolean>(false);
  const [previewApplication, setPreviewApplication] = useState<Application | null>(null);

  // ── Static options ──────────────────────────────────────────────────────────
  const jobTypes: SelectOption[] = [
    { value: 'Full Time', label: 'Full Time' },
    { value: 'Part Time', label: 'Part Time' },
    { value: 'Contract', label: 'Contract' },
    { value: 'Remote', label: 'Remote' },
    { value: 'Hybrid', label: 'Hybrid' },
    { value: 'Internship', label: 'Internship' },
  ];

  // ── Auth form ───────────────────────────────────────────────────────────────
  const [authForm, setAuthForm] = useState<AuthForm>({ username: '', email: '', password: '' });

  // ── Job/application state ───────────────────────────────────────────────────
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [showJobForm, setShowJobForm] = useState<boolean>(false);
  const [showApplications, setShowApplications] = useState<boolean>(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [selectedJobApplications, setSelectedJobApplications] = useState<Application[]>([]);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [showApplicationModal, setShowApplicationModal] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [dateFilter, setDateFilter] = useState<DateFilterOption>('all');
  const [currentJobTitle, setCurrentJobTitle] = useState<string>('');
  const [editingApplicationStatus, setEditingApplicationStatus] = useState<number | null>(null);
  const [expandedDescription, setExpandedDescriptions] = useState<ExpandedMap>({});
  const [expandedRequirements, setExpandedRequirements] = useState<ExpandedMap>({});
  const [expandedResponsibility, setExpandedResponsibility] = useState<ExpandedMap>({});

  const defaultJobForm: JobForm = {
    title: '',
    description: '',
    requirements: '',
    responsibility: '',
    location: 'Abuja',
    job_type: 'Full Time',
    salary_range: '',
    application_deadline: '',
    is_active: true,
  };
  const [jobForm, setJobForm] = useState<JobForm>(defaultJobForm);

  // ── Bootstrap ───────────────────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        setIsAuthenticated(true);
        fetchJobs();
        fetchApplications();
      }
    }
  }, []);

  // ─── Auth ──────────────────────────────────────────────────────────────────

  const handleAuth = async (isLogin: boolean = true): Promise<void> => {
    setLoading(true);
    try {
      const endpoint = isLogin ? '/login' : '/register';
      const payload = isLogin
        ? { username: authForm.username, password: authForm.password }
        : authForm;

      const response = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || 'Authentication failed');

      if (isLogin) {
        if (typeof window !== 'undefined') localStorage.setItem('token', data.access_token);
        setIsAuthenticated(true);
        setUser(authForm.username);
        fetchJobs();
        fetchApplications();
      } else {
        setShowLogin(true);
      }
      setAuthForm({ username: '', email: '', password: '' });
    } catch (err) {
      alert((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = (): void => {
    if (typeof window !== 'undefined') localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
    setJobs([]);
    setApplications([]);
  };

  // ─── API helpers ───────────────────────────────────────────────────────────

  const fetchJobs = async (): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE}/jobs`);
      const data = await response.json();
      setJobs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error fetching jobs:', err);
      setJobs([]);
    }
  };

  const fetchApplications = async (): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE}/applications`, { headers: getAuthHeaders() });
      if (response.ok) {
        const data = await response.json();
        setApplications(Array.isArray(data) ? data : []);
      } else {
        setApplications([]);
      }
    } catch (err) {
      console.error('Error fetching applications:', err);
      setApplications([]);
    }
  };

  // ─── Job CRUD ──────────────────────────────────────────────────────────────

  const handleJobSubmit = async (): Promise<void> => {
    if (!jobForm.title || !jobForm.description || !jobForm.requirements || !jobForm.responsibility) {
      alert('Please fill in all required fields');
      return;
    }
    try {
      const url = editingJob ? `${API_BASE}/jobs/${editingJob.id}` : `${API_BASE}/jobs`;
      const response = await fetch(url, {
        method: editingJob ? 'PUT' : 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(jobForm),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to save job');
      }
      fetchJobs();
      resetJobForm();
    } catch (err) {
      alert((err as Error).message);
    }
  };

  const resetJobForm = (): void => {
    setJobForm(defaultJobForm);
    setShowJobForm(false);
    setEditingJob(null);
  };

  const handleEditJob = (job: Job): void => {
    setJobForm({
      title: job.title ?? '',
      description: job.description ?? '',
      requirements: job.requirements ?? '',
      responsibility: job.responsibility ?? '',
      location: job.location ?? 'Abuja',
      job_type: job.job_type ?? 'Full Time',
      salary_range: job.salary_range ?? '',
      application_deadline: job.application_deadline ? job.application_deadline.split('T')[0] : '',
      is_active: job.is_active ?? true,
    });
    setEditingJob(job);
    setShowJobForm(true);
  };

  const handleDeleteJob = async (jobId: number): Promise<void> => {
    if (!window.confirm('Are you sure you want to delete this job?')) return;
    try {
      const response = await fetch(`${API_BASE}/jobs/${jobId}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error('Failed to delete job');
      fetchJobs();
      fetchApplications();
      alert('Job deleted successfully!');
    } catch (err) {
      alert((err as Error).message);
    }
  };

  const viewJobApplications = async (jobId: number): Promise<void> => {
    const job = jobs.find((j) => j.id === jobId);
    setCurrentJobTitle(job ? job.title : 'Unknown Position');
    try {
      const response = await fetch(`${API_BASE}/jobs/${jobId}/applications`, {
        headers: getAuthHeaders(),
      });
      if (response.ok) {
        const data = await response.json();
        setSelectedJobApplications(Array.isArray(data) ? data : []);
      } else {
        setSelectedJobApplications(applications.filter((app) => app.job_id === jobId));
      }
    } catch {
      setSelectedJobApplications(applications.filter((app) => app.job_id === jobId));
    }
    setShowApplications(true);
  };

  const getApplicationCount = (jobId: number): number => {
    if (!Array.isArray(applications)) return 0;
    return applications.filter((app) => app.job_id === jobId).length;
  };

  // ─── Application CRUD ──────────────────────────────────────────────────────

  const updateApplicationStatus = async (applicationId: number, status: string): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE}/applications/${applicationId}/status`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({ status }),
      });
      if (!response.ok) throw new Error('Failed to update application status');
      setSelectedJobApplications((prev) =>
        prev.map((app) => (app.id === applicationId ? { ...app, status: status as ApplicationStatus } : app))
      );
      fetchApplications();
      setEditingApplicationStatus(null);
    } catch (err) {
      alert((err as Error).message);
    }
  };

  const deleteApplication = async (applicationId: number): Promise<void> => {
    if (!window.confirm('Are you sure you want to delete this application?')) return;
    try {
      const response = await fetch(`${API_BASE}/applications/${applicationId}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error('Failed to delete application');
      setSelectedJobApplications((prev) => prev.filter((app) => app.id !== applicationId));
      fetchApplications();
    } catch (err) {
      alert((err as Error).message);
    }
  };

  // ─── File actions ──────────────────────────────────────────────────────────

  const openCVPreview = (application: Application): void => {
    setPreviewApplication(application);
    setShowCVPreview(true);
  };
  const closeCVPreview = (): void => {
    setShowCVPreview(false);
    setPreviewApplication(null);
  };
  const openCoverLetterPreview = (application: Application): void => {
    setPreviewApplication(application);
    setShowCoverLetterPreview(true);
  };
  const closeCoverLetterPreview = (): void => {
    setShowCoverLetterPreview(false);
    setPreviewApplication(null);
  };

  const downloadCV = async (application: Application): Promise<void> => {
    if (!application.cv_filename) {
      alert('No CV file available for this application');
      return;
    }
    try {
      let response = await fetch(`${API_BASE}/applications/${application.id}/download-cv`, {
        headers: getAuthHeaders(),
      });
      if (!response.ok) {
        const downloadUrl = application.cv_filename.startsWith('http')
          ? application.cv_filename
          : `${API_BASE}/${application.email.split('@')[0]}/cv/${application.cv_filename}`;
        response = await fetch(downloadUrl);
      }
      if (!response.ok) throw new Error(`Server responded with status: ${response.status}`);
      const blob = await response.blob();
      if (blob.size === 0) throw new Error('Downloaded file is empty');

      let filename = `${application.first_name}_${application.last_name}_CV`;
      const contentDisposition = response.headers.get('content-disposition');
      if (contentDisposition) {
        const match = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        if (match?.[1]) filename = match[1].replace(/['"]/g, '');
      } else if (application.cv_filename) {
        filename = application.cv_filename.includes('/')
          ? application.cv_filename.split('/').pop()!
          : application.cv_filename;
      }

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      alert(`Error downloading CV: ${(err as Error).message}`);
    }
  };

  const downloadCoverLetter = async (application: Application): Promise<void> => {
    if (!application.cover_letter) {
      alert('No cover letter file available for this application');
      return;
    }
    if (application.cover_letter.length < 255 && !application.cover_letter.includes('.')) {
      const blob = new Blob([application.cover_letter], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `${application.first_name}_${application.last_name}_CoverLetter.txt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      return;
    }
    try {
      let response = await fetch(`${API_BASE}/applications/${application.id}/download-cover-letter`, {
        headers: getAuthHeaders(),
      });
      if (!response.ok) {
        const downloadUrl = application.cover_letter.startsWith('http')
          ? application.cover_letter
          : `${API_BASE}/${application.email.split('@')[0]}/cover_letter/${application.cover_letter}`;
        response = await fetch(downloadUrl);
      }
      if (!response.ok) throw new Error(`Server responded with status: ${response.status}`);
      const blob = await response.blob();
      if (blob.size === 0) throw new Error('Downloaded file is empty');

      let filename = `${application.first_name}_${application.last_name}_CoverLetter`;
      const contentDisposition = response.headers.get('content-disposition');
      if (contentDisposition) {
        const match = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        if (match?.[1]) filename = match[1].replace(/['"]/g, '');
      } else if (application.cover_letter) {
        filename = application.cover_letter.includes('/')
          ? application.cover_letter.split('/').pop()!
          : application.cover_letter;
      }

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      alert(`Error downloading cover letter: ${(err as Error).message}`);
    }
  };

  const generatePDF = (application: Application): void => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    const content = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Application - ${application.first_name} ${application.last_name}</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
          .header { border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
          .section { margin-bottom: 25px; }
          .section h3 { color: #2563eb; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; }
          .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
          .info-item { margin-bottom: 10px; }
          .label { font-weight: bold; color: #374151; }
          .status { padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; }
          .status.pending { background: #fef3c7; color: #92400e; }
          .status.reviewed { background: #dbeafe; color: #1e40af; }
          .status.accepted { background: #d1fae5; color: #065f46; }
          .status.rejected { background: #fee2e2; color: #991b1b; }
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Job Application</h1>
          <h2>${currentJobTitle}</h2>
          <p><strong>Generated:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        <div class="section">
          <h3>Candidate Information</h3>
          <div class="info-grid">
            <div class="info-item"><span class="label">Name:</span> ${application.first_name} ${application.middle_name ?? ''} ${application.last_name}</div>
            <div class="info-item"><span class="label">Email:</span> ${application.email}</div>
            <div class="info-item"><span class="label">Phone:</span> ${application.phone}</div>
            <div class="info-item"><span class="label">Date of Birth:</span> ${new Date(application.dob).toLocaleDateString()}</div>
            <div class="info-item"><span class="label">State of Origin:</span> ${application.state_of_origin}</div>
          </div>
        </div>
        <div class="section">
          <h3>Contact Details</h3>
          <div class="info-item"><span class="label">Address:</span> ${application.address}</div>
          ${application.portfolio ? `<div class="info-item"><span class="label">Portfolio:</span> ${application.portfolio}</div>` : ''}
          ${application.social_link ? `<div class="info-item"><span class="label">Social Link:</span> ${application.social_link}</div>` : ''}
        </div>
        <div class="section">
          <h3>Application Details</h3>
          <div class="info-item"><span class="label">Applied Date:</span> ${new Date(application.applied_at).toLocaleDateString()}</div>
          <div class="info-item"><span class="label">Status:</span> <span class="status ${application.status?.toLowerCase() ?? 'pending'}">${application.status ?? 'Pending'}</span></div>
          ${application.cv_filename ? `<div class="info-item"><span class="label">CV:</span> ${application.cv_filename}</div>` : ''}
        </div>
        <div class="section">
          <h3>Cover Letter</h3>
          <p>${application.cover_letter ?? 'No cover letter provided'}</p>
        </div>
      </body>
      </html>
    `;
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => printWindow.print(), 250);
  };

  // ─── UI helpers ────────────────────────────────────────────────────────────

  const formatSalary = (job: Job): string =>
    job.salary_range ? job.salary_range : 'Salary not specified';

  const getStatusColor = (status: string | undefined): string => {
    switch (status?.toLowerCase()) {
      case 'pending':  return 'bg-yellow-100 text-yellow-800';
      case 'reviewed': return 'bg-blue-100 text-blue-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default:         return 'bg-gray-100 text-gray-800';
    }
  };

  const openApplicationModal = (application: Application): void => {
    setSelectedApplication(application);
    setShowApplicationModal(true);
  };
  const closeApplicationModal = (): void => {
    setSelectedApplication(null);
    setShowApplicationModal(false);
  };

  const toggleDescriptionExpansion = (jobId: number): void =>
    setExpandedDescriptions((prev) => ({ ...prev, [jobId]: !prev[jobId] }));
  const toggleRequirementsExpansion = (jobId: number): void =>
    setExpandedRequirements((prev) => ({ ...prev, [jobId]: !prev[jobId] }));
  const toggleResponsibilityExpansion = (jobId: number): void =>
    setExpandedResponsibility((prev) => ({ ...prev, [jobId]: !prev[jobId] }));

  const truncateText = (text: string, maxLength: number = 150): string => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };
  const shouldShowReadMore = (text: string | undefined, maxLength: number = 150): boolean =>
    !!text && text.length > maxLength;

  // ─── Filtering / sorting ───────────────────────────────────────────────────

  const sortApplicationsByDate = (apps: Application[], order: 'latest' | 'oldest'): Application[] =>
    [...apps].sort((a, b) => {
      const diff = new Date(b.applied_at).getTime() - new Date(a.applied_at).getTime();
      return order === 'latest' ? diff : -diff;
    });

  const filteredApplications: Application[] = (() => {
    let filtered = selectedJobApplications.filter((app) => {
      const matchesSearch =
        searchTerm === '' ||
        `${app.first_name} ${app.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || app.status?.toLowerCase() === statusFilter;
      return matchesSearch && matchesStatus;
    });

    const now = new Date();
    if (dateFilter === 'today') {
      const today = now.toDateString();
      filtered = filtered.filter((app) => new Date(app.applied_at).toDateString() === today);
    } else if (dateFilter === 'week') {
      const weekAgo = new Date(now);
      weekAgo.setDate(weekAgo.getDate() - 7);
      filtered = filtered.filter((app) => new Date(app.applied_at) >= weekAgo);
    } else if (dateFilter === 'month') {
      const monthAgo = new Date(now);
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      filtered = filtered.filter((app) => new Date(app.applied_at) >= monthAgo);
    }

    if (dateFilter === 'latest') filtered = sortApplicationsByDate(filtered, 'latest');
    else if (dateFilter === 'oldest') filtered = sortApplicationsByDate(filtered, 'oldest');

    return filtered;
  })();

  // ─── Login screen ──────────────────────────────────────────────────────────

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <div className="flex items-center justify-center mb-6">
            <div className="h-14 w-14 md:h-16 md:w-16 rounded-lg flex items-center justify-center">
              <img src={logo} className="logos" alt="" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center mb-6">
            {showLogin ? 'Admin Login' : 'Admin Register'}
          </h1>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={authForm.username}
              onChange={(e) => setAuthForm({ ...authForm, username: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {!showLogin && (
              <input
                type="email"
                placeholder="Email"
                value={authForm.email}
                onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            )}
            <input
              type="password"
              placeholder="Password"
              value={authForm.password}
              onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={() => handleAuth(showLogin)}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors disabled:opacity-50"
            >
              {loading ? 'Processing...' : showLogin ? 'Login' : 'Register'}
            </button>
            <div className="text-center">
              <button
                onClick={() => setShowLogin(!showLogin)}
                className="text-blue-600 hover:text-blue-800 text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Main dashboard ────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-wrap w-full justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Job Management Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage job postings and track applications</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {jobs.filter((j) => j.is_active).length}
                </div>
                <div className="text-sm text-gray-500">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{applications.length}</div>
                <div className="text-sm text-gray-500">Total Applications</div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <User size={20} />
                <span>{user}</span>
                <button
                  onClick={handleLogout}
                  className="ml-2 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Job list */}
        {!showJobForm && !showApplications && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Job Postings</h2>
              <button
                onClick={() => setShowJobForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Plus size={20} /> Post New Job
              </button>
            </div>

            <div className="grid gap-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {job.job_type}
                        </span>
                        {job.is_active ? (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
                        ) : (
                          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Closed</span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-gray-600 mb-2">
                        <span className="flex items-center gap-1"><MapPin size={16} />{job.location}</span>
                        <span className="flex items-center gap-1"><DollarSign size={16} />{formatSalary(job)}</span>
                      </div>
                      {job.application_deadline && (
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar size={14} />
                          Deadline: {new Date(job.application_deadline).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => viewJobApplications(job.id)} className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="View Applications"><Eye size={18} /></button>
                      <button onClick={() => handleEditJob(job)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit Job"><Edit2 size={18} /></button>
                      <button onClick={() => handleDeleteJob(job.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete Job"><Trash2 size={18} /></button>
                    </div>
                  </div>

                  {job.description && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Description:</h4>
                      <div
                        className="text-gray-700"
                        dangerouslySetInnerHTML={{
                          __html: (expandedDescription[job.id] ? job.description : truncateText(job.description)).replace(/\n/g, '<br>'),
                        }}
                      />
                      {shouldShowReadMore(job.description) && (
                        <button onClick={() => toggleDescriptionExpansion(job.id)} className="text-blue-600 hover:text-blue-800 text-sm mt-1 font-medium">
                          {expandedDescription[job.id] ? 'Read Less' : 'Read More'}
                        </button>
                      )}
                    </div>
                  )}

                  {job.responsibility && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Responsibilities:</h4>
                      <div
                        className="text-gray-700"
                        dangerouslySetInnerHTML={{
                          __html: (expandedResponsibility[job.id] ? job.responsibility : truncateText(job.responsibility)).replace(/\n/g, '<br>'),
                        }}
                      />
                      {shouldShowReadMore(job.responsibility) && (
                        <button onClick={() => toggleResponsibilityExpansion(job.id)} className="text-blue-600 hover:text-blue-800 text-sm mt-1 font-medium">
                          {expandedResponsibility[job.id] ? 'Read Less' : 'Read More'}
                        </button>
                      )}
                    </div>
                  )}

                  {job.requirements && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <div
                        className="text-gray-700"
                        dangerouslySetInnerHTML={{
                          __html: (expandedRequirements[job.id] ? job.requirements : truncateText(job.requirements)).replace(/\n/g, '<br>'),
                        }}
                      />
                      {shouldShowReadMore(job.requirements) && (
                        <button onClick={() => toggleRequirementsExpansion(job.id)} className="text-blue-600 hover:text-blue-800 text-sm mt-1 font-medium">
                          {expandedRequirements[job.id] ? 'Read Less' : 'Read More'}
                        </button>
                      )}
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Posted: {new Date(job.created_at).toLocaleDateString()}
                    </span>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-gray-400" />
                      <span className="text-sm font-medium text-gray-700">
                        {getApplicationCount(job.id)} Applications
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Job form */}
        {showJobForm && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingJob ? 'Edit Job' : 'Post New Job'}
              </h2>
              <button onClick={resetJobForm} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
                  <input type="text" required value={jobForm.title} onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g. Frontend Developer" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input type="text" value={jobForm.location} onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g. Abuja" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
                  <input type="text" value={jobForm.salary_range} onChange={(e) => setJobForm({ ...jobForm, salary_range: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g. NGN 300,000 - 500,000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                  <select value={jobForm.job_type} onChange={(e) => setJobForm({ ...jobForm, job_type: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    {jobTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Application Deadline</label>
                  <input type="date" value={jobForm.application_deadline} onChange={(e) => setJobForm({ ...jobForm, application_deadline: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Description *</label>
                <textarea required rows={4} value={jobForm.description} onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Describe the role..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Responsibilities *</label>
                <textarea required rows={4} value={jobForm.responsibility} onChange={(e) => setJobForm({ ...jobForm, responsibility: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Describe the responsibilities..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Requirements *</label>
                <textarea required rows={4} value={jobForm.requirements} onChange={(e) => setJobForm({ ...jobForm, requirements: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="List the required skills and qualifications..." />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="is_active" checked={jobForm.is_active} onChange={(e) => setJobForm({ ...jobForm, is_active: e.target.checked })} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="is_active" className="text-sm font-medium text-gray-700">Active Job Posting</label>
              </div>

              <div className="flex gap-4">
                <button onClick={handleJobSubmit} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  {editingJob ? 'Update Job' : 'Post Job'}
                </button>
                <button onClick={resetJobForm} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg transition-colors">Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Applications table */}
        {showApplications && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Applications for {currentJobTitle} ({filteredApplications.length})
              </h2>
              <button onClick={() => setShowApplications(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>

            {/* Filters */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-gray-400" />
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-gray-400" />
                <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value as DateFilterOption)} className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="all">All Dates</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="latest">Latest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>

            {filteredApplications.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No applications found matching your criteria.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      {['Name', 'Email', 'Phone', 'Status', 'Applied Date', 'Actions'].map((h) => (
                        <th key={h} className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredApplications.map((application) => (
                      <tr key={application.id} className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
                          {application.first_name} {application.middle_name ? application.middle_name + ' ' : ''}{application.last_name}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">{application.email}</td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">{application.phone}</td>
                        <td className="border border-gray-200 px-4 py-3 text-sm">
                          {editingApplicationStatus === application.id ? (
                            <div className="flex items-center gap-2">
                              <select
                                value={application.status ?? 'pending'}
                                onChange={(e) => updateApplicationStatus(application.id, e.target.value)}
                                className="px-2 py-1 border border-gray-300 rounded text-xs"
                              >
                                <option value="pending">Pending</option>
                                <option value="reviewed">Reviewed</option>
                                <option value="accepted">Accepted</option>
                                <option value="rejected">Rejected</option>
                              </select>
                              <button onClick={() => setEditingApplicationStatus(null)} className="text-gray-500 hover:text-gray-700"><X size={14} /></button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setEditingApplicationStatus(application.id)}
                              className={`px-3 py-1 rounded-full text-xs font-medium hover:opacity-80 ${getStatusColor(application.status)}`}
                            >
                              {application.status ?? 'Pending'}
                            </button>
                          )}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
                          {new Date(application.applied_at).toLocaleDateString()}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm">
                          <div className="flex items-center gap-2">
                            <button onClick={() => openApplicationModal(application)} className="px-2 py-1 text-blue-600 hover:bg-blue-50 rounded transition-colors" title="View Details"><Eye size={14} /></button>
                            <button onClick={() => downloadCV(application)} className="px-2 py-1 text-green-600 hover:bg-green-50 rounded transition-colors" title="Download CV"><Download size={14} /></button>
                            <button onClick={() => generatePDF(application)} className="px-2 py-1 text-orange-600 hover:bg-orange-50 rounded transition-colors" title="Download Application PDF"><FileText size={14} /></button>
                            <button onClick={() => deleteApplication(application.id)} className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors" title="Delete Application"><Trash2 size={14} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Application detail modal */}
        {showApplicationModal && selectedApplication && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Application Details</h2>
                  <button onClick={closeApplicationModal} className="text-gray-500 hover:text-gray-700"><X size={24} /></button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                      <div className="space-y-2 text-sm">
                        {[
                          ['Full Name', `${selectedApplication.first_name} ${selectedApplication.middle_name ?? ''} ${selectedApplication.last_name}`],
                          ['Email', selectedApplication.email],
                          ['Phone', selectedApplication.phone],
                          ['Date of Birth', new Date(selectedApplication.dob).toLocaleDateString()],
                          ['State of Origin', selectedApplication.state_of_origin],
                        ].map(([label, value]) => (
                          <div key={label} className="flex justify-between">
                            <span className="font-medium text-gray-600">{label}:</span>
                            <span className="text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Details</h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-gray-600">Address:</span>
                          <p className="text-gray-900 mt-1">{selectedApplication.address}</p>
                        </div>
                        {selectedApplication.portfolio && (
                          <div>
                            <span className="font-medium text-gray-600">Portfolio:</span>
                            <p className="mt-1">
                              <a href={selectedApplication.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">{selectedApplication.portfolio}</a>
                            </p>
                          </div>
                        )}
                        {selectedApplication.social_link && (
                          <div>
                            <span className="font-medium text-gray-600">Social Link:</span>
                            <p className="mt-1">
                              <a href={selectedApplication.social_link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">{selectedApplication.social_link}</a>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Status & files */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Application Status</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-600">Status:</span>
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedApplication.status)}`}>
                              {selectedApplication.status ?? 'Pending'}
                            </span>
                            <button onClick={() => setEditingApplicationStatus(selectedApplication.id)} className="text-blue-600 hover:text-blue-800 text-xs">Change</button>
                          </div>
                        </div>
                        {editingApplicationStatus === selectedApplication.id && (
                          <div className="flex items-center gap-2 mt-2">
                            <select
                              value={selectedApplication.status ?? 'pending'}
                              onChange={(e) => updateApplicationStatus(selectedApplication.id, e.target.value)}
                              className="px-2 py-1 border border-gray-300 rounded text-xs"
                            >
                              <option value="pending">Pending</option>
                              <option value="reviewed">Reviewed</option>
                              <option value="accepted">Accepted</option>
                              <option value="rejected">Rejected</option>
                            </select>
                            <button onClick={() => setEditingApplicationStatus(null)} className="text-gray-500 hover:text-gray-700"><X size={14} /></button>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-600">Applied Date:</span>
                          <span className="text-gray-900">{new Date(selectedApplication.applied_at).toLocaleDateString()}</span>
                        </div>

                        {selectedApplication.cv_filename && (
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-600 mt-2">CV File:</span>
                            <div className="flex items-center gap-2">
                              <button onClick={() => openCVPreview(selectedApplication)} className="text-blue-600 hover:text-blue-800 text-xs flex items-center gap-1" title="View CV"><Eye size={12} /> View</button>
                              <button onClick={() => downloadCV(selectedApplication)} className="text-green-600 hover:text-green-800 text-xs flex items-center gap-1" title="Download CV"><Download size={12} /> Download</button>
                            </div>
                          </div>
                        )}

                        {showCVPreview && previewApplication && (
                          <CVPreview application={previewApplication} onClose={closeCVPreview} />
                        )}
                      </div>
                    </div>

                    {selectedApplication.cover_letter && (
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-600">Cover Letter</h3>
                        <div className="flex items-center gap-2">
                          <button onClick={() => openCoverLetterPreview(selectedApplication)} className="text-blue-600 hover:text-blue-800 text-xs flex items-center gap-1" title="View Cover Letter"><Eye size={12} /> View</button>
                          <button onClick={() => downloadCoverLetter(selectedApplication)} className="text-green-600 hover:text-green-800 text-xs flex items-center gap-1" title="Download Cover Letter"><Download size={12} /> Download</button>
                        </div>
                      </div>
                    )}

                    {showCoverLetterPreview && previewApplication && (
                      <CoverLetterPreview application={previewApplication} onClose={closeCoverLetterPreview} />
                    )}
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
                  <button onClick={() => generatePDF(selectedApplication)} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2"><Download size={16} /> Download PDF</button>
                  <button onClick={() => deleteApplication(selectedApplication.id)} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-2"><Trash2 size={16} /> Delete</button>
                  <button onClick={closeApplicationModal} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors">Close</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;