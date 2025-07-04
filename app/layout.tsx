import type { Metadata } from 'next'
import './globals.css'
import { openSans, poppins, greatVibes } from '@/lib/fonts'
import { ThemeProvider } from '@/components/theme-provider'
import { I18nProvider } from '@/lib/i18n'
import translations from '@/lib/translations'
import SocialFAB from "@/components/social-fab"

export const metadata: Metadata = {
  title: 'Voilà Vélo',
  description: 'Smoothie vélos pour vos événements',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Debug translations
  console.log('Root layout translations check:', {
    hasTranslations: !!translations,
    languages: Object.keys(translations || {}),
    enKeys: Object.keys(translations?.en || {}),
    frKeys: Object.keys(translations?.fr || {})
  });
  
  return (
    <html lang="fr" className={`${openSans.variable} ${poppins.variable} ${greatVibes.variable}`}>
      <body className={openSans.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <I18nProvider initialLanguage="fr" translations={translations}>
            {children}
            <SocialFAB />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
