import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Bat Mitzvah Celebration | October 31, 2026",
  description:
    "Please join us in Philadelphia for a meaningful morning and a spirited Halloween celebration.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
