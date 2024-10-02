import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-black">
      <Link href="/" className="text-2xl font-bold">
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} className='bg-transparent rounded-full'>
        </Image>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} className="text-white hover:text-blue-500">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button variant="outline">
        <Link href="/cv.pdf" target='_blank'>Resume</Link>
      </Button>
    </header>
  )
}