import '@/styles/globals.scss'
import type { Metadata } from 'next'
import { Inter, Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const noto_sans_kr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})
const noto_serif_kr = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900'],
})

export const metadata: Metadata = {
  title: 'The COUPLE Jeju',
  description: 'The COUPLE Jeju - Your Perfect Wedding Destination',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
