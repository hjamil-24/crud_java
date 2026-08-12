import {
    Link,
    Route,
    Routes
} from "react-router-dom";
import FormPage from "./pages/FormPage";
import Home from "./pages/Home";
import "./styles/app.css"

const API_URL = 'http://localhost:3001/api/users';

export default function App() {
    /**
     * Check advantage of NavLink over nav
     */
    return (
        <>
            <div className="topbar">
                <h2>Demo User Application</h2>
                <nav className="navigations">
                    <Link to="/">Home</Link> | {" "}
                    <Link to="user-add">Add User</Link>
                </nav>
            </div>
            

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user-add" element={<FormPage />} />
                <Route path="/user-edit/:id" element={<FormPage />} />
            </Routes>
        </>
    );
}
