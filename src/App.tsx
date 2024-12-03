import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import CssBaseline from '@mui/material/CssBaseline'
import {AuthProvider} from "./context/AuthContext.tsx";

function App() {

  return (
    <>
      <CssBaseline />
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </>
  )
}

export default App
