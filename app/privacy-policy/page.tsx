"use client"

import Script from "next/script";
import React from "react";
import ConsumerLayout from "@/components/ConsumerLayout";
import Image from "next/image";

export default function PrivacyPolicy() {

    return (
        <ConsumerLayout>
            <section className="banner-section inner-banner games">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h2>Terms Conditions</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="privacy-content">
                <div className="col-md-8 d-flex justify-content-center ">
                    <Image src={`/assets/images/privacy-policy.png`} alt="pokers"
                           width="600" height="300"
                           className="floated-image"/>
                </div>
                <div className="overlay pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="top-wrapper">
                                    <h4>We are always looking for new ways to provide privacy for our customers.</h4>
                                    <p>Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit habitasse non
                                        ullamcorper enim, diam quam id et, tempus massa. Sed nam vulputate pellentesque
                                        quis. Varius a, nunc faucibus proin elementum id odio auctor.
                                        Nunc, suspendisse consequat libero, pharetra tellus vulputate auctor venenatis
                                        tortor non rhoncus at duis. Pharetra ipsum mauris integer sit feugiat.</p>
                                    <ul>
                                        <li>— Blandit dignissim nulla varius tristique a sed integer ut tempor.</li>
                                        <li>— Augue interdum semper bibendum amet sed.</li>
                                        <li>— Dis in at ultricies tortor sit tellus.</li>
                                        <li>— Habitant ornare aenean maecenas pretium</li>
                                    </ul>
                                    <p>Eget purus aenean sit risus. Arcu, aliquam eget et viverra risus purus. Commodo
                                        fames tristique dui pharetra elit aliquet morbi. Eget consectetur risus nunc
                                        lorem sit consequat aliquet. Dolor velit consectetur etiam scelerisque. Integer
                                        interdum sodales scelerisque diam massa quam sit quis. Sed et dui a nam
                                        pulvinar. Tristique justo, donec lectus vitae, cursus ligula ridiculus lacus,
                                        tincidunt. Diam dictumst faucibus dui aliquet aenean nascetur feugiat leo. Etiam
                                        dignissim orci dignissim vitae.</p>
                                    <div className="safe-data">
                                        <h4>Your data is safe with us, we will not share any information with external
                                            sources.</h4>
                                        <p>Blandit dignissim nulla varius tristique a sed integer ut tempor. Augue
                                            interdum semper bibendum amet sed. Dis in at ultricies tortor sit tellus.
                                            Habitant ornare aenean maecenas pretium, dui ullamcorper quis. Egestas
                                            viverra et id aliquet faucibus rhoncus a. Sollicitudin nisl nulla tempor
                                            pretium lorem at mauris faucibus pulvinar.</p>
                                        <ul>
                                            <li>Eget purus aenean sit risus. Arcu, aliquam eget et viverra risus purus.
                                                Commodo fames tristique dui pharetra elit aliquet morbi.
                                            </li>
                                            <li>Eget consectetur risus nunc lorem sit consequat aliquet. Dolor velit
                                                consectetur etiam scelerisque.
                                            </li>
                                            <li>Integer interdum sodales scelerisque diam massa quam sit quis. Sed et
                                                dui a nam pulvinar. Tristique justo, donec lectus vitae, cursus ligula
                                                ridiculus lacus, tincidunt.
                                            </li>
                                            <li>Diam dictumst faucibus dui aliquet aenean nascetur feugiat leo. Etiam
                                                dignissim.
                                            </li>
                                            <li> Aliquam eget et viverra risus purus. Commodo fames tristique dui
                                                pharetra elit aliquet morbi.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="cookies">
                                        <h4>Cookies and tracking</h4>
                                        <p>Consequat mauris nunc congue nisi. Cursus metus aliquam eleifend mi in nulla.
                                            Dignissim cras tincidunt lobortis feugiat vivamus. Blandit aliquam etiam
                                            erat velit. Sapien faucibus et molestie ac. Ornare aenean euismod elementum
                                            nisi quis eleifend quam adipiscing vitae. Id cursus metus aliquam eleifend
                                            mi in nulla posuere sollicitudin.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Script src="/assets/js/jquery.min.js"></Script>
            <Script src="/assets/js/jquery-ui.js"></Script>
            <Script src="/assets/js/bootstrap.min.js"></Script>
            
            <Script src="/assets/js/plugin/slick.js"></Script>
            <Script src="/assets/js/plugin/jquery.nice-select.min.js"></Script>
            <Script src="/assets/js/plugin/counter.js"></Script>
            <Script src="/assets/js/plugin/jquery.downCount.js"></Script>
            <Script src="/assets/js/plugin/waypoint.min.js"></Script>
            <Script src="/assets/js/plugin/jquery.magnific-popup.min.js"></Script>
            <Script src="/assets/js/plugin/wow.min.js"></Script>
            <Script src="/assets/js/plugin/plugin.js"></Script>
            <Script src="/assets/js/main.js"></Script>
        </ConsumerLayout>
    );
}