import { About } from '../components/About'
import { BeforeAfter } from '../components/BeforeAfter'
import { Cta } from '../components/Cta'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Location } from '../components/Location'
import { Navbar } from '../components/Navbar'
import { Portfolio } from '../components/Portfolio'
import { Process } from '../components/Process'
import { Services } from '../components/Services'
import { TrustBar } from '../components/TrustBar'
import { Seguros } from '../components/Seguros'

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Portfolio />
        <BeforeAfter />
        <About />
        <Seguros />
        <Process />
        <Cta />
        <Location />
      </main>

      <Footer />
    </div>
  )
}

export default HomePage