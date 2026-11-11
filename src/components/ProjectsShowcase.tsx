"use client";

import { useState } from "react";
import { Check } from "lucide-react";

interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  role: string;
  period: string;
  context: string;
  challenge: string;
  technicalSolution: string;
  architectureCode: string;
  impacts: string[];
  stack: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "hypedtcg-concurrency",
    tag: "Transacional & Concorrência",
    title: "Reserva de Estoque Temporizada (10 min) & Cobrança SaaS",
    role: "Arquiteto de Backend & Full Stack",
    period: "HypedTCG / Games Hyped",
    context:
      "Plataforma de comércio eletrônico de itens colecionáveis e ecossistema SaaS de leilões, com alto pico de requisições simultâneas durante lançamentos de produtos exclusivos.",
    challenge:
      "Em horários de pico, múltiplos usuários tentavam comprar as mesmas cartas unitárias. Havia risco severo de race conditions (vender o mesmo item 2 vezes) ou de estoque travado por carrinhos abandonados, além da necessidade de split de faturamento recorrente com o gateway Asaas e Mercado Pago.",
    technicalSolution:
      "Implementação de esteira transacional no Laravel utilizando bloqueio de linha em banco (ACID). Ao entrar no checkout, os itens são reservados com marcação temporal de expiração de exatamente 10 minutos. Uma rotina assíncrona programada varre faturas pendentes e devolve o saldo de forma atômica para a tabela principal de estoque em caso de desistência, sem qualquer intervenção humana.",
    architectureCode: `// Arquitetura Transacional de Concorrência
DB::transaction(function () use ($cart, $user) {
    // 1. Lock pessimista para garantir leitura única
    $item = StockItem::where('id', $cart->item_id)
        ->lockForUpdate()
        ->firstOrFail();

    if ($item->available_qty < $cart->qty) {
        throw new OutOfStockException("Item indisponível no momento.");
    }

    // 2. Criação do lote com expiração de 10 min
    $batch = AdvanceSale::create([
        'user_id'    => $user->id,
        'expires_at' => now()->addMinutes(10),
        'status'     => 'pending_payment'
    ]);

    // 3. Baixa temporária no saldo do estoque
    $item->decrement('available_qty', $cart->qty);
});`,
    impacts: [
      "Zero inconsistência ou venda duplicada após o deploy em produção",
      "Liberação automática e atômica de centenas de lotes diários abandonados",
      "Integração de checkout com Pix dinâmico e cartão até 12x via Asaas",
    ],
    stack: ["Laravel 11", "Next.js 14", "MySQL InnoDB", "Asaas API", "Mercado Pago"],
  },
  {
    id: "whatsapp-bot-realtime",
    tag: "Tempo Real & Mensageria",
    title: "Bot de Leilões em WhatsApp com Tolerância a Missclicks",
    role: "Engenharia de Automação & Real-time",
    period: "POKE-MAN / SaaS Bot",
    context:
      "Robô corporativo em Node.js conectado a centenas de grupos de WhatsApp, responsável por conduzir leilões e coletar lances de compradores em tempo real.",
    challenge:
      "Usuários frequentemente digitavam lances errados por engano (missclick) e disputas operacionais sobrecarregavam o time humano. Além disso, quedas de conexão ou reinicializações do servidor não podiam corromper o estado do leilão em andamento.",
    technicalSolution:
      "Arquitetura de processamento assíncrono conectando o client de mensageria à API REST do Laravel. Foi criada uma regra de tolerância temporal de 10 minutos onde um usuário pode retificar seu voto/lance anterior; a API substitui atomicamente o registro anterior recalculando o ranking da rodada. A aplicação roda sob o daemon PM2 em VPS Linux com auto-restart e persistência em MySQL.",
    architectureCode: `// Lógica de Missclick e Tolerância Temporal
public function replaceVotes(Request $request) {
    $previousVote = Vote::where('group_id', $request->group_id)
        ->where('user_phone', $request->user_phone)
        ->latest('voted_at')
        ->first();

    // Tolerância estrita de 10 minutos
    if ($previousVote && $previousVote->voted_at->diffInMinutes(now()) <= 10) {
        $previousVote->update(['is_cancelled' => true, 'reason' => 'missclick']);
    }

    return Vote::create([
        'group_id'   => $request->group_id,
        'user_phone' => $request->user_phone,
        'bid_value'  => $request->bid_value,
        'voted_at'   => now()->toISOString()
    ]);
}`,
    impacts: [
      "Uptime contínuo 24/7 sob PM2 sem vazamentos de memória",
      "Eliminação quase total de disputas de lances acidentais",
      "Persistência em tempo real com tolerância a timezones via ISO 8601",
    ],
    stack: ["Node.js", "Laravel REST API", "PM2 Daemon", "MySQL", "WebSockets"],
  },
  {
    id: "webops-nginx-r2",
    tag: "Infraestrutura & WebOps",
    title: "Resolução de Headers no Nginx & Offload de Banda com Cloudflare R2",
    role: "Sysadmin & WebOps",
    period: "Games Hyped / Produção",
    context:
      "Ambiente de produção hospedado em servidor VPS Ubuntu contendo múltiplos domínios, proxies reversos em Nginx, aplicações Next.js e APIs Laravel compartilhando o mesmo host.",
    challenge:
      "O tráfego de imagens de alta resolução de milhares de cartas consumia banda excessiva da VPS. Além disso, a aplicação sofria com erros 404 em assets estáticos devido ao vazamento do cabeçalho X-Forwarded-Host entre o frontend Next.js e o backend Laravel.",
    technicalSolution:
      "Diagnóstico fino de tráfego HTTP com ajuste cirúrgico da política de TrustProxies no Laravel e reconfiguração dos Virtual Hosts do Nginx. Paralelamente, implementou-se um pipeline de upload e entrega de mídias direto no Cloudflare R2 (Object Storage compatível com AWS S3) protegido por regras de cache de borda (CDN).",
    architectureCode: `// Nginx Reverse Proxy com Isolamento de Headers
server {
    server_name panel.hypedtcg.com.br;
    
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Offload de mídia pesada direto para Cloudflare R2
    location /media/ {
        proxy_pass https://pub-r2-storage.vitoraguirre.com.br/;
        proxy_cache_valid 200 30d;
        add_header Cache-Control "public, max-age=2592000, immutable";
    }
}`,
    impacts: [
      "Eliminação imediata de falhas 404 em rotas dinâmicas e imagens",
      "Redução drástica no consumo de CPU e largura de banda do servidor VPS",
      "Latência de entrega de imagens reduzida para milissegundos via CDN",
    ],
    stack: ["Ubuntu Server", "Nginx", "Cloudflare R2 (S3 API)", "Certbot SSL", "Docker"],
  },
  {
    id: "scraping-bi-sync",
    tag: "ETL & Inteligência Comercial",
    title: "Pipelines de Scraping em Python & Sincronização Diária de Mercado",
    role: "Engenharia de Dados & Automação",
    period: "Messem Investimentos & Games Hyped",
    context:
      "Necessidade de monitoramento contínuo de concorrência, precificação dinâmica de estoque e consolidação de métricas de crescimento (Growth) para tomadas de decisão.",
    challenge:
      "Tabelas de preços e prospecção eram mantidas manualmente, gerando defasagem nos valores de venda e perda de oportunidades de negócio.",
    technicalSolution:
      "Construção de robôs em Python (Selenium e Pandas) para extração automatizada de cotações de mercado e higienização dos dados. No backend, desenvolveu-se o serviço assíncrono StockMarketValueSyncService que executa via crontab/scheduler diário, aplicando as variações diretamente nos registros do MySQL.",
    architectureCode: `// Serviço de Sincronização em Lote no Laravel
public function syncMarketPrices(Collection $stockCards): int {
    $updatedCount = 0;
    
    foreach ($stockCards->chunk(200) as $batch) {
        $ids = $batch->pluck('external_id');
        $marketData = $this->externalPriceFeed->fetchBatch($ids);

        DB::transaction(function () use ($batch, $marketData, &$updatedCount) {
            foreach ($batch as $card) {
                if (isset($marketData[$card->external_id])) {
                    $card->update(['market_value' => $marketData[$card->external_id]]);
                    $updatedCount++;
                }
            }
        });
    }
    return $updatedCount;
}`,
    impacts: [
      "Atualização diária automatizada de milhares de itens de catálogo",
      "Dashboards no Zoho Analytics e MySQL com KPIs em tempo real",
      "Economia de dezenas de horas semanais de trabalho manual de precificação",
    ],
    stack: ["Python", "Pandas", "Selenium", "Laravel Service", "MySQL", "Zoho Analytics"],
  },
];

export default function ProjectsShowcase() {
  const [activeTab, setActiveTab] = useState(caseStudies[0].id);
  const currentCase = caseStudies.find((c) => c.id === activeTab) || caseStudies[0];

  return (
    <section id="cases" className="py-20 md:py-28 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
            {"// 02. engenharia & produção"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Casos de Engenharia e Problemas Resolvidos
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl">
            Sistemas reais que operam sob regras de negócio críticas. Clique nos casos abaixo para ver o desafio,
            a arquitetura adotada e a implementação técnica:
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-zinc-800 pb-4">
          {caseStudies.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                activeTab === c.id
                  ? "bg-zinc-100 text-zinc-950 font-bold shadow-sm"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800"
              }`}
            >
              0{idx + 1}. {c.tag}
            </button>
          ))}
        </div>

        {/* Detailed Case View */}
        <div className="rounded-lg bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl">
          
          {/* Case Header */}
          <div className="p-6 sm:p-8 border-b border-zinc-800/80 bg-zinc-900/30">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-3 text-xs font-mono">
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {currentCase.tag}
              </span>
              <span className="text-zinc-400">
                {currentCase.role} • {currentCase.period}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {currentCase.title}
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-3xl">
              {currentCase.context}
            </p>
          </div>

          {/* Case Content Grid: Challenge & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800/80">
            
            {/* Left: Problem & Solution text */}
            <div className="lg:col-span-6 p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-2">
                  {"// O Desafio de Negócio & Técnico"}
                </h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {currentCase.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                  {"// A Solução Implementada"}
                </h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {currentCase.technicalSolution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  {"// Resultados & Impactos"}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                  {currentCase.impacts.map((imp, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                  Tecnologias Utilizadas:
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {currentCase.stack.map((st, sIdx) => (
                    <span key={sIdx} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {st}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Architecture & Code Snippet */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-[#070709] flex flex-col justify-between font-mono">
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-500 pb-3 mb-4 border-b border-zinc-800/80">
                  <span>snippet_arquitetura.php</span>
                  <span className="text-[11px] text-zinc-600">{"// trecho demonstrativo real"}</span>
                </div>

                <pre className="text-xs text-zinc-300 overflow-x-auto leading-relaxed p-3 bg-zinc-950 rounded border border-zinc-900">
                  <code>{currentCase.architectureCode}</code>
                </pre>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900 text-xs text-zinc-500 flex items-center justify-between">
                <span>ambiente: produção</span>
                <span className="text-zinc-400">código limpo & testado</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
