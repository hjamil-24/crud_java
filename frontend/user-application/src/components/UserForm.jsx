import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api, { updateUser, getUser } from "../api/api";
import '../styles/form.css';

export default function UserForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const isEdit = !!id;
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: ""
    });

    useEffect(() => {
        if (isEdit) {
            loadUser();
        }
    }, [id]);

    const loadUser = async () => {
        try {
            const response = await getUser(id);
            setFormData({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                age: response.data.age
            });
        } catch (err) {
            console.error(err);
        }
    }

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
            if (isEdit) {
                res = await updateUser(id, formData);
            } else {
                res = api.post("/users", formData);
            }
            setResponse(res);
            console.log(res.data);
        } catch (error) {
            console.error("API Error: ", error);
        }

        navigate('/');
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <h2>{isEdit ? 'Update User': 'Add User'}</h2>
                <div className="form-group">
                    <label htmlFor="name">First Name</label>
                    <br />
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="name">Last Name</label>
                    <br />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="age">Age</label>
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
