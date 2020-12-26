import '../styles/global.css'
import { ThemeProvider } from "../components/ThemeContext";
import * as React from 'react'


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}