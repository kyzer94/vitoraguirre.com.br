import { ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    num: "01",
    title: "Desenvolvimento Web & Plataformas SaaS",
    description:
      "Construção de aplicações completas de ponta a ponta. Painéis administrativos densos, sistemas de e-commerce e portais corporativos com foco em estabilidade, segurança e velocidade.",
    deliverables: [
      "Frontend em Next.js (App Router, Server Actions) & Tailwind CSS",
      "Backend modular em Laravel 11 ou Node.js (REST APIs)",
      "Modelagem e otimização de banco de dados MySQL",
      "Arquitetura pronta para alta concorrência de usuários",
    ],
  },
  {
    num: "02",
    title: "Integrações Financeiras & Gateways de Pagamento",
    description:
      "Transformação de modelos de negócio em fluxos automatizados de receita. Implementação de checkouts transparentes, modelos de assinatura com trial e liquidação automática.",
    deliverables: [
      "Stripe Checkout e Elements",
      "Asaas: Pix dinâmico instantâneo e Cartão até 12x",
      "Mercado Pago e PayPal",
      "Tratamento resiliente de Webhooks com idempotência e conciliação",
    ],
  },
  {
    num: "03",
    title: "Automação Comercial, RPA & Bots de Mensageria",
    description:
      "Substituição de processos operacionais repetitivos por automações programadas e criação de canais de venda direta em tempo real.",
    deliverables: [
      "Bots de WhatsApp em Node.js com regras de lances/vendas 24/7",
      "Tolerância a missclick e confirmação de pedidos em tempo real",
      "Web Scraping e coleta de dados concorrentes com Python (Selenium/Pandas)",
      "Sincronização periódica entre APIs externas, CRMs e bancos de dados",
    ],
  },
  {
    num: "04",
    title: "WebOps, Infraestrutura Linux & Otimização",
    description:
      "Garantia de que seu sistema opere 24/7 com alta disponibilidade, baixo custo de hospedagem e respostas rápidas sob picos de tráfego.",
    deliverables: [
      "Configuração e hardening de servidores VPS Linux (Ubuntu)",
      "Nginx como proxy reverso, Virtual Hosts e SSL automatizado (Certbot)",
      "Proteção de borda, regras de DNS e WAF via Cloudflare",
      "Offload de assets pesados para Cloudflare R2 (S3 API) para economia de banda",
    ],
  },
];

export default function Services() {
  return (
    <section id="solucoes" className="py-20 md:py-28 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
            {"// 03. serviços & capacidades"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Como Posso Contribuir com Seu Projeto ou Equipe
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl">
            Atuação técnica orientada a entregas práticas, disponível tanto para contratação como desenvolvedor
            em equipes de tecnologia quanto para projetos sob demanda (Freelance / PJ).
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.num}
              className="p-6 sm:p-7 rounded-lg bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-900 text-xs font-mono">
                  <span className="text-zinc-500 font-semibold">{cap.num}.</span>
                  <span className="text-zinc-500">engenharia_de_software</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {cap.title}
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {cap.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    Entregáveis Típicos:
                  </div>
                  {cap.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <span className="text-blue-400 font-mono">›</span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-900">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-300 hover:text-white transition-colors"
                >
                  <span>solicitar proposta para esta demanda</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
