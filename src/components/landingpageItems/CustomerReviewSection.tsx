import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import Script from "next/script";

export default function CustomerReviewSection() {
    return (
        <section className="promotions">
            <div className="overlay pt-120 pb-120">
                <div className="container">
                <MDBContainer
                    fluid
                    className="py-5"
                    style={{color: "#000"}}
                >
                    <MDBRow className="d-flex justify-content-center">
                        <MDBCol md="10" xl="8" className="text-center">
                            <h3 className="fw-bold mb-4">Testimonials</h3>
                            <p className="mb-4 pb-2 mb-md-5 pb-md-0">

                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="text-center">
                        <MDBCol md="3" className="mb-4 mb-md-0"/>
                        <MDBCol md="6" className="mb-4 mb-md-0">
                            <MDBCard style={{backgroundColor: "transparent"}}>
                                <MDBCardBody className="py-4 mt-2">
                                    <div className="d-flex justify-content-center mb-4">
                                        <img
                                            src="/assets/images/john.png"
                                            className="rounded-circle shadow-1-strong"
                                            width="100"
                                            height="100"
                                        />
                                    </div>
                                    <h5 className="font-weight-bold">John S.</h5>
                                    <h6 className="font-weight-bold my-3">Sports Lover</h6>
                                    <MDBTypography
                                        listUnStyled
                                        className="d-flex justify-content-center"
                                    >
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                    </MDBTypography>
                                    <p className="mb-2">
                                        <MDBIcon fas icon="quote-left" className="pe-2"/>
                                        This website is a lifesaver for casino lovers like me!
                                        I can play all my favorite slots and table games,
                                        which is amazing. They also have some really cool exclusive
                                        bonuses that give you extra spins or chips to play with.
                                        It's a great way to relax and have some fun!
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="3" className="mb-4 mb-md-0"/>

                        <MDBCol md="3" className="mb-4 mb-md-0">
                            <MDBCard style={{backgroundColor: "transparent"}}>
                                <MDBCardBody className="py-4 mt-2">
                                    <div className="d-flex justify-content-center mb-4">
                                        <img
                                            src="/assets/images/michael.png"
                                            className="rounded-circle shadow-1-strong"
                                            width="100"
                                            height="100"
                                        />
                                    </div>
                                    <h5 className="font-weight-bold">Michael T.</h5>
                                    <h6 className="font-weight-bold my-3">Lottery Lover</h6>
                                    <MDBTypography
                                        listUnStyled
                                        className="d-flex justify-content-center"
                                    >
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                    </MDBTypography>
                                    <p className="mb-2">
                                        <MDBIcon fas icon="quote-left" className="pe-2"/>
                                        Security is a big concern for me when it comes to online platforms.
                                        I love that this website prioritizes safety. I can enjoy all the
                                        free games and features with complete peace of mind, knowing my
                                        information is secure.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="3" className="mb-4 mb-md-0">
                            <MDBCard style={{backgroundColor: "transparent"}}>
                                <MDBCardBody className="py-4 mt-2">
                                    <div className="d-flex justify-content-center mb-4">
                                        <img
                                            src="/assets/images/tom.png"
                                            className="rounded-circle shadow-1-strong"
                                            width="100"
                                            height="100"
                                        />
                                    </div>
                                    <h5 className="font-weight-bold">Tom</h5>
                                    <h6 className="font-weight-bold my-3">
                                        Gamer
                                    </h6>
                                    <MDBTypography
                                        listUnStyled
                                        className="d-flex justify-content-center"
                                    >
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                    </MDBTypography>
                                    <p className="mb-2">
                                        <MDBIcon fas icon="quote-left" className="pe-2"/>
                                        Free play that actually entertains! Can't wait to see
                                        what new games they add next
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="3" className="mb-4 mb-md-0">
                            <MDBCard style={{backgroundColor: "transparent"}}>
                                <MDBCardBody className="py-4 mt-2">
                                    <div className="d-flex justify-content-center mb-4">
                                        <img
                                            src="/assets/images/lucky.png"
                                            className="rounded-circle shadow-1-strong"
                                            width="100"
                                            height="100"
                                        />
                                    </div>
                                    <h5 className="font-weight-bold">LuckyLady7</h5>
                                    <h6 className="font-weight-bold my-3">
                                        Bet Lover
                                    </h6>
                                    <MDBTypography
                                        listUnStyled
                                        className="d-flex justify-content-center"
                                    >
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                    </MDBTypography>
                                    <p className="mb-2">
                                        <MDBIcon fas icon="quote-left" className="pe-2"/>
                                        Chill place to hang out and play some free games. Thumbs up!
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="3" className="mb-4 mb-md-0">
                            <MDBCard style={{backgroundColor: "transparent"}}>
                                <MDBCardBody className="py-4 mt-2">
                                    <div className="d-flex justify-content-center mb-4">
                                        <img
                                            src="/assets/images/david.png"
                                            className="rounded-circle shadow-1-strong"
                                            width="100"
                                            height="100"
                                        />
                                    </div>
                                    <h5 className="font-weight-bold">David Lee</h5>
                                    <h6 className="font-weight-bold my-3">
                                        Sports Enthusiastic
                                    </h6>
                                    <MDBTypography
                                        listUnStyled
                                        className="d-flex justify-content-center"
                                    >
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                        <li>
                                            <MDBIcon fas icon="star" size="sm" color="info"/>
                                        </li>
                                    </MDBTypography>
                                    <p className="mb-2">
                                        <MDBIcon fas icon="quote-left" className="pe-2"/>
                                        My friends introduced me to this website and I'm hooked!
                                        It's a great way to unwind after work and try my luck on
                                        the lottery. Thanks for the fun
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                </div>
            </div>
        </section>
    );
}
