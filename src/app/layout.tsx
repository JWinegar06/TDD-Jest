import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TDD Todo System",
  description: "A Next.js Todo application built using TDD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="system-background">
          <div className="system-container">
            <div className="system-label">SYSTEM</div>

            {children}

            <footer>
              <p>◈ DAILY QUEST MANAGEMENT SYSTEM ◈</p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
