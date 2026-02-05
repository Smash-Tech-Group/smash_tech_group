// app/api/testimonials/route.js
import { NextResponse } from 'next/server'
import { assets } from '../../../../assets/assets'

// In-memory storage (replace with DB in production)
let testimonials = [
  {
    id: 1,
    quote: 'CEO, Amb. Paul Smith, has been recognized by The Guardian Nigeria as one of the Top 100 Most Innovative CEOs of 2025.',
    author: { name: 'Emem Gloria', role: 'Cyber Security analyst', avatar: assets.avatar_testimonial },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    quote: 'CEO, Amb. Paul Smith, has been recognized by The Guardian Nigeria as one of the Top 100 Most Innovative CEOs of 2025.',
    author: { name: 'Emem Gloria', role: 'Cyber Security analyst', avatar: assets.avatar_testimonial },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    quote: 'CEO, Amb. Paul Smith, has been recognized by The Guardian Nigeria as one of the Top 100 Most Innovative CEOs of 2025.',
    author: { name: 'Emem Gloria', role: 'Cyber Security analyst', avatar: assets.avatar_testimonial },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
    {
    id: 4,
    quote: 'CEO, Amb. Paul Smith, has been recognized by The Guardian Nigeria as one of the Top 100 Most Innovative CEOs of 2025.',
    author: { name: 'Emem Gloria', role: 'Cyber Security analyst', avatar: assets.avatar_testimonial },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
    {
    id: 5,
    quote: 'CEO, Amb. Paul Smith, has been recognized by The Guardian Nigeria as one of the Top 100 Most Innovative CEOs of 2025.',
    author: { name: 'Emem Gloria', role: 'Cyber Security analyst', avatar: assets.avatar_testimonial },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
    {
    id: 6,
    quote: 'CEO, Amb. Paul Smith, has been recognized by The Guardian Nigeria as one of the Top 100 Most Innovative CEOs of 2025.',
    author: { name: 'Emem Gloria', role: 'Cyber Security analyst', avatar: assets.avatar_testimonial },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
]

// GET - fetch all testimonials
export async function GET() {
  return NextResponse.json(testimonials)
}

// POST - create testimonial
export async function POST(req) {
  const body = await req.json()
  if (!body.quote || !body.author?.name || !body.author?.role) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const newTestimonial = {
    id: testimonials.length + 1,
    quote: body.quote,
    author: {
      name: body.author.name,
      role: body.author.role,
      avatar: body.author.avatar || '/images/default-avatar.jpg'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }

  testimonials.push(newTestimonial)
  return NextResponse.json(newTestimonial, { status: 201 })
}

// PUT - update testimonial
export async function PUT(req) {
  const body = await req.json()
  const { id, ...updates } = body
  if (!id) return NextResponse.json({ error: 'Testimonial ID is required' }, { status: 400 })

  const index = testimonials.findIndex(t => t.id === id)
  if (index === -1) return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 })

  testimonials[index] = { ...testimonials[index], ...updates, updatedAt: new Date().toISOString() }
  return NextResponse.json(testimonials[index])
}

// DELETE - delete testimonial
export async function DELETE(req) {
  const { searchParams } = new URL(req.url)
  const id = parseInt(searchParams.get('id'))
  if (!id) return NextResponse.json({ error: 'Testimonial ID is required' }, { status: 400 })

  const index = testimonials.findIndex(t => t.id === id)
  if (index === -1) return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 })

  const deleted = testimonials.splice(index, 1)[0]
  return NextResponse.json({ message: 'Testimonial deleted', testimonial: deleted })
}
