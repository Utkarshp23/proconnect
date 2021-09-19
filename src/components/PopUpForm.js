import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/popUpForm.css'


const PopUpForm = () => {
  return (
    <div className="form-container">
      <span></span>
      <div className="content">
        <p className="form-heading">Connect to Device</p>
        <div className="box">

          <div>
            <input type="text" name="" id="" placeholder="Enter IP address" />
          </div>
        </div>
        <Link to="/wifiloader">
          <button className="ipBtn">Connect</button>
        </Link>
      </div>


    </div>
  )
}

export default PopUpForm
