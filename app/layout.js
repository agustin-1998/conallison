import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CONALLISON - La mejor carne Argentina',
  description: 'Descubre la exquisitez de la carne argentina con CONALLISON. Nuestra marca es sinónimo de calidad y sabor inigualable. Explora nuestra selección premium de cortes de carne, criados con pasión y tradición en Argentina. ¡Disfruta de la mejor carne argentina en cada bocado! 🥩🇦🇷',
  image: '../public/icon.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
