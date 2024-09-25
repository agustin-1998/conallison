import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CONALLISON - The Best Argentine Beef',
  description: 'Discover the exquisite taste of Argentine beef with CONALLISON. Our brand is synonymous with unmatched quality and flavor. Explore our premium selection of cuts, raised with passion and tradition in Argentina. Enjoy the finest Argentine beef in every bite! 🥩🇦🇷',
  image: '../public/icon.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
