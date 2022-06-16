import React from "react";
import { gsap } from "gsap";

import './NavBarItem.css';

export default function NavBarItem(props) {

    const navbaritem = props.navbaritem;
    const iscurrentsite = props.iscurrentsite;

    const navbaritemref = React.useRef();

    React.useEffect(() => {
        gsap.set(navbaritemref.current, { opacity: 0 })
        gsap.to(navbaritemref.current, { opacity: 1 })
    });

    if (iscurrentsite) {
        return(
            <div className="navbaritem" ref={navbaritemref}>
                <a className="selected" href="#">{navbaritem.title}</a>
            </div>
        )
    }
    
    return(
        <div className="navbaritem" ref={navbaritemref}>
            <a className="unselected" href="#">{navbaritem.title}</a>
        </div>
    )

}