import Navbar from '@/app/components/layouts/navbar/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen max-w-7xl m-auto'>
      <Navbar />
    </div>
  )
}
