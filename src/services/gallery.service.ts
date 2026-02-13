/**
 * Gallery Service
 * Handles all gallery-related API calls with full CRUD functionality
 * Currently uses mock data, ready to switch to real API endpoints
 */

import {
  GalleryImage,
  CreateGalleryImageDTO,
  UpdateGalleryImageDTO,
  GalleryApiResponse,
  SingleGalleryApiResponse,
  DeleteGalleryApiResponse,
  GalleryFilters,
} from '@/types/gallery.types';
import { MOCK_GALLERY_IMAGES, simulateApiDelay } from '@/data/gallery.mock';

// Toggle this to switch between mock and real API
const USE_MOCK_DATA = true;

// API Base URL - update this when backend is ready
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.yourapp.com';
const GALLERY_ENDPOINT = '/api/gallery';

// In-memory store for mock data (simulates database)
let mockGalleryStore: GalleryImage[] = [...MOCK_GALLERY_IMAGES];

/**
 * GET: Fetch all gallery images with optional filters
 */
export async function getGallery(
  filters?: GalleryFilters
): Promise<GalleryImage[]> {
  if (USE_MOCK_DATA) {
    await simulateApiDelay(300);
    
    let filteredImages = [...mockGalleryStore];

    // Apply filters
    if (filters?.isActive !== undefined) {
      filteredImages = filteredImages.filter(img => img.isActive === filters.isActive);
    }
    
    if (filters?.category) {
      filteredImages = filteredImages.filter(img => img.category === filters.category);
    }

    // Apply sorting
    if (filters?.sortBy) {
      filteredImages.sort((a, b) => {
        const aVal = a[filters.sortBy!];
        const bVal = b[filters.sortBy!];
        
        if (aVal === undefined || bVal === undefined) return 0;
        
        const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
        return filters.sortOrder === 'desc' ? -comparison : comparison;
      });
    }

    // Apply pagination
    if (filters?.limit) {
      const offset = filters.offset || 0;
      filteredImages = filteredImages.slice(offset, offset + filters.limit);
    }

    return filteredImages;
  }

  // Real API call
  try {
    const queryParams = new URLSearchParams();
    if (filters?.category) queryParams.append('category', filters.category);
    if (filters?.isActive !== undefined) queryParams.append('isActive', String(filters.isActive));
    if (filters?.limit) queryParams.append('limit', String(filters.limit));
    if (filters?.offset) queryParams.append('offset', String(filters.offset));
    if (filters?.sortBy) queryParams.append('sortBy', filters.sortBy);
    if (filters?.sortOrder) queryParams.append('sortOrder', filters.sortOrder);

    const url = `${API_BASE_URL}${GALLERY_ENDPOINT}?${queryParams.toString()}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch gallery: ${response.statusText}`);
    }

    const result: GalleryApiResponse = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching gallery:', error);
    throw error;
  }
}

/**
 * GET: Fetch a single gallery image by ID
 */
export async function getGalleryImageById(id: string): Promise<GalleryImage | null> {
  if (USE_MOCK_DATA) {
    await simulateApiDelay(200);
    const image = mockGalleryStore.find(img => img.id === id);
    return image || null;
  }

  // Real API call
  try {
    const url = `${API_BASE_URL}${GALLERY_ENDPOINT}/${id}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const result: SingleGalleryApiResponse = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching gallery image:', error);
    throw error;
  }
}

/**
 * POST: Create a new gallery image
 */
export async function createGalleryImage(
  data: CreateGalleryImageDTO
): Promise<GalleryImage> {
  if (USE_MOCK_DATA) {
    await simulateApiDelay(400);
    
    const newImage: GalleryImage = {
      id: String(mockGalleryStore.length + 1),
      image: data.image,
      alt: data.alt,
      title: data.title,
      description: data.description,
      category: data.category,
      uploadedAt: new Date().toISOString(),
      uploadedBy: 'admin',
      isActive: true,
      order: data.order || mockGalleryStore.length + 1,
    };

    mockGalleryStore.push(newImage);
    return newImage;
  }

  // Real API call
  try {
    const url = `${API_BASE_URL}${GALLERY_ENDPOINT}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to create image: ${response.statusText}`);
    }

    const result: SingleGalleryApiResponse = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error creating gallery image:', error);
    throw error;
  }
}

/**
 * PUT/PATCH: Update an existing gallery image
 */
export async function updateGalleryImage(
  id: string,
  data: UpdateGalleryImageDTO
): Promise<GalleryImage> {
  if (USE_MOCK_DATA) {
    await simulateApiDelay(400);
    
    const index = mockGalleryStore.findIndex(img => img.id === id);
    if (index === -1) {
      throw new Error(`Image with id ${id} not found`);
    }

    const updatedImage: GalleryImage = {
      ...mockGalleryStore[index],
      ...data,
    };

    mockGalleryStore[index] = updatedImage;
    return updatedImage;
  }

  // Real API call
  try {
    const url = `${API_BASE_URL}${GALLERY_ENDPOINT}/${id}`;
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update image: ${response.statusText}`);
    }

    const result: SingleGalleryApiResponse = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error updating  gallery image:', error);
    throw error;
  }
}

/**
 * DELETE: Remove a gallery image
 */
export async function deleteGalleryImage(id: string): Promise<boolean> {
  if (USE_MOCK_DATA) {
    await simulateApiDelay(300);
    
    const index = mockGalleryStore.findIndex(img => img.id === id);
    if (index === -1) {
      throw new Error(`Image with id ${id} not found`);
    }

    mockGalleryStore.splice(index, 1);
    return true;
  }

  // Real API call
  try {
    const url = `${API_BASE_URL}${GALLERY_ENDPOINT}/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete image: ${response.statusText}`);
    }

    const result: DeleteGalleryApiResponse = await response.json();
    return result.success;
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    throw error;
  }
}

/**
 * PATCH: Toggle active status of a gallery image
 */
export async function toggleGalleryImageStatus(id: string): Promise<GalleryImage> {
  const image = await getGalleryImageById(id);
  if (!image) {
    throw new Error(`Image with id ${id} not found`);
  }

  return updateGalleryImage(id, { isActive: !image.isActive });
}

/**
 * POST: Bulk upload gallery images
 */
export async function bulkCreateGalleryImages(
  images: CreateGalleryImageDTO[]
): Promise<GalleryImage[]> {
  if (USE_MOCK_DATA) {
    await simulateApiDelay(800);
    
    const newImages: GalleryImage[] = images.map((data, index) => ({
      id: String(mockGalleryStore.length + index + 1),
      image: data.image,
      alt: data.alt,
      title: data.title,
      description: data.description,
      category: data.category,
      uploadedAt: new Date().toISOString(),
      uploadedBy: 'admin',
      isActive: true,
      order: data.order || mockGalleryStore.length + index + 1,
    }));

    mockGalleryStore.push(...newImages);
    return newImages;
  }

  // Real API call
  try {
    const url = `${API_BASE_URL}${GALLERY_ENDPOINT}/bulk`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ images }),
    });

    if (!response.ok) {
      throw new Error(`Failed to bulk create images: ${response.statusText}`);
    }

    const result: GalleryApiResponse = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error bulk creating gallery images:', error);
    throw error;
  }
}

/**
 * Utility: Reset mock data (for testing purposes)
 */
export function resetMockGalleryData(): void {
  mockGalleryStore = [...MOCK_GALLERY_IMAGES];
}