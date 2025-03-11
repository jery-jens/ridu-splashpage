import { Metadata } from "next";

import Wrapper from "./components/wrapper";
import HomeContent from "./components/home-content";

export const metadata: Metadata = {
  title: "Ridu | Fiets verder, vind vrienden – sluit je aan bij de rit.",
  description: "Ridu brengt wielrenners samen: organiseer je rit, nodig anderen uit of sluit je aan bij een groep.",
  openGraph: {
    title: "Ridu | Fiets verder, vind vrienden – sluit je aan bij de rit.",
    description: "Ridu brengt wielrenners samen: organiseer je rit, nodig anderen uit of sluit je aan bij een groep.",
    images: [
      { url: "https://ridu.be/images/open-graph.png" },
    ],
  },
};

export default function Home() {
  return (
    <Wrapper>
      <HomeContent />
    </Wrapper>
  );
}
