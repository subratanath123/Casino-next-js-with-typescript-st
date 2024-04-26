'use client'
import React from "react";
import OnlineGameOfferSection from "@/components/landingpageItems/OnlineGameOfferSection";
import HowToPlayOfferSection from "@/components/landingpageItems/HowToPlayOfferSection";
import AboutUsSection from "@/components/landingpageItems/AboutUsSection";
import CustomerReviewSection from "@/components/landingpageItems/CustomerReviewSection";
import {LandingPageHeaderSection} from "@/components/landingpageItems/LandingPageHeaderSection";
import ConsumerLayout from "@/components/ConsumerLayout";

export default function Dashboard() {




    return (
        <>
            <ConsumerLayout>
                <LandingPageHeaderSection/>
                <OnlineGameOfferSection/>
                <HowToPlayOfferSection/>
                <AboutUsSection/>
                <CustomerReviewSection/>
            </ConsumerLayout>
        </>
    );
}


