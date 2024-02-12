import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: 'Servco : Mechanical & Electrical Contractor', // NOTE: Entity Name : Entity Title(s)
  description: 'Service Provider', // NOTE: Entity Description
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
