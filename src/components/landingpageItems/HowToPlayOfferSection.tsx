import React from 'react';
import Link from "next/link";

export default function HowToPlayOfferSection() {
    return (
        <section className="features" id="howToPlay">
            <div className="container">
                <div className="row justify-content-center wow fadeInUp">
                    <div className="col-lg-8 text-center">
                        <div className="section-top">
                            <div className="section-text text-center">
                                <br/>
                                <br/>
                                <h2 className="sub-title"><b>Unlock Your Winning Edge: Explore Our Best Offers!</b></h2>
                                <p>Discover Free Bets, Bonus Spins, Enhanced Odds, And More - All Designed to Elevate
                                    Your Free Betting Experience. Find Your Perfect Offer And Take Your Game To The Next
                                    Level!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row cus-mar pt-120">
                    <div className="col-xl-6 col-sm-6 zoom-on-hover" style={{cursor: "pointer"}}>
                        <div className="offers one" onClick={() => {
                            window.location.href = "offers/CryptoOffer"
                        }}>
                        </div>
                    </div>
                    <div className="col-xl-6 col-sm-6 zoom-on-hover" style={{cursor: "pointer"}}>
                        <div className="offers second" onClick={() => {
                            window.location.href = "offers/CasinoOffer"
                        }}>
                        </div>
                    </div>
                    <div className="col-xl-6 col-sm-6 zoom-on-hover" style={{cursor: "pointer"}}>
                        <div className="offers third" onClick={() => {
                            window.location.href = "offers/LotteryOffer"
                        }}>
                        </div>
                    </div>
                    <div className="col-xl-6 col-sm-6 zoom-on-hover" style={{cursor: "pointer"}}>
                        <div className="offers fourth" onClick={() => {
                            window.location.href = "offers/SportsOffer"
                        }}>
                        </div>
                    </div>
                </div>


                <div className="row justify-content-center wow fadeInUp">
                    <div className="col-lg-12">
                        <div className="btn-area mt-40 text-center">
                            <a href="/offers/CryptoOffer" className="btn-lg btn-success  rounded glow-on-hover" style={{color:"black", backgroundColor:"#00FF00"}}>
                                View All
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


