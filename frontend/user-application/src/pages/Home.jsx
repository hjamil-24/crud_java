import {
    useEffect,
    useState
} from 'react';

import api from '../api/api';
import UserList from '../components/UserList';

export default function Home() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const response = await api.get("/users");
            setUsers(response.data); // update response structure
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <h3>Loading...</h3>
    return (
        <div>
            <h2>Users</h2>
            <UserList users={users} />
        </div>
    );
}
