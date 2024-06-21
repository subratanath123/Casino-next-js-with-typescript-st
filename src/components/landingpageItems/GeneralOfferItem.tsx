import {Offer} from "@/constants/Constants";
import React from "react";
import Link from "next/link";

export const GeneralOfferItem: React.FC<Offer> = ({
                                                      id,
                                                      link,
                                                      subtitle,
                                                      title,
                                                      offerType,
                                                      details,
                                                      photoIdList,
                                                      order,
                                                      index,
                                                      buttonName
                                                  }) => {

    return (

        <div className="col-lg-12">
            <div className="row"
                 style={{
                     border: "4px solid rgb(240, 240, 240)",
                     backgroundColor: "#FFFFFF",
                     color: "black",
                     borderRadius: "10px",
                     margin: "20px 0px"
                 }}>

                <div className="col-lg-4 col-md-4" style={{
                    display: "inline-flex",
                    justifyContent: "start",
                    alignItems: "start"
                }}>
                    <img
                        key={`image-${id}`}
                        style={{cursor: "progress"}}
                        src={(photoIdList && photoIdList.length > 0) ? `${'https://one-dollar-admin.onrender.com'}/v1/public/offer/image/${photoIdList[0]}` : ''}
                        className="img-fluid mx-auto rounded"
                        alt=""
                    />
                </div>
                <div className="col-lg-4 col-md-4" style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <p style={{color: "black", fontFamily: "ara bold font", textAlign:"center"}}>
                        <div dangerouslySetInnerHTML={{ __html: details || "Claim exclusive discount" }} />
                        <div dangerouslySetInnerHTML={{ __html: title || "Claim exclusive discount" }} />
                        <div dangerouslySetInnerHTML={{ __html: subtitle || "Claim exclusive discount" }} />
                    </p>
                </div>

                <div className="col-lg-4  col-md-4" style={{
                    display: "inline-flex",
                    justifyContent: "end",
                    alignItems: "center"
                }}>
                    <Link target="_blank" href={link}
                          className="btn-lg btn-success  rounded hover-expand-button"
                          style={{
                              color: "black",
                              marginRight: "40px",
                              minWidth: "170px",
                              backgroundColor: "#FFB800"
                          }}>
                        {buttonName || "Claim"}
                    </Link>
                </div>
            </div>
        </div>
    );
};