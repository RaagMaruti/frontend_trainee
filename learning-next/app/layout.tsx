import "./globals.css";
import { Poppins } from "next/font/google";

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
          <span>Home</span>
          <span>About</span>
          <span>Product</span>
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
