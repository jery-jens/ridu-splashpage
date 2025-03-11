"use client";

import Link from "next/link";
import { useState } from "react";

export default function WaitinglistForm() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        await fetch("/api/send", {
            method: "POST",
            body: JSON.stringify({ email }),
        });

        setIsLoading(false);
        setIsSuccess(true);
    };

    return (
        <form className="mt-10 md:mt-20 flex flex-col md:items-start items-center" onSubmit={handleSubmit}>
        <p className="font-serif mb-4 md:text-left text-center">Wees de eerste. Schrijf je in voor onze Béta-launch.</p>
        <div className="border border-foreground/10 p-2 rounded-2xl bg-foreground/5 md:w-fit w-full md:flex md:flex-row flex-col">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Jouw emailadres" className="bg-transparent md:text-left text-center md:placeholder:text-left placeholder:text-center md:mb-0 mb-2 outline-none border-none py-3 px-4 w-[240px]" />
          <button type="submit" className={`bg-foreground md:w-fit w-full transition-all duration-300 ease-in-out ${isLoading ? "opacity-50" : ""} ${isSuccess ? "bg-green-500 text-white" : ""} cursor-pointer text-background px-6 py-3 rounded-xl`}>{isLoading ? "Bezig..." : isSuccess ? "Ingeschreven" : "Schrijf je in"}</button>
        </div>
        <p className="text-xs text-foreground/70 max-w-[340px] mt-4 font-san md:text-left text-center">Wanneer je je inschrijft voor onze Béta-launch, ga je automatisch akkoord met onze <Link href="/privacy-policy" className="underline text-foreground">Privacy Policy</Link> & <Link href="/terms-of-service" className="underline text-foreground">Terms of Service</Link>.</p>
      </form>
    )
}