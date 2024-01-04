/* eslint-disable @next/next/no-img-element */
import { SectionWrapperRounded, SectionHeading, SectionTitle, SectionDescription } from "./Section"
import { BaseSpotlightCard } from "./SpotlightCard"
import Image from "next/image"
import tinderImg from "../images/tinder.png"
import todoImg from "../images/todo.png"
import weaterImg from "../images/weater.png"
import airbnbImg from "../images/airbnb.png"
import { AiOutlineLink } from "react-icons/ai"

function FeatureCard({ children }) {
  return (
    <div className="lg:rounded-3xl lg:border lg:border-white/10 lg:bg-white/2.5 lg:p-2">
      <BaseSpotlightCard
        size="640"
        from="rgba(255,255,255,0.10)"
        className="h-full overflow-hidden rounded-2xl border border-white/10 bg-white/2.5 shadow-md shadow-zinc-950/50">
        {children}
      </BaseSpotlightCard>
    </div>
  )
}

function TwoDoList() {
  return (
    <FeatureCard>
      <div className=" flex flex-col items-center justify-between p-6 lg:p-8">
        <div className="text-lg text-white">2Dolist</div>
        <p className="mt-4 font-light leading-relaxed text-white/75">
          2Dolist est un projet realisé en React Native. Il s&apos;agit d&apos;une application de gestion de tâches.
          Elle permet de créer des tâches, de les modifier, de les supprimer et de les marquer comme terminées. Les
          tâches sont stockées dans le local storage du téléphone.
        </p>
        <Image
          className="mt-5 rounded-xl border border-white/10 shadow-md shadow-zinc-950/50 lg:rounded-2xl"
          alt="Capture d'écran de l'application"
          unoptimized
          src={todoImg}
        />
        <div className="mr-5 mt-8 flex flex-col items-center justify-center gap-4 pb-12 lg:flex-row">
          <a
            href="https://github.com/Wormav/react_native_training"
            target="_blank"
            className="z-10 flex cursor-pointer items-center justify-center rounded-full bg-white px-4 py-1.5  text-sm font-medium text-zinc-950 transition duration-300 hover:bg-zinc-300">
            <AiOutlineLink className="mr-2" />
            Github
          </a>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-start gap-3">
          <img src="https://img.shields.io/badge/Framework-ReactNative-blue" alt="Badge" />
        </div>
      </div>
    </FeatureCard>
  )
}

function WeatherApp() {
  return (
    <FeatureCard>
      <div className=" flex flex-col items-center justify-between p-6 lg:p-8">
        <div className="text-lg text-white">Weather app</div>
        <p className="mt-4 font-light leading-relaxed text-white/75">
          Weather app est un projet realisé en React Native. Il s&apos;agit d&apos;une application météo. Elle permet
          d&apos;afficher la météo actuelle et la météo des 5 prochains jours. L&apos;application utilise l&apos;API
          OpenWeatherMap.
        </p>
        <Image
          className="mt-5 rounded-xl border border-white/10 shadow-md shadow-zinc-950/50 lg:rounded-2xl"
          alt="Capture d'écran de l'application"
          unoptimized
          src={weaterImg}
        />
        <div className="mr-5 mt-8 flex flex-col items-center justify-center gap-4 pb-12 lg:flex-row">
          <a
            href="https://github.com/Wormav/react_native_training"
            target="_blank"
            className="z-10 flex cursor-pointer items-center justify-center rounded-full bg-white px-4 py-1.5  text-sm font-medium text-zinc-950 transition duration-300 hover:bg-zinc-300">
            <AiOutlineLink className="mr-2" />
            Github
          </a>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-start gap-3">
          {" "}
          <img src="https://img.shields.io/badge/Framework-ReactNative-blue" alt="Badge" />
          <img src="https://img.shields.io/badge/API-OpenWeatherMap-white" alt="Badge" />
        </div>
      </div>
    </FeatureCard>
  )
}

function Airbnb() {
  return (
    <FeatureCard>
      <div className=" flex flex-col items-center justify-between p-6 lg:p-8">
        <div className="text-lg text-white">Airbnb</div>
        <p className="mt-4 font-light leading-relaxed text-white/75">
          Airbnb est un projet realisé en React Native. Il s&apos;agit d&apos;une application de location de logements.
          Elle permet de rechercher des logements, de les filtrer et de les réserver. L&apos;application utilise
          l&apos;API Airbnb.Une carte est également disponible pour afficher les logements.
        </p>
        <Image
          className="mt-5 rounded-xl border border-white/10 shadow-md shadow-zinc-950/50 lg:rounded-2xl"
          alt="Capture d'écran de l'application"
          unoptimized
          src={airbnbImg}
        />
        <div className="mr-5 mt-8 flex flex-col items-center justify-center gap-4 pb-12 lg:flex-row">
          <a
            href="https://github.com/Wormav/Airbnb_React_native"
            target="_blank"
            className="z-10 flex cursor-pointer items-center justify-center rounded-full bg-white px-4 py-1.5  text-sm font-medium text-zinc-950 transition duration-300 hover:bg-zinc-300">
            <AiOutlineLink className="mr-2" />
            Github
          </a>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-start gap-3">
          {" "}
          <img src="https://img.shields.io/badge/Framework-ReactNative-blue" alt="Badge" />
          <img src="https://img.shields.io/badge/BackEnd-Node.js-green" alt="Badge" />
          <img src="https://img.shields.io/badge/Database-MongoDB-green" alt="Badge" />
          <img src="https://img.shields.io/badge/Package-Express-orange" alt="Badge" />
        </div>
      </div>
    </FeatureCard>
  )
}

function Tinder() {
  return (
    <FeatureCard>
      <div className=" flex flex-col items-center justify-between p-6 lg:p-8">
        <div className="text-lg text-white">Tinder</div>
        <p className="mt-4 font-light leading-relaxed text-white/75">
          Tinder est un projet realisé en React Native. Il s&apos;agit d&apos;une application de rencontre. Elle permet
          de rechercher des profils, de les liker et de les matcher.Un système de swipe est également disponible pour le
          like et le dislike des profils.
        </p>
        <Image
          className="mt-5 rounded-xl border border-white/10 shadow-md shadow-zinc-950/50 lg:rounded-2xl"
          alt="Capture d'écran de l'application"
          unoptimized
          src={tinderImg}
        />
        <div className="mr-5 mt-8 flex flex-col items-center justify-center gap-4 pb-12 lg:flex-row">
          <a
            href="https://github.com/Wormav/Tinder_clone_react_native"
            target="_blank"
            className="z-10 flex cursor-pointer items-center justify-center rounded-full bg-white px-4 py-1.5  text-sm font-medium text-zinc-950 transition duration-300 hover:bg-zinc-300">
            <AiOutlineLink className="mr-2" />
            Github
          </a>
        </div>
        <div className="mt-2 flex flex-wrap items-center justify-start gap-3">
          {" "}
          <img src="https://img.shields.io/badge/Framework-ReactNative-blue" alt="Badge" />
          <img src="https://img.shields.io/badge/Database-Firebase-orange" alt="Badge" />
        </div>
      </div>
    </FeatureCard>
  )
}

export function ProjectMobile() {
  return (
    <SectionWrapperRounded id="project-mobile">
      <SectionHeading>
        <SectionTitle>Projets Mobile</SectionTitle>
        <SectionDescription>
          Voici mes projets Mobile, il s&apos;agit de projet personnel ou de projet de formation.
        </SectionDescription>
      </SectionHeading>
      <div className="mt-8 grid gap-4 lg:mt-16 lg:grid-cols-2 lg:gap-8">
        <TwoDoList />
        <WeatherApp />
        <Airbnb />
        <Tinder />
      </div>
    </SectionWrapperRounded>
  )
}
