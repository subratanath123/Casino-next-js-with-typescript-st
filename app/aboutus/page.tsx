'use client'
import React from "react";
import Script from "next/script";
import ConsumerLayout from "@/components/ConsumerLayout";
import Image from "next/image";

export default function AboutUs() {

    return (
        <ConsumerLayout>
            <section className="banner-section inner-banner aboutus">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="col-lg-8 col-md-10">
                                <div className="main-content">
                                    <h2>About Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-us">
                <div className="col-md-8 d-flex justify-content-center ">
                    {/*<Image src={`/assets/images/aboutus.png`} alt="pokers"*/}
                    {/*       width="650" height="350"*/}
                    {/*       className="floated-image"/>*/}
                </div>
                <div className="overlay pt-120">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-5 position-relative order-lg-0 order-1">
                                <div className="sec-img position-relative d-rtl">
                                    <img src="/assets/images/about-us-illus.png" className="max-un bg-img" alt="image"/>
                                    <div className="popup-area">
                                        <div
                                            className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                            <a className="mfp-iframe popupvideo position-absolute"
                                               href="https://www.youtube.com/watch?v=1SOzUKcop-A">
                                                <img src="/assets/images/icon/play-icon.png" alt="icon"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="shape-area">*/}
                                {/*    <img src="/assets/images/about-us-obj-1.png" alt="image"/>*/}
                                {/*</div>*/}
                            </div>
                            <div className="col-lg-6">
                                <div className="lottery-content">
                                    <div className="section-header">
                                        <h2 className="sub-title">Free Play, Big Wins: We Fuel Your Betting Passion!</h2>
                                        <h2 className="title">We're more than just free games -
                                            we're your training ground for future success!</h2>
                                        <p>Safe, secure, and endlessly entertaining. Explore the world of free betting
                                            at your own pace. Sharpen your skills, experiment with strategies, and unlock
                                            a world of free betting possibilities. Unleash your inner gaming champion
                                            with exclusive offers across Casino, Crypto, Lottery, and Sports.</p>
                                    </div>
                                    <div className="counter-area">
                                        <div className="row cus-mar">
                                            <div className="col-6">
                                                <div className="single-box">
                                                    <h3><span className="counter">1475</span>+</h3>
                                                    <p>Premium Offers</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="single-box">
                                                    <h3><span className="counter">24</span>/<span
                                                        className="counter">7</span>
                                                    </h3>
                                                    <p>Industry Best Support</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-choose">
                <div className="overlay pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-12">
                                <div className="section-header text-center">
                                    <h2 className="sub-title">Why choose us</h2>
                                    <h2 className="title">Stop chasing shadows and start winning big!
                                        Here's why you should choose us for your betting adventures!</h2>
                                    <p>
                                        Explore a vast selection of Casino, Crypto, Lottery, and Sports betting options.
                                        We constantly update our platform with exciting games, offers, and features.
                                        Sharpen your skills and become a betting pro without risking a dime.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row cus-mar">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-box">
                                    <div className="icon-area">
                                        <img src="/assets/images/icon/why-choose-icon-1.png" alt="image"/>
                                    </div>
                                    <h5>Endless Possibilities</h5>
                                    <p>Get a vast library of free betting options, exclusive offers, and a secure platform to hone your skills. </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-box">
                                    <div className="icon-area">
                                        <img src="/assets/images/icon/why-choose-icon-2.png" alt="image"/>
                                    </div>
                                    <h5>Exclusive Deals</h5>
                                    <p>We source the hottest offers you won't find anywhere else, giving you a clear edge over the competition</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-box">
                                    <div className="icon-area">
                                        <img src="/assets/images/icon/why-choose-icon-3.png" alt="image"/>
                                    </div>
                                    <h5>All-in-one Platform</h5>
                                    <p>Ditch the endless browsing! We've curated everything you need in one convenient location</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-box">
                                    <div className="icon-area">
                                        <img src="/assets/images/icon/why-choose-icon-4.png" alt="image"/>
                                    </div>
                                    <h5>Something New</h5>
                                    <p>We constantly update our platform with exciting games, offers, and features.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-box">
                                    <div className="icon-area">
                                        <img src="/assets/images/icon/why-choose-icon-6.png" alt="image"/>
                                    </div>
                                    <h5>Secure And Private</h5>
                                    <p>We don’t collect sensitive private information such as bank accounts, which makes your stay with us safe
                                        and private.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-box">
                                    <div className="icon-area">
                                        <img src="/assets/images/icon/why-choose-icon-5.png" alt="image"/>
                                    </div>
                                    <h5>Free Games to Play</h5>
                                    <p>Take a break from the action and unwind with our collection of fun online games</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Script src="/assets/js/jquery.min.js" defer async></Script>
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


