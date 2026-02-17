/**
 * Gallery API Routes - Individual Image Operations
 * GET /api/gallery/[id] - Fetch single image
 * PATCH /api/gallery/[id] - Update image
 * DELETE /api/gallery/[id] - Delete image
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  getGalleryImageById,
  updateGalleryImage,
  deleteGalleryImage,
} from '@/services/gallery.service';
import { UpdateGalleryImageDTO } from '@/types/gallery.types';

interface RouteContext {
  params: {
    id: string;
  };
}

/**
 * GET /api/gallery/[id] - Fetch a single gallery image
 */
export async function GET(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    const image = await getGalleryImageById(params.id);

    if (!image) {
      return NextResponse.json(
        { success: false, message: 'Image not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: image,
    });
  } catch (error) {
    console.error('Error fetching gallery image:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch gallery image' },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/gallery/[id] - Update a gallery image
 */
export async function PATCH(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    const body: UpdateGalleryImageDTO = await request.json();

    const updatedImage = await updateGalleryImage(params.id, body);

    return NextResponse.json({
      success: true,
      data: updatedImage,
      message: 'Image updated successfully',
    });
  } catch (error) {
    console.error('Error updating gallery image:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update gallery image' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/gallery/[id] - Delete a gallery image
 */
export async function DELETE(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    await deleteGalleryImage(params.id);

    return NextResponse.json({
      success: true,
      message: 'Image deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete gallery image' },
      { status: 500 }
    );
  }
}