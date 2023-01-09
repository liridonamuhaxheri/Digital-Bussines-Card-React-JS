import React from "react";
import ig from "../images/instagram.png"
import lk from "../images/linkedin.png"
import gh from "../images/github.png"
export default function Footer ()
{
    return (
        <div className="footer">
        <ul>
        <li>
        <a href="https://www.instagram.com/liridona.muhaxheri/?hl=en"><img src={ig}/></a></li>
        <li><a href="linkedin.com/in/liridona-muhaxheri-87a0a2227" ><img src={lk}/></a></li>
        <li> <a href="https://github.com/liridonamuhaxheri?tab=repositories"><img src={gh}/></a></li></ul>
        </div>
    )
}