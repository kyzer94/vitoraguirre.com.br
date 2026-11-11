import { Laptop, CreditCard, Cpu, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Aplicações Web & SaaS Sob Medida",
    description:
      "Desenvolvimento de plataformas completas do zero ou modernização de sistemas legados. Painéis administrativos densos, sistemas de e-commerce e portais corporativos rápidos e seguros.",
    features: [
      "Frontend reativo com Next.js (App Router) e Tailwind CSS",
      "Backend escalável com Laravel ou Node.js",
      "Arquitetura de APIs RESTful modulares e documentadas",
      "Modelagem e otimização de banco de dados MySQL",
    ],
  },
  {
    icon: CreditCard,
    title: "Integrações Financeiras & Gateways de Pagamento",
    description:
      "Transformação de produtos em máquinas de vendas online com suporte a pagamentos transparentes, cobranças recorrentes e split para parceiros.",
    features: [
      "Stripe Checkout e Elements",
      "Asaas (Pix dinâmico instantâneo e Cartão até 12x)",
      "Mercado Pago, PayPal e PagSeguro",
      "Tratamento idempotente de Webhooks para conciliação segura",
    ],
  },
  {
    icon: Cpu,
    title: "Automação Comercial, RPA & Bots de WhatsApp",
    description:
      "Eliminação de trabalho manual e criação de canais de venda automatizados através de robôs de mensageria e esteiras de coleta de dados.",
    features: [
      "Bots de WhatsApp em Node.js com regras de lances/vendas 24/7",
      "Tolerância a missclick e confirmação de pedidos em tempo real",
      "Web Scraping e monitoramento de concorrentes com Python (Selenium/Pandas)",
      "Integrações de funil de vendas com Zoho CRM e Google Sheets",
    ],
  },
  {
    icon: Wrench,
    title: "WebOps, Infraestrutura Linux & Performance",
    description:
      "Garantia de que sua aplicação não sairá do ar em picos de tráfego e que responderá rápido com segurança e proteção de borda.",
    features: [
      "Configuração de servidores VPS Linux (Ubuntu) com Nginx",
      "Roteamento de proxy reverso e eliminação de falhas 404 de assets",
      "Mitigação de ataques, WAF e DNS no Cloudflare",
      "Armazenamento de imagens e mídias pesadas via Cloudflare R2 / S3",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#0b101d] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider">
            Soluções & Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Como Posso Ajudar o Seu Negócio?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Atuação flexível tanto para projetos sob demanda (Freelance / PJ) quanto para contratação em times de engenharia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {srv.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {srv.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Solicitar proposta para este serviço
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
