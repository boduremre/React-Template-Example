// Navbar
import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <Fragment>
            <div className="header-outs inner_page-banner" id="home">
                <div className="headder-top">
                    <nav>
                        <div id="logo">
                            <h1>
                                <Link to="/">Modiste</Link>
                            </h1>
                        </div>
                        <label htmlFor="drop" className="toggle">Menu</label>
                        <input type="checkbox" id="drop"/>
                        <ul className="menu mt-2">
                            <li className="active">
                                <Link to="/home">Anasayfa</Link>
                            </li>
                            <li className="mx-lg-3 mx-md-2 my-md-0 my-1">
                                <Link to="/about">Hakkımızda</Link>
                            </li>
                            <li>
                                <Link to="/services">Hizmetler</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/contact">İletişim</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Fragment>
    );
};