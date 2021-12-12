import Image from 'next/image'

const TitleSection = () => {
  return (
    <section className="section-image-layout">
      <Image className="absolute brightness-[0.25]" src={"/eiffel_tower.png"} layout="fill" objectFit="cover"/>
      <div className="absolute mt-[8rem] ml-[4rem] l-4 w-auto h-auto items-start">
        {/* Titles container */}
        <h1>Eliot Maurice</h1>
        <p className="text-tertiary-content text-xl">Experienced fullstack developer</p>
      </div>
      <div className="mt-20 absolute w-full h-[calc(100%-5rem)] flex flex-col align-middle">
        {/* Full screen container */}
        <div className="flex-1" />
        {/* Invisible separator */}
        <div className="flex-1 mx-[6rem]">
          <div className="flex flex-row justify-center align-middle">
            {/* Centered content container */}
            <div className="w-[33rem]">
              {/* Paragraph and buttons container */}
              <p className="text-secondary-content text-4xl">
                I build complete <a className="font-bold">profesionnal websites</a> for growing businesses.
                Turn your website into a truly <a className="font-bold">qualitative business asset.</a>
              </p>
              <div className="mt-8 flex flex-row justify-start align-middle">
                <button className="text-primary-content after:bg-primary-content">
                  Contact me •
                </button>
                <button className="ml-6">
                  See my services •
                </button>
              </div>
            </div>
            <div className="ml-3 w-[1px] bg-tertiary-layout" />
            {/* Separator */}
            <div className="relative -mt-8 ml-3 w-80 h-80">
              {/* Laptop image container */}
              <Image src={"/laptop.png"} layout="fill" objectFit="contain"/>
            </div>
          </div>
        </div>
        <div className="flex-1" />
        {/* Invisible separator */}
        <div className="relative w-full h-[9rem] self-end items-end">
          {/* Inclined corners container */}
          <div className="absolute corner-square bottom-6 left-6" />
          <div className="absolute corner-line bottom-9 left-16" />
          <div className="absolute corner-square top-6 right-6" />
          <div className="absolute corner-line top-9 right-16" />
        </div>
      </div>
    </section>
  )
}

export default TitleSection
