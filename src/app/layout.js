import { Poppins } from "next/font/google";

import "../styles/globals.css";
import ReduxProvider from "./StoreProvider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

export const metadata = {
  title: "TeachMateAI Task Manager",
  description:
    "The #1 education AI assistant, trusted by over 120,000 educators worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={poppins.className}>{children}</body>
      </ReduxProvider>
    </html>
  );
}
