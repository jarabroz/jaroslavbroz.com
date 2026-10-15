import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Jaroslav Broz | Head of Technology, AI for Structural Engineering";
const description =
  "Head of Technology at Dlubal Software. Almost 20 years between structural engineering and software, now making AI trustworthy enough for engineering.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jaroslavbroz.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://jaroslavbroz.com",
    siteName: "Jaroslav Broz",
    type: "website",
  },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
