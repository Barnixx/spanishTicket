import React from "react";
import { HeroImage } from "./HeroImage/HeroImage";

import "./HomePage.scss"

export class HomePage extends React.Component {
    render() {
        return (
            <div id="home-page" className="page">
                <HeroImage />
            </div>
        )
    }
}