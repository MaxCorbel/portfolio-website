import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { inter, ubuntu } from "@/styles/fonts";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// * BRILLIANT IDEA
// * Have a button labeled "Challenge Mode" that when pressed makes everything invisible
// * Hover effects are still on and each element has a different one
// * Some components will show like normal once hovered over
// * One will change your cursor to the click cursor
// * There will be new components as well and one will take you to the easter egg page
// * The easter egg link element will always be invisible but there will be other elements
// * scattered on the page that will change your cursor into an arrow pointing to the next
// * with the last one pointing at the invisible easter egg button

export const metadata = {
  title: "Max Corbel",
  description: "My portfolio website.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${inter.variable} ${ubuntu.variable} antialiased`}>
      <body>
        <div className="flex justify-between items-center flex-col min-h-screen">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
