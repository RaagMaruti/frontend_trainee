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

// Cache	                What	                        Description                                                 Location    Revalidation Criteria
// Data Cache	            Cache	Data	                  Stores data across user requests and deployments	          Server	    Time-based or on-demand revalidation
// Request Memoization	  Return values of functions    Re-use values in same render pass for efficiency	          Server	    N/A, only lasts for the lifetime of a server request
// Full Route Cache	      HTML and RSC payload	        Caches static routes at build time to improve performance	  Server	    Revalidated by revalidating Data Cache or redeploying the application
// Router Cache	          RSC Payload	                  Stores navigated routes to optimize navigation epxerience	  Client	    Automatic invalidation after a specific time or when the data cache is cleared

// Function	                    Execution Time	                                  Runs On	            Re-executes on Client Navigation?	  Use Case
// getStaticPaths	              Build Time (only for dynamic routes)	            Server	            No	                                Pre-defines dynamic paths for SSG
// getStaticProps	              Build Time (SSG) or Revalidate Interval (ISR)	    Server	            No (unless ISR is used)	            Fetch static data at build time
// getServerSideProps	          On Every Request	                                Server	            Yes	                                Fetch fresh data per request (SSR)
// getInitialProps (Deprecated)	First request (Server) & Client Navigation (CSR)	Server & Client	    Yes	                                Used for universal data fetching (deprecated)
