import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/context/AppProviders";
import { ShowSideBarButton } from "@/components/ShowSideBarButton";

export const metadata: Metadata = {
  title: "Frontend Mentor | Kanban Task Management Web App",
  description: "A fully responsive Kanban board web application featuring multi-board CRUD operations, nested subtask tracking, local storage persistence, and light/dark mode customization.",
  keywords: ["Frontend Mentor", "Kanban Board", "Next.js", "Task Management App", "Tailwind CSS"],
  authors: [{ name: "Akash Siddamshetty" }],
  icons: {
    icon: "/favicon-32x32.png",
  },
  openGraph: {
    title: "Frontend Mentor | Kanban Task Management Web App",
    description: "Track workflows, manage boards, and toggle dark mode in this production-ready Kanban application.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
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
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppProviders>{children}
          <ShowSideBarButton/>
        </AppProviders>
      </body>
    </html>
  );
}
