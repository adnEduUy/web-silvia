import '../styles/globals.css'

export const metadata = {
  title: 'Sacra by Silvia',
  description: 'Boutique de saumerio y boxes con energias.',
  openGraph: {
    title: 'Boutique de saumerio y boxes con energias',
    siteName: "https://sacra.uy",
    description: 'Boutique de saumerio y boxes con energias.',
    url: "https://sacra.uy",
    locale: 'es-ES',
    type: "book",
    images: [
      {
        url: 'https://sacra.uy/og-image.png',
        width: 300,
        height: 300,
      },
    ]
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel='icon' href='/svg/sacra.jpg' type='image/svg+xml' />
      </head>
      <body className='m-0 min-h-screen w-full font-sans'>
        <div className='m-auto max-w-4xl'>
          {children}
        </div>
      </body>
    </html>
  )
}