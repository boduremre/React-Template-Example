// Services
import React, {Fragment} from 'react';
import {Breadcrumb} from "./Breadcrumb";

export function Services() {
    return (
        <Fragment>
            <Breadcrumb title="Hizmetler"/>
            <section className="service py-lg-4 py-md-3 py-sm-3 py-3" id="service">
                <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                    <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">#Hizmetler</h3>
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