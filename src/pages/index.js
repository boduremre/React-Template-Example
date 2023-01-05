import React, {Fragment} from "react";
import {Navbar} from "./Navbar";
import {Link} from "react-router-dom";
import {Footer} from "./Footer";

export function Index() {
    return (
        <Fragment>
            <section className="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
                <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                    <div className="row">
                        <div className="col-lg-6 about-imgs-txt">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 about-fashion-one">
                                    <img src="assets/images/ab1.jpg" alt="news image" className="img-fluid"/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 about-fashion-two mt-lg-5 mt-md-4 mt-sm-3">
                                    <img src="assets/images/ab2.jpg" alt="news image" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-right about-two-grids">
                            <h3 className="title  mb-md-4 mb-sm-3 mb-3"># About <span>Fashion</span></h3>
                            <div className="about-para-txt">
                                <p>sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et
                                    consectetur adipiscing</p>
                                <p className="mt-2">sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing sed do eiusmod</p>
                            </div>
                            <div className="view-buttn mt-lg-5 mt-md-4 mt-3">
                                <a href="single.html" className=" scroll">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="collection py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                    <h3 className="title mb-lg-5 mb-md-4 mb-sm-4 mb-3"># Our <span>Collection</span></h3>
                    <div className="row">
                        <div className="col-lg-7 col-md-6 collection-w3layouts">
                            <h4> Group Collection</h4>
                            <p className="mt-2">sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing sed do eiusmod</p>
                            <div className="view-buttn mt-lg-4 mt-3">
                                <a href="single.html" className="">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <img src="assets/images/c1.jpg" alt="news image" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="row my-lg-5 my-md-4 my-3">
                        <div className="col-lg-5 col-md-6">
                            <img src="assets/images/c2.jpg" alt="news image" className="img-fluid"/>
                        </div>
                        <div className="col-lg-7 col-md-6 collection-w3layouts">
                            <h4>Individual Collection</h4>
                            <p className="mt-2">sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing sed do eiusmod</p>
                            <div className="view-buttn mt-lg-4 mt-3">
                                <a href="single.html" className="">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 col-md-6 collection-w3layouts">
                            <h4>Unique Collection</h4>
                            <p className="mt-2">sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing sed do eiusmod</p>
                            <div className="view-buttn mt-lg-4 mt-3">
                                <a href="single.html" className=" scroll">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 about-fashion-one">
                                    <img src="assets/images/c3.jpg" alt="news image" className="img-fluid"/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 about-fashion-two mt-lg-5 mt-md-4 mt-sm-3">
                                    <img src="assets/images/ab2.jpg" alt="news image" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="advertise-count">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 adv-text">
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 counter-number">
                            <div className="fashion-collet-txt">
                                <h5 className="text-center">Best Fashion Collection </h5>
                                <h6 className="text-center mt-lg-4 mt-3"> Get 55%/off</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service py-lg-4 py-md-3 py-sm-3 py-3" id="service">
                <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                    <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3"># Our <span>Services</span></h3>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center">
                            <div className="ser-fashion-grid">
                                <div className="about-icon mb-md-4 mb-3">
                                    <span className="fa fa-ravelry" aria-hidden="true"></span>
                                </div>
                                <div className="ser-sevice-grid">
                                    <h4 className="pb-3">Tailoring </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center">
                            <div className="ser-fashion-grid">
                                <div className="about-icon mb-md-4 mb-3">
                                    <span className="fa fa-female" aria-hidden="true"></span>
                                </div>
                                <div className="ser-sevice-grid">
                                    <h4 className="pb-3">Fashion</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center">
                            <div className="ser-fashion-grid">
                                <div className="about-icon mb-md-4 mb-3">
                                    <span className="fa fa-area-chart" aria-hidden="true"></span>
                                </div>
                                <div className="ser-sevice-grid">
                                    <h4 className="pb-3">Embroidery</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                            <div className="ser-fashion-grid">
                                <div className="about-icon mb-md-4 mb-3">
                                    <span className="fa fa-magic" aria-hidden="true"></span>
                                </div>
                                <div className="ser-sevice-grid">
                                    <h4 className="pb-3">Ironing</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                            <div className="ser-fashion-grid">
                                <div className="about-icon mb-md-4 mb-3">
                                    <span className="fa fa-american-sign-language-interpreting" aria-hidden="true"></span>
                                </div>
                                <div className="ser-sevice-grid">
                                    <h4 className="pb-3">Stitch</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                            <div className="ser-fashion-grid">
                                <div className="about-icon mb-md-4 mb-3">
                                    <span className="fa fa-diamond" aria-hidden="true"></span>
                                </div>
                                <div className="ser-sevice-grid">
                                    <h4 className="pb-3">Sewing</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="client py-lg-4 py-md-3 py-sm-3 py-3" id="client">
                <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                    <h3 className="title text-right mb-lg-5 mb-md-4 mb-sm-4 mb-3"># Our <span>Clients</span></h3>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 cilent-item text-center">
                            <div className="mb-lg-4 mb-3 clients-ile-img">
                                <img src="assets/images/cc2.jpg" alt=" " className="img-fluid"/>
                            </div>
                            <div className="clients-color-ile text-center">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                </p>
                                <div className="mt-3 clients-txt-ile">
                                    <h4>Jack Will</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 cilent-item text-center">
                            <div className="mb-lg-4 mb-3 clients-ile-img">
                                <img src="assets/images/cc1.jpg" alt=" " className="img-fluid"/>
                            </div>
                            <div className="clients-color-ile text-center">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                </p>
                                <div className="mt-3 clients-txt-ile">
                                    <h4>Rose son</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};