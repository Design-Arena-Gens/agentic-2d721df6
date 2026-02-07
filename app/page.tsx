'use client'

import dynamic from 'next/dynamic'

const BananaScene = dynamic(() => import('./components/BananaScene'), {
  ssr: false,
})

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh' }}>
      <BananaScene />
    </main>
  )
}
