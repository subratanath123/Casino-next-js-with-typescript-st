import React from 'react';
import Link from "next/link";

export default function HowToPlayOfferSection() {
    return (
        <section className="features" id="howToPlay">
            <div className="container">
                <div className="row justify-content-center wow fadeInUp">
                    <div className="col-lg-6 text-center">
                        <div className="section-top">
                            <div className="section-text text-center">
                                <br/>
                                <br/>
                                <h3 className="sub-title"><b>Unlock Your Winning Edge: Explore Our Best Offers!</b></h3>
                                <p>Discover free bets, bonus spins, enhanced odds, and more - all
                                    designed
                                    to elevate your free betting experience. Find your perfect offer and
                                    take your game to the next level!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row cus-mar pt-120">
                    <div className="col-xl-6 col-sm-6">
                        <div className="offers one">
                        </div>
                    </div>
                    <div className="col-xl-6 col-sm-6">
                        <div className="offers second">
                        </div>
                    </div>
                    <div className="col-xl-6 col-sm-6">
                        <div className="offers third">
                        </div>
                    </div>
                    <div className="col-xl-6 col-sm-6">
                        <div className="offers fourth">
                        </div>
                    </div>
                </div>


                <div className="row justify-content-center wow fadeInUp">
                    <div className="col-lg-12">
                        <div className="btn-area mt-40 text-center">
                            <a href="/offers/Offer" className="cmn-btn">
                                View All
                                <i className="icon-d-right-arrow-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


