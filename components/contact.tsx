import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="container py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Get in Touch</h2>
      <form className="max-w-md mx-auto">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name">Name</label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email">Email</label>
            <Input id="email" placeholder="Your email" type="email" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message">Message</label>
            <Textarea id="message" placeholder="Your message" />
          </div>
          <Button type="submit">Send Message</Button>
        </div>
      </form>
    </section>
  )
}

