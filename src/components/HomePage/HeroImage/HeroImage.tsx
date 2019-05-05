import React from "react";
import './HeroImage.scss';
import logo from './../../../assets/image/spanish_ticket_black.png';

export class HeroImage extends React.Component {
    public render(){
        return(
            <div className="hero-image">
                {/* <div className="logo">
                    <img src={logo} alt="Spanish Ticket"/>
                </div> */}
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus lacus sit amet ligula convallis mollis. Suspendisse tempus accumsan urna sit amet consectetur. Proin vulputate lorem vitae justo molestie, eu bibendum risus iaculis. Aenean dapibus, ante convallis cursus tincidunt, elit turpis rutrum sapien, eget auctor diam nulla non ante. Etiam blandit suscipit lacus, et faucibus massa convallis vel. Curabitur porta rhoncus enim, non ullamcorper lectus pulvinar eu. Aliquam augue erat, aliquam eu orci quis, ullamcorper scelerisque mi. Duis imperdiet imperdiet diam at vulputate. In ultricies a eros ac eleifend. Phasellus blandit ultrices gravida. Suspendisse eros magna, tempus sed fringilla eget, imperdiet blandit justo. Aliquam vestibulum ultricies ultrices. Duis et dignissim risus, nec molestie enim. Morbi vestibulum diam id eros placerat, lacinia mattis erat malesuada. Quisque vitae blandit sem. Praesent hendrerit neque quis velit iaculis sodales.

Integer aliquam risus nec ante fermentum, ac malesuada felis pharetra. Donec nisl risus, ultricies ut dictum et, sodales sed magna. Duis libero neque, laoreet id purus sed, suscipit semper massa. Curabitur aliquet egestas nisi, in semper tellus tristique a. Vivamus mattis augue diam, vitae euismod sapien rutrum eget. Fusce gravida massa ac lorem consequat auctor. Pellentesque suscipit, mauris ut pellentesque malesuada, ante metus posuere mauris, at pretium augue odio vitae augue. Integer porttitor iaculis dolor et cursus. In hac habitasse platea dictumst. Pellentesque sodales auctor ex, vitae venenatis metus molestie eu. Vestibulum in purus viverra purus tempor aliquet. Morbi vitae metus vitae lorem efficitur luctus. Praesent pretium fringilla ligula, ut venenatis sapien gravida eu. Aenean eget ipsum auctor, consectetur urna quis, ultricies eros. In finibus eu lorem vel maximus. </p>
            </div>
        );
    }
}