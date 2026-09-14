import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds is a licensed clinical psychologist offering grounded, collaborative therapy for adults navigating anxiety, panic, trauma, burnout, and perfectionism in Santa Monica and across California.",
  keywords: [
    "therapist Santa Monica",
    "psychologist Santa Monica",
    "therapy Santa Monica CA",
    "anxiety therapy Santa Monica",
    "trauma therapy Santa Monica",
    "burnout therapy California",
    "online therapy California",
    "EMDR therapist Santa Monica",
  ],
  authors: [{ name: "Dr. Maya Reynolds" }],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica",
    description:
      "Grounded, collaborative therapy for adults in Santa Monica and across California.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}