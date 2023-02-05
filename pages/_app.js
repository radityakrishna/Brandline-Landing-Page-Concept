import '@/styles/globals.css';
import {Sora, Space_Grotesk} from '@next/font/google';


const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
})

const spacegrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-spacegrotesk',
})

export default function App({ Component, pageProps }) {
  return <main className={`${sora.variable} ${spacegrotesk.variable}`}> 
  <Component {...pageProps} />
  </main>
}
