import React, {useEffect, useState} from 'react';
import {Offer} from "@/constants/Constants";
import axios from "axios";
import {GeneralOfferItem} from "@/components/landingpageItems/GeneralOfferItem";
import Link from "next/link";
import {useCookies} from "next-client-cookies";

export default function GeneralOfferSection() {
    const cookies = useCookies();
    const [state, setState] = useState<{
        items: Offer[]
    }>({
        items: []
    });

    useEffect(() => {
            axios
                .get('https://one-dollar-admin.onrender.com/v1/public/offer/offerList/Offer', {
                    params: {
                        "country": cookies.get("lang")
                    }})
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

                        {state.items.map((item: Offer, index: number) => (
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