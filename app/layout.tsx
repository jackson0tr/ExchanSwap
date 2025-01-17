'use client'
import './globals.css';
import { Poppins } from 'next/font/google';
import { Josefin_Sans } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './api/AuthContext';
import { Metadata } from 'next';

interface RootLayoutProps {
  children: React.ReactNode;
}

// export const metadata: Metadata={
//   metadataBase: new URL('https://exchanswap.com'),
//   keywords: [""]
// }

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins"
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin"
});



export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {

  return (
    <html lang="en" dir='ltr' suppressHydrationWarning={true}>
      <body className={`${poppins.variable} ${josefin.variable} !bg-[#fff] bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}>
        <AuthProvider>
          {children}
          <Toaster position='top-center' reverseOrder={false} />
        </AuthProvider>
      </body>
    </html>
  )
}