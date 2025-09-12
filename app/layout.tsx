import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ClientLayout } from "@/components/client-layout"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Barberclass - Transforme sua Paixão em Profissão",
  description:
    "Curso profissional para barbeiros. Aprenda técnicas avançadas e desenvolva uma mentalidade empreendedora com os melhores do mercado.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ClientLayout>{children}</ClientLayout>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
