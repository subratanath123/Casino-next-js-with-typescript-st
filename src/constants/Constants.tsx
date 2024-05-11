import {Session} from "next-auth";

export interface OfferSectionProps {
    title: string;
    subTitle: string;
    description: string;
    items: Offer[];
}

export interface Offer {
    id: string;
    link: string;
    index: number; //for frontend use
    bannerCategory: string;
    offerType: string;
    details: string;
    subtitle: string;
    title: string;
    order: string;
    validityFrom: string;
    validityTo: string;
    buttonName: string;
    deleted: string;
    photoIdList: string[]
}

export interface BannerList {
    bannerList: Offer[]
}

export type OfferCategory = 'Offer' | 'VipOffer' | 'SlideBanner' | 'OnlineGame';
export type OfferType = "CasinoOffer" | "CryptoOffer" | "LotteryOffer" | "SportsOffer";

export const offerUiLabelMap: Map<OfferType, String> = (() => {
    const map = new Map<OfferType, String>();

    // Initialize the map with default values
    map.set("CasinoOffer", "Casino");
    map.set("CryptoOffer", "Crypto");
    map.set("LotteryOffer", "Lottery");
    map.set("SportsOffer", "Sports");

    return map;
})();

export type SubscriptionType = 'MonthlySubscription' | 'AnnualSubscription';

export interface UserSubscription {
    id: string;
    created: number;
    endDate: number;
    subscriptionType: string;
    recurring: boolean;
    price: number;
    deactivated: boolean;
}

export interface CustomSession extends Session {
    access_token: string;
}