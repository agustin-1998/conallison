import Body from '@/components/Body'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <Body />
        </main>
        <Footer />
      </div>
    </>
  )
}
