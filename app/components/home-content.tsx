"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";
import WaitinglistForm from "./waitinglist-form";   

export default function HomeContent() {
    return (
        <div className="w-screen h-screen md:h-screen grid grid-cols-12">
         <div className="col-span-12 md:col-span-6 px-6 md:px-8 flex flex-col justify-between">
          <div className="mt-6 md:mt-8 flex md:justify-start justify-center">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="max-w-[500px] py-14 md:py-8">
            <div className="mb-8 flex justify-center md:justify-start items-center gap-2">
              <div className="flex items-center">
                <Image src="/images/avatarv.webp" alt="Avatar" width={16} height={16} />
                <Image src="/images/avatarvv.webp" className="-ml-2" alt="Avatar" width={20} height={20} />
                <Image src="/images/avatarvvv.webp" className="-ml-2" alt="Avatar" width={24} height={24} />
              </div>
              <p><span className="font-medium">100+ renners</span> zijn al ingeschreven</p>
            </div>
            <h1 className="md:text-7xl text-4xl md:text-left text-center md:mb-8 mb-6 font-serif leading-[100%]">Fiets verder, vind vrienden — sluit je aan bij de rit.</h1>
            <p className="md:text-xl md:text-left text-center text-base mb-4 md:mb-8 text-foreground/70 font-sans">Ridu is een platform voor wielrenners. Organiseer je rit, nodig anderen uit of sluit je aan bij een groep.</p>
            
            <WaitinglistForm />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 md:h-screen h-[700px] relative flex items-center justify-center">
          <Image src="/images/bg-img.webp" alt="Hero" layout="fill" objectFit="cover" />
        </div>
      </div>
    )
}