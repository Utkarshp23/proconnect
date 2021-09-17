import React from 'react'
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
        <button className="ipBtn">Connect</button>
      </div>


    </div>
  )
}

export default PopUpForm
