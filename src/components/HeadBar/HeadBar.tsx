import './HeadBar.scss';
import '@fortawesome/fontawesome-free/css/all.css';

import React from 'react';
import logo from './../../assets/image/spanish_ticket_black.png';
import { Link, animateScroll as scroll, Events } from "react-scroll";


type HeadBarState = { navbarOpen: boolean };

export class HeadBar extends React.Component<any, HeadBarState> {
    private navbar!: HTMLElement;
    private logo!: HTMLElement;
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
    private toggleHeadBar(event: any): any {
        event.preventDefault();
        console.log('open');
        
        if (this.state.navbarOpen) {
            this.closeNavbar();
        } else {
            this.navbar.classList.add('responsive');
            this.setState({
                navbarOpen: true
            });

        }
    }

    closeNavbar(){
        this.navbar.classList.remove('responsive');
        this.setState({
            navbarOpen: false
        });
    }
    componentDidMount(): void {
        window.onscroll = () => {
            this.stickyNavbar();
        }
        Events.scrollEvent.register('begin', (to, element) => {
            this.closeNavbar();
        })
        
    }

    componentWillUnmount(){
        Events.scrollEvent.remove('begin');
    }

    render() {
        return (
            <div id="header">
                <div id="social-links">
                    <a href="https://www.facebook.com/spanishTicket/"><i className="fab fa-facebook-square" style={{ color: "#3c5a99" }}></i>spanishTicket</a>
                    <a href="https://www.facebook.com/spanishTicket/"><i className="fab fa-instagram"></i>@spanishTicket</a>
                </div>
                <div className="navbar" ref={d => (this.navbar = d!)}>
                    <img id="brand-logo" ref={l => this.logo = l!} src={logo} alt="Spanish Ticket" onClick={scroll.scrollToTop}></img>
                    <div id="navbar-link">
                       <Link to="menu-page" activeClass="active" offset={-55} spy={true}
                            smooth={true} duration={500}
                        ><i className="fas fa-pepper-hot"></i> Menu</Link>
                        <Link to="catering-page" activeClass="active" offset={-55}>
                        <i className="fas fa-utensils"></i> Katering</Link>
                        <Link to="about-page" activeClass="active" offset={-55} spy={true}
                            smooth={true} duration={500}><i className="fa fa-fw fa-home"></i> O Nas</Link>
                        <Link to="contact-page" activeClass="active" offset={-55}><i className="fa fa-fw fa-home"></i> Kontakt</Link>
                    </div>
                    <a href="/" id="toggle-icon" onClick={this.toggleHeadBar.bind(this)}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>

        );
    }

}