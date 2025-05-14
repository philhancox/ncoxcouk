import type {Metadata} from "next";
import {DM_Sans} from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "ncox.co.uk, the second home of Phil Hancox",
    description: "Have you seen my email address and wondered what is ncox.co.uk? Well, this is it! :)",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
