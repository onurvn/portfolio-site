import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6">
        <Button className="bg-black text-white hover:bg-gray-800 text-lg py-6 px-8">
          Get In Touch
        </Button>
        <div className="flex space-x-4">

          <Button variant="outline" size="icon" className="w-12 h-12">
            <a href="mailto:avanonur@hotmail.com">
              <MessageSquare className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}