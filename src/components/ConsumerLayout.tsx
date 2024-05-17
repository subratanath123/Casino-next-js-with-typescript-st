import React from 'react';
import {usePathname} from "next/navigation";

export default function ConsumerLayout({children}: { children: React.ReactNode }) {
    const pathName = usePathname();

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
            <a href="javascript:void(0)" className="scrollToTop"><i className="fas fa-angle-double-up"></i></a>

            <header className="header-section" style={{zIndex: "99999999999999"}}>
                <div className="overlay">
                    <div className="container">
                        <div className="row d-flex header-area">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="/">
                                    <img src="/assets/images/fav.png" className="fav d-none d-lg-block d-xl-none"
                                         alt="fav"/>
                                    <img src="/assets/images/logo.png" className="logo d-block d-lg-none d-xl-block"
                                         alt="logo"/>
                                </a>

                                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbar-content">
                                    <i className="fas fa-bars"></i>
                                </button>

                                <div className="collapse navbar-collapse justify-content-between"
                                     id="navbar-content">
                                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className={`nav-link ${pathName == "/" && "active"}`} href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${pathName == "/games" && "active"}`} href="/games">Online
                                                Games</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${pathName == "/offers/CasinoOffer" && "active"}`}
                                               href="/offers/CasinoOffer">Offers</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${pathName == "/aboutus" && "active"}`}
                                               href="/aboutus">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link ${pathName == "/contact" && "active"}`}
                                               href="/contact">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
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
                                            <li><a href="javascript:void(0)"><i
                                                className="fb fab fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0)"><i
                                                className="ins fab fa-instagram"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0)"><i className="tw fab fa-twitter"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0)"><i
                                                className="in fab fa-linkedin-in"></i></a>
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


