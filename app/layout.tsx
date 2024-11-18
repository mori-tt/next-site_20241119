import type { Metadata } from "next";
import "./globals.css";
import { M_PLUS_1p } from "next/font/google";
import TopMenu from "@/components/TopMenu";
import SideMenu from "@/components/SideMenu";

const m_PLUS_1p = M_PLUS_1p({
  subsets: ["latin"],
  // midium bold
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio of T.Mori",
  description:
    "T.Mori's portfolio site. I mainly do web development using TypeScript, React, and NEXT.JS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={m_PLUS_1p.className}>
        <main className="flex flex-row">
          <SideMenu />
          <section className="pl-[300px] max-lg:pl-[146px] max-md:pl-0 w-full mi-h-screen overflow-hidden">
            <TopMenu />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
