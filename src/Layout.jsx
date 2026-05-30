import {Outlet, NavLink} from 'react-router-dom';

export default function Layout() {
    return(
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/admin'>Admin</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
}