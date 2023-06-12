import React from "react";
import "../src/App.css"
import tyLogo from "../src/assets/tylogo.png"
export default function Header () {
    return (
        <nav className="header">
            <img src={tyLogo} className="ty-logo"/>
            <h2 className="name">Tyrone John Diaz</h2>
        </nav>
    )
}