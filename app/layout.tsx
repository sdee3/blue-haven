import '../styles/index.scss'

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  )
}
