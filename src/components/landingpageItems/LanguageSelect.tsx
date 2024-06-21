import React, {useEffect, useState} from "react";
import {ListGroup, Offcanvas} from "react-bootstrap";
import {countries, UserLocation} from "@/constants/Constants";
import axios from "axios";

export const LanguageSelect = ({ showFlag }) => {

    const [selectedFlag, setSelectedFlag] = useState(
        ""
    );

    if (typeof window !== 'undefined' && !localStorage.getItem("lang")) {
        localStorage.setItem("lang", "us");
        setSelectedFlag("us");
    }

    const [show, setShow] = useState(false);
    const handleShow = () => {

        if(!show){

            setShow(true);
        }else{

            setShow(false);
        }

    };
    const handleClose = () => setShow(false);

    const selectFlag = (flag: any) => {
        setSelectedFlag(flag);
        localStorage.setItem('lang', flag);
        handleClose();
        window.location.reload();
    };

    useEffect(() => {
            setSelectedFlag(localStorage.getItem("lang") || "us");
        },
        []
    );

    return (
        <>
            {
                showFlag
                &&
                <>
                    <a className="flag-icon" onClick={handleShow} style={{paddingLeft: "2%"}}>
                        <img src={`/assets/flags/${selectedFlag}.png`} width="50px" alt="Selected Flag"/>
                        <img src={`/assets/flags/down-arrow.png`}
                             style={{marginLeft: "14px"}}
                             width="20px"
                             alt="Selected Flag"/>
                    </a>

                    <Offcanvas show={show} onHide={handleClose} placement="start"
                               style={{backgroundColor: "black", zIndex: "9999999"}}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Select a Flag</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ListGroup style={{paddingTop: "40px"}}>
                                {Object.entries(countries).map(([code, name]) => (
                                    <ListGroup.Item
                                        action
                                        onClick={() => selectFlag(`${code}`)}
                                        style={{backgroundColor: "black", color: "white",}}
                                        key={code}
                                    >
                                        <img src={`/assets/flags/${code}.png`} alt={name} width="50px"
                                             className="flag-list-icon"/> {name}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Offcanvas.Body>
                    </Offcanvas>
                </>
            }
        </>
    );
};