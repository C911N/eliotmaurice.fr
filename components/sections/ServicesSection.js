import Image from 'next/image'

// Services section
const ServicesSection = () => {
  return (
    <section className="section-triangle-layout">
      <div className="mt-20 absolute w-full h-[calc(100%-1rem)] flex flex-col align-middle z-50">
        {/* Full screen container */}
        <div className="flex-1" />
        <div className="flex flex-row align-middle justify-center">
          {/* Middle block container */}
          TODO: Elements
        </div>
        <div className="flex-1" />
        <FooterAngles />
      </div>
    </section>
  )  
}

const FooterAngles = () => {
  return (
    <div className="relative w-full h-[9rem] self-end items-end">
      <div className="absolute corner-square bottom-6 left-6" />
      <div className="absolute corner-line bottom-9 left-16" />
      <div className="absolute corner-square top-6 right-6" />
      <div className="absolute corner-line top-9 right-16" />
    </div>
  )
}

export default ServicesSection
