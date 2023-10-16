import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RegisterSuccess = () => {

    const [userData, setUserData] = useState({
      
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const onChange = (e) => {
     
        if (e.target.name === "email") {

            setUserData({ ...userData, [e.target.name]: e.target.value });
        }
        if (e.target.name === "password") {

            setUserData({ ...userData, [e.target.name]: e.target.value });
        }
       
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', userData.email);
        formData.append('password', userData.password);

        axios.post("http://localhost:5000/api/user/login", { phone: userData.phone, name: userData.name, email: userData.email, password: userData.password })
            .then((response) => {
                setUserData(response.data);
                navigate('/success')
            })
            .catch((err) => {
                console.log(err);
                navigate('/login')
            });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
            <div className="col-10 col-lg-5">
                    <form
                        className="shadow-lg p-4 rounded"
                        onSubmit={submitHandler}
                        encType='multipart/form-data'
                    >
                        <h1 className="mb-3">Login</h1>

                        

                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                                name="email"
                                type="email"
                                onChange={onChange}
                                id="email_field"
                                className="form-control"
                            />
                        </div>

                       
                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                                name="password"
                                type="password"
                                onChange={onChange}
                                id="password_field"
                                className="form-control"
                            />
                        </div>


                        <Link
                            to="/home"
                            id="register_button"
                            type="submit"
                            className="btn btn-primary btn-block py-2 mt-4"

                        >
                            Login
                        </Link>
                        <br />
                        <Link
                to="/forgot"
                id="forgot_button"
                type="submit"
                className="btn btn-primary btn-block py-2 mt-4"
            >
                Forgot password?
            </Link>
                    </form>
                </div>
            </div>
           

        </div>
    )
}

export default RegisterSuccess

