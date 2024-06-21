"use client"
import React, {useEffect, useRef, useState} from 'react';
import {usePathname} from "next/navigation";
import {Footer} from "@/components/landingpageItems/Footer";
import {LanguageSelect} from "@/components/landingpageItems/LanguageSelect";

export default function ConsumerLayout({children}: { children: React.ReactNode }) {
    const pathName = usePathname();
    const burgerMenuRef = useRef(null);
    const [isBurgerMenuExpanded, setIsBurgerMenuExpanded] = useState(false);

    useEffect(() => {
        const handleAriaExpandedChange = () => {
            if (burgerMenuRef.current) {
                const expanded = burgerMenuRef.current.getAttribute('aria-expanded') === 'true';
                setIsBurgerMenuExpanded(expanded);
            }
        };

        const observer = new MutationObserver(handleAriaExpandedChange);

        if (burgerMenuRef.current) {
            observer.observe(burgerMenuRef.current, {
                attributes: true,
                attributeFilter: ['aria-expanded'],
            });
        }

        handleAriaExpandedChange();

        return () => {
            observer.disconnect();
        };
    }, []);



    return (
        <>
            <html lang="en">

            <head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <title>VIP - Play & Win! </title>

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
                    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#0b0008"}}>
                        <div className="container-fluid">
                            <LanguageSelect showFlag={!isBurgerMenuExpanded}/>

                            <button ref={burgerMenuRef}
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbar-content"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">

                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse justify-content-center"
                                 id="navbar-content">
                                <a className="navbar-brand" href="/" style={{textAlign: "left"}}>
                                    <img src="/assets/images/fav.png" className="fav d-none d-lg-block d-xl-none"
                                         alt="fav"/>
                                    <img src="/assets/images/logo.png" style={{width: "80px"}}
                                         className="logo d-block d-lg-none d-xl-block"
                                         alt="logo"/>
                                </a>
                                <ul className="navbar-nav mr-auto mb-2 mb-lg-0 text-center ">
                                    <li className="nav-item" style={{marginLeft: "100px", textAlign: "left"}}>
                                        <a className={`nav-link ${pathName == "/" && "active"}`} href="/">Home</a>
                                    </li>
                                    <li className="nav-item" style={{marginLeft: "100px", textAlign: "left"}}>
                                        <a className={`nav-link ${pathName == "/games" && "active"}`} href="/games">Online
                                            Games</a>
                                    </li>
                                    <li className="nav-item" style={{marginLeft: "100px", textAlign: "left"}}>
                                        <a className={`nav-link ${pathName == "/offers/CasinoOffer" && "active"}`}
                                           href="/offers/CasinoOffer">Offers</a>
                                    </li>
                                    <li className="nav-item" style={{marginLeft: "100px", textAlign: "left"}}>
                                        <a className={`nav-link ${pathName == "/aboutus" && "active"}`}
                                           href="/aboutus">About Us</a>
                                    </li>
                                    <li className="nav-item" style={{marginLeft: "100px", textAlign: "left"}}>
                                        <a className={`nav-link ${pathName == "/contact" && "active"}`}
                                           href="/contact">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </nav>
                </div>
                {/*</div>*/}
                {/*</div>*/}
            </header>

            {children}

            <Footer/>
            </body>
            </html>
        </>
    );
}


