import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FORMÉ — Женский фитнес-клуб",
  description: "Приватное пространство сильных женщин. ПН-ПТ 07:00-23:00, СБ-ВС 09:00-22:00",
  openGraph: {
    title: "FORMÉ — Женский фитнес-клуб",
    description: "Приватное пространство сильных женщин",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
