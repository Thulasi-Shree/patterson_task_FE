import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    const [data, setData] = useState('');
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('phone', data);
        axios.post("http://localhost:5000/api/user/password/reset/", { phone: data })
            .then((response) => {
                setData(response.data);
                navigate('/otp')
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
                    <form onSubmit={submitHandler} className="shadow-lg p-4 rounded">
                        <h1 className="mb-3">Forgot Password</h1>
                        <div className="form-group">
                            <label htmlFor="phone">Enter Number</label>
                            <input
                                type="tel"
                                name='phone'
                                id="phone"
                                className="form-control"

                                value={data}
                                onChange={(e) => setData(e.target.value)}
                                required
                                placeholder='eg: 917358368263'
                            />
                        </div>
                        <button
                            id="forgot_password_button"
                            type="submit"
                            className="btn btn-primary btn-block py-2 mt-4"
                        >
                            Send OTP
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}



































// import React, { useState } from 'react'

// export default function ForgotPassword() {

//    const [email, setEmail] = useState("");


//    const submitHandler =(e)=>{
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('email', email);
//    }


//   return (
//     <div className="row wrapper">
//     <div className="col-10 col-lg-5">
//         <form onSubmit={submitHandler} className="shadow-lg">
//             <h1 className="mb-3">Forgot Password</h1>
//             <div className="form-group">
//                 <label htmlFor="email_field">Enter Email</label>
//                 <input
//                     type="email"
//                     id="email_field"
//                     className="form-control"
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                 />
//             </div>

//             <button
//                 id="forgot_password_button"
//                 type="submit"
//                 className="btn btn-block py-3">
//                 Send Email
//         </button>

//         </form>
//     </div>
// </div>
//   )
// }

