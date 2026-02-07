import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'موزة تتكلم - 3D Animation',
  description: 'رسالة مهمة من الموزة عن التخزين الصحيح',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
