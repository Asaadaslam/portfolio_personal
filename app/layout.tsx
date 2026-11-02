import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import "@fontsource-variable/inter"
import "./globals.css"

const title = "Muhammad Asaad | Agentic AI & Full-Stack Developer"
const description =
  "Muhammad Asaad is an Agentic AI developer, full-stack engineer, and AI educator in Karachi, Pakistan, building intelligent applications and modern web experiences."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Muhammad Asaad",
    "Agentic AI Developer",
    "Full Stack Developer",
    "AI Educator",
    "Karachi",
    "Pakistan",
  ],
  authors: [{ name: "Muhammad Asaad", url: "https://www.linkedin.com/in/muhammad-asaad-aslam" }],
  creator: "Muhammad Asaad",
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Muhammad Asaad Portfolio",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#07090e",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
