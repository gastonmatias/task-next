import '@/styles/globals.css'
import darkTheme from '@/theme/AppTheme'
import ThemeMUI from '@/theme/AppTheme'
import { CssBaseline, ThemeProvider } from '@mui/material'

export default function App({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  
  )
}
