import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'

let unsamTheme = createTheme({
  typography: {
    fontFamily: [
      'Saira', /*Fuente que usa la UNSAM*/
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main:'#7DA1C4' /*Pantone 645 como indica la UNSAM, si cambia es por el color primario de la ECYT, sino no tocar.*/
    },
    secondary: {
      main:'#DEECF3' /*Gris clarito complementario, puede cambiar*/
    },
    tonalOffset: 0.1
  }
})
unsamTheme = responsiveFontSizes(unsamTheme)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={unsamTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
