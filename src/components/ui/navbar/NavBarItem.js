import React from "react";

import './NavBarItem.css';

export default function NavBarItem(props) {

    const navbaritem = props.navbaritem;

    return(
        <div className="navbaritem">
            <a href={navbaritem.href}>{navbaritem.title}</a>
        </div>
    )
}