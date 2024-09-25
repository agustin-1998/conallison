import Body from '@/components/Body'
import { Footer } from '@/components/Footer'
// import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <div class="flex flex-col min-h-screen">
        {/* <Header /> */}
        <main class="flex-1">
          <Body />
        </main>
        <Footer />
      </div>
    </>
  )
}
