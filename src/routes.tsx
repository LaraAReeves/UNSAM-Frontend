import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '@/components/pages/login/Login'
import Main from '@/components/pages/main/Main'
import Map from '@/components/pages/main/map/Map'
import Register from '@/components/pages/register/Register'
import NotFound from '@/components/pages/notFound/NotFound'
import { Welcome } from '@/components/pages/welcome/Welcome'
import { ProtectedRoute } from "@/components/common/ProtectedRoute.tsx";


export const router = createBrowserRouter([
    { path: '/welcome', element: <Welcome />},
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    {
        path: '/',
        element:
            <ProtectedRoute>
                <Main />
            </ProtectedRoute>,
        children: [
            { path: '/', element: <Map /> },
            { path: '/profile', element: <Profile /> }
        ],
        errorElement: <NotFound />
    },
    { path:'*', element: <Navigate to="/welcome" replace />}, /*Ahora escribir una ruta falopa te redirige a la pantalla de bienvenida.*/
])
