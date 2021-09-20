import React from 'react'
import { Link } from 'react-router-dom';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import '../stylesheets/popUpForm.css'


const PopUpForm = () => {
  const connectToServer = () => {
    const client = new W3CWebSocket('ws://127.0.0.1:8000');
    client.onopen = () => {
      console.log('WebSocket client connected');
    }
  }
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
          <button className="ipBtn" onClick={() => connectToServer()}>Connect</button>
        </Link>
      </div>


    </div>
  )
}

export default PopUpForm
