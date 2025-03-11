import Logo from "../components/logo";
import Wrapper from "../components/wrapper";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    robots: { index: false },
    title: "Ridu | Privacy Policy",
    description: "Ridu brengt wielrenners samen: organiseer je rit, nodig anderen uit of sluit je aan bij een groep.",
};

export default function PrivacyPolicy() {
    return (
        <Wrapper>
            <div className="container m-auto pt-10 pb-8 px-4">
                <Link href="/">
                    <Logo />
                </Link>
                
                <h1 className="text-4xl font-serif mb-4 mt-20">Privacy Policy</h1>
                <p className="text-sm text-foreground/70">Laatst bijgewerkt: 11 maart 2025</p>

                <h2 className="text-2xl font-serif mt-10">1. Inleiding</h2>
                <p className="text-foreground/70 mt-4">Wij verzamelen en beheren jouw gegevens met zorg. Deze Privacy Policy legt uit hoe wij omgaan met de informatie die je verstrekt wanneer je je aanmeldt voor onze waitinglist. Ons doel is om transparant te zijn over het gebruik van jouw e-mailadres.</p>

                <h2 className="text-2xl font-serif mt-10">2. Welke gegevens verzamelen wij?</h2>
                <p className="text-foreground/70 mt-4">Wij verzamelen enkel jouw e-mailadres wanneer je je inschrijft voor onze waitinglist. Geen andere persoonlijke gegevens worden op deze landingpagina verzameld.</p>

                <h2 className="text-2xl font-serif mt-10">3. Hoe gebruiken wij jouw gegevens?</h2>
                <p className="text-foreground/70 mt-4">Jouw e-mailadres wordt gebruikt om:</p>
                <ul className="list-disc list-inside text-foreground/70 mt-4">
                        <li>Je op de hoogte te houden van updates over onze lancering.</li>
                        <li>Je te informeren wanneer onze dienst of product beschikbaar is.</li>
                </ul>
                <p className="text-foreground/70 mt-4">Wij delen jouw e-mailadres niet met derden, behalve met dienstverleners die ons helpen bij het beheren van de waitinglist (bijv. een e-mailmarketingplatform), en alleen onder strikte geheimhoudingsvoorwaarden.</p>

                <h2 className="text-2xl font-serif mt-10">4. Rechtsgrondslag</h2>
                <p className="text-foreground/70 mt-4">Wij verwerken jouw e-mailadres op basis van jouw toestemming, die je geeft door je aan te melden voor de waitinglist.</p>

                <h2 className="text-2xl font-serif mt-10">5. Hoe lang bewaren wij jouw gegevens?</h2>
                <p className="text-foreground/70 mt-4">Wij bewaren jouw e-mailadres totdat je je uitschrijft van de waitinglist of totdat onze dienst gelanceerd is en wij geen verdere updates meer sturen. Je kunt je op elk moment uitschrijven via de link in onze e-mails.</p>

                <h2 className="text-2xl font-serif mt-10">6. Jouw rechten</h2>
                <p className="text-foreground/70 mt-4">Je hebt het recht om:</p>
                <ul className="list-disc list-inside text-foreground/70 mt-4">
                    <li>Jouw e-mailadres in te zien, te corrigeren of te laten verwijderen.</li>
                    <li>Bezwaar te maken tegen het gebruik van jouw gegevens.</li>
                    <li>Een klacht in te dienen bij een toezichthoudende autoriteit.</li>
                </ul>
                <p className="text-foreground/70 mt-4">Neem hiervoor contact met ons op via hello@ridu.be.</p>

                <h2 className="text-2xl font-serif mt-10">7. Beveiliging</h2>
                <p className="text-foreground/70 mt-4">Wij nemen passende technische en organisatorische maatregelen om jouw e-mailadres te beschermen tegen ongeautoriseerde toegang, verlies of diefstal.</p>

                <h2 className="text-2xl font-serif mt-10">8. Contact</h2>
                <p className="text-foreground/70 mt-4">Heb je vragen over deze Privacy Policy? Neem contact met ons op via  hello@ridu.be.</p>

                <h2 className="text-2xl font-serif mt-10">9. Wijzigingen</h2>
                <p className="text-foreground/70 mt-4">Wij kunnen deze Privacy Policy van tijd tot tijd aanpassen. De meest recente versie is altijd beschikbaar op deze pagina.</p>
            </div>
        </Wrapper>
    )
}   