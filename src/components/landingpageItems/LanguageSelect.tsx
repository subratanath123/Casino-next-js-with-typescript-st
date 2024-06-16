import React, {useState} from "react";
import {ListGroup, Offcanvas} from "react-bootstrap";
import {countries, UserLocation} from "@/constants/Constants";
import axios from "axios";

export const LanguageSelect = () => {
    const [location, setLocation] = useState<UserLocation>({lat: null, lng: null});
    const [country, setCountry] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error: GeolocationPositionError) => {
                    setError(error.message);
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    };

    const fetchCountry = async (lat: number, lng: number) => {
        try {
            const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
                params: {
                    q: `${lat}+${lng}`,
                    key: 'AIzaSyCs68yEJU3FsR5QVfSVRaJ-tpHwgyg61to'
                }
            });
            const country = response.data.results[0].components.country;
            setCountry(country);
        } catch (error) {
            setError("Error fetching country information");
        }
    };

    const [selectedFlag, setSelectedFlag] = useState(
        localStorage.getItem("lang")
    );

    if (!localStorage.getItem("lang")) {
        localStorage.setItem("lang", "us");
        setSelectedFlag("us");
    }

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const selectFlag = (flag: any) => {
        setSelectedFlag(flag);
        localStorage.setItem('lang', flag);
        handleClose();
        window.location.reload();
    };

    return (
        <>
            <a className="flag-icon" onClick={handleShow} style={{paddingRight: "2%"}}>
                <img src={`/assets/flags/down-arrow.png`}
                     style={{marginRight: "14px"}}
                     width="20px"
                     alt="Selected Flag"/>
                <img src={`/assets/flags/${selectedFlag}.png`} alt="Selected Flag"/>
            </a>

            <Offcanvas show={show} onHide={handleClose} placement="end"
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
                                <img src={`/assets/flags/${code}.png`} alt={name}
                                     className="flag-list-icon"/> {name}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};