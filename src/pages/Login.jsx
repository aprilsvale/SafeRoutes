import {useNavigate} from 'react-router-dom';

export default function Login({setIsAuth, setRole}) {
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsAuth(true);
        setRole('user');
        navigate('/profile');
    };
    const handleLoginAdmin = () => {
        setIsAuth(true);
        setRole('admin');
        navigate('/admin');
    };


    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login as user</button>
            <button onClick={handleLoginAdmin}>Login as admin</button>
        </div>
    );
}