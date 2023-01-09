import React from "react";
import ReactDOM from "react-dom";
import profile from "../images/profilepic.jpg"
export default function Header ()
{
    return (
        <img className="img" src={profile}/>
    )
}