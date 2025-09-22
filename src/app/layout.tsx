import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adamalmahdi.com'),
  title: "Adam Almahdi",
  description: "I blend my background in IT and performance marketing with a deep passion for AI and web development. Whether it's building sales agents, automating workflows, or shaping my personal brand, I'm always creating systems that are equal parts functional and aesthetic.",
  keywords: [
    "Adam Almahdi",
    "IT Specialist",
    "Performance Marketing",
    "AI Development",
    "Web Development",
    "Automation",
    "Sales Agents",
    "Marketing Technology",
    "Full Stack Developer",
    "Digital Marketing"
  ],
  authors: [{ name: "Adam Almahdi", url: "https://adamalmahdi.com" }],
  creator: "Adam Almahdi",
  publisher: "Adam Almahdi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adamalmahdi.com",
    siteName: "Adam Almahdi Portfolio",
    title: "Adam Almahdi - IT & Performance Marketing Specialist",
    description: "I blend my background in IT and performance marketing with a deep passion for AI and web development. Whether it's building sales agents, automating workflows, or shaping my personal brand, I'm always creating systems that are equal parts functional and aesthetic.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adam Almahdi - IT & Performance Marketing Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Almahdi - IT & Performance Marketing Specialist",
    description: "I blend my background in IT and performance marketing with a deep passion for AI and web development. Whether it's building sales agents, automating workflows, or shaping my personal brand, I'm always creating systems that are equal parts functional and aesthetic.",
    images: ["/og-image.jpg"],
    creator: "@adamalmahdi",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://adamalmahdi.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ErrorBoundary>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
