// Footer
import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

export function Footer() {

    const scrollTop = event => {
        window.scrollTo(0, 1);
    };

    return (
        <Fragment>
            <footer className="py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
                    <div className="footer-w3layouts-head text-center">
                        <h2>
                            <Link to="/home">Modiste</Link>
                        </h2>
                    </div>
                    <div className="social-icons mt-lg-5 mt-md-4 mt-3 text-center">
                        <ul>
                            <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                            <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                            <li><a href="#"><span className="fa fa-rss"></span></a></li>
                            <li><a href="#"><span className="fa fa-envelope"></span></a></li>
                            <li><a href="#"><span className="fa fa-instagram"></span></a></li>
                        </ul>
                    </div>
                    <div className="bottem-wthree-footer text-center pt-md-4 pt-3">
                        <p>
                            © 2022 Modiste. Tüm Hakları Saklıdır.
                        </p>
                    </div>
                    <div className="text-center">
                        <Link onClick={scrollTop} to="#" className="move-top text-center mt-3">
                            <i className="fa fa-arrow-up" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};