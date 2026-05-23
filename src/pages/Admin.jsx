export default function Admin({onLogout}) {
    return (
        <div>
            <h1>Admin</h1>
            <p>Good!</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
}