import { Main } from '@/app/components/layouts/main'
import Navbar from '@/app/components/layouts/navbar/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen'>
      <Navbar />
      <Main />
    </div>
  )
}
