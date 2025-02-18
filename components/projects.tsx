import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Schedule Manager",
    description: "A scheduling system enabling admins to create, delete, and manage programs while notifying participants via Twilio SMS API. Tech Stack: React.js (Frontend), Flask (Backend), PostgreSQL (Database), JWT (Auth), Twilio SMS API (Notifications). Features: Admin authentication, program management, SMS notifications, and RESTful API.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React.js", "Flask", "PostgreSQL", "Twilio", "Node.js"],
    demoLink: "#",
    codeLink: "#"

  },
  {
    title: "Event website for group project",
    description: "Developed a fully functional event website for a group project, showcasing\
    the event details, registration forms, and interactive features using HTML and CSS\
     for frontend design. The backend was built with PHP,\
     enabling dynamic content management and form handling. Tech Stack: \
     HTML, CSS, PHP (Backend), Key Features: Event details display, user registration, interactive design,\
     Role: Sole developer for both frontend and backend components",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["HTML", "CSS", "PHP"],
    demoLink: "#",
    codeLink: "#",
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <section id="projects" className="container py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">My Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={300}
              height={200}
              className="w-full object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </Button>
              <Button asChild>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

