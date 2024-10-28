import "@/styles/globals.css";
import { Metadata } from "next";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: 'Create Next App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={nunito.className}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
