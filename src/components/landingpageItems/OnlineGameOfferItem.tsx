import {Offer} from "@/constants/Constants";
import React from "react";
import Image from "next/image";
import Script from "next/script";
import Carousel from "react-multi-carousel";

export const OnlineGameOfferItem: React.FC<Offer> = ({
                                                         id,
                                                         link,
                                                         offerType,
                                                         details,
                                                         photoIdList,
                                                         order,
                                                         buttonName
                                                     }) => (

    <div className="single-box mid text-center" onClick={event => window.open(link, '_blank')}>
        <div className="zoom-on-hover">
            <Image
                key={`image-${id}`}
                width="196"
                height="250"
                style={{cursor: "pointer"}}
                src={(photoIdList && photoIdList.length > 0) ? `${'https://one-dollar-admin.onrender.com'}/v1/public/offer/image/${photoIdList[0]}` : ''}
                className="img-fluid mx-auto rounded"
                alt=""
            />
        </div>
    </div>
);