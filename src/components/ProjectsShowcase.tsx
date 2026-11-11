import React from "react";
import { Layers, Bot, Server, Database, CheckCircle2, ShieldAlert, LucideIcon } from "lucide-react";

interface ProjectCase {
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  problem: string;
  solution: string;
  metrics: string[];
  techStack: string[];
}

const cases: ProjectCase[] = [
  {
    tag: "E-Commerce & SaaS Hub",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    title: "Ecossistema HypedTCG: Faturamento SaaS & Concorrência de Estoque",
    subtitle: "Plataforma web de alta escala com controle transacional e faturamento automatizado",
    description:
      "Desenvolvimento de ponta a ponta do ecossistema que integra marketplace, leilões em tempo real, painel de parceiros e sistema de cobrança recorrente com 7 dias de trial.",
    icon: Layers,
    problem:
      "Vendas simultâneas geravam riscos de concorrência e divergência de saldo em itens de alto valor, além da necessidade de split de comissões para parceiros e cobrança via Pix e Cartão.",
    solution:
      "Criação de esteira transacional no Laravel com reserva temporizada de 10 minutos para carrinhos e devolução atômica ao estoque em caso de abandono. Integração completa com Asaas e Mercado Pago com tratamento idempotente de webhooks.",
    metrics: [
      "Zero divergência de inventário através de travas de concorrência no MySQL",
      "Cobrança recorrente automatizada com Pix dinâmico e cartão até 12x",
      "SEO técnico avançado com Schema.org / JSON-LD e sitemaps dinâmicos",
    ],
    techStack: ["Laravel 11", "Next.js 14", "MySQL", "Asaas API", "Mercado Pago", "Tailwind CSS"],
  },
  {
    tag: "Automação & Real-time",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    title: "Bots de WhatsApp de Alta Concorrência (POKE-MAN & SaaS Bot)",
    subtitle: "Automação de lances, votos e vendas rodando 24/7 com tolerância a missclicks",
    description:
      "Solução corporativa de mensageria em Node.js integrada diretamente ao banco de dados e APIs do Laravel para conduzir leilões e interações automáticas em centenas de grupos.",
    icon: Bot,
    problem:
      "Erros operacionais de usuários enviando lances acidentais (missclicks) sem mecanismo de tolerância, somados a quedas de processos por instabilidade de rede.",
    solution:
      "Implementação de regra de tolerância de 10 minutos para retificação de votos com timestamp ISO 8601 no backend e daemons resilientes gerenciados via PM2 com reinicialização automática e consumo controlado de memória.",
    metrics: [
      "Operação contínua 24/7 sem vazamento de memória sob PM2",
      "Persistência atômica de lances e votos em tempo real no banco",
      "Redução drástica de disputas de clientes através da regra de missclick",
    ],
    techStack: ["Node.js", "Laravel API", "MySQL", "PM2", "WebSockets", "Docker"],
  },
  {
    tag: "Infraestrutura & WebOps",
    tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    title: "WebOps: Sustentação de VPS Linux, Nginx & Armazenamento R2",
    subtitle: "Resolução de gargalos de rede, proxy reverso e otimização de banda de servidores",
    description:
      "Administração completa da infraestrutura de servidores VPS Ubuntu responsáveis por hospedar múltiplos domínios, APIs, frontends e bancos de dados.",
    icon: Server,
    problem:
      "Consumo excessivo de banda por imagens pesadas na VPS e vazamento de cabeçalhos de proxy no Nginx (HEADER_X_FORWARDED_HOST) causando erros 404 em assets e falhas em rate limiting por IP de clientes reais.",
    solution:
      "Ajuste cirúrgico das políticas de TrustProxies e Nginx Virtual Hosts, aliado à migração de assets estáticos para armazenamento em nuvem no Cloudflare R2 (S3-compatible) com proteção de borda (WAF e SSL).",
    metrics: [
      "Resolução definitiva de erros 404 em rotas e rewrites do Next.js",
      "Economia massiva de tráfego de rede e latência nos servidores VPS",
      "SSL/TLS automatizado com renovação Certbot e proteção Cloudflare",
    ],
    techStack: ["Ubuntu VPS", "Nginx", "Cloudflare R2 / S3", "Certbot SSL", "Bash / Crontab"],
  },
  {
    tag: "Dados & Inteligência",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    title: "Inteligência de Mercado & Rotinas de Sincronização em Python/SQL",
    subtitle: "Pipelines de extração (scraping), saneamento e reconciliação de estoques",
    description:
      "Construção de rotinas em Python (Selenium e Pandas) e serviços em Laravel para monitoramento de concorrentes, consolidação de KPIs e precificação dinâmica de mercado.",
    icon: Database,
    problem:
      "Atualização manual inviável de cotações de milhares de itens de catálogo e necessidade de relatórios analíticos de Growth para tomadas de decisão comerciais.",
    solution:
      "Desenvolvimento de scripts de web scraping com saneamento de dados em Pandas e serviço assíncrono StockMarketValueSyncService no Laravel, além de dashboards no Zoho Analytics via queries SQL complexas.",
    metrics: [
      "Sincronização diária automatizada de milhares de cotações de mercado",
      "Dashboards gerenciais em tempo real alimentados por consultas SQL otimizadas",
      "Automação de prospecção comercial reduzindo horas de esforço manual",
    ],
    techStack: ["Python", "Pandas", "Selenium", "MySQL Avançado", "Zoho Analytics", "SQL"],
  },
];

export default function ProjectsShowcase() {
  return (
    <section id="cases" className="py-20 md:py-28 relative border-t border-slate-800/80 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider">
            Engenharia Aplicada
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cases Reais em Produção
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Projetos que resolvem dores reais de negócio: integridade financeira, concorrência,
            automação e estabilidade de infraestrutura.
          </p>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 shadow-xl group"
              >
                <div>
                  {/* Top Bar with Tag and Icon */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${project.tagColor}`}>
                      {project.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-400 mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Problem & Solution Accordion-style layout */}
                  <div className="space-y-3 mb-6 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 text-xs">
                    <div>
                      <div className="font-semibold text-rose-400 flex items-center gap-1.5 mb-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        O Desafio Técnico:
                      </div>
                      <div className="text-slate-300 leading-normal">{project.problem}</div>
                    </div>
                    <div className="pt-2 border-t border-slate-800/60">
                      <div className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        A Solução Implementada:
                      </div>
                      <div className="text-slate-300 leading-normal">{project.solution}</div>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Resultados & Destaques:
                    </div>
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
