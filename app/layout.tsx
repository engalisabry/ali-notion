import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvextClientProvider } from "@/components/providers/convex-providers";
import "./globals.css";
import ModalProvider from "@/components/providers/model-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Notion",
  description: "This a fully Notion app clone with the all basics features.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-dark.svg",
        href: "/favicon-dark.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.svg",
        href: "/favicon.svg",
      },
    ],
  },
  authors: [{ name: "Ali Sabry"}],
  twitter: {
    title: "Ali Notion Clone",
    card: "summary_large_image",
    images: [
      {
        url: "/alinotion-preview.png",
        width: 1200,
        height: 630,
      },
    ],
    creator: "Ali Sabry",
    creatorId: "@realalisabry",
    description: "A fully Notion app clone with the all main features.",
    site: "https://alinotion.vercel.app",
  },
  openGraph: {
    title: "Ali Notion Clone",
  },
  appleWebApp: {
    title: "Ali Notion Clone",
    statusBarStyle: "black",
    startupImage: "/alinotion-preview.png",
    capable: true,
  },
  category: "Productivity App",
  themeColor: "#000000",
  alternates: {
    canonical: "https://alinotion.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
  publisher: "Ali Sabry",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    publish_date: "2024 - May",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={inter.className}>
        <ConvextClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              storageKey="alitheme"
              enableSystem
              disableTransitionOnChange
            >
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvextClientProvider>
      </body>
    </html>
  );
}
