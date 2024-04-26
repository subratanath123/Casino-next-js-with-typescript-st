import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Banner} from "@/constants/Constants";
import axios from "axios";
import {OnlineGameOfferItem} from "@/components/landingpageItems/OnlineGameOfferItem";
import Link from "next/link";

export default function OnlineGameOfferSection() {
    const [state, setState] = useState<{
        items: Banner[]
    }>({
        items: []
    });

    useEffect(() => {
            axios
                .get('https://one-dollar-admin.onrender.com/v1/public/banner/offerList/OnlineGame')
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
        <section className="popular-game">
            <div className="overlay pt-120 pb-120">
                <div className="abs-item">
                    <img src="/assets/images/popular-game-item.png" alt="icon"/>
                </div>
                <div className="container">
                    <div className="row justify-content-center wow fadeInUp">
                        <div className="col-lg-6 text-center">
                            <div className="section-text">
                                <h2 className="title" style={{color: "var(--primary-color)"}}>Online Game</h2>
                                <p>Dive into a world where every click brings new thrills and challenges,
                                    where the next big win is just a spin away.
                                    Whether you're a seasoned gamer or a casual player looking for some fun,
                                    our diverse collection has something for everyone.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row wow fadeInUp">
                        <div className="games-carousel  row">
                            {state.items.map((item: Banner, index: number) => (
                                <OnlineGameOfferItem key={`online-games-${index}`} {...item} />
                            ))}
                        </div>
                        <div className="col-lg-12">
                            <div className="btn-area mt-40 text-center">
                                <a href="/games" className="cmn-btn">
                                    All Games
                                    <i className="icon-d-right-arrow-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}


