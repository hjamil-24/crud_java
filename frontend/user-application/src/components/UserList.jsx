import {
    deleteUser
} from '../api/api';

import '../styles/UserList.css';

export default function UserList({ users }) {
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delelte this user?")) {
            return;
        }

        try {
            await deleteUser(id);
        } catch (error) {
            console.error("Delete Failed: ", error);
        }
    };

    return (
        <table className='user-table'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.age}</td>
                        <td>
                            {/* <button onClick={() => handleEdit(user)}>
                                Edit
                            </button> */}
                            <button onClick={() => handleDelete(user.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
