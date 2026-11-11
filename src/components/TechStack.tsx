export default function TechStack() {
  const categories = [
    {
      label: "Backend & Arquitetura",
      items: ["PHP 8.3+", "Laravel 11 (Eloquent, Migrations, Jobs)", "Node.js", "Express", "RESTful APIs", "Webhooks Idempotentes"],
    },
    {
      label: "Frontend & UI",
      items: ["Next.js 14/15 (App Router, Server Actions)", "React 18/19", "Vue.js 3", "Nuxt.js", "TypeScript", "Tailwind CSS"],
    },
    {
      label: "Bancos de Dados & Transações",
      items: ["MySQL", "Modelagem Relacional", "Controle de Concorrência (Lock)", "Índices B-Tree", "Transações ACID", "EXPLAIN / Tuning"],
    },
    {
      label: "Infraestrutura & WebOps",
      items: ["Linux (Ubuntu Server)", "Nginx Reverse Proxy", "Cloudflare (DNS, WAF, SSL)", "Cloudflare R2 (S3 API)", "Docker", "PM2 Daemons"],
    },
    {
      label: "Integrações de Pagamento",
      items: ["Stripe Checkout", "Asaas (Pix Dinâmico & Cartão)", "Mercado Pago", "PayPal", "PagSeguro", "Assinaturas SaaS com Trial"],
    },
    {
      label: "Automação & Dados",
      items: ["Python", "Selenium Web Scraping", "Pandas", "Zoho Analytics / CRM", "RPA de Processos", "WhatsApp Web Protocol"],
    },
  ];

  return (
    <section id="stack" className="py-20 md:py-28 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
            {"// 04. tecnologias & ferramentas"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Ferramentas Consolidadas em Produção
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl">
            Sem modismos ou tecnologias de tutorial: ferramentas que utilizo no dia a dia para sustentar
            sistemas reais e estáveis.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-zinc-950 border border-zinc-800/90 font-mono text-xs"
            >
              <div className="text-zinc-400 font-bold mb-3 pb-2 border-b border-zinc-900 flex justify-between">
                <span>{cat.label}</span>
                <span className="text-zinc-600">[{idx + 1}]</span>
              </div>

              <div className="space-y-1.5">
                {cat.items.map((item, iIdx) => (
                  <div key={iIdx} className="text-zinc-300 flex items-center gap-2">
                    <span className="text-zinc-600">›</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
