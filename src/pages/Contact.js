// Contact
import React, {Fragment} from 'react';
import {Breadcrumb} from "./Breadcrumb";

export function Contact() {
    return (
        <Fragment>
            <Breadcrumb title="İletişim"/>
            <section className="contact py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                    <h3 className="title mb-lg-5 mb-md-4 mb-sm-4 mb-3">İletişim</h3>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 contact-form-txt">
                            <form action="#" method="post">
                                <div className="w3pvt-wls-contact-mid">
                                    <div className="form-group contact-forms">
                                        <input type="text" className="form-control" placeholder="Ad Soyad" required=""/>
                                    </div>
                                    <div className="form-group contact-forms">
                                        <input type="email" className="form-control" placeholder="Eposta" required=""/>
                                    </div>
                                    <div className="form-group contact-forms">
                                        <input type="text" className="form-control" placeholder="Telefon" required=""/>
                                    </div>
                                    <div className="form-group contact-forms">
                                        <textarea className="form-control" placeholder="Mesaj" rows="3" required=""></textarea>
                                    </div>
                                    <button type="submit" className="btn sent-butnn">Gönder</button>
                                </div>
                            </form>
                            <div className="row mt-lg-5 mt-md-4 mt-3">
                                <div className="contact-list-grid col-lg-6 col-md-6 col-sm-6">
                                    <h4>Branch 1</h4>
                                    <p className="pt-2">Melbourne St,South Birbane 4101</p>
                                    <p>Austraila</p>
                                </div>
                                <div className="contact-list-grid col-lg-6 col-md-6 col-sm-6">
                                    <h4>Branch 2</h4>
                                    <p className="pt-2">Melbourne St,South Birbane 4101</p>
                                    <p>Austraila</p>
                                </div>
                            </div>
                            <div className="row mt-lg-4 mt-3">
                                <div className="contact-list-grid col-lg-6 col-md-6 col-sm-6">
                                    <h4>Telefon</h4>
                                    <p className="pt-2">(000)1122333</p>
                                    <p>+(000) 123 4565 32</p>
                                </div>
                                <div className="contact-list-grid col-lg-6 col-md-6 col-sm-6">
                                    <h4>Eposta</h4>
                                    <p className="pt-2">
                                        <a href="mailto:info@example.com">info@example1.com</a>
                                    </p>
                                    <p className="pt-2">
                                        <a href="mailto:info@example.com">info@example.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="address_mail_footer_grids col-lg-6 col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3539.812628729253!2d153.014155!3d-27.4750921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a0835840a2f%3A0xdd5e3f5c208dc0e1!2sMelbourne+St%2C+South+Brisbane+QLD+4101%2C+Australia!5e0!3m2!1sen!2sin!4v1492257477691">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};