import { CardsSection } from './components/CardsSection'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { TopCryptos } from './components/TopCryptos'

export function LandingPage() {
  return (
    <main>
      <Header />

      <HeroSection />

      <CardsSection />

      <TopCryptos />
    </main>
  )
}
