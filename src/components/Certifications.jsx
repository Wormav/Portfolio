"use client"

import clsx from "clsx"

import { BsFillPhoneFill, BsRocketTakeoffFill } from "react-icons/bs"

import { SectionWrapper, SectionHeadingHighlighted, SectionTitle } from "./Section"
import { ScrollReveal } from "./ScrollReveal"
import { FaGitAlt, FaReact } from "react-icons/fa"
import { BiLogoFigma, BiLogoJavascript, BiLogoNodejs, BiLogoTypescript } from "react-icons/bi"

export function Certifications() {
  const features = [
    {
      title: "Le Reacteur",
      description: "Bootcamp de deux mois sur React et React Native",
      icon: BsRocketTakeoffFill,
      link: "https://www.lereacteur.io/",
    },
    {
      title: "React 18",
      description: "Formation en e-learning sur Dyma.fr",
      icon: FaReact,
      link: "https://dyma.fr/certification/62670dfb4d9af037e2d94eb5/628e08287436c6ee0c1480b9",
    },
    {
      title: "Node.js",
      description: "Formation en e-learning sur Dyma.fr",
      icon: BiLogoNodejs,
      link: "https://dyma.fr/certification/62670dfb4d9af037e2d94eb5/5c69b1d1606df31e473253d8",
    },
    {
      title: "Javascript",
      description: "Formation en e-learning sur Udemy",
      icon: BiLogoJavascript,
      link: "https://www.udemy.com/certificate/UC-3df60cb1-1e12-4fea-9b38-e8549011e2fe/",
    },
    {
      title: "Typescript",
      description: "Formation en e-learning sur Dyma.fr",
      icon: BiLogoTypescript,
      link: "https://dyma.fr/certification/62670dfb4d9af037e2d94eb5/5ec44a260e320871af33ecaa",
    },
    {
      title: "Git",
      description: "Formation en e-learning sur Udemy",
      icon: FaGitAlt,
      link: "https://www.udemy.com/certificate/UC-839f4437-3404-481f-b021-a1e6dc31b562/",
    },
    {
      title: "Figma",
      description: "Formation en e-learning sur Udemy",
      icon: BiLogoFigma,
      link: "https://www.udemy.com/certificate/UC-7a92b1c5-ae1f-4bf9-b109-e8238b57d61e/",
    },
    {
      title: "React Native",
      description: "Formation en e-learning sur Udemy et lors du bootcamp Le Reacteur",
      icon: BsFillPhoneFill,
      link: "https://www.lereacteur.io/",
    },
  ]

  return (
    <div id="learning" className="scroll-mt-8 pt-8 lg:pt-8">
      <ScrollReveal once={true} trigger="middle" className="[--duration:500ms]">
        {(isActive) => (
          <SectionWrapper>
            <SectionHeadingHighlighted>
              <SectionTitle>Formations et certifications</SectionTitle>
            </SectionHeadingHighlighted>
            <div className="mt-8 lg:mt-16">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-16">
                {features.map((feature, index) => (
                  <a key={index} href={feature.link} target="_blank">
                    <div
                      style={{ "--delay": `${index * 150}ms` }}
                      className={clsx(
                        "cursor-pointer transition-all delay-[--delay] duration-[--duration]",
                        !isActive ? "translate-y-8 opacity-0" : "",
                      )}>
                      <div className="flex items-center">
                        <div className="rounded border border-white/5 bg-white/5 p-1">
                          <feature.icon className="h-5 w-5 text-white" />
                        </div>

                        <div className="ml-4 text-lg">{feature.title}</div>
                      </div>

                      <div className="ml-11 mt-2 pl-0.5 text-sm font-light leading-relaxed text-white/75">
                        {feature.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </SectionWrapper>
        )}
      </ScrollReveal>
    </div>
  )
}
