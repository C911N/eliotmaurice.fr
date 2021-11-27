import Link from 'next/link'

const Navbar = (props) => {
  return (
    <div className="fixed w-full bg-primary-layout p-6 flex flex-row justify-content align-middle shadow-xl z-20">
      <div className="mr-4 corner-square flex-shrink-0" />
      <div className="mr-4 corner-line self-center" />
      <div className="font-secondary text-secondary-content">
        <a className="nav-item">Home</a>
        <a className="nav-item">Services</a>
        <a className="nav-item">Experience</a>
        <a className="nav-item">Contact</a>
      </div>
      <div className="mr-4 flex-grow" />
      <a className="mr-4">
        <Link href="">
          🇫🇷
        </Link>
      </a>
      <div className="mr-4 corner-line self-center" />
      <div className="corner-square flex-shrink-0" />
    </div>
  )
}

export default Navbar
