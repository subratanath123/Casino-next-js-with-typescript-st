import {Session} from "next-auth";

export interface OfferSectionProps {
    title: string;
    subTitle: string;
    description: string;
    items: Offer[];
}

export interface UserLocation {
    lat: number | null;
    lng: number | null;
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

export const offerTitleTextMap: Map<OfferType, String> = (() => {
    const map = new Map<OfferType, String>();

    // Initialize the map with default values
    map.set("CasinoOffer", "Casino Slot Offers");
    map.set("CryptoOffer", "Crypto General Offers");
    map.set("LotteryOffer", "Lottery Offers");
    map.set("SportsOffer", "Sports Offers");

    return map;
})();

export const offerSubTitleTextMap: Map<OfferType, String> = (() => {
    const map = new Map<OfferType, String>();

    // Initialize the map with default values
    map.set("CasinoOffer", "Lights, Camera, Casino Action! Dive into exclusive offers on your favorite slots and table games.");
    map.set("CryptoOffer", "Ride the Crypto Wave! Explore exclusive offers for your favorite crypto bets");
    map.set("LotteryOffer", "Free Lottery Fun: Try Your Luck and Unlock Exciting Virtual Rewards!");
    map.set("SportsOffer", "Outsmart the Odds! Unleash your inner sports analyst with exclusive bonus offers.");

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

export const countries = {
    "af": "Afghanistan",
    "al": "Albania",
    "dz": "Algeria",
    "ad": "Andorra",
    "ao": "Angola",
    "ag": "Antigua and Barbuda",
    "ar": "Argentina",
    "am": "Armenia",
    "au": "Australia",
    "at": "Austria",
    "az": "Azerbaijan",
    "bs": "Bahamas",
    "bh": "Bahrain",
    "bd": "Bangladesh",
    "bb": "Barbados",
    "by": "Belarus",
    "be": "Belgium",
    "bz": "Belize",
    "bj": "Benin",
    "bt": "Bhutan",
    "bo": "Bolivia",
    "ba": "Bosnia and Herzegovina",
    "bw": "Botswana",
    "br": "Brazil",
    "bn": "Brunei",
    "bg": "Bulgaria",
    "bf": "Burkina Faso",
    "bi": "Burundi",
    "cv": "Cabo Verde",
    "kh": "Cambodia",
    "cm": "Cameroon",
    "ca": "Canada",
    "cf": "Central African Republic",
    "td": "Chad",
    "cl": "Chile",
    "cn": "China",
    "co": "Colombia",
    "km": "Comoros",
    "cd": "Congo, Democratic Republic of the",
    "cg": "Congo, Republic of the",
    "cr": "Costa Rica",
    "hr": "Croatia",
    "cu": "Cuba",
    "cy": "Cyprus",
    "cz": "Czech Republic (Czechia)",
    "dk": "Denmark",
    "dj": "Djibouti",
    "dm": "Dominica",
    "do": "Dominican Republic",
    "tl": "East Timor (Timor-Leste)",
    "ec": "Ecuador",
    "eg": "Egypt",
    "sv": "El Salvador",
    "gq": "Equatorial Guinea",
    "er": "Eritrea",
    "ee": "Estonia",
    "sz": "Eswatini",
    "et": "Ethiopia",
    "fj": "Fiji",
    "fi": "Finland",
    "fr": "France",
    "ga": "Gabon",
    "gm": "Gambia",
    "ge": "Georgia",
    "de": "Germany",
    "gh": "Ghana",
    "gr": "Greece",
    "gd": "Grenada",
    "gt": "Guatemala",
    "gn": "Guinea",
    "gw": "Guinea-Bissau",
    "gy": "Guyana",
    "ht": "Haiti",
    "hn": "Honduras",
    "hu": "Hungary",
    "is": "Iceland",
    "in": "India",
    "id": "Indonesia",
    "ir": "Iran",
    "iq": "Iraq",
    "ie": "Ireland",
    "il": "Israel",
    "it": "Italy",
    "ci": "Ivory Coast (Côte d'Ivoire)",
    "jm": "Jamaica",
    "jp": "Japan",
    "jo": "Jordan",
    "kz": "Kazakhstan",
    "ke": "Kenya",
    "ki": "Kiribati",
    "kp": "Korea, North (North Korea)",
    "kr": "Korea, South (South Korea)",
    "xk": "Kosovo",
    "kw": "Kuwait",
    "kg": "Kyrgyzstan",
    "la": "Laos",
    "lv": "Latvia",
    "lb": "Lebanon",
    "ls": "Lesotho",
    "lr": "Liberia",
    "ly": "Libya",
    "li": "Liechtenstein",
    "lt": "Lithuania",
    "lu": "Luxembourg",
    "mg": "Madagascar",
    "mw": "Malawi",
    "my": "Malaysia",
    "mv": "Maldives",
    "ml": "Mali",
    "mt": "Malta",
    "mh": "Marshall Islands",
    "mr": "Mauritania",
    "mu": "Mauritius",
    "mx": "Mexico",
    "fm": "Micronesia",
    "md": "Moldova",
    "mc": "Monaco",
    "mn": "Mongolia",
    "me": "Montenegro",
    "ma": "Morocco",
    "mz": "Mozambique",
    "mm": "Myanmar (Burma)",
    "na": "Namibia",
    "nr": "Nauru",
    "np": "Nepal",
    "nl": "Netherlands",
    "nz": "New Zealand",
    "ni": "Nicaragua",
    "ne": "Niger",
    "ng": "Nigeria",
    "mk": "North Macedonia",
    "no": "Norway",
    "om": "Oman",
    "pk": "Pakistan",
    "pw": "Palau",
    "pa": "Panama",
    "pg": "Papua New Guinea",
    "py": "Paraguay",
    "pe": "Peru",
    "ph": "Philippines",
    "pl": "Poland",
    "pt": "Portugal",
    "qa": "Qatar",
    "ro": "Romania",
    "ru": "Russia",
    "rw": "Rwanda",
    "kn": "Saint Kitts and Nevis",
    "lc": "Saint Lucia",
    "vc": "Saint Vincent and the Grenadines",
    "ws": "Samoa",
    "sm": "San Marino",
    "st": "Sao Tome and Principe",
    "sa": "Saudi Arabia",
    "sn": "Senegal",
    "rs": "Serbia",
    "sc": "Seychelles",
    "sl": "Sierra Leone",
    "sg": "Singapore",
    "sk": "Slovakia",
    "si": "Slovenia",
    "sb": "Solomon Islands",
    "so": "Somalia",
    "za": "South Africa",
    "ss": "South Sudan",
    "es": "Spain",
    "lk": "Sri Lanka",
    "sd": "Sudan",
    "sr": "Suriname",
    "se": "Sweden",
    "ch": "Switzerland",
    "sy": "Syria",
    "tw": "Taiwan",
    "tj": "Tajikistan",
    "tz": "Tanzania",
    "th": "Thailand",
    "tg": "Togo",
    "to": "Tonga",
    "tt": "Trinidad and Tobago",
    "tn": "Tunisia",
    "tr": "Turkey",
    "tm": "Turkmenistan",
    "tv": "Tuvalu",
    "ug": "Uganda",
    "ua": "Ukraine",
    "ae": "United Arab Emirates",
    "gb": "United Kingdom",
    "us": "United States of America",
    "uy": "Uruguay",
    "uz": "Uzbekistan",
    "vu": "Vanuatu",
    "va": "Vatican City (Holy See)",
    "ve": "Venezuela",
    "vn": "Vietnam",
    "ye": "Yemen",
    "zm": "Zambia",
    "zw": "Zimbabwe"
};
