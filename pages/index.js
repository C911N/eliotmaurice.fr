import Image from 'next/image'

export default function Home() {
  return (<>
    <section className="section-image-layout">
    <Image className="brightness-[0.4]" src={"/eiffel_tower.png"} layout="fill" objectFit="cover"/>
    </section>
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
