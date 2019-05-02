import React from "react";
import './HeroImage.css';
import logo from './../../assets/image/spanish_ticket_black.png';

export class HeroImage extends React.Component {
    public render(){
        return(
            <div className="hero-image">
                <div className="logo">
                    <img src={logo} alt="Spanish Ticket"/>
                </div>
            </div>
        );
    }
}