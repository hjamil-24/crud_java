import { useState } from "react";
import api from "../api/api";

export default function UserForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: ""
    });

    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = api.post("/users", formData);

            setResponse(res);
            console.log(res.data);
        } catch (error) {
            console.error("API Error: ", error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <br />
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div>
                    <label>Last Name</label>
                    <br />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div>
                    <label>Age</label>
                    <br />
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Add User</button>
            </form>

            { response && (
                <>
                    <h3>Response</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </>
            )}
        </>
    );
}
