import './Menu.scss';
import React, { createRef, Component, Ref } from "react";
import { MenuDetails } from './MenuDetails';

import data from '../../../assets/menu.json';
import { MenuData, SubMenuData } from './MenuData';
import Scroll from "react-scroll";



interface MenuState {
    showDetails: boolean;
    details?: Array<SubMenuData>;
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
    private changeSubmenu(submenu: Array<SubMenuData>, event: React.MouseEvent<HTMLDivElement>):void {
        this.setState({
            detailsStyle: {
                height: '0px',
                transition: 'all 0.5s ease-in-out'
            }
        }, () => {
            setTimeout(() => {
                this.setState({
                    details: submenu,
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
                                this.menuDetails.current!.scrollTo();
                            }, 500);
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
                        return (
                        <div key={i} className="menu-title" onClick={(e) => this.changeSubmenu(el.subItem, e)}>
                            <span key={i}>{el.name}</span>
                        </div>)
                    })}
                </div>
                {this.state.showDetails && <div style={this.state.detailsStyle} id="menu-details-container" className="menu-details-container">
                        <MenuDetails ref={this.menuDetails} menuDetails={this.state.details} />
                </div>
                }
            </div>
        )
    }
}