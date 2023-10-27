"use client"

import clsx from "clsx"
import { SiNextdotjs, SiPostgresql, SiPrisma } from "react-icons/si"
import { BiLogoTypescript } from "react-icons/bi"
import { IoLogoNodejs } from "react-icons/io5"
import { SiExpress } from "react-icons/si"
import { SectionWrapper, SectionHeading, SectionTitle, SectionDescription } from "./Section"
import { ScrollReveal } from "./ScrollReveal"
import { SpotlightCard } from "./SpotlightCard"
import { FaReact } from "react-icons/fa"

function FeatureCard({ children, className }) {
  return <SpotlightCard className={clsx("p-8", className)}>{children}</SpotlightCard>
}

function FeatureCardThumbnail({ children }) {
  return <div className="flex items-center justify-center gap-4 py-6">{children}</div>
}

function FeatureCardBody({ children }) {
  return <div className="mt-4">{children}</div>
}

function FeatureCardTitle({ children }) {
  return <div className="text-lg text-white">{children}</div>
}

function FeatureCardDescription({ children }) {
  return <p className="mt-4 text-sm font-light leading-relaxed text-white/75">{children}</p>
}

function DocumentsFeature({ className }) {
  const dots = new Array(9)

  return (
    <FeatureCard className={className}>
      <FeatureCardThumbnail>
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <SiPrisma className="relative h-8 w-8 text-white" />
        </div>

        <div className="w-[6.5rem] overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:6s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <SiPostgresql className="relative h-8 w-8 text-cyan-400" />
        </div>
      </FeatureCardThumbnail>

      <FeatureCardBody>
        <FeatureCardTitle>Base de données</FeatureCardTitle>
        <FeatureCardDescription>
          Prisma est un ORM moderne offrant une couche d&apos;abstraction puissante pour PostgreSQL. Il simplifie les
          interactions avec la base de données grâce à une API auto-générée. Grâce à sa facilité d&apos;utilisation et
          ses performances, Prisma est un choix de premier ordre pour les applications modernes.
        </FeatureCardDescription>
      </FeatureCardBody>
    </FeatureCard>
  )
}

function ResponsesFeature({ className }) {
  const dots = new Array(3)

  return (
    <FeatureCard className={className}>
      <FeatureCardThumbnail>
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <BiLogoTypescript className="relative h-8 w-8 text-blue-700" />
        </div>

        <div className="w-9 overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:2s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <FaReact className="relative h-8 w-8 text-cyan-600" />
        </div>

        <div className="w-9 overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:2s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <SiNextdotjs className="relative h-8 w-8 text-white" />
        </div>
      </FeatureCardThumbnail>

      <FeatureCardBody>
        <FeatureCardTitle>Frontend</FeatureCardTitle>
        <FeatureCardDescription>
          Next.js, couplé à React.js, offre un cadre pour le développement de sites web universels, optimisés pour les
          performances. Avec TypeScript, cette stack garantit un code fiable et typé, assurant ainsi une meilleure
          qualité et une maintenance aisée des projets. Un trio idéal pour des applications web modernes et scalables.
        </FeatureCardDescription>
      </FeatureCardBody>
    </FeatureCard>
  )
}

function ReferencesFeature({ className }) {
  const dots = new Array(9)

  return (
    <FeatureCard className={className}>
      <FeatureCardThumbnail>
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <IoLogoNodejs className="relative h-8 w-8 text-green-500" />
        </div>

        <div className="w-[6.5rem] overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:6s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <SiExpress className="relative h-8 w-8 text-white" />
        </div>
      </FeatureCardThumbnail>

      <FeatureCardBody>
        <FeatureCardTitle>Backend</FeatureCardTitle>
        <FeatureCardDescription>
          Node.js fournit une plateforme d&apos;exécution rapide pour le JavaScript côté serveur, tandis qu&apos;Express
          est un framework web minimaliste s&apos;articulant parfaitement avec Node. Ensemble, ils forment la base
          d&apos;une architecture backend performante, flexible et facilement extensible.
        </FeatureCardDescription>
      </FeatureCardBody>
    </FeatureCard>
  )
}

export function Stack() {
  return (
    <div id="stack-technique" className="scroll-mt-8 py-8 lg:py-16">
      <ScrollReveal once={true} trigger="middle" className="[--duration:500ms]">
        {(isActive) => (
          <SectionWrapper>
            <SectionHeading>
              <SectionTitle>Stack technique</SectionTitle>

              <SectionDescription>
                Une stack basé sur javascript, avec <span className="text-white">React.js</span> et{" "}
                <span className="text-white">Node.js</span>
              </SectionDescription>
            </SectionHeading>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
              <DocumentsFeature
                className={clsx(
                  " transition-all delay-150 duration-[--duration]",
                  !isActive ? "translate-y-8 opacity-0" : "",
                )}
              />
              <ResponsesFeature
                className={clsx(
                  " transition-all delay-300 duration-[--duration]",
                  !isActive ? "translate-y-8 opacity-0" : "",
                )}
              />
              <ReferencesFeature
                className={clsx(
                  " transition-all delay-[450ms] duration-[--duration]",
                  !isActive ? "translate-y-8 opacity-0" : "",
                )}
              />
            </div>
          </SectionWrapper>
        )}
      </ScrollReveal>
    </div>
  )
}
