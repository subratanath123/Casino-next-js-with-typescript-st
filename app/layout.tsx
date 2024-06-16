import React from "react";
import Providers from "@/components/Providers";
import {CookiesProvider} from "next-client-cookies/server";

export default function RootLayout({children}: { children: React.ReactNode }) {

    return (
        <CookiesProvider>
            {children}
        </CookiesProvider>
    )
}
