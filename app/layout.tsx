import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Kanban Task Management Web App",
  description: "A fully responsive Kanban board web application featuring multi-board CRUD operations, nested subtask tracking, local storage persistence, and light/dark mode customization.",
  keywords: ["Frontend Mentor", "Kanban Board", "Next.js", "Task Management App", "Tailwind CSS"],
  authors: [{ name: "Akash Siddamshetty" }],
  openGraph: {
    title: "Frontend Mentor | Kanban Task Management Web App",
    description: "Track workflows, manage boards, and toggle dark mode in this production-ready Kanban application.",
    url: "https://your-live-site-url.com",
    type: "website",
    images: [
      {
        url: "/preview-image.jpg", // Add your desktop screenshot here
        width: 1200,
        height: 630,
        alt: "Kanban Task Management Application Screenshot",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
