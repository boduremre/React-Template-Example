// About
import React, {Fragment} from 'react';
import {Breadcrumb} from "./Breadcrumb";

export function About() {
    return (
        <Fragment>
            <Breadcrumb title="Hakkımızda"/>
            <section className="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
                <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                    <div className="row">
                        <div className="col-lg-8 col-md-6 text-right about-two-grids">
                            <h3 className="title  mb-md-4 mb-sm-3 mb-3"># About <span>Fashion</span></h3>
                            <div className="about-para-txt">
                                <p>
                                    sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et
                                    consectetur adipiscing
                                </p>
                                <p className="mt-2">sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing sed do eiusmod</p>
                            </div>
                            <div className="view-buttn mt-lg-5 mt-md-4 mt-3">
                                <a href="/home" className=" scroll">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 about-imgs-txt">
                            <img src="assets/images/ab2.jpg" alt="news image" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="stats-count py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container-fluid py-lg-5 py-md-4 py-sm-4 py-3">
                    <div className="row text-center">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 number-w3three-info ">
                            <h5>700</h5>
                            <h6 className="pt-2">Smile</h6>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 number-w3three-info">
                            <h5>250 +</h5>
                            <h6 className="pt-2">Collection</h6>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 number-w3three-info">
                            <h5>150</h5>
                            <h6 className="pt-2">Coffee</h6>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 number-w3three-info">
                            <h5>125</h5>
                            <h6 className="pt-2">Tea</h6>
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
        </Fragment>
    );
};