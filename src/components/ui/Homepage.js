import React from "react";
import NavBar from "./navbar/NavBar";

export default function Homepage(props) {

    const navbaritems = props.data.navbaritems

    return(
        <NavBar navbaritems={navbaritems}/>
    )
}