import { store } from '@/store'
import '@/styles/globals.css'
import darkTheme from '@/theme/AppTheme'
import ThemeMUI from '@/theme/AppTheme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
    </>
  
  )
}
