import React, {useEffect, useState} from 'react';
import {usePathname} from "next/navigation";
import axios from "axios";

export default function ConsumerLayout({children}: { children: React.ReactNode }) {
    const pathName = usePathname();


    const [state, setState] = useState<{
        fbLink: string,
        twitterLink: string,
        instagramLink: string,
        whatsappLink: string
    }>({
        fbLink: '',
        twitterLink: '',
        instagramLink: '',
        whatsappLink: '',
    });

    function fetchSocialInfo() {
        axios
            .get('https://one-dollar-admin.onrender.com/v1/public/social', {
                params: {}
            })
            .then((response: any) => {

                setState({
                    ...state,
                    fbLink: response.data.fbLink,
                    twitterLink: response.data.twitterLink,
                    instagramLink: response.data.instagramLink,
                    whatsappLink: response.data.whatsappLink
                });

            })
            .catch((error: any) => {
                console.error('Social link Fetching failed:', error);
            });
    }

    useEffect(() => {
            fetchSocialInfo();
        },
        []
    );


    return (
        <>
            <html lang="en">

            <head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <title>Bizera - Online Gaming Website HTML Template</title>

                <link rel="shortcut icon" href="/assets/images/fav.png" type="image/x-icon"/>
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/assets/css/ara-font.css"/>
                <link rel="stylesheet" href="/assets/css/jquery-ui.css"/>
                <link rel="stylesheet" href="/assets/css/plugin/nice-select.css"/>
                <link rel="stylesheet" href="/assets/css/plugin/magnific-popup.css"/>
                <link rel="stylesheet" href="/assets/css/plugin/slick.css"/>
                <link rel="stylesheet" href="/assets/css/ara-font.css"/>
                <link rel="stylesheet" href="/assets/css/plugin/animate.css"/>
                <link rel="stylesheet" href="/assets/css/style.css"/>

            </head>

            <body>
            <div className="preloader" id="preloader"></div>
            <a href="javascript:void(0)" className="scrollToTop">
                <img src="/assets/images/icon/arrow-up.png" alt="image"/>
            </a>

            <header className="header-section" style={{zIndex: "99999999999999", position: "relative"}}>
                {/*<div className="overlay">*/}
                    {/*<div className="container" style={{maxHeight: "100px"}}>*/}
                        <div className="row d-flex header-area">
                            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#0b0008"}}>



                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbar-content" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse justify-content-center"
                                     id="navbar-content">
                                    <a className="navbar-brand" href="/">
                                        <img src="/assets/images/fav.png" className="fav d-none d-lg-block d-xl-none"
                                             alt="fav"/>
                                        <img src="/assets/images/logo.png" style={{width: "80px"}}
                                             className="logo d-block d-lg-none d-xl-block"
                                             alt="logo"/>
                                    </a>
                                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0 text-center ">
                                        <li className="nav-item" style={{width: "170px", textAlign: "left"}}>
                                            <a className={`nav-link ${pathName == "/" && "active"}`} href="/">Home</a>
                                        </li>
                                        <li className="nav-item" style={{width: "180px", textAlign: "left"}}>
                                            <a className={`nav-link ${pathName == "/games" && "active"}`} href="/games">Online
                                                Games</a>
                                        </li>
                                        <li className="nav-item" style={{width: "170px", textAlign: "left"}}>
                                            <a className={`nav-link ${pathName == "/offers/CasinoOffer" && "active"}`}
                                               href="/offers/CasinoOffer">Offers</a>
                                        </li>
                                        <li className="nav-item" style={{width: "170px", textAlign: "left"}}>
                                            <a className={`nav-link ${pathName == "/aboutus" && "active"}`}
                                               href="/aboutus">About Us</a>
                                        </li>
                                        <li className="nav-item" style={{width: "170px", textAlign: "left"}}>
                                            <a className={`nav-link ${pathName == "/contact" && "active"}`}
                                               href="/contact">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    {/*</div>*/}
                {/*</div>*/}
            </header>

            {children}

            <footer className="footer-section">
                <div className="container">
                    <div className="footer-area pt-120">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer-top d-flex align-items-center justify-content-between">
                                    <a href="/">
                                        <img src="/assets/images/logo.png" className="logo" alt="logo"/>
                                    </a>
                                    <div className="footer-box">
                                        <ul className="footer-link d-flex align-items-center gap-4">
                                            <li><a href="/aboutus">About Us</a></li>
                                            <li><a href="/contact">Contact</a></li>
                                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                                            <li><a href="/terms-conditions">Terms of Service</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="row justify-content-between align-items-center">
                                <div
                                    className="col-lg-7 d-flex justify-content-center justify-content-lg-start order-lg-0 order-1">
                                    <div className="copyright text-center">
                                        <p>Copyright © 2023, Moding - All Right Reserved</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-5 d-flex justify-content-center justify-content-lg-end">
                                    <div className="social">
                                        <ul className="footer-link gap-2 d-flex align-items-center">
                                            <li>
                                                <div className="icon-area" style={{cursor: "pointer"}} onClick={() => {
                                                    window.location.href = state.fbLink
                                                }}>
                                                    <img src="/assets/images/icon/icon-fb.png" alt="image"/>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-area" style={{cursor: "pointer"}} onClick={() => {
                                                    window.location.href = state.instagramLink
                                                }}>
                                                    <img src="/assets/images/icon/icon-instagram.png" alt="image"/>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-area" style={{cursor: "pointer"}} onClick={() => {
                                                    window.location.href = state.twitterLink
                                                }}>
                                                    <img src="/assets/images/icon/icon--twitter.png" alt="image"/>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-area" style={{cursor: "pointer"}} onClick={() => {
                                                    window.location.href = state.whatsappLink
                                                }}>
                                                    <img src="/assets/images/icon/icon-whatsapp.png" alt="image"/>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </body>
            </html>
        </>
    );
}


