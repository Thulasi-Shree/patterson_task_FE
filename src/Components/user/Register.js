import axios from "axios";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

export default function Register() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        phone: []
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        if (e.target.name === "name") {

            setUserData({ ...userData, [e.target.name]: e.target.value });
        }
        if (e.target.name === "email") {

            setUserData({ ...userData, [e.target.name]: e.target.value });
        }
        if (e.target.name === "password") {

            setUserData({ ...userData, [e.target.name]: e.target.value });
        }
        if (e.target.name === "phone") {

            setUserData({ ...userData, [e.target.name]: e.target.value });
        }
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', userData.name);
        formData.append('email', userData.email);
        formData.append('password', userData.password);
        formData.append('phone', userData.phone)

        axios.post("http://localhost:5000/api/user/create", { phone: userData.phone, name: userData.name, email: userData.email, password: userData.password })
            .then((response) => {
                setUserData(response.data);
                navigate('/login')
            })
            .catch((err) => {
                console.log(err);
                navigate('/fail')
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
                        <h1 className="mb-3">Register</h1>

                        <div className="form-group">
                            <label htmlFor="email_field">Name</label>
                            <input
                                name="name"
                                placeholder="eg:- test"
                                type="name"
                                onChange={onChange}
                                id="name_field"
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                                name="email"
                                placeholder="eg:- test@gmail.com"
                                type="email"
                                onChange={onChange}
                                id="email_field"
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                name="phone"
                                type="tel"
                                onChange={onChange}
                                id="phone"
                                className="form-control"
                                placeholder="eg:- 917358368263"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                                name="password"
                                placeholder="Set upto 8 digits"
                                type="password"
                                onChange={onChange}
                                id="password_field"
                                className="form-control"
                            />
                        </div>


                        <button
                            id="register_button"
                            type="submit"
                            className="btn btn-primary btn-block py-2 mt-4"

                        >
                            REGISTER
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
