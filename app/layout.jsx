import { Lilita_One } from 'next/font/google'
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Providers from './Providers'



const lilita = Lilita_One({
  subsets: ['cyrillic'],
  weight: '400',
  display: 'swap',
  variable: '--font-lilita',
})

export const metadata = {
  title: 'Историческая сводка',
  description: 'Пример приложения',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={lilita.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
    <Providers>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </Providers>
  </body>
    </html>
  );
}
