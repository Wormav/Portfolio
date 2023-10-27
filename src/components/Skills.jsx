import { BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql, BiLogoReact, BiLogoTypescript } from "react-icons/bi"
import { SectionWrapper, SectionHeading, SectionTitle, SectionDescription } from "./Section"
import { SpotlightCard, BaseSpotlightCard } from "./SpotlightCard"
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiCss3,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNotion,
  SiPostman,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si"
import { DiNpm } from "react-icons/di"
import { GrUbuntu } from "react-icons/gr"
import { TbBrandVscode } from "react-icons/tb"
import figmaImg from "@/images/figma.png"
import Image from "next/image"
import { BsFillBootstrapFill, BsFillTerminalFill, BsGit, BsTrello } from "react-icons/bs"
import { AiFillGithub, AiFillGitlab } from "react-icons/ai"
import { FaJira, FaYarn } from "react-icons/fa"

function Software() {
  return (
    <div className="lg:flex lg:items-end lg:pb-5">
      <BaseSpotlightCard
        from="rgba(255,255,255,0.2)"
        className="relative mb-6 w-full rounded-[--radius] p-8 [--radius:theme(borderRadius.2xl)] lg:rounded-l-[--radius] lg:rounded-r-none lg:[--radius:theme(borderRadius.3xl)]">
        <div className="lg:rounded-tb-none absolute inset-x-0 bottom-[--radius] top-0 rounded-[--radius] bg-gradient-to-b from-white/15 to-transparent lg:rounded-r-none lg:rounded-tl-[--radius]"></div>
        <div className="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-gradient-to-b from-zinc-950/75 to-zinc-950 lg:right-0 lg:rounded-r-none"></div>
        <div className="relative">
          <div className="font-mono text-white">Logiciels</div>
          <div className="mb-10 mt-10 flex w-full flex-wrap justify-start text-5xl">
            <SiAdobephotoshop className="mb-5 w-1/2 text-blue-500" />
            <SiAdobeillustrator className="mb-5 w-1/2 text-orange-500" />
            <SiPostman className="mb-5 w-1/2 text-orange-400" />
            <div className="mb-5 flex w-1/2 items-center justify-center">
              <Image src={figmaImg} className="h-15 w-10" alt="logo-figma" />
            </div>
            <BsTrello className="mb-5 w-1/2 text-blue-500" />
            <SiNotion className="mb-5 w-1/2 text-white" />
            <TbBrandVscode className="mb-5 w-1/2 text-blue-500" />
            <FaJira className="mb-5 w-1/2 text-blue-500" />
          </div>
        </div>
      </BaseSpotlightCard>
    </div>
  )
}

function Tech() {
  return (
    <SpotlightCard className="mb-10 p-8">
      <div className="font-mono text-white">Technologies</div>
      <div className="mt-10 flex w-full flex-wrap justify-start text-6xl">
        <BiLogoReact className="mb-5 w-1/2 text-blue-400" />
        <BiLogoNodejs className="mb-5 w-1/2 text-green-500" />
        <BiLogoJavascript className="mb-5 w-1/2 text-yellow-300" />
        <BiLogoTypescript className="mb-5 w-1/2 text-blue-600" />
        <SiMysql className="mb-5 w-1/2 text-white" />
        <SiNextdotjs className="mb-5 w-1/2 text-white" />
        <SiCss3 className="mb-5 w-1/2 text-5xl text-blue-500" />
        <SiPrisma className="mb-5 w-1/2 text-white" />
        <SiMongodb className="mb-5 w-1/2 text-green-500" />
        <BiLogoPostgresql className="mb-5 w-1/2 text-blue-500" />
        <SiExpress className="mb-5 w-1/2 text-white" />
        <BsFillTerminalFill className="mb-5 w-1/2 text-white" />
      </div>
    </SpotlightCard>
  )
}

function Tools() {
  return (
    <div className="flex items-end pb-5">
      <BaseSpotlightCard
        from="rgba(255,255,255,0.2)"
        className="relative mb-6 w-full rounded-[--radius] p-8 [--radius:theme(borderRadius.2xl)] lg:rounded-l-none lg:rounded-r-[--radius] lg:[--radius:theme(borderRadius.3xl)]">
        <div className="absolute inset-x-0 bottom-[--radius] top-0 rounded-[--radius] bg-gradient-to-b from-white/15 to-transparent lg:rounded-l-none lg:rounded-tr-[--radius]"></div>
        <div className="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-gradient-to-b from-zinc-950/75 to-zinc-950 lg:left-0 lg:rounded-l-none lg:rounded-r-[calc(var(--radius)-1px)]"></div>
        <div className="relative">
          <div className="font-mono text-white">Outils</div>
          <div className="mb-10 mt-10 flex w-full flex-wrap justify-start text-5xl">
            <BsGit className="mb-5 w-1/2 text-orange-700" />
            <AiFillGithub className="mb-5 w-1/2 text-white" />
            <DiNpm className="mb-5 w-1/2 text-red-600" />
            <FaYarn className="mb-5 w-1/2 text-blue-400" />
            <AiFillGitlab className="mb-5 w-1/2 text-orange-500" />
            <BsFillBootstrapFill className="mb-5 w-1/2 text-purple-600" />
            <SiTailwindcss className="mb-5 w-1/2 text-blue-400" />
            <GrUbuntu className="mb-5 w-1/2 text-orange-500" />
          </div>
          <div className="mt-8 divide-y divide-white/10 text-sm font-medium text-white/75"></div>
        </div>
      </BaseSpotlightCard>
    </div>
  )
}

export function Skills() {
  return (
    <div id="skills" className="scroll-mt-8 py-8 lg:py-16">
      <SectionWrapper>
        <SectionHeading>
          <SectionTitle>Compétences</SectionTitle>
          <SectionDescription>Compétences et outils maitrisés</SectionDescription>
        </SectionHeading>
        <div className="mt-8 lg:mt-16">
          <div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-3 lg:gap-0">
            <Software />
            <Tech />
            <Tools />
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
