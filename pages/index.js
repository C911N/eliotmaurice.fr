import Image from 'next/image'

// Internal components
import TitleSection from '../components/sections/TitleSection'

export default function Home() {
  return (<>
    <TitleSection />
    <section className="section-triangle-layout">

    </section>
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
