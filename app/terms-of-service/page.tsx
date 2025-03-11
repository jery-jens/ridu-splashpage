import Logo from "../components/logo";
import Wrapper from "../components/wrapper";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    robots: { index: false },
    title: "Ridu | Gebruiksvoorwaarden",
    description: "Ridu brengt wielrenners samen: organiseer je rit, nodig anderen uit of sluit je aan bij een groep.",
};

export default function TermsOfService() {
    return (
        <Wrapper>
            <div className="container m-auto pt-10 pb-8 px-4">
                <Link href="/">
                    <Logo />
                </Link>
                
                <h1 className="text-4xl font-serif mb-4 mt-20">Gebruiksvoorwaarden</h1>
                <p className="text-sm text-foreground/70">Laatst bijgewerkt: 11 maart 2025</p>

                <h2 className="text-2xl font-serif mt-10">1. Inleiding</h2>
                <p className="text-foreground/70 mt-4">Welkom bij onze waitinglist! Deze Gebruiksvoorwaarden beschrijven de regels en voorwaarden voor het gebruik van onze landingpagina en de aanmelding voor onze waitinglist. Door je aan te melden, ga je akkoord met deze voorwaarden.</p>

                <h2 className="text-2xl font-serif mt-10">2. Doel van de Waitinglist</h2>
                <p className="text-foreground/70 mt-4">De waitinglist is bedoeld om geïnteresseerden te informeren over de lancering van onze dienst of product. Door je e-mailadres te verstrekken, meld je je aan om updates te ontvangen.</p>

                <h2 className="text-2xl font-serif mt-10">3. Gebruikersverantwoordelijkheden</h2>
                <p className="text-foreground/70 mt-4">Als gebruiker van de waitinglist ben je verantwoordelijk voor:</p>
                <ul className="list-disc list-inside text-foreground/70 mt-4">
                    <li>Het verstrekken van een geldig en persoonlijk e-mailadres.</li>
                    <li>Het niet misbruiken van onze dienst, zoals het aanmelden met valse of andermans gegevens.</li>
                </ul>

                <h2 className="text-2xl font-serif mt-10">4. Onze Rechten</h2>
                <p className="text-foreground/70 mt-4">Wij behouden ons het recht voor om:</p>
                <ul className="list-disc list-inside text-foreground/70 mt-4">
                    <li>Je aanmelding te weigeren of te verwijderen zonder opgave van reden.</li>
                    <li>De waitinglist en bijbehorende updates op elk moment stop te zetten of te wijzigen.</li>
                </ul>

                <h2 className="text-2xl font-serif mt-10">5. Beperking van Aansprakelijkheid</h2>
                <p className="text-foreground/70 mt-4">Wij doen ons best om accurate en tijdige updates te versturen, maar wij zijn niet aansprakelijk voor:</p>
                <ul className="list-disc list-inside text-foreground/70 mt-4">
                    <li>Eventuele fouten of vertragingen in de communicatie.</li>
                    <li>Schade die voortvloeit uit het gebruik van de waitinglist.</li>
                </ul>
                <p className="text-foreground/70 mt-4">Deelname aan de waitinglist is op eigen risico.</p>

                <h2 className="text-2xl font-serif mt-10">6. Intellectueel Eigendom</h2>
                <p className="text-foreground/70 mt-4">Alle inhoud op deze landingpagina, inclusief logos, tekst en ontwerp, is ons eigendom en mag niet zonder toestemming worden gebruikt of gereproduceerd.</p>

                <h2 className="text-2xl font-serif mt-10">7. Beëindiging</h2>
                <p className="text-foreground/70 mt-4">Je kunt je deelname aan de waitinglist op elk moment beëindigen door je uit te schrijven via de link in onze e-mails. Wij kunnen je deelname beëindigen als je deze voorwaarden schendt.</p>

                <h2 className="text-2xl font-serif mt-10">8. Contact</h2>
                <p className="text-foreground/70 mt-4">Heb je vragen over deze Gebruiksvoorwaarden? Neem contact met ons op via hello@ridu.be.</p>

                <h2 className="text-2xl font-serif mt-10">9. Wijzigingen</h2>
                <p className="text-foreground/70 mt-4">Wij kunnen deze Gebruiksvoorwaarden van tijd tot tijd aanpassen. De meest recente versie is altijd beschikbaar op deze pagina.</p>
            </div>
        </Wrapper>
    )
}