import React from "react";
import Logo from "./Logo";

import './NavBar.css';
import NavBarItem from "./NavBarItem";

export default function NavBar(props) {

    const navbaritems = props.navbaritems
    const currentsite = props.currentsite

    return(
        <div className="container">
            <div className="logo">
                <Logo />
            </div>
            <div className="navbaritems">
                {navbaritems.map(function(item){

                    var iscurrentsite = false;

                    if (item.name === currentsite) {
                        iscurrentsite = true;
                    }

                    return(
                        <NavBarItem key={item.title} navbaritem={item} iscurrentsite={iscurrentsite} />
                    )}
                )}
            </div>
        </div>
    )
}