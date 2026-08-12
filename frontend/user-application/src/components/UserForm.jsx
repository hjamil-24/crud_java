import { useEffect, useState } from "react";
import api, { updateUser } from "../api/api";

export default function UserForm({ user }) {
    const isEdit = !!user;
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: ""
    });

    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.firstName || "",
                lastName: user.lastName || "",
                age: user.age || ""
            });
        }
    }, [user]);

    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        let res;
        e.preventDefault();

        try {
            if (user) {
                res = await updateUser(user.id, formData);
            } else {
                res = api.post("/users", formData);
            }
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

                <button type="submit">{isEdit ? 'Update User' : 'Add User'}</button>
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
