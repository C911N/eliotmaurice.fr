import Image from 'next/image'

// Main section (Title)
const TitleSection = () => {
  return (
    <section className="section-image-layout h-screen w-screen">
      <Image className="absolute brightness-[0.25]" src={"/eiffel_tower.png"} layout="fill" objectFit="cover"/>
      <TitlesBlock />
      <div className="mt-16 absolute w-full h-[calc(100%-5rem)] flex flex-col align-middle">
        {/* Full screen container */}
        <div className="flex-1" />
        <MiddleBlock />
        <div className="flex-1" />
      </div>
      <Angles />
    </section>
  )
}


// Block containing my name and my job (Title and subtitle)
const TitlesBlock = () => {
  return (
    <div className="absolute mt-[4rem] ml-[4rem] l-4 w-auto h-auto items-start">
      <h1>Eliot Maurice</h1>
      <p className="text-tertiary-content text-xl">Développeur React.js, Node.js, Django</p>
      <div className="mt-2 relative flex flex-row justify-start align-middle">
        <div className="absolute top-2 w-2 h-2 rounded-[50%] bg-green" />
        <a className="ml-4">Disponnible</a>
      </div>
    </div>
  )
}

// Block containing the main centered content (Paragraph, buttons and laptop image)
const MiddleBlock = () => {
  return (
    <div className="flex-1 mx-[6rem]">
      <div className="flex flex-row justify-center align-middle whitespace-nowrap">
        {/* Centered content container */}
        <div className="w-[33rem]">
          {/* Paragraph and buttons container */}
          <p className="text-secondary-content text-4xl">
            Ce portfolio est en pleine refonte, <br/>
            <a className="font-bold">mais pas si vite!</a><br/>
            Vous pouvez retrouver mon profil<br/>
            sur <a className="font-bold">toutes ces platformes.</a>
          </p>
          <div className="mt-8 flex flex-row justify-start align-middle">
            <button className="flex flex-row justify-center align-middle text-linked-in after:bg-linked-in">
              {/* Linked-in button */}
              <div className="relative w-8 h-8">
                <Image src={"/linked_in.png"} layout="fill" objectFit="contain"/>
              </div>
              <a className="ml-2 font-primary" href="https://www.linkedin.com/in/eliot-maurice-2b43b418b/" target="_blank">Linked in •</a>
            </button>
            <button className="ml-6 flex flex-row justify-center align-middle text-malt after:bg-malt">
              {/* Malt button */}
              <div className="relative w-8 h-8">
                <Image src={"/malt.png"} layout="fill" objectFit="contain"/>
              </div>
              <a className="ml-2 font-primary" href="https://www.malt.fr/profile/eliotmaurice?overview=true" target="_blank">Malt.fr •</a>
            </button>
            <button className="ml-6 flex flex-row justify-center align-middle text-comet after:bg-comet">
              {/* Comet button */}
              <div className="relative w-8 h-8">
                <Image src={"/comet.png"} layout="fill" objectFit="contain"/>
              </div>
              <a className="ml-2 font-primary" href="https://app.comet.co/freelancer/profile/y5eVKyOaEP?readOnly=true" target="_blank">Comet.co •</a>
            </button>
          </div>
        </div>
        <div className="relative -mt-8 ml-3 lg:w-80 h-80 md:w-0">
          {/* Laptop image container */}
          <Image src={"/laptop.png"} layout="fill" objectFit="contain"/>
        </div>
      </div>
    </div>
  )
}

// Footer of the section, including the squares on the angles
const Angles = () => {
  return (<>
    <div className="absolute corner-square bottom-6 left-6" />
    <div className="absolute corner-line-x bottom-9 left-16" />
    <div className="absolute corner-line-y bottom-16 left-9" />
    <div className="absolute corner-square bottom-6 right-6" />
    <div className="absolute corner-line-x bottom-9 right-16" />
    <div className="absolute corner-line-y bottom-16 right-9" />
    <div className="absolute corner-square top-6 right-6" />
    <div className="absolute corner-line-x top-9 right-16" />
    <div className="absolute corner-line-y top-16 right-9" />
    <div className="absolute corner-square top-6 left-6" />
    <div className="absolute corner-line-x top-9 left-16" />
    <div className="absolute corner-line-y top-16 left-9" />
  </>)
}

export default TitleSection
