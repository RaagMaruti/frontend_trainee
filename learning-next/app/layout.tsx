import "./globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: "500",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <header>
          <Link href="/">Home</Link>
          <Link
            href={{ pathname: "/about", query: null }}
            prefetch={true}
            replace
            scroll
          >
            About
          </Link>
          <Link href="/product">Product</Link>
        </header>
        <div>{children}</div>
        <footer className="footer">
          <span>All Rights Reserved by me</span>
        </footer>
      </body>
    </html>
  );
}

// entry point for next app
// prefetch - on entering the view port
// replace - history state instead of adding stack
// scroll - maintain position

// passHref, legacyBehavior - to wrap the inner custom component to serve as a link
// scroll to id - #