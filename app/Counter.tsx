'use client'

import { useState } from 'react'

export default function Counter() {
    console.log('client component')
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}