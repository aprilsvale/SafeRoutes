import {Navigate} from 'react-router-dom';


export default function AdminRoute ({isAuth, children, role}) {
    if (!isAuth) {
        return <Navigate to="/login" replace />;
    }
    if (role !=="admin") {
        return <Navigate to="/" replace />;
    }
    return children;
}