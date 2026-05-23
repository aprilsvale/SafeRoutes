export default function Profile ({onLogout}) {
    return (
        <div>
            <h2>Profile</h2>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
}