import React, { useState } from 'react'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import { notFound } from 'next/navigation';

export const dynamicParams = true;

export async function generateStaticParams() {
    const blogPosts = await getDocs(collection(db, 'blog'))
    return blogPosts.docs.map((d) => ({ slug: d.data()['slug'] }))
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
    const blogCollection = collection(db, 'blog')
    const blogSlugQuery = query(blogCollection, where("slug", "==", slug))
    const docs = await getDocs(blogSlugQuery)
    if (docs.docs.length === 0) notFound()
    const selectedPost = docs.docs[0].data();
    return {
        title: selectedPost['title'],
    };
}

const BlogDetailPage = async ({ params: { slug } }: { params: { slug: string } }) => {
    const [count, setCount] = useState(0);
    const blogCollection = collection(db, 'blog')
    const blogSlugQuery = query(blogCollection, where("slug", "==", slug))

    const docs = await getDocs(blogSlugQuery)
    if (docs.docs.length === 0) notFound()
    const selectedPost = docs.docs[0].data();

    return (
        <>
            <h1 className='text-xl'>Blog Detail Page {slug}</h1>
            <p>{selectedPost['content']}</p>
        </>
    )
}

export default BlogDetailPage