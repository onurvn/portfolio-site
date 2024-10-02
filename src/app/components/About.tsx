import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'


export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/about.png"
            alt="Profile picture"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-6">
            Hello! I&apos;m Onur, a passionate frontend developer based in Turkey. With a keen eye for design and a love for clean, efficient code, I specialize in creating engaging and user-friendly web experiences. My journey in web development started 2 years ago.
          </p>
          <p className="mb-6">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on UX design. I believe in continuous learning and always strive to stay updated with the latest trends in web development.
          </p>
          <Button variant={'outline'} className='text-black'>
          <Link href="/cv.pdf" target='_blank'>Download CV</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}