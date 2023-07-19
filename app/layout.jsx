import "@styles/layout.css";
import { Sofia_Sans_Condensed } from "next/font/google";

const sofia_sans_condensed = Sofia_Sans_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sofia_sans_condensed.className}>{children}</body>
    </html>
  );
}