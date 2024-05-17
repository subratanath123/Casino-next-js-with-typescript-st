import React, {useEffect, useState} from 'react';
import {Offer} from "@/constants/Constants";
import axios from "axios";
import {OnlineGameOfferItem} from "@/components/landingpageItems/OnlineGameOfferItem";
import Carousel from "react-multi-carousel";

export default function OnlineGameOfferSection() {
    const [state, setState] = useState<{
        items: Offer[]
    }>({
        items: []
    });


    useEffect(() => {
            axios
                .get('https://one-dollar-admin.onrender.com/v1/public/offer/OnlineGame')
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

                            <Carousel key="onlineGameCarosol" responsive={{
                                superLargeDesktop: {
                                    // the naming can be any, depends on you.
                                    breakpoint: {max: 4000, min: 3000},
                                    items: 5
                                },
                                desktop: {
                                    breakpoint: {max: 3000, min: 1024},
                                    items: 4
                                },
                                tablet: {
                                    breakpoint: {max: 1024, min: 464},
                                    items: 3
                                },
                                mobile: {
                                    breakpoint: {max: 464, min: 0},
                                    items: 1
                                }
                            }}>
                                {state.items.map((item: Offer, index: number) => (
                                    <OnlineGameOfferItem key={`online-games-${index}`} {...item} />
                                ))}
                            </Carousel>

                        </div>
                        <div className="col-lg-12">
                            <div className="btn-area mt-40 text-center">
                                <a href="/games" className="btn-lg btn-success  rounded glow-on-hover" style={{color:"black", backgroundColor:"#00FF00"}}>
                                    All Games
                                </a>
                            </div>
                        </div>
                    
                </div>
            </div>
        </section>
    );
}


