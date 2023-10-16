import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Otp() {

  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [otp, setOtp] = useState('')
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('password', password);
    formData.append('confirmPassword', confirmPassword);
    formData.append('phone', phone);
    formData.append('otp', otp);


    axios.post("http://localhost:5000/api/user/password/reset/update", {
      phone: phone,
      password: password,
      confirmPassword: confirmPassword,
      otp: otp
    })
      .then((response) => {
        setPhone(response.data);
        setPassword(response.data);
        setConfirmPassword(response.data);
        setOtp(response.data)
        navigate('/reset')
      })
      .catch((err) => {
        console.log(err);
        navigate('/fail')
      });
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-10 col-lg-5">
          <form onSubmit={submitHandler} className="shadow-lg p-4 rounded">
            <h1 className="mb-3">New Password</h1>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                value={phone}
                placeholder="eg:- 917358368263"
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="otp">Otp</label>
              <input
                type="number"
                id="otp"
                className="form-control"
                value={otp}
                onChange={e => setOtp(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirm_password_field">Confirm Password</label>
              <input
                type="password"
                id="confirm_password_field"
                className="form-control"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>

            <button
              id="new_password_button"
              type="submit"
              className="btn btn-primary btn-block py-2 mt-4">
              Set Password
            </button>

          </form></div>


      </div>
    </div>
  )
}
