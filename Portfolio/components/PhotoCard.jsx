import React from "react";
import "../src/App.css"
export default function PhotoCard (args) {
    const {image, title, description} = args
    const [show, setShow] = React.useState(0)
    const [hide, setHide] = React.useState(0)

    function toggle () {
        if (show === 0) {
            setShow(1)
            setHide(0)
        } else {
            setShow(0)
            setHide(1)
        }
        console.log(show)
    }

    return (
        <>
            <div className="photo-card">
                <img src={image} className="photo-card-image"/>
                <p className="photo-card-caption"><b>{title}</b></p>
                <div className="description-container" show={show} hide={hide}>
                    <button className="toggle-description" onClick={toggle} show={show} hide={hide}><b>{'>'}</b></button>
                    <div className="photo-card-description">
                        <p className="photo-card-description-text">{description}</p>
                        
                    </div>
                </div>

            </div>
            
            
        </>
    )
}