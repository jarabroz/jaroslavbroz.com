import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans-face",
  subsets: ["latin", "latin-ext"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin", "latin-ext"],
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
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
