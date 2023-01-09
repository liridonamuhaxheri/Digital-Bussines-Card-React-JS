import React from "react";
import ReactDOM  from "react-dom";
import mail from "../images/mail.png"
export default function Title (){
    return (
        <div className="title">
        <h2>Liridona Muhaxheri</h2>
        <p>Frontend Developer</p>
        <p><button href="mailto:muhaxheriliridona@hotmail.com"><img src={mail}/>Email</button></p>
        </div>
    )
}