import './Menu.scss';
import React, { Component } from "react";
import { MenuDetails } from './MenuDetails';

import data from '../../../assets/menu.json';
import { MenuData, SubMenuData } from './MenuData';



interface MenuState {
    showDetails: boolean;
    currentMenu?: MenuData;
    detailsStyle: {
        height: string;
        transition?: string;
    }
}

export class Menu extends Component<any, MenuState> {

    private menu: Array<MenuData>;
    menuDetails: React.RefObject<MenuDetails>;
    constructor(props: any) {
        super(props);
        this.menu = data as Array<MenuData>;
        this.menuDetails = React.createRef<MenuDetails>(); 
        this.state = {
            showDetails: false,
            detailsStyle: {
                height: '0px;',
                transition: 'all 0.4s ease-in-out'
            }
        }

    }

    

    private changeSubmenu(menu: MenuData, event: React.MouseEvent<HTMLDivElement>):void {
        this.setState({
            detailsStyle: {
                height: '0px',
                transition: 'all 0.5s ease-in-out'
            }
        }, () => {
            setTimeout(() => {
                this.setState({
                    currentMenu: menu,
                    showDetails: true,
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            detailsStyle: {
                                height: '500px',
                                transition: 'all 0.5s ease-in-out'
                            }
                        }, () => {
                            setTimeout(() => {
                                this.menuDetails.current!.scrollTo(-65);
                            }, 1);
                        });
                    },1);
                    
                });
            }, 400);
        })
    }

    render() {
        return (
            <div className="menu">
                <div className="menu-root">
                    {this.menu.map((el, i) => {
                        const background = require('../../../assets/image/pinchos.jpg');
                        return (
                        <div key={i} className="menu-title" onClick={(e) => this.changeSubmenu(el, e)}>
                            <div className="menu-title-img" style={ { backgroundImage: `url(${background})` } }></div>
                            <span key={i}>{el.name}</span>
                        </div>)
                    })}
                </div>
                {this.state.showDetails && <div style={this.state.detailsStyle} id="menu-details-container" className="menu-details-container">
                        <MenuDetails ref={this.menuDetails} menu={this.state.currentMenu} />
                </div>
                }
            </div>
        )
    }
}