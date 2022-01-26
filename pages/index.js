import Image from 'next/image'

// Internal components
import TitleSection from '../components/sections/TitleSection'
import ServicesSection from '../components/sections/ServicesSection'

export default function Home() {
  return (<>
    <TitleSection />
    <ServicesSection />
    <section className="section-image-layout">
      <Image className="brightness-[0.3]" src={"/cactus_drawings.png"} layout="fill" objectFit="cover"/>
    </section>
    <section className="section-triangle-layout">

    </section>
    <section className="section-image-layout">
      <Image className="brightness-[0.3]" src={"/cactus_drawings.png"} layout="fill" objectFit="cover"/>
    </section>
  </>)
}
