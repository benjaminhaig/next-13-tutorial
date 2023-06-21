import Image from 'next/image'
import Counter from './Counter'


export default function Home() {
  console.log('server component!')

  const submit = async () => {
    'use server'
    console.log('server action!')
  }
  return (
    <>
      <h1 className='text-xl'>Home /</h1>
      <Counter />
      <form >
        <input type='submit' className='--anybody' />
      </form>
    </>
  )
}
