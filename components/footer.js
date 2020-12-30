import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NowPlaying from '../components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="p-1 sm:p-4 text-base text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-1/6" />
  );
};

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  
  return (
    <footer className="flex flex-col items-center">
      <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="h-4 w-4 text-gray-800 dark:text-gray-200"
              >
                {theme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
      </button>
      <br />
      <NowPlaying />
      <Divider />
      <div className="bg-white dark:bg-gray-900">
        <nav className="flex justify-between items-center max-w-5xl w-full my-0 md:mt-4 mx-auto bg-white dark:bg-gray-900 bg-opacity-60">
          <Link href="/">
              <a className="p-1 sm:p-4 text-gray-900 hover:text-gray-500 dark:text-gray-100">Home</a>
            </Link>
            <Link href="/about">
              <a className="p-1 sm:p-4 text-gray-900 hover:text-gray-500 dark:text-gray-100">About</a>
            </Link>
            <a className="p-1 sm:p-4 text-gray-900 hover:text-gray-500 dark:text-gray-100" href="mailto:me@saurish.com?subject=Hello from the Website!">Contact</a>
            <Link href="/projects">
              <a className="p-1 sm:p-4 text-gray-900 hover:text-gray-500 dark:text-gray-100" >Projects</a>
            </Link>
            <Link href="/blog">
              <a className="p-1 sm:p-4 text-gray-900 hover:text-gray-500 dark:text-gray-100">Blog</a>
            </Link>
        </nav>
      </div>
      <div className="flex space-x-4 mb-4">
        <ExternalLink href="https://www.instagram.com/saurishhh">
          <span className="sr-only">Instagram</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-instagram"
            >
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="https://twitter.com/saurishhh">
          <span className="sr-only">Twitter</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="mailto:me@saurish.com">
          <span className="sr-only">Email</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="https://github.com/minor">
          <span className="sr-only">GitHub</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </g>
          </svg>
        </ExternalLink>
      </div>
    </footer>
  );
}
