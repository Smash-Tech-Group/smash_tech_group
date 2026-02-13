/**
 * Gallery API Routes
 * Next.js API routes that will connect to your backend
 * These routes can be used when transitioning from mock data to real backend
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  getGallery,
  getGalleryImageById,
  createGalleryImage,
  updateGalleryImage,
  deleteGalleryImage,
} from '@/services/gallery.service';
import { CreateGalleryImageDTO, UpdateGalleryImageDTO } from '@/types/gallery.types';

/**
 * GET /api/gallery - Fetch all gallery images
 * Query params: category, isActive, limit, offset, sortBy, sortOrder
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    const filters = {
      category: searchParams.get('category') || undefined,
      isActive: searchParams.get('isActive') === 'true' ? true : 
                searchParams.get('isActive') === 'false' ? false : undefined,
      limit: searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined,
      offset: searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : undefined,
      sortBy: searchParams.get('sortBy') as any || undefined,
      sortOrder: searchParams.get('sortOrder') as any || undefined,
    };

    const images = await getGallery(filters);

    return NextResponse.json({
      success: true,
      data: images,
      total: images.length,
    });
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch gallery images' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/gallery - Create a new gallery image
 */
export async function POST(request: NextRequest) {
  try {
    const body: CreateGalleryImageDTO = await request.json();

    // Validate required fields
    if (!body.image || !body.alt) {
      return NextResponse.json(
        { success: false, message: 'Image URL and alt text are required' },
        { status: 400 }
      );
    }

    const newImage = await createGalleryImage(body);

    return NextResponse.json({
      success: true,
      data: newImage,
      message: 'Image created successfully',
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating gallery image:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create gallery image' },
      { status: 500 }
    );
  }
}