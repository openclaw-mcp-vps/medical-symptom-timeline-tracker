import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SymptomLog – Track Symptoms for Doctor Visits',
  description: 'Log symptoms with severity and timing. Generate printable PDF reports for your medical appointments.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9a29472e-eb94-48e6-91b8-e2b0785584d0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
