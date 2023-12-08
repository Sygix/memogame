import './globals.css'

export const metadata = {
  title: 'Memory Game',
  description: 'Amusez-vous les amis !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className='flex'>{children}</body>
    </html>
  )
}
