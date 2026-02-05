import { NextRequest, NextResponse } from 'next/server'
import { assets } from '../../../../assets/assets'

// In-memory data store (replace with a real database in production)
let sectors = [
  {
    id: 1,
    title: 'Software Product Development',
    subtitle: 'End to end development of web, mobile, and SaaS platforms',
    image: assets.What_we_do_1,
    alt: 'Financial technology development',
  },
  {
    id: 2,
    title: 'Travel & Mobility Technology',
    subtitle: 'Digital solutions that support travel, mobility, logistics, and cross-border operations',
    image: assets.What_we_do_2,
    alt: 'Travel and tourism technology',
  },
  {
    id: 3,
    title: 'Enterprise & Digital Solution',
    subtitle: 'Custom systems, automation, and cloud-based platforms that modernise enterprise operations.',
    image: assets.What_we_do_3,
    alt: 'Virtual reality solutions',
  },
  {
    id: 4,
    title: 'Technology Consulting',
    subtitle: 'Product strategy, system architecture, and technical advisory for growing and established organisations.',
    image: assets.What_we_do_4,
    alt: 'Enterprise business solutions',
  },
]

// GET → fetch all sectors
export async function GET() {
  return NextResponse.json(sectors)
}

// POST → create a new sector
export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const newSector = { id: sectors.length + 1, ...data }
    sectors.push(newSector)
    return NextResponse.json(newSector, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to create sector' }, { status: 500 })
  }
}

// PUT → update a sector
export async function PUT(req: NextRequest) {
  try {
    const data = await req.json()
    const index = sectors.findIndex((s) => s.id === data.id)
    if (index === -1)
      return NextResponse.json({ error: 'Sector not found' }, { status: 404 })

    sectors[index] = { ...sectors[index], ...data }
    return NextResponse.json(sectors[index])
  } catch (err) {
    return NextResponse.json({ error: 'Failed to update sector' }, { status: 500 })
  }
}

// DELETE → remove a sector
export async function DELETE(req: NextRequest) {
  try {
    const data = await req.json()
    const index = sectors.findIndex((s) => s.id === data.id)
    if (index === -1)
      return NextResponse.json({ error: 'Sector not found' }, { status: 404 })

    const deleted = sectors.splice(index, 1)
    return NextResponse.json(deleted[0])
  } catch (err) {
    return NextResponse.json({ error: 'Failed to delete sector' }, { status: 500 })
  }
}
