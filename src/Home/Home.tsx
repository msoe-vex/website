export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/src/components/hero'
import Features from '@/src/components/features'
import Newsletter from '@/src/components/newsletter'
import Zigzag from '@/src/components/zigzag'
import Testimonials from '@/src/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
