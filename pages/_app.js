import 'tailwindcss/tailwind.css'
import '../styles/global.css'

import Metadata from '../components/Metadata'

function MyApp({ Component, pageProps }) {
  return (<>
    <Metadata title='Eliot Maurice 🚀' />
    <Component {...pageProps} />
  </>)
}

export default MyApp
