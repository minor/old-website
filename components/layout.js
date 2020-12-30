import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';

import Footer from '../components/Footer';

export default function Layout({ children }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <body className="h-screen">
      <div className="bg-white dark:bg-gray-900">
        <header className="flex justify-center pt-10 pb-6 bg-white dark:bg-gray-900 px-8">
            <Link href='/'><Image src="/images/profile.jpg" className="w-24 h-24 rounded-full" alt="Picture of the author" width={"150"} height={"150"}/></Link>
        </header>
        <main className="flex flex-col justify-center bg-white dark:bg-gray-900 px-8 min-h-full">
          {children}
          <Footer />
        </main>
      </div>
    </body>
  );
}