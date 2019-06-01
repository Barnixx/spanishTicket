import './Menu.scss';
import React, { Component } from "react";
import { TapasBoard } from './Items/TapasBoard';
import { animateScroll as scroll } from "react-scroll";




interface MenuState {
    currentItem?: Component;
    detailsStyle: {
        height: string,
        transition: string
    }
}

export class Menu extends Component<any, MenuState> {

    menuDetails: React.RefObject<any>;
    constructor(props: any) {
        super(props);
        this.menuDetails = React.createRef();
        this.state = {
            detailsStyle: {
                height: '0px',
                transition: 'all 0.5s ease-in-out'
            }
        }

    }

    private changeSubmenu(component: any, event: React.MouseEvent<HTMLDivElement>): void {
        this.setState({
            detailsStyle: {
                height: '0px',
                transition: 'all 0.5s ease-in-out'
            }
        }, () => {
            setTimeout(() => {
                this.setState({
                    currentItem: component,
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            detailsStyle: {
                                height: '100%',
                                transition: 'all 0.5s ease-in-out'
                            }
                        }, () => {
                            setTimeout(() => {
                                this.scrollTo(-65);
                            }, 1);
                        });
                    }, 1);

                });
            }, 500);
        })
    }

    public scrollTo(offset: number) {
        scroll.scrollTo(this.menuDetails.current!.offsetTop + (offset), {
            duration: 500,
            delay: 0,
            smooth: true,
        })

    }



    render() {
        const background = require('../../../assets/image/pinchos.jpg');

        return (
            <div className="menu">
                <div className="menu-root">
                    <div className="menu-title" onClick={(e) => this.changeSubmenu(<TapasBoard />, e)}>
                        <div className="menu-title-img"  style={{ backgroundImage: `url(${background})` }}></div>
                        <span><span>Deska Tapas</span> </span>
                    </div>
                    <div className="menu-title" onClick={(e) => this.changeSubmenu(<TapasBoard />, e)} >
                        <div className="menu-title-img" style={{ backgroundImage: `url(${background})` }}></div>
                        <span><span>Paella</span> </span>
                    </div>
                    <div className="menu-title" onClick={(e) => this.changeSubmenu(<TapasBoard />, e)} >
                        <div className="menu-title-img" style={{ backgroundImage: `url(${background})` }}></div>
                        <span><span>Carpaccio</span></span>
                    </div>
                    <div className="menu-title" onClick={(e) => this.changeSubmenu(<TapasBoard />, e)} >
                        <div className="menu-title-img" style={{ backgroundImage: `url(${background})` }}></div>
                        <span><span>Bruschetta</span></span>
                    </div>
                    <div className="menu-title"  onClick={(e) => this.changeSubmenu(<TapasBoard />, e)} >
                        <div className="menu-title-img"style={{ backgroundImage: `url(${background})` }}></div>
                        <span><span>DChorizo</span> </span>
                    </div>
                    <div className="menu-title" onClick={(e) => this.changeSubmenu(<TapasBoard />, e)} >
                        <div className="menu-title-img" style={{ backgroundImage: `url(${background})` }}></div>
                        <span><span>Owoce Morza w Cieście</span> </span>
                    </div>
                    <div className="menu-title" onClick={(e) => this.changeSubmenu(<TapasBoard />, e)} >
                        <div className="menu-title-img" style={{ backgroundImage: `url(${background})` }}></div>
                        <span><span>Krokiety</span></span>
                    </div>
                    <div className="menu-title" onClick={(e) => this.changeSubmenu(<TapasBoard />, e)} >
                        <div className="menu-title-img" style={{ backgroundImage: `url(${background})` }}></div>
                        <span><span>Pinchos</span></span>
                    </div>
                    <div className="menu-title" onClick={(e) => this.changeSubmenu(<TapasBoard />, e)}>
                        <div className="menu-title-img"  style={{ backgroundImage: `url(${background})` }}></div>
                        <span><span>Mix dla Piwosza</span></span>
                    </div>
                    <div className="menu-title" onClick={(e) => this.changeSubmenu(<TapasBoard />, e)} >
                        <div className="menu-title-img" style={{ backgroundImage: `url(${background})` }}></div>
                        <span><span>Zupa Rybna</span></span>
                    </div>
                    <div className="menu-title"  onClick={(e) => this.changeSubmenu(<TapasBoard />, e)} >
                        <div className="menu-title-img" style={{ backgroundImage: `url(${background})` }}></div>
                        <span><span>Dodatki</span></span>
                    </div>

                </div>
                <div style={this.state.detailsStyle} ref={this.menuDetails} className="menu-item-container">
                    {this.state.currentItem}
                </div>
            </div>
        )
    }
}