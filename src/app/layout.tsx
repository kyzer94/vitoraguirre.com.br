import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vitor Aguirre — Software Engineer",
  description:
    "Desenvolvedor Full Stack especializado em ecossistema Laravel / PHP, Next.js, arquitetura de APIs críticas, integrações financeiras e infraestrutura Linux.",
  authors: [{ name: "Vitor de Lacerda Aguirre" }],
  openGraph: {
    title: "Vitor Aguirre — Software Engineer",
    description: "Sistemas em produção, arquitetura de pagamentos e infraestrutura Linux.",
    url: "https://vitoraguirre.com.br",
    siteName: "Vitor Aguirre",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#09090b] text-zinc-100 antialiased selection:bg-zinc-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
