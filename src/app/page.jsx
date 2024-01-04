import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { ProjectWeb } from "@/components/ProjectWeb"
import { ProjectMobile } from "@/components/ProjectMobile"
import { Certifications } from "@/components/Certifications"
import { Skills } from "@/components/Skills"
import { Stack } from "@/components/Stack"

export const metadata = {
  title: "Jérémy Lorette",
  description: "Découvrez mes projets et mes compétences !",
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stack />
      <ProjectWeb />
      <ProjectMobile />
      <Certifications />
      <Skills />
    </>
  )
}
