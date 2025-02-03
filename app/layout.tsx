import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { AuroraBackground } from "@/components/AuroraBackground";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'Anisa Spaho - Personal Website',
    description: 'Personal website of Anisa Spaho, student at Suffolk University.',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`bg-[#3F322F] ${inter.className}`}>
                {/* <AuroraBackground className="min-h-screen"> */}
                <div className="w-full">
                    <Navigation />
                    <main className="container mx-auto px-4 py-8 z-50">
                        {children}
                    </main>
                </div>
                {/* </AuroraBackground> */}
            </body>
        </html>
    );
}

