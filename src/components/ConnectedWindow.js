import React from 'react'
import '../stylesheets/connectedWindow.css'
import { FaKeyboard,FaVideo } from "react-icons/fa";
import { GiMouse} from "react-icons/gi";

const ConnectedWindow = () => {
  return (
    <div>
      <ul>
        <li><a href="#"><GiMouse></GiMouse> </a><span>Control Mouse Pointer</span></li>
        <li><a href="#"><FaVideo></FaVideo></a><span>Share a Camera</span></li>
        <li><a href="#"><FaKeyboard></FaKeyboard></a><span>Share a Keyboard</span></li>
      </ul>
    </div>
  )
}

export default ConnectedWindow
