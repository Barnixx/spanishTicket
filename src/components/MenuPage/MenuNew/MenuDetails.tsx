import './MenuDetails.scss';
import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { MenuData, SubMenuData } from '../Menu/MenuData';


interface MenuDetailsProps {
    menu?: MenuData;
}
interface MenuDetailsState {

}
export class MenuDetails extends React.Component<MenuDetailsProps, MenuDetailsState> {
    container: React.RefObject<HTMLDivElement>;
    constructor(props: MenuDetailsProps) {
        super(props);
        this.container = React.createRef<HTMLDivElement>();
    }

    public scrollTo(offset: number) {
        scroll.scrollTo(this.container.current!.offsetTop + (offset), {
            duration: 500,
            delay: 0,
            smooth: true,
        })
    }

    render() {

        return (
            <div ref={this.container} className="menu-details">
               
                <div className="menu-table-container">
                    <h2>{this.props.menu!.name}</h2>
                    <table className="layout display responsive-table">
                        <thead>
                            <tr>
                                <th>Nr</th>
                                <th>Nazwa</th>
                                <th>Gramatura</th>
                                <th>Cena</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.menu!.subItem.map((el: SubMenuData, i: number) => {
                                console.log(el);
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{`${this.props.menu!.name}  ${el.name}`}</td>
                                        <td>{`${el.weight} g`}</td>
                                        <td>{`${el.price} PLN`}</td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}