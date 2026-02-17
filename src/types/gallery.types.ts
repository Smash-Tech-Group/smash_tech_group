/**
 * Gallery Types
 * Defines the structure for gallery images and API responses
 */

export interface GalleryImage {
  id: string;
  image: string;
  alt: string;
  title?: string;
  description?: string;
  category?: string;
  uploadedAt: string;
  uploadedBy?: string;
  isActive: boolean;
  order?: number;
}

export interface CreateGalleryImageDTO {
  image: string;
  alt: string;
  title?: string;
  description?: string;
  category?: string;
  order?: number;
}

export interface UpdateGalleryImageDTO {
  image?: string;
  alt?: string;
  title?: string;
  description?: string;
  category?: string;
  isActive?: boolean;
  order?: number;
}

export interface GalleryApiResponse {
  success: boolean;
  data: GalleryImage[];
  message?: string;
  total?: number;
}

export interface SingleGalleryApiResponse {
  success: boolean;
  data: GalleryImage;
  message?: string;
}

export interface DeleteGalleryApiResponse {
  success: boolean;
  message: string;
}

export interface GalleryFilters {
  category?: string;
  isActive?: boolean;
  limit?: number;
  offset?: number;
  sortBy?: 'uploadedAt' | 'order' | 'title';
  sortOrder?: 'asc' | 'desc';
}