import React from 'react';
import Skeleton from "react-loading-skeleton";

export default function Loading({}) {

    return (
        <>
            <Skeleton count={10} height={10}/>
            <div className="d-flex justify-content-center">
                <div className="spinner-grow" style={{color: "white", textAlign: "center"}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow" style={{color: "white", textAlign: "center"}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow" style={{color: "white", textAlign: "center"}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <Skeleton count={30} height={10}/>

        </>
    )
};


