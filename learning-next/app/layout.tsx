import "./globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
	subsets: ["latin"],
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
          <Link href="/post">Post</Link>
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

// Routing
// use Link or useRouter in client
// use redirect for server
// route groups () - just semantics
// [slug] - dynamic routes, access by params (async prop, React use() for client)
// rendering only partial route changes

// Link
// prefetch - on entering the view port, only in production
// replace - history state instead of adding stack
// scroll - maintain position
// passHref, legacyBehavior - to wrap the inner custom component to serve as a link
// scroll to id - #
