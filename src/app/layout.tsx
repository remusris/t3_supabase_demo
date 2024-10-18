import TrpcProvider from "~/lib/TrpcProvider";
import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          suppressHydrationWarning
        >
          <TrpcProvider>
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">{children}</div>
            </div>
          </TrpcProvider>
        </body>
      </html>
    </>
  );
}































// import type { Metadata, Viewport } from "next";
// import TrpcProvider from "~/components/TrpcProvider";
// import "~/styles/globals.css";

// export const dynamic = "force-dynamic";

// const APP_TITLE = "Memory Link";
// const APP_DESCRIPTION = "Curating the best of the web";

// export const metadata: Metadata = {
//   title: APP_TITLE,
//   description: APP_DESCRIPTION,
//   appleWebApp: {
//     capable: true,
//     statusBarStyle: "default",
//     title: APP_TITLE,
//     startupImage: "/splash-screen.png",
//   },
//   formatDetection: {
//     telephone: false,
//   },
//   openGraph: {
//     type: "website",
//     siteName: APP_TITLE,
//     title: APP_TITLE,
//     description: APP_DESCRIPTION,
//   },
//   twitter: {
//     card: "summary",
//     title: APP_TITLE,
//     description: APP_DESCRIPTION,
//   },
//   icons: { icon: "/favicon.ico" },
// };

// export const viewport: Viewport = {
//   themeColor: "#0849B5",
// };

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <TrpcProvider>{children}</TrpcProvider>
//       </body>
//     </html>
//   );
// }
