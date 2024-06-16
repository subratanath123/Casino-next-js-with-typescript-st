import React, {useEffect, useState} from "react";
import axios from "axios";

export const Footer = () => {

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
    );
};