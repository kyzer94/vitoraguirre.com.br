import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vitor Aguirre | Desenvolvedor Full Stack, Pagamentos & Automação",
  description:
    "Engenheiro de Software Full Stack especializado em ecossistema Laravel / PHP, Next.js, arquitetura de APIs RESTful, integrações de pagamento (Stripe, Asaas, Mercado Pago), bots de alta escala e infraestrutura Linux.",
  keywords: [
    "Vitor Aguirre",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Laravel",
    "Next.js",
    "React",
    "PHP",
    "Integração de Pagamentos",
    "Stripe",
    "Asaas",
    "Mercado Pago",
    "Bots WhatsApp",
    "WebOps",
    "Linux",
    "Porto Alegre",
  ],
  authors: [{ name: "Vitor de Lacerda Aguirre" }],
  openGraph: {
    title: "Vitor Aguirre | Desenvolvedor Full Stack, Pagamentos & Automação",
    description:
      "Transformando regras de negócio complexas em software web de alta escala, seguro e pronto para produção.",
    url: "https://vitoraguirre.com.br",
    siteName: "Vitor Aguirre Portfolio",
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
    <html lang="pt-BR">
      <body className="bg-[#090d16] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
