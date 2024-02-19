import About from "./components/About"
import Background from "./components/Background"
import CTA from "./components/CTA"
import FAQ from "./components/FAQ"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import SocialProof from "./components/SocialProof"

export interface Interface {
  carouselItem?: boolean,
  children?: React.ReactNode,
  contents?: Record<any, any>[],
  className?: string,
  external?: boolean,
  grow?: boolean,
  href?: string,
  id?: string,
  key?: React.Key,
  onClick?: () => void,
  to?: string,
  transparent?: boolean,
  variant?: string,
}

const Home: React.FC = () => {
  return (
    <div
      className="h-screen snap-y snap-mandatory overflow-scroll z-0"
    >
      <Nav />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="about" className="snap-center">
        <SocialProof />
      </section>
      <section id="about" className="snap-center">
        <FAQ />
      </section>
      <section id="callToAction" className="snap-center">
        <CTA />
      </section>
    </div>
  )
}

export default Home