import Image from "next/image"
import { SectionWrapper } from "@/components/Section"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"

import appImage from "@/images/github.png"

export function Hero() {
  return (
    <div className="relative pt-32">
      <div className="pointer-events-none absolute inset-0 bg-center bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]"></div>

      <SectionWrapper className="py-8 lg:py-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="group text-center font-display text-3xl font-light leading-tight lg:text-5xl">
            <span>Jérémy Lorette</span>
            <br />
            <span>Développeur </span>
            <span className="bg-gradient-to-br from-white/90 to-white/30 bg-clip-text text-transparent">
              Web & Mobile
            </span>
          </h1>
          <h2 className="mt-8 max-w-xl text-center text-lg text-white/60 lg:text-xl">
            Découvrez mes projets et mes compétences !
          </h2>
          <div className="flex">
            <div className="mr-5 mt-8 flex flex-col items-center justify-center gap-4 lg:flex-row">
              <a
                href="https://github.com/Wormav"
                target="_blank"
                className="flex items-center justify-center rounded-full bg-white px-4 py-1.5  text-sm font-medium text-zinc-950 transition duration-300 hover:bg-zinc-300">
                <AiFillGithub className="mr-1" />
                Github
              </a>
            </div>
            <div className="mr-5 mt-8 flex flex-col items-center justify-center gap-4 lg:flex-row">
              <a
                href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-lorette-3899a61b1/"
                target="_blank"
                className="flex items-center justify-center rounded-full bg-white px-4 py-1.5 text-sm font-medium text-zinc-950 transition duration-300 hover:bg-zinc-300">
                <AiFillLinkedin className="mr-1" />
                Linkedin
              </a>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 lg:flex-row">
              <a
                href="mailto:jeremy.lorette@outlook.com"
                className="flex items-center justify-center rounded-full bg-white px-4 py-1.5 text-sm font-medium text-zinc-950 transition duration-300 hover:bg-zinc-300">
                <AiOutlineMail className="mr-1" />
                Mail
              </a>
            </div>
          </div>
          <div className="relative mx-auto mt-8 w-full max-w-5xl lg:mt-16">
            <div className="absolute -top-8 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/25 blur-3xl lg:-top-8 lg:h-[32rem] lg:w-[32rem] lg:blur-[128px]"></div>

            <div className="relative w-full rounded-2xl bg-gradient-to-b from-white/5 to-white/10 p-2 shadow-2xl shadow-white/10 ring-1 ring-white/10 backdrop-blur-sm lg:rounded-3xl">
              <Image
                className="h-auto w-full rounded-xl border border-white/10 shadow-md shadow-zinc-950/50 lg:rounded-2xl"
                alt="screen du profil github"
                unoptimized
                src={appImage}
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
