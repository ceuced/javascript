import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import "./globals.css";
import Navigation from "./Navigation";

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <Navigation session={session} />
        {children}
      </body>
    </html>
  );
}
