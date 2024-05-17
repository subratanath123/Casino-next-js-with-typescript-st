"use client"

import Script from "next/script";
import React, {useEffect, useState} from "react";
import {Offer} from "@/constants/Constants";
import axios from "axios";
import {GeneralOffer} from "@/components/childPageItems/GeneralOffer";
import Link from "next/link";
import ConsumerLayout from "@/components/ConsumerLayout";
import Image from "next/image";

export default function ShowOnlineGames() {

    const [state, setState] = useState<{
        items: Offer[],
        page: number,
        limit: number,
    }>({
        items: [],
        page: 0,
        limit: 20
    });

    function fetchItems() {
        axios
            .get('https://one-dollar-admin.onrender.com/v1/public/offer/OnlineGame', {
                params: {
                    "page": state.page,
                    "limit": state.limit,
                }
            })
            .then((response) => {

                let page = state.page + 1;

                setState({
                    ...state,
                    items: [...state.items, ...response.data],
                    page: page
                });

            })
            .catch((error) => {
                console.error('Online Game Fetching failed:', error);
            });
    }

    useEffect(() => {
            fetchItems();
        },
        []
    );

    return (
        <ConsumerLayout>
            <section className="banner-section inner-banner games">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="main-content">
                                        <h1>Games</h1>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link href="">Home</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Games
                                                    </li>
                                                </ol>
                                            </nav>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="games-section">
                <div className="col-md-8 d-flex justify-content-center ">
                    <Image src="/assets/images/pokers.png" alt="pokers" width="600" height="300" className="floated-image"/>
                </div>

                <div className="overlay pb-120">
                    <div className="container pt-120">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="slots" role="tabpanel"
                                 aria-labelledby="slots-tab">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="slots-all"
                                         role="tabpanel" aria-labelledby="slots-all-tab">
                                        <div className="row row-cols-1 row-cols-md-5 g-5">
                                            {state.items.map((item: Offer, index: number) => (
                                                <GeneralOffer key={`online-games-${index}`} {...item} />
                                            ))}
                                        </div>
                                        <div className="btn-area mt-3 text-center">
                                            <Link href="javascript:void(0)"
                                                  className="btn-lg btn-success  rounded grow-on-hover" style={{color:"black", backgroundColor:"#00FF00"}}
                                                  onClick={event => fetchItems()}
                                            >
                                                Load More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Script src="/assets/js/jquery.min.js"></Script>
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