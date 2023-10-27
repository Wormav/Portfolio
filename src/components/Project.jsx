import { SectionWrapperRounded, SectionHeading, SectionTitle, SectionDescription } from "./Section"
import { BaseSpotlightCard } from "./SpotlightCard"
import Image from "next/image"
import playtrackerImg from "/images/playtracker.png"
import CEImg from "/images/ce.png"
import SelfServiceImg from "/images/selfService.png"
import GroupomaniaImg from "/images/groupomania.jpeg"
import { AiOutlineLink } from "react-icons/ai"

function FeatureCard({ children }) {
  return (
    <div className="lg:rounded-3xl lg:border lg:border-white/10 lg:bg-white/2.5 lg:p-2">
      <BaseSpotlightCard
        size="640"
        from="rgba(255,255,255,0.10)"
        className="overflow-hidden rounded-2xl border border-white/10 bg-white/2.5 shadow-md shadow-zinc-950/50">
        {children}
      </BaseSpotlightCard>
    </div>
  )
}

function Playtracker() {
  return (
    <FeatureCard>
      <div className=" p-6 lg:p-8">
        <div className="text-lg text-white">Playtracker</div>
        <p className="mt-4 font-light leading-relaxed text-white/75">
          Playtracker est un outil que j&apos;ai co-développé, destiné à gérer et suivre les bibliothèques de jeux vidéo
          des utilisateurs. Il permet d&apos;ajouter des jeux, de suivre la progression et d&apos;obtenir des
          statistiques basiques. Les utilisateurs peuvent également créer des listes personnalisées, rendant
          l&apos;expérience plus organisée et adaptée à leurs besoins.
        </p>
        <Image
          className="mt-5 h-auto w-full rounded-xl border border-white/10 shadow-md shadow-zinc-950/50 lg:rounded-2xl"
          alt="App screenshot"
          unoptimized
          src={playtrackerImg}
        />
        <div className="mr-5 mt-8 flex flex-col items-center justify-center gap-4 pb-12 lg:flex-row">
          <a
            href="https://playtracker.app/"
            target="_blank"
            className="z-10 flex cursor-pointer items-center justify-center rounded-full bg-white px-4 py-1.5  text-sm font-medium text-zinc-950 transition duration-300 hover:bg-zinc-300">
            <AiOutlineLink className="mr-2" />
            Site
          </a>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">React.js</span>
          <span className="font-bold">Node.js</span>
          <span className="font-bold">Prisma</span>
          <span className="font-bold">PostgresSQL</span>
          <span className="font-bold">Nginx</span>
        </div>
      </div>
    </FeatureCard>
  )
}

function CSE() {
  return (
    <FeatureCard>
      <div className="p-6 lg:p-8">
        <div className="text-lg text-white">Site de blog et de réservations</div>
        <p className="mt-4 font-light leading-relaxed text-white/75">
          J&apos;ai conçu un site interne pour le CE de la STCLM à Limoges, servant à la fois de blog et de plateforme
          de réservation. Les utilisateurs peuvent y réserver des véhicules ou des appartements, recevant un code
          sécurisé par e-mail pour confirmer leur réservation. Un backoffice est également intégré, permettant aux
          administrateurs de gérer le site, les utilisateurs, et d&apos;autres fonctionnalités. De plus, grâce à une API
          Google, toutes les réservations sont automatiquement ajoutées à Google Calendar.
        </p>
        <Image
          className="mt-3 h-auto w-full rounded-xl border border-white/10 shadow-md shadow-zinc-950/50 lg:rounded-2xl"
          alt="App screenshot"
          unoptimized
          src={CEImg}
        />
        <div className="mt-5 flex justify-between">
          <span className="font-bold">React.js</span>
          <span className="font-bold">Node.js</span>
          <span className="font-bold">Prisma</span>
          <span className="font-bold">PostgresSQL</span>
          <span className="font-bold">Nginx</span>
        </div>
      </div>
    </FeatureCard>
  )
}

function SelfserviceToIcal() {
  return (
    <FeatureCard>
      <div className=" p-6 lg:p-8">
        <div className="text-lg text-white">Self service to ical</div>
        <p className="mt-4 font-light leading-relaxed text-white/75">
          Self service to ical est un outil en production hébergé sur un serveur VPS. Sa mission principale est de
          scraper le calendrier professionnel de la TCL de Limoges. Une fois les données récupérées, il les distribue
          sous la forme d&apos;un fichier ical. Ce fichier peut ensuite être importé et mis à jour automatiquement dans
          diverses applications de calendrier, telles que Google Calendar ou Apple Calendar.
        </p>
        <Image
          className=" mt-5 h-auto w-full rounded-xl border border-white/10 shadow-md shadow-zinc-950/50 lg:rounded-2xl"
          alt="App screenshot"
          unoptimized
          src={SelfServiceImg}
        />
        <div className="mt-5 flex justify-between">
          <span className="font-bold">Node.js</span>
          <span className="font-bold">MongoDB</span>
          <span className="font-bold">Express</span>
          <span className="font-bold">Puppeteer</span>
        </div>
      </div>
    </FeatureCard>
  )
}

function Groupomania() {
  return (
    <FeatureCard>
      <div className=" p-6 lg:p-8">
        <div className="text-lg text-white">Groupomania</div>
        <p className="mt-4 font-light leading-relaxed text-white/75">
          Groupomania est le projet final de la formation Développeur Web Junior chez OpenClassrooms. Il s&apos;agit
          d&apos;un réseau social d&apos;entreprise conçu pour permettre aux utilisateurs de publier des images, de
          suivre d&apos;autres utilisateurs et de commenter les publications.
        </p>
        <Image
          className="mt-5 h-auto w-full rounded-xl border border-white/10 shadow-md shadow-zinc-950/50 lg:rounded-2xl"
          alt="App screenshot"
          unoptimized
          src={GroupomaniaImg}
        />
        <div className="mr-5 mt-8 flex flex-col items-center justify-center gap-4 lg:flex-row">
          <a
            href="https://playtracker.app/"
            target="_blank"
            className="z-10 flex cursor-pointer items-center justify-center rounded-full bg-white px-4 py-1.5  text-sm font-medium text-zinc-950 transition duration-300 hover:bg-zinc-300">
            <AiOutlineLink className="mr-2" />
            Github
          </a>
        </div>
        <div className="mt-5 flex justify-between">
          <span className="font-bold">React.js</span>
          <span className="font-bold">Node.js</span>
          <span className="font-bold">MySQL</span>
          <span className="font-bold">Express</span>
        </div>
      </div>
    </FeatureCard>
  )
}

export function Project() {
  return (
    <SectionWrapperRounded id="project">
      <SectionHeading>
        <SectionTitle>Projets</SectionTitle>
        <SectionDescription>
          Voici mes projets, il s&apos;agit de projet personnel, de projet de formation ou alors de projet réalisé en
          mission freelance
        </SectionDescription>
      </SectionHeading>
      <div className="mt-8 grid gap-4 lg:mt-16 lg:grid-cols-2 lg:gap-8">
        <Playtracker />
        <CSE />
        <SelfserviceToIcal />
        <Groupomania />
      </div>
    </SectionWrapperRounded>
  )
}
