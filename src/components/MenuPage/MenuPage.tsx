import './MenuPage.scss';
import React from "react";
import { Menu } from './MenuNew/Menu';



export default class MenuPage extends React.Component{



    render(){
        return(
            <div id="menu-page" className="">
                <h1>MENU</h1>
                <Menu />
            </div>
        )
    }
}