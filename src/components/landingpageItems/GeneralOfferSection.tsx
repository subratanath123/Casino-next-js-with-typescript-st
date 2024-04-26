import React, {useEffect, useState} from 'react';
import {Banner} from "@/constants/Constants";
import axios from "axios";
import {HowToPlayOfferItem} from "@/components/landingpageItems/HowToPlayOfferItem";
import {OnlineGameOfferItem} from "@/components/landingpageItems/OnlineGameOfferItem";
import {GeneralOfferItem} from "@/components/landingpageItems/GeneralOfferItem";
import Link from "next/link";

export default function GeneralOfferSection() {
    const [state, setState] = useState<{
        items: Banner[]
    }>({
        items: []
    });

    useEffect(() => {
            axios
                .get('https://one-dollar-admin.onrender.com/v1/public/banner/offerList/Offer')
                .then((response) => {

                    setState({
                        ...state,
                        items: response.data
                    })

                })
                .catch((error) => {
                    console.error('Online Game Fetching failed:', error);
                });
        },
        []
    );


    return (
        <section className="promotions">
            <div className="overlay pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="lottery-content">
                                <div className="section-text text-center">
                                    <h3 className="sub-title">Offers</h3>
                                    <h2 className="title">Best General Offers</h2>
                                    <p>Generous bonus are ready,Go dig out your treasures!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row cus-mar">

                        {state.items.map((item: Banner, index: number) => (
                            <GeneralOfferItem key={`online-games-${index}`} {...item} />
                        ))}

                    </div>
                    <div className="col-lg-12">
                        <div className="btn-area mt-40 text-center">
                            <Link href="/offers/Offer" className="cmn-btn">
                                All General Offers
                                <i className="icon-d-right-arrow-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}