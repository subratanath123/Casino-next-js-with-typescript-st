import {Banner} from "@/constants/Constants";
import React from "react";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

export const GeneralOfferItem: React.FC<Banner> = ({
                                                       id,
                                                       link,
                                                       bannerSubtitle,
                                                       offerCategory,
                                                       bannerDetails,
                                                       bannerPhotoIdList,
                                                       order,
                                                       index,
                                                       buttonName
                                                   }) => {

    return (
        <div className="col-lg-6">
            <div className="single-box"
                 style={{
                     backgroundImage: "url(/assets/images/card.png)",
                     backgroundSize: "100% 100%",
                     backgroundColor: "transparent",
                     backgroundRepeat: "no-repeat",
                 }}>

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
                <div className="text-box">
                    <p>Welcome Bonus</p>
                    <h5>{bannerDetails || "Claim exclusive discount"}</h5>
                    <p>{bannerSubtitle || "Limited time discount"}</p>
                    <Link href={link} className="cmn-btn">
                        {buttonName || "Claim"}
                    </Link>
                </div>
            </div>
        </div>
    );
};