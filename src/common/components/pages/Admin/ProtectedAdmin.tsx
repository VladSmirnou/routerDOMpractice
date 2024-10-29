import { Outlet } from 'react-router-dom';
import { Login } from '../Login/Login';

export const ProtectedRoute = () => {
    const loggedIn = false;
    return loggedIn ? <Outlet /> : <Login />;
};
