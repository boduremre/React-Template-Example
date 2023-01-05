// Single
import React, {Fragment} from 'react';
import {Breadcrumb} from "./Breadcrumb";

export function Single() {
    const [like, setLike] = React.useState(7);
    const [comment, setComment] = React.useState(5);
    return (
        <Fragment>
            <Breadcrumb title="Blog Detay"/>
            <section className="single page py-lg-4 py-md-3 py-sm-3 py-3" id="single-page">
                <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                    <h3 className="title mb-lg-5 mb-md-4 mb-sm-4 mb-3"># Blog Detay</h3>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <img src="assets/images/c1.jpg" alt="news image" className="img-fluid w-100"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 blog-left-sub">
                            <h4 className="pb-3">
                                <a href="/single">This Fashion Insider’s Guide To Doing London Like A Local</a>
                            </h4>
                            <p className="mb-3 text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda commodi consequatur ducimus eaque eos est et facere fuga harum id, maxime, modi nemo neque nisi perspiciatis praesentium quae quo repudiandae voluptate? Consequatur distinctio doloremque earum, excepturi facilis
                                nemo nostrum nulla quas sit, suscipit totam unde. At, consectetur consequuntur corporis deserunt distinctio earum esse eum facere iste itaque, libero maiores nisi nulla numquam odit officia optio placeat quas quisquam recusandae reiciendis sapiente, sequi similique totam voluptatibus.
                                Eum inventore, iste iusto nemo placeat ut. Blanditiis cum dolores eveniet fuga magnam possimus reiciendis. Dolor ducimus eligendi excepturi iure modi odio tenetur vitae!
                            </p>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aspernatur consequuntur culpa cupiditate deleniti dicta doloribus eos et ex exercitationem explicabo, ipsum itaque labore libero minus molestiae natus, necessitatibus nesciunt nulla, obcaecati pariatur
                                perspiciatis placeat quia quibusdam quidem quis quisquam repellendus sed sit velit vero voluptate voluptatem. Itaque, neque.
                            </p>
                            <div className="row mt-lg-4 mt-md-4 mt-3">
                                <div className="col-lg-6 col-md-6 col-6 blog-image">
                                    <p className="mt-2">Lolly Mess tarafından 05.01.2023 11:59 tarihinde yayınlandı.</p>
                                </div>
                                <div className="blog-date-time col-lg-6 col-md-6 col-6 text-right pt-lg-4">
                                    <ul>
                                        <li onClick={() => setLike(like + 1)}>
                                            <span className="fa fa-heart" aria-hidden="true"></span>
                                            <a href="#!" onClick={() => setLike(like + 1)} className="">{like}</a>
                                        </li>
                                        <li >
                                            <span className="fa fa-comments" aria-hidden="true"></span>
                                            <a href="#!">{comment}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comments-w3layouts-grid pt-lg-5 pt-md-4 pt-3">
                        <div className="comments-grid-right mb-lg-4 mb-3">
                            <h4>Yorumlar</h4>
                        </div>
                        <div className="comment-list mb-lg-4 mb-3">
                            <div className="row pt-3">
                                <div className="col-lg-2 col-md-3 col-sm-3 comment-imgs">
                                    <img src="assets/images/cc1.jpg" alt=" " className="img-fluid"/>
                                </div>
                                <div className="col-lg-10 col-md-9 col-sm-9 single-title text-left">
                                    <h4>Michael Crisp</h4>
                                    <p className="my-2">
                                        Ut ex metus, ornare ac ultricies sit amet, auctor a elit. Praesent sit<br/>
                                        amet scelerisque massa. Duis porta risus id urna finibus aliquet.
                                    </p>
                                    <ul>
                                        <li>5 Ocak 2023 <i>|&nbsp;</i></li>
                                        <li><a href="/single" className="clr-two">Cevapla</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-lg-2 col-md-3 col-sm-3 comment-imgs ">
                                    <img src="assets/images/cc2.jpg" alt=" " className="img-fluid"/>
                                </div>
                                <div className="col-lg-10 col-md-9 col-sm-9 single-title text-left">
                                    <h4>Michael Crisp</h4>
                                    <p className="my-2">Ut ex metus, ornare ac ultricies sit amet, auctor a elit. Praesent sit<br/>
                                        amet scelerisque massa. Duis porta risus id urna finibus aliquet.
                                    </p>
                                    <ul>
                                        <li>5 Ocak 2023 <i>|&nbsp;</i></li>
                                        <li><a href="/single" className="clr-two">Cevapla</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="pt-3 form-comment">
                            <div className="mb-3 comments-grid-right text-left">
                                <h4>Yorum Yap</h4>
                            </div>
                            <form className="pt-lg-2" action="#" method="post">
                                <div className="row wls-contact-mid">
                                    <div className="col-lg-6 form-group contact-forms">
                                        <input type="text" className="form-control" placeholder="Ad Soyad" required=""/>
                                    </div>
                                    <div className="col-lg-6 form-group contact-forms">
                                        <input type="email" className="form-control" placeholder="Eposta" required=""/>
                                    </div>
                                </div>
                                <div className="form-group contact-forms mb-0">
                                    <textarea className="form-control" placeholder="Mesaj" rows="2" required=""></textarea>
                                </div>
                                <button type="submit" className="btn mt-lg-4 mt-3 sent-butnn">Gönder</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};