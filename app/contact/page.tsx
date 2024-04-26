'use client'
import React from "react";
import Script from "next/script";
import ConsumerLayout from "@/components/ConsumerLayout";
import Image from "next/image";

export default function Contact() {

    return (
        <ConsumerLayout>
            <section className="banner-section inner-banner games">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h1>Contact</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="get-in-touch">
                <div className="col-md-8 d-flex justify-content-center ">
                    <Image src={`/assets/images/contact.png`} alt="pokers"
                           width="400" height="300"
                           className="floated-image"/>
                </div>
                <div className="overlay pt-120 pb-120">
                    <div className="container">

                        <div className="row justify-content-center text-center">
                            <h2>Get In Touch</h2>
                            <hr/>

                            <div className="col-lg-6 " style={{
                                backgroundImage: "url(/assets/images/cover-6.png)",
                                borderRadius: "15px",
                                border: "solid 1px #D2838E",
                                backgroundSize: "100% 100%",
                                backgroundColor: "transparent",
                                backgroundRepeat: "no-repeat",
                            }}>
                                <div>
                                    <br/>
                                    <br/>
                                    <div className="col-12">
                                        <div className="single-input">
                                            <label>Name</label>
                                            <input type="text" id="name" placeholder="John Doe" autoComplete="off"/>
                                        </div>
                                        <div className="single-input">
                                            <label>Email</label>
                                            <input type="text" id="email" placeholder="your@gmail.com"
                                                   autoComplete="off"/>
                                        </div>
                                        <div className="single-input">
                                            <label>Message</label>
                                            <textarea cols={30} id="message" rows={4}
                                                      placeholder="Type something here"></textarea>
                                        </div>

                                        <br/>

                                        <div className="btn-area text-center">
                                            <button className="red-button">Submit</button>
                                        </div>
                                        <br/>
                                        <br/>
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
            <Script src="/assets/js/fontawesome.js"></Script>
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


