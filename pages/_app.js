import 'tailwindcss/tailwind.css'
import '../styles/global.css'

import Metadata from '../components/Metadata'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (<>
    <Metadata title='Eliot Maurice 🚀' />
    <Navbar />
    <Component {...pageProps} />
  </>)
}

export default MyApp
