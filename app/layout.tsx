import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

import Providers from "@/components/Providers";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Dynamic Forms",
    description: "Dynamic forms assesment project",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} p-5 antialiased`}
            >
                <Providers>
                    <header className="container">
                        <h1 className="text-center text-3xl font-bold mb-6">
                            <Link href="/">Dynamic Forms</Link>
                        </h1>

                        <nav className="flex items-center justify-center gap-4">
                            <Link href="/static-page">Static</Link>
                            <Link href="/client-page">Client</Link>
                        </nav>
                    </header>

                    <div className="mx-auto container p-5">{children}</div>
                </Providers>
            </body>
        </html>
    );
}
