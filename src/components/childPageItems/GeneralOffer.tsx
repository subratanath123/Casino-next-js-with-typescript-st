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
        <div className="col-md-3 col-xl-2 col-sm-6 zoom-on-hover">
            <button className="card" style={{backgroundColor: "transparent"}}
                 onClick={event => window.open(link, '_blank')}>
                <img
                    key={`image-${id}`}
                    width="100%"
                    height="300"
                    style={{cursor: "progress"}}
                    src={(photoIdList && photoIdList.length > 0) ? `${'https://one-dollar-admin.onrender.com'}/v1/public/offer/image/${photoIdList[0]}` : ''}
                    className="card-img-top"
                    alt=""
                />

                <div className="card-body">
                    <h5 className="card-title">{details || "Claim Offer"}</h5>
                    <p className="card-text">
                        {subtitle || "Limited Time Offer. You you miss it you will regret"}
                    </p>
                </div>
            </button>
        </div>
    );
};