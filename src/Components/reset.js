import React from 'react'
import { Link } from 'react-router-dom'

const Reset = () => {
  return (
            <div className='container mt-5'>
      <div className="alert alert-success" role="alert">
  <h4 className="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully changed the password.</p>
</div>
<Link
                to="/login"
                type="submit"
                className="btn btn-primary btn-block py-2 mt-4"
            >
                Click here to log in
            </Link>
    </div>
   
  )
}

export default Reset
