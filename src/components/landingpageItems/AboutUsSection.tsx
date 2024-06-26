import React, {useEffect, useState} from 'react';
import {Offer} from "@/constants/Constants";
import axios from "axios";
import {HowToPlayOfferItem} from "@/components/landingpageItems/HowToPlayOfferItem";
import Link from "next/link";
import {OnlineGameOfferItem} from "@/components/landingpageItems/OnlineGameOfferItem";
import Carousel from "react-multi-carousel";

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
                                <h2 className="title">Free Play. Big Fun. Unleash Your Inner Champion!</h2>
                                <p>Your one-stop shop for free betting thrills! Explore a world of exclusive offers on
                                    Casino,
                                    Crypto, Lottery, and Sports.Join the action today!</p>
                            </div>
                        </div>
                    </div>

                    <Carousel key="aboutUsCarosol" responsive={{
                        superLargeDesktop: {
                            // the naming can be any, depends on you.
                            breakpoint: {max: 4000, min: 3000},
                            items: 3
                        },
                        desktop: {
                            breakpoint: {max: 3000, min: 1024},
                            items: 3
                        },
                        tablet: {
                            breakpoint: {max: 1024, min: 464},
                            items: 1
                        },
                        mobile: {
                            breakpoint: {max: 464, min: 0},
                            items: 1
                        }
                    }}>
                        <div className="single-box mid text-center">
                            <div className="thumb">
                                <img src="/assets/images/icon/how-works-icon-1.png" alt="icon"/>
                            </div>
                            <div className="text-area">
                                <h5>Instant Claim</h5>
                            </div>
                        </div>
                        <div className="single-box mid text-center">
                            <div className="thumb">
                                <img src="/assets/images/icon/how-works-icon-2.png" alt="icon"/>
                            </div>
                            <div className="text-area">
                                <h5>Exclusive Deals</h5>
                            </div>
                        </div>
                        <div className="single-box text-center">
                            <div className="thumb">
                                <img src="/assets/images/icon/how-works-icon-3.png" alt="icon"/>
                            </div>
                            <div className="text-area">
                                <h5>Play and Get Win</h5>
                            </div>
                        </div>
                    </Carousel>
                </div>

                <div className="col-lg-12">
                    <div className="btn-area mt-40 text-center">
                        <a href="/aboutus" className="btn-lg btn-success  rounded glow-on-hover"
                           style={{color: "black", backgroundColor: "#00FF00"}}>
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}