import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./navbar/NavBar";

export default function Homepage(props) {

    const navbaritems = props.data.navbaritems

    return(
        <div className="currentpage">
            <Router>
                <Routes>
                    <Route path="/" element={
                        <>
                            <NavBar currentsite="start" navbaritems={navbaritems}/>
                            <h1>Test</h1>
                        </>
                    }/>
                    <Route path="/projekte" element={
                        <>
                            <NavBar currentsite="projekte" navbaritems={navbaritems}/>
                            <h1>Projekte</h1>
                        </>
                    }/>
                    <Route path="/kontakt" element={
                        <>
                            <NavBar currentsite="kontakt" navbaritems={navbaritems}/>
                            <h1>Test</h1>
                        </>
                    }/>
                    <Route path="*" element={
                        <>
                            <h1>Route doesn´t exist</h1>
                            <a href="/">Go back</a>
                        </>
                    }/>
                </Routes>
            </Router>
        </div>
    )
}