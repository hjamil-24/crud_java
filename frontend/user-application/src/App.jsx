import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = 'http://localhost:3001/api/users';

function setUsers(data) {
    users = data;
}

export default function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get(API_URL)
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <div>Data fetched correctly</div>
        </div>
    );
}
