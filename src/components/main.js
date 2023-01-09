import React from "react";
import ReactDom from "react-dom";
import "../style.css";
import Header from "./header";
import Title from "./Title";
import Content from "./content";
import Footer from "./footer";
export default function Main (){
    return (
        <div className="main">
            <Header/>
            <Title/>
            <Content/>
            <Footer/>
        </div>
    )
}