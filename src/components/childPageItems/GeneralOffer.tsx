import {Banner} from "@/constants/Constants";
import React from "react";

export const GeneralOffer: React.FC<Banner> = ({
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
        <div className="col-md-3 col-xl-2 col-sm-6">
            <button className="card" style={{backgroundColor: "transparent"}}
                 onClick={event => window.location.href = link}>
                <img
                    key={`image-${id}`}
                    width="100%"
                    height="300"
                    src={`${'https://one-dollar-admin.onrender.com'}/v1/public/banner/image/${bannerPhotoIdList[0]}`}
                    className="card-img-top"
                    alt=""
                />
            </button>
            <div className="card-body">
                <h5 className="card-title">{bannerDetails || "Claim Offer"}</h5>
                <p className="card-text">
                    {bannerSubtitle || "Limited Time Offer. You you miss it you will regret"}
                </p>
            </div>
        </div>
    );
};