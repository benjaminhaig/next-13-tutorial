import Image from 'next/image'
import Counter from './Counter'


export default function Home() {
  console.log('server component!')
  return (
    <>
      <h1 className='text-xl'>Home /</h1>
      <Counter />
    </>
  )
}
