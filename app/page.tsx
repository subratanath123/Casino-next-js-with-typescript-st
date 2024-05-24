'use client'
import React from "react";
import OnlineGameOfferSection from "@/components/landingpageItems/OnlineGameOfferSection";
import HowToPlayOfferSection from "@/components/landingpageItems/HowToPlayOfferSection";
import AboutUsSection from "@/components/landingpageItems/AboutUsSection";
import CustomerReviewSection from "@/components/landingpageItems/CustomerReviewSection";
import {LandingPageHeaderSection} from "@/components/landingpageItems/LandingPageHeaderSection";
import ConsumerLayout from "@/components/ConsumerLayout";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Script from "next/script";

export default function Dashboard() {




    return (
        <>
            <ConsumerLayout>
                <LandingPageHeaderSection/>
                <OnlineGameOfferSection/>
                <HowToPlayOfferSection/>
                <AboutUsSection/>
                {/*<CustomerReviewSection/>*/}
            </ConsumerLayout>

            <Script src="/assets/js/jquery.min.js"></Script>
            <Script src="/assets/js/jquery-ui.js"></Script>
            <Script src="/assets/js/bootstrap.min.js"></Script>

            <Script src="/assets/js/plugin/slick.js"></Script>
            <Script src="/assets/js/plugin/jquery.nice-select.min.js"></Script>
            <Script src="/assets/js/plugin/counter.js"></Script>
            <Script src="/assets/js/plugin/jquery.downCount.js"></Script>
            <Script src="/assets/js/plugin/waypoint.min.js"></Script>
            <Script src="/assets/js/plugin/jquery.magnific-popup.min.js"></Script>
            <Script src="/assets/js/plugin/wow.min.js"></Script>
            <Script src="/assets/js/plugin/plugin.js"></Script>
            <Script src="/assets/js/main.js"></Script>
        </>
    );
}


