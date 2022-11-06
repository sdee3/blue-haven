import { Lato } from '@next/font/google'
import Script from 'next/script'
import { Navbar } from '../components'

import '../styles/index.scss'

const lato = Lato({ weight: ['300', '400', '700'], subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className={lato.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blue Haven</title>
        <meta
          name="description"
          content="Astrology Purpose Overview and Breakthrough Coaching. Change your life and find your purpose!"
        />
        <meta name="robots" content="index, follow" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>

      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LRM2WR3R6E"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LRM2WR3R6E');
        `}
      </Script>
    </html>
  )
}
