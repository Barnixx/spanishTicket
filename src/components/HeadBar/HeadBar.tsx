import './HeadBar.scss';
import '@fortawesome/fontawesome-free/css/all.css';

import React, { Props } from 'react';
import logo from './../../assets/image/spanish_ticket_black.png';
import { Link, animateScroll as scroll } from "react-scroll";


type HeadBarState = { navbarOpen: boolean };

export class HeadBar extends React.Component<any, HeadBarState> {
    private navbar!: HTMLElement;
    private links!: HTMLElement;
    constructor(props: any) {
        super(props);
        this.state = {
            navbarOpen: false
        }
    }
    private stickyNavbar(): void {
        if (window.pageYOffset > this.navbar.offsetTop) {
            this.navbar.classList.add("sticky");
        } else {
            this.navbar.classList.remove("sticky");
        }

    }
    private toggleHeadBar(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): any {
        event.preventDefault();
        console.log('open')
        if (this.state.navbarOpen) {
            this.navbar.classList.remove('responsive');
            this.setState({
                navbarOpen: false
            });

        } else {
            this.navbar.classList.add('responsive');
            this.setState({
                navbarOpen: true
            });

        }
    }
    public componentDidMount(): void {
        window.onscroll = () => {
            this.stickyNavbar();
        }
    }

    public render() {
        return (
            <div id="header">
                <div id="social-links">
                    <a href="https://www.facebook.com/spanishTicket/">Facebook</a>
                    <a href="https://www.facebook.com/spanishTicket/">Instagram</a>
                </div>
                <div className="navbar" ref={d => (this.navbar = d!)}>
                    <img id="brand-logo" src={logo} alt="Spanish Ticket" onClick={scroll.scrollToTop}></img>
                    <div id="navbar-link" ref={a => this.links = a!} >
                        <Link to="menu-page" activeClass="active" offset={-200} spy={true}
                            smooth={true} duration={500}
                        ><i className="fa fa-fw fa-home"></i> Menu</Link>
                        <Link to="catering-page" activeClass="active" offset={-200}><i className="fa fa-fw fa-home"></i> Katering</Link>
                        <Link to="about-page" activeClass="active" offset={-200} spy={true}
                            smooth={true} duration={500}><i className="fa fa-fw fa-home"></i> O Nas</Link>
                        <Link to="contact-page" activeClass="active" offset={-200}><i className="fa fa-fw fa-home"></i> Kontakt</Link>
                    </div>
                    <a href="" id="toggle-icon" onClick={this.toggleHeadBar.bind(this)}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>

        );
    }

}