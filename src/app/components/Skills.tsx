"use client"
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card"
import { FaReact, FaSass, FaFigma, FaGitAlt, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiTypescript, SiShadcnui, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiGatsbyFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative, TbBrandRedux } from "react-icons/tb";
import gsap from "gsap";

const skills = [

  { name: "React", icon: <FaReact size={70} /> },
  { name: "Javascript", icon: <IoLogoJavascript size={70} /> },
  { name: "Typescript", icon: <SiTypescript size={70} /> },
  { name: "Sass/Scss", icon: <FaSass size={70} /> },
  { name: "Next.js", icon: <RiNextjsFill size={70} /> },
  { name: "Figma", icon: <FaFigma size={70} /> },
  { name: "Gatsby", icon: <RiGatsbyFill size={70} /> },
  { name: "Node.js", icon: <FaNodeJs size={70} /> },
  { name: "React Native", icon: <TbBrandReactNative size={70} /> },
  { name: "Redux", icon: <TbBrandRedux size={70} /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill size={70} /> },
  { name: "Git", icon: <FaGitAlt size={70} /> },
  { name: "Bootstrap", icon: <FaBootstrap size={70} /> },
  { name: "Shadcn", icon: <SiShadcnui size={70} /> },
  { name: "MongoDB", icon: <SiMongodb size={70} /> },
]

export default function Skills() {
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.6, ease: "power3.out" }
    );
  }, []);

  return (
    <section id="skills" className="py-20 px-6 bg-black">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <Card
            key={index}
            ref={(el) => { skillsRef.current[index] = el }} 
            className="flex flex-col items-center justify-center p-6 hover:shadow-lg transition-shadow"
          >
            <CardContent className="text-center">
              <div className="h-32 text-6xl">{skill.icon}</div> 
              <h3 className="mt-4 font-semibold">{skill.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
  );
}