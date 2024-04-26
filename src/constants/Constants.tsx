import {Session} from "next-auth";

export interface OfferSectionProps {
    title: string;
    subTitle: string;
    description: string;
    items: Banner[];
}

export interface Banner {
    id: string;
    link: string;
    index: number; //for frontend use
    bannerCategory: string;
    offerCategory: string;
    bannerDetails: string;
    bannerSubtitle: string;
    order: string;
    validityFrom: string;
    validityTo: string;
    buttonName: string;
    deleted: string;
    bannerPhotoIdList: string[]
}

export interface BannerList {
    bannerList: Banner[]
}

export type BannerCategory = 'Offer' | 'VipOffer' | 'SlideBanner' | 'OnlineGame';
export const offerUiLabelMap: Map<BannerCategory, String> = (() => {
    const map = new Map<BannerCategory, String>();

    // Initialize the map with default values
    map.set("Offer", "Casino");
    map.set("VipOffer", "Crypto");
    map.set("SlideBanner", "Lottery");
    map.set("OnlineGame", "Sports");

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