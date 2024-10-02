import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
    {
        title: "Next Movie",
        description: "Discover the most popular movies and TV shows with Movie Explorer! Access detailed information quickly with a sleek and fast design.",
        image: "/images/movie.png",
        link: "https://next-movie-five-alpha.vercel.app/"
    },
    {
        title: "Task Manager",
        description: "Manage your tasks effortlessly with the Task Manager app! Quickly add, update, and delete tasks to boost your productivity.",
        image: "/images/task.png",
        link: "https://task-manager-smoky-eight.vercel.app/"
    },
    {
        title: "Weather App",
        description: "Stay updated with the Weather App! Search for cities to view real-time weather forecasts, including temperature and conditions, to plan your day accordingly.",
        image: "/images/weather.png",
        link: "https://weather-app-lyart-nine-84.vercel.app/"
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={500}
                                height={500}
                            />
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{project.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button asChild>
                                    <a target='_blank' href={project.link}>View Project</a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}