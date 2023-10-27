import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Project } from "@/components/Project"
import { Certifications } from "@/components/Certifications"
import { Skills } from "@/components/Skills"
import { Stack } from "@/components/Stack"

export const metadata = {
  title: "Portfolio Jérémy Lorette",
  description: "Découvrez mes projets et mes compétences !",
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stack />
      <Project />
      <Certifications />
      <Skills />
    </>
  )
}
