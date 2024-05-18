import React from "react";

export const LandingPageHeaderSection = () => {

    return (
        <section className="banner-section index">
            <div className="overlay" style={{
                height: "800px"
                //backgroundImage: 'url(https://one-dollar-admin.onrender.com/theme/image)'
            }}>
                <div className="banner-content">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="main-content">
                                    <div className="top-area section-text text-center">
                                        <h2 className="title">Play & Win!</h2>
                                        <h2 className="sub-title">
                                            Discover exclusive deals on your favorite betting categories
                                        </h2>
                                        <p>
                                            <h6>
                                                Explore exclusive offers on casino games, crypto, lottery, and
                                                sports betting.Dive into our world of free online games – all
                                                without spending a dime!
                                            </h6>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="counter-section">
                <div className="container wow fadeInUp">
                    <div className="main-content">
                        <div className="row cus-mar custom-space-between-cols">
                            <div className="col-lg-1 col-md-1  mb-1"></div>
                            <div className="col-lg-4 col-md-4 flash-card mb-3">
                                <div className="single-box d-flex align-items-center text-center">
                                    <div className="text-area">
                                        <h4 className="sub-title" style={{marginTop:"15px"}}>Weekly Draw Prizes</h4>
                                        <p>Get your adrenaline pumping with free betting action!</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 flash-card mb-3">
                                <div className="single-box d-flex align-items-center text-center">
                                    <div className="text-area">
                                        <h4 className="sub-title" style={{marginTop:"15px"}}>Exclusive Bonuses</h4>
                                        <p>Enjoy bonus rewards and special deals reserved just for our players</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 col-md-1  mb-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};