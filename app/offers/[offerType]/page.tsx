"use client"

import Script from "next/script";
import React, {useEffect, useState} from "react";
import {Offer, OfferType, offerUiLabelMap} from "@/constants/Constants";
import axios from "axios";
import {GeneralOfferItem} from "@/components/landingpageItems/GeneralOfferItem";
import Link from "next/link";
import ConsumerLayout from "@/components/ConsumerLayout";
import Image from "next/image";

export default function ShowOffers({params}: { params: { offerType: OfferType } }) {

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
            .get('https://one-dollar-admin.onrender.com/v1/public/offer/offerList/' + params.offerType, {
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
            <section className="banner-section inner-banner privacy">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h1 className="sub-title">
                                            <b>
                                                {offerUiLabelMap.get(params.offerType)?.toUpperCase()}
                                            </b>
                                        </h1>
                                        <h4 className="title bold-title">WELCOME BONUS</h4>
                                        <h2 className="title bold-title">UPTO $300 </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="promotions">
                {/*<div className="col-md-8 d-flex justify-content-center ">*/}
                {/*    <Image src={`/assets/images/${offerUiLabelMap.get(params.offerType)}-icon.png`} alt="pokers"*/}
                {/*           width="600" height="300"*/}
                {/*           className="floated-image"/>*/}
                {/*</div>*/}

                <div className="overlay pt-120 pb-120">
                    <div className="container pt-120">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="slots" role="tabpanel"
                                 aria-labelledby="slots-tab">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="slots-all"
                                         role="tabpanel" aria-labelledby="slots-all-tab">
                                        <div className="row">
                                            <div className="col-md-2 col-xl-2"></div>
                                            <div className="col-md-8 col-xl-8">
                                                <div className="row justify-content-between">

                                                    {
                                                        Array.from(offerUiLabelMap).map(([key, value]) => (
                                                            <div className="col-auto mb-2 mb-md-0">
                                                                <a href={`/offers/` + key} className={`red-button${(key == params.offerType ? "-marked": "")}`}>
                                                                    {value}
                                                                </a>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-xl-2"/>
                                        </div>


                                        <br/>
                                        <br/>
                                        <div className="row cus-mar">
                                            {state.items.map((item: Offer, index: number) => (
                                                <GeneralOfferItem key={`online-games-${index}`} {...item} />
                                            ))}
                                        </div>
                                        <div className="btn-area mt-3 text-center">
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <Link href="javascript:void(0)"
                                                  className="btn-lg btn-success  rounded grow-on-hover" style={{color:"black", backgroundColor:"rgba(0,255,0,0.69)"}}
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