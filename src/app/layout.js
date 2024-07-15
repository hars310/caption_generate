import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] })
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Loading from '@/components/Loading';

export const metadata = {
  title: 'Captions Generator',
  description: 'Generate hindi and english captions easily',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo.svg" />
      </head>
      <body className={inter.className + " bg-gradient-to-b from-bg-gradient-from to-bg-gradient-to min-h-screen text-white"}>
        <main className="p-4 max-w-2xl mx-auto">
          <header className="flex justify-between my-2 sm:my-8">
            <Link href="/" className="flex gap-1">
            <img src="/logo.svg" alt="" />
            </Link>
            <nav className="flex items-center gap-2 sm:gap-6 text-white/80 text-sm sm:text-bas">
              <Link href="/"><h1 className='text-lg md:text-xl hover:text-green-500 font-medium'>Home</h1></Link>
              <Link href="/pricing"><h1 className='text-lg md:text-xl hover:text-green-500 font-medium'>Pricing</h1></Link>
              <Link href="/contact"><h1 className='text-lg md:text-xl hover:text-green-500 font-medium'>Contact</h1></Link>
            </nav>
          </header>
          {children}
          <footer className="text-white py-4 text-center mt-4 md:mt-12">
            <h1 className='text-xl'>Empower Your Content with Captions</h1>
            <p className='text-sm text-zinc-500 leading-5 '>
            A caption generator is a powerful tool designed to enhance your multimedia content by adding text-based captions automatically. Whether you&apos;re sharing videos, images, or social media posts, captions play a crucial role in improving accessibility and engagement. By converting spoken content into readable text, caption generators ensure that your message reaches a wider audience, including individuals with hearing impairments and those in noisy environments. They offer customization options such as font styles, colors, and formatting to align with your brand&apos;s identity. Moreover, caption generators contribute to search engine optimization (SEO) by making your content more discoverable and enhancing viewer retention on various platforms. Embrace the efficiency and inclusivity of captioning today to elevate your content&apos;s impact and accessibility effortlessly.
            </p>
            <div className='flex gap-6 justify-center mt-8 text-3xl '>
              <FaGithub className='hover:text-green-500 cursor-pointer'/>
              <FaLinkedin className='hover:text-blue-500 cursor-pointer'/>
              <FaTwitter className='hover:text-red-500 cursor-pointer' />
            </div>
            
          </footer>
        </main>

      </body>
    </html>
  )
}