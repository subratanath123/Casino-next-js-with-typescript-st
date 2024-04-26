import {Banner} from "@/constants/Constants";
import React from "react";
import Image from "next/image";
import Script from "next/script";

export const HowToPlayOfferItem: React.FC<Banner> = ({
                                                         id,
                                                         link,
                                                         offerCategory,
                                                         bannerDetails,
                                                         bannerPhotoIdList,
                                                         order,
                                                         index,
                                                         buttonName
                                                     }) => {

    const numberMap: string[] = ['', 'second', 'third', 'fourth'];

    return (
        <div className="col-xl-3 col-sm-6">
            <div className={`single-box ${numberMap[index % 4]}`}>
                <div className="icon-box">
                    <Image
                        key={`image-${id}`}
                        width="100"
                        height="100"
                        src={`${'https://one-dollar-admin.onrender.com'}/v1/public/banner/image/${bannerPhotoIdList[0]}`}
                        className="img-fluid mx-auto rounded"
                        alt=""
                    />
                </div>
                <br></br>
                <h5>{bannerDetails}</h5>
                <p>{buttonName}</p>
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
};