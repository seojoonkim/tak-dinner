import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tak — 저녁",
  description: "tak 닭 컨셉 파인다이닝 디너 이벤트",
  openGraph: {
    title: "tak — 저녁",
    description: "장작구이 닭과 함께하는 특별한 저녁",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
