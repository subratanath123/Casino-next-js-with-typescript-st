import {Offer} from "@/constants/Constants";
import React from "react";

export const GeneralOffer: React.FC<Offer> = ({
                                                   id,
                                                   link,
                                                   subtitle,
                                                   offerType,
                                                   details,
                                                   photoIdList,
                                                   order,
                                                   index,
                                                   buttonName
                                               }) => {

    return (
        photoIdList && photoIdList.length > 0
        &&
        <div className="col-md-3 col-xl-2 col-sm-6">
            <button className="card" style={{backgroundColor: "transparent"}}
                 onClick={event => window.location.href = link}>
                <img
                    key={`image-${id}`}
                    width="100%"
                    height="300"
                    src={`${'https://one-dollar-admin.onrender.com'}/v1/public/offer/image/${photoIdList[0]}`}
                    className="card-img-top"
                    alt=""
                />
            </button>
            <div className="card-body">
                <h5 className="card-title">{details || "Claim Offer"}</h5>
                <p className="card-text">
                    {subtitle || "Limited Time Offer. You you miss it you will regret"}
                </p>
            </div>
        </div>
    );
};