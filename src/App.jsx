import {
    createBrowserRouter,
    RouterProvider} from 'react-router-dom';
import {useState} from 'react';


import Home from './pages/Home';
import Login from './pages/Login';
import NotFount from './pages/NotFound';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './Layout';
import AdminRoute from './components/AdminRoute';
import Admin from './pages/Admin';

export default function App()
{
    const [isAuth, setIsAuth] = useState(false);
    const [role, setRole] = useState("null");

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {index: true, element: <Home/>},
                {
                    path: 'profile',
                    element: (
                        <ProtectedRoute isAuth={isAuth} role={role}>
                            <Profile onLogout={() => {setIsAuth(false); setRole("null")}} />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: 'admin',
                    element: (
                        <AdminRoute role={role} isAuth={isAuth}>
                            <Admin onLogout={() => {setIsAuth(false); setRole("null")}}/>
                        </AdminRoute>
                    ),
                },
                {
                    path: 'login',
                    element: <Login setIsAuth={setIsAuth} setRole={setRole} />,
                },
                {
                    path: '*',
                    element: <NotFount/>,
                },
            ],
        },
    ]);

    return < RouterProvider router={router}/>
}