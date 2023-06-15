import React from 'react'
import { getDocs, collection, query } from 'firebase/firestore'
import { db } from '@/firebase/firebase'

export const dynamic = 'error';
export const revalidate = 30;

const page = async () => {
    const col = collection(db, 'blog')
    const q = query(col)
    const docs = await getDocs(q)
    const data = docs.docs[0].data()['testing']

    return (
        <div>{data}</div>
    )
}

export default page