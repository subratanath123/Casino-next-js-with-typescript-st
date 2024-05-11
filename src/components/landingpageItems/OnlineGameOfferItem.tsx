import {Offer} from "@/constants/Constants";
import React from "react";
import Image from "next/image";
import Script from "next/script";

export const OnlineGameOfferItem: React.FC<Offer> = ({
                                                id,
                                                link,
                                                offerType,
                                                details,
                                                photoIdList,
                                                order,
                                                buttonName
                                            }) => (
    <div className="col-xl-4 col-sm-6">
        <div className="single-box mid text-center" onClick={event => window.location.href = link}>
            <div className="thumb">
                <Image
                    key={`image-${id}`}
                    width="196"
                    height="250"
                    style={{cursor: "progress"}}
                    src={(photoIdList && photoIdList.length > 0) ? `${'https://one-dollar-admin.onrender.com'}/v1/public/offer/image/${photoIdList[0]}` : ''}
                    className="img-fluid mx-auto rounded"
                    alt=""
                />
            </div>
            <br></br>
            <div className="text-area">
                <h5>{details}</h5>
                <p>{buttonName}</p>
            </div>
        </div>

        <Script src="/assets/js/jquery.min.js"></Script>
        <Script src="/assets/js/jquery-ui.js"></Script>
        <Script src="/assets/js/bootstrap.min.js"></Script>
        <Script src="/assets/js/fontawesome.js"></Script>
        <Script src="/assets/js/plugin/slick.js"></Script>
        <Script src="/assets/js/plugin/jquery.nice-select.min.js"></Script>
        <Script src="/assets/js/plugin/counter.js"></Script>
        <Script src="/assets/js/plugin/jquery.downCount.js"></Script>
        <Script src="/assets/js/plugin/waypoint.min.js"></Script>
        <Script src="/assets/js/plugin/jquery.magnific-popup.min.js"></Script>
        <Script src="/assets/js/plugin/wow.min.js"></Script>
        <Script src="/assets/js/plugin/plugin.js"></Script>
        <Script src="/assets/js/main.js"></Script>
    </div>
);