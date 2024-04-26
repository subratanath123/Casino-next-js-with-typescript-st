import React, {useEffect, useState} from 'react';
import {Banner} from "@/constants/Constants";
import axios from "axios";
import {HowToPlayOfferItem} from "@/components/landingpageItems/HowToPlayOfferItem";
import Link from "next/link";

export default function AboutUsSection() {
    return (
        <section className="how-works">
            <div className="overlay pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-header text-center">
                                <br/>
                                <br/>
                                <h3 className="sub-title"><b>About Us</b></h3>
                                <h3 className="title">Free Play. Big Fun. Unleash Your Inner Champion!</h3>
                                <p>Your one-stop shop for free betting thrills! Explore a world of exclusive offers on Casino,
                                    Crypto, Lottery, and Sports.Join the action today!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row cus-mar">
                        <div className="col-xl-4 col-sm-12 col-md-6">
                            <div className="single-box mid text-center">
                                <div className="thumb">
                                    <img src="/assets/images/icon/how-works-icon-1.png" alt="icon"/>
                                </div>
                                <div className="text-area">
                                    <h5>Instant Claim</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-12 col-md-6">
                            <div className="single-box mid text-center">
                                <div className="thumb">
                                    <img src="/assets/images/icon/how-works-icon-2.png" alt="icon"/>
                                </div>
                                <div className="text-area">
                                    <h5>Exclusive Deals</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-12 col-md-6">
                            <div className="single-box text-center">
                                <div className="thumb">
                                    <img src="/assets/images/icon/how-works-icon-3.png" alt="icon"/>
                                </div>
                                <div className="text-area">
                                    <h5>Play and Get Win</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="btn-area mt-40 text-center">
                        <a href="/aboutus" className="cmn-btn">
                            Learn More
                            <i className="icon-d-right-arrow-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}