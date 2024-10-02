import { Button } from '@/components/ui/button'
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="flex items-center justify-between py-20 px-6 min-h-screen">
            <div className="w-1/2">
                <h1 className="text-5xl font-bold mb-4">
                    Hello I&apos;m <span className="text-blue-600">Onur</span>.
                </h1>
                <h2 className="text-3xl font-semibold mb-6">Frontend Developer based in Turkey.</h2>
                <div className="flex space-x-4 mb-8">
                    <Button variant="outline" size="icon">
                        <Link href="https://github.com/onurvn" target='_blank'>
                            <FaGithub className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="icon">
                        <Link href="https://www.linkedin.com/in/onur-avan/" target='_blank'>
                            <FaLinkedin className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="icon">
                        <Link href="https://www.facebook.com/Onur.Avan68/" target='_blank'>
                            <FaFacebook className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="w-4/6">
                <Image
                  src="/images/hero.png"
                    width={800}
                    height={800}
                    alt='hero-pic'
                />
            </div>
        </section>
    )
}