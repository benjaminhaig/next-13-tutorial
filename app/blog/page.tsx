import React from 'react'

const page = async () => {
    await new Promise(r => setTimeout(r, 5000))
    return (
        <h1 className='text-xl'>Blog</h1>
    )
}

export default page