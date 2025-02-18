import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Server, Paintbrush } from "lucide-react"

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Experienced in React, Next.js, and modern CSS frameworks like Tailwind.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Proficient in Node.js, Express, and database technologies like MongoDB and PostgreSQL.",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description: "Skilled in creating intuitive and visually appealing user interfaces.",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="container py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardHeader>
              <skill.icon className="h-10 w-10 mb-2" />
              <CardTitle>{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

