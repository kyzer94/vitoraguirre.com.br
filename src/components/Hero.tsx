import { ArrowRight, Sparkles, ShieldCheck, Zap, Server, CreditCard } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm text-slate-300 shadow-inner">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="font-medium text-slate-200">Engenharia Web • Pagamentos • Automação</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Transformo regras de negócio complexas em software de{" "}
            <span className="gradient-text">alta escala e pronto para produção</span>.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Desenvolvedor Full Stack focado em arquitetura backend com <strong className="text-white">Laravel / PHP</strong>, 
            interfaces reativas em <strong className="text-white">Next.js & React</strong>, integrações financeiras 
            (<strong className="text-white">Stripe, Asaas, Mercado Pago</strong>) e infraestrutura Linux resiliente.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#cases"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-xl shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              Explorar Cases Reais
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contato"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-base transition-all duration-200 hover:border-slate-500"
            >
              Solicitar Proposta ou Orçamento
            </a>
          </div>

          {/* Quick Pillar Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-12 text-left">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              <CreditCard className="w-5 h-5 text-blue-400 mb-2" />
              <div className="font-bold text-white text-base">Gateways Reais</div>
              <div className="text-xs text-slate-400 mt-1">Stripe, Asaas (Pix/Cartão), Mercado Pago e Webhooks.</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
              <div className="font-bold text-white text-base">Zero Inconsistência</div>
              <div className="text-xs text-slate-400 mt-1">Controle de concorrência e expiração atômica de estoque.</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-amber-400 mb-2" />
              <div className="font-bold text-white text-base">Bots 24/7</div>
              <div className="text-xs text-slate-400 mt-1">WhatsApp bots com persistência em banco e tolerância a falhas.</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              <Server className="w-5 h-5 text-indigo-400 mb-2" />
              <div className="font-bold text-white text-base">WebOps & Nuvem</div>
              <div className="text-xs text-slate-400 mt-1">VPS Linux, Nginx como proxy reverso e Cloudflare R2.</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
