import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import AuthLayout from '../Layouts/AuthLayout';
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/notfound/Notfound';
import Profile from '../Pages/Profile/Profile';
import Login from '../Pages/Auth/login/Login';
import Register from '../Pages/Auth/Register/Register';
import AuthProtected from '../Components/guard/authProtected/AuthProtected'
///import MainProtectedRoute from '../Components/guard/authProtected/AuthProtected';


export const routes = createBrowserRouter([
    {
        path: "", element: <MainLayouts />, children: [
            { index: true, element: <Home/> },
            { path: 'profile', element: < Profile /> },
            { index: '*', element: <NotFound /> },
        ]
    },
    //<MainProtectedRoute><MainLayouts /></MainProtectedRoute>
    {
        path: 'auth', element:<AuthProtected><AuthLayout /></AuthProtected>, children: [
            { path: 'login', element: <Login /> },
            { path: 'signup', element: <Register /> }
        ]
    },



])










export default function AppRouting() {
    return (
        <div>

        </div>
    )
}