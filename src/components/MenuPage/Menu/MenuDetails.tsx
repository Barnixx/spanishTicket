import './MenuDetails.scss';
import React from "react";
import { SubMenuData } from './MenuData';
import { Link, animateScroll as scroll, Events } from "react-scroll";


interface MenuDetailsProps {
    menuDetails?: Array<SubMenuData>;
}
interface MenuDetailsState {
    
}
export class MenuDetails extends React.Component<MenuDetailsProps, MenuDetailsState> {
    container: React.RefObject<HTMLDivElement>;
    constructor(props: MenuDetailsProps) {
        super(props);
        this.container = React.createRef<HTMLDivElement>();
    }

    public scrollTo(){
        scroll.scrollTo(this.container.current!.offsetTop - 65 ,{
            duration: 1500,
            delay: 0,
            smooth: true,
        })
    }

    

    render() {

        return (
            <div ref={this.container} className="menu-details">
                <table>
                    <thead>
                        <tr>
                            <th>Nazwa</th>
                            <th>Gramatura</th>
                            <th>Cena</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.menuDetails!.map((el: SubMenuData, i: number) => {
                            return (
                                <tr key={i}>
                                    <td>{el.name}</td>
                                    <td>{el.weight}</td>
                                    <td>{el.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>
        )
    }
}