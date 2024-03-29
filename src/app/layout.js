import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "400", "600"] });

export const metadata = {
  title: "Samitha",
  description: "Generated by Samitha W.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="wrapper">
          <div className="row">
            <h1>Global Header</h1>
          </div>

          {children}

          <div className="row">
            <h1>Global Footer</h1>
          </div>
        </div>
      </body>
    </html>
  );
}
