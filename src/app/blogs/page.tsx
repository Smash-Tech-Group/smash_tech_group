import React from 'react'
import LHero from '@/features/components/LHero'
import TrendingNews from '@/features/components/TrendingNews'
import AllBlogNews from '@/features/components/AllBlogNews'
import BlogImage from '../../../public/blogimage.svg'

export default function Blogs() {
    return (
        <div className=''>
            <LHero
                image={BlogImage}
                title="Blogs"
            />
            <TrendingNews />
            <AllBlogNews />
        </div>
    )
}
