export default function TechStack() {
  const categories = [
    {
      name: "Backend & APIs",
      skills: ["PHP 8+", "Laravel 10/11", "Node.js", "Express", "RESTful APIs", "Microservices", "Webhooks"],
    },
    {
      name: "Frontend & UI",
      skills: ["Next.js (App Router)", "React", "Vue.js", "Nuxt.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS"],
    },
    {
      name: "Banco de Dados & Transações",
      skills: ["MySQL", "Modelagem Relacional", "ACID", "Controle de Concorrência", "Índices B-Tree", "EXPLAIN / Otimização"],
    },
    {
      name: "Infraestrutura & WebOps",
      skills: ["Linux (Ubuntu)", "Nginx Reverse Proxy", "Cloudflare (DNS & WAF)", "Cloudflare R2 (S3)", "Docker", "PM2 Daemons", "SSL / Certbot"],
    },
    {
      name: "Pagamentos & Cobrança",
      skills: ["Stripe Checkout", "Asaas (Pix & Cartão)", "Mercado Pago", "PayPal", "Assinaturas SaaS", "Split de Comissões"],
    },
    {
      name: "Automação & Dados",
      skills: ["Python", "Selenium Scraping", "Pandas", "Zoho CRM / Analytics", "RPA de Processos", "WhatsApp Web API"],
    },
  ];

  return (
    <section id="stack" className="py-20 md:py-28 bg-[#090d16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider">
            Competências Técnicas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stack Tecnológica & Ferramentas
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Tecnologias consolidadas em produção para entregar software robusto, estável e escalável.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all duration-200"
            >
              <h3 className="text-base font-bold text-white mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>{cat.name}</span>
                <span className="text-xs text-slate-500 font-mono">0{idx + 1}</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 transition-colors border border-slate-700/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
