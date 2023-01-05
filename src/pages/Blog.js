// Blog
import React, {Fragment} from 'react';

export function Blog() {
    return (
        <Fragment>
            <section className="blog py-lg-4 py-md-3 py-sm-3 py-3" id="blog">
                <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                    <h3 className="title mb-lg-5 mb-md-4 mb-sm-4 mb-3"># Son <span>Yazılar</span></h3>
                    <div className="row">
                        <div className="col-lg-6 color-img-three">
                            <img src="assets/images/c1.jpg" alt="news image" className="img-fluid" />
                        </div>
                        <div className="col-lg-6 blog-left-sub">
                            <h4 className="pb-3">
                                <a href="/single">This Fashion Insider’s Guide To Doing London Like A Local</a>
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non Lorem ipsum dolor sit amet Lorem ipsum dolor
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non Lorem ipsum dolor sit amet Lorem ipsum dolor
                            </p>
                            <div className="row mt-lg-4 mt-md-4 mt-3">
                                <div className="col-lg-6 col-md-6 col-6 blog-image">
                                    <img src="assets/images/bg1.jpg" alt="news image" className="img-fluid" />
                                        <p className="mt-2">by Lolly Mess</p>
                                </div>
                                <div className="blog-date-time col-lg-6 col-md-6 col-6 text-right pt-lg-4">
                                    <ul>
                                        <li><span className="fa fa-heart" aria-hidden="true"></span><a href="/single">7</a></li>
                                        <li><span className="fa fa-comments" aria-hidden="true"></span><a href="/single">5</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-lg-5 mt-md-4 mt-3">
                        <div className="col-lg-6 blog-left-sub">
                            <h4 className="pb-3">
                                <a href="/single">If You Want To Be A Winner, Change Your Fashion</a>
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non Lorem ipsum dolor sit amet Lorem ipsum dolor
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non Lorem ipsum dolor sit amet Lorem ipsum dolor
                            </p>
                            <div className="row mt-lg-4 mt-md-4 mt-3">
                                <div className="col-lg-6 col-md-6 col-6 blog-image">
                                    <img src="assets/images/bg1.jpg" alt="news image" className="img-fluid" />
                                        <p className="mt-2">by Lolly Mess</p>
                                </div>
                                <div className="blog-date-time col-lg-6 col-md-6 col-6 text-right pt-lg-4">
                                    <ul>
                                        <li><span className="fa fa-heart" aria-hidden="true"></span><a href="/single">7</a></li>
                                        <li><span className="fa fa-comments" aria-hidden="true"></span><a href="/single">5</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 color-img-three">
                            <img src="assets/images/c2.jpg" alt="news image" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};