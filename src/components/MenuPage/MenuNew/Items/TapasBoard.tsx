import React from "react";
import './MenuItem.scss';

export class TapasBoard extends React.Component<{}, {}> {
    render() {
        const background = require('../../../../assets/image/pinchos.jpg');

        return (
            <div>
                <div className="item-component">
                    <h1 className="item-title">Deska Tapas</h1>
                        <div className="item-content">
                            <div style={{ backgroundImage: `url(${background})` }} className="item-image"></div>
                            <div className="item-describe">
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id sem lacus. Nunc congue ultrices quam, id cursus magna semper non. Cras pharetra cursus nisl id consequat. Nulla eget semper elit. Duis ut blandit est, quis porttitor ante. Donec eu ligula et leo aliquam pellentesque. In ornare ornare neque. Praesent malesuada porttitor eros vel lacinia. Mauris sodales tellus at diam lacinia sagittis. Fusce venenatis massa id tellus tincidunt, vel egestas erat viverra. Nulla vitae varius nibh, pellentesque dapibus eros. Ut non elit in nisl faucibus consequat non sit amet ligula. Cras fringilla, ligula sit amet pellentesque porta, nunc justo maximus erat, vel dignissim velit urna sed libero. Nam nibh elit, sagittis ac erat et, finibus sodales risus. Cras maximus, mi et faucibus sodales, libero lectus bibendum est, ac lacinia tellus ipsum vitae lorem. Curabitur et nunc erat.
                                    hasellus lorem ipsum, cursus vel diam sed, cursus euismod justo. Quisque accumsan accumsan sem, viverra luctus magna consequat id. Donec aliquet sodales lacus, et molestie leo rhoncus dictum. Vestibulum ut velit eget massa scelerisque bibendum sed sit amet dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque erat dolor, maximus ac tristique eget, lacinia et urna. Mauris feugiat sodales libero, quis pulvinar est viverra eget. Nullam quis fermentum massa, nec varius justo. Duis gravida risus vitae quam cursus, eu vulputate augue volutpat. Aenean blandit finibus viverra. Maecenas rhoncus ex quis risus consectetur, at rhoncus est viverra. Duis sit amet ante dui.
                                    Curabitur sem nunc, faucibus sit amet semper quis, posuere non est. Praesent accumsan ante id sem venenatis vehicula. Fusce bibendum vitae ante accumsan fringilla. In aliquet varius elit in gravida. Fusce tempus lacus quis purus faucibus, vel vestibulum arcu iaculis. Nullam at ullamcorper neque. Sed pulvinar erat purus. Integer dapibus ante sapien, vel convallis metus dignissim nec. Maecenas nec velit eget nibh molestie blandit. Duis posuere faucibus nulla sit amet hendrerit. Pellentesque commodo mollis lorem, sed scelerisque eros egestas nec. Donec eu erat non massa vulputate ultricies hendrerit a urna. Aliquam elementum neque at est blandit, quis euismod enim vehicula. Praesent sagittis ornare neque nec posuere. Donec in placerat tortor. Aenean et pharetra mauris.
                                    Aenean malesuada est id porttitor cursus. Quisque molestie, metus ut congue cursus, lectus sem ullamcorper urna, a molestie diam risus et metus. In in eros interdum, pulvinar sem id, viverra libero. Vestibulum congue fermentum tortor sed convallis. In hac habitasse platea dictumst. Curabitur pharetra, augue sed efficitur pretium, nunc quam sodales arcu, vel iaculis felis mauris a nunc. Nullam posuere dui tortor, eu posuere felis fringilla sit amet. Vestibulum dapibus ligula purus, eu iaculis nunc consectetur vel. Donec nulla quam, lacinia sit amet fringilla at, faucibus a lectus. Aenean sodales neque in sollicitudin malesuada. Pellentesque ultricies ipsum metus, eget feugiat sapien sollicitudin vel. Ut eget metus at elit sodales venenatis. Donec quis porta dolor.
                                    Sed mattis, odio rhoncus ullamcorper sodales, diam erat maximus mauris, ultricies ornare lorem eros vitae metus. Sed ultrices, urna vitae luctus elementum, enim elit rhoncus elit, et pellentesque eros lacus vitae ex. Mauris ut lectus in quam luctus mattis. Integer tempus felis lacus, nec commodo lectus imperdiet vel. Nulla in mollis lectus. Quisque est neque, placerat sed eros ac, semper ornare nisl. Curabitur posuere nulla nisi, eu imperdiet quam placerat et. Aenean a lobortis nisi.
                                    Nam vitae sagittis lacus.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
