"use client"

import { useState } from "react"
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { SpotlightButton } from "@/components/SpotlightButton.jsx"

import { SectionWrapper } from "@/components/Section"
import { Logo } from "@/components/Logo"

const links = [
  {
    title: "Stack",
    url: "#stack-technique",
  },
  {
    title: "Projets web",
    url: "#project-web",
  },
  {
    title: "Projets mobile",
    url: "#project-mobile",
  },
  {
    title: "Formations",
    url: "#learning",
  },
  {
    title: "Compétences",
    url: "#skills",
  },
]

function Navigation() {
  return (
    <div className="ml-auto hidden items-center gap-8 lg:flex">
      {links.map((link, index) => (
        <a key={index} href={link.url} className="inline-block text-sm text-white/75 transition hover:text-white">
          {link.title}
        </a>
      ))}
      <SpotlightButton className="h-8 w-auto cursor-pointer">
        <span className="font-mona relative mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text text-sm font-medium text-transparent transition-all duration-200">
          <a href="/documents/CV_jeremy_lorette.pdf" download>
            Télécharger mon CV
          </a>
        </span>
      </SpotlightButton>
    </div>
  )
}

function MobileMenu({ showMenu, setShowMenu }) {
  return (
    showMenu && (
      <div className="py-4">
        <ul className="flex flex-col items-center space-y-4">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                onClick={() => setShowMenu(false)}
                className="inline-block text-base font-medium text-white/75 transition hover:text-white">
                {link.title}
              </a>
            </li>
          ))}
          <SpotlightButton className="h-8 w-auto cursor-pointer">
            <span className="font-mona relative mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text text-sm font-medium text-transparent transition-all duration-200">
              <a href="/documents/CV_jeremy_lorette.pdf" download>
                Télécharger mon CV
              </a>
            </span>
          </SpotlightButton>
        </ul>
      </div>
    )
  )
}

export function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-zinc-950/30 backdrop-blur-lg">
      <SectionWrapper>
        <header>
          <nav className="flex items-center justify-between py-4">
            <div>
              <a href="#" className="inline-flex items-center gap-2">
                <Logo className="text-lg font-normal lg:text-2xl" />
              </a>
            </div>
            <Navigation />
            <button
              onClick={() => setShowMenu(!showMenu)}
              type="button"
              className="relative ml-auto inline-flex lg:hidden">
              <Bars2Icon className={`h-6 w-6 transition duration-500 ${showMenu ? "rotate-180 opacity-0" : ""}`} />
              <XMarkIcon
                className={`absolute inset-0 h-6 w-6 transition duration-500 ${
                  showMenu ? "" : "-rotate-180 opacity-0"
                }`}
              />
            </button>
          </nav>
        </header>

        <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </SectionWrapper>
    </div>
  )
}
