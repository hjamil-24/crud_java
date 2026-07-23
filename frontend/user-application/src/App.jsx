import {
    Link,
    Route,
    Routes
} from "react-router-dom";
import FormPage from "./pages/FormPage";
import Home from "./pages/Home";

const API_URL = 'http://localhost:3001/api/users';


// export default function App() {
//     const [users, setUsers] = useState([]);
//     useEffect(() => {
//         axios
//             .get(API_URL)
//             .then(response => {
//                 setUsers(response.data);
//                 console.log(response.data);
//             })
//             .catch((err) => console.error(err));
//     }, []);

//     return (
//         <div>
//             <h2>Users</h2>
//             <ul>
//                 {users.map((user, idx) => (
//                     <li id={user.id}>{user.firstName} {user.lastName}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

export default function App() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link> | {" "}
                <Link to="user-add">Add User</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user-add" element={<FormPage />} />
            </Routes>
        </>
    );
}
