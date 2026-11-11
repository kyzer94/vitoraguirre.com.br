import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="sobre" className="pt-16 pb-20 md:pt-24 md:pb-28 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct, authentic statement */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>disponível para contratação e projetos</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Vitor de Lacerda Aguirre
              </h1>
              <p className="text-base sm:text-lg font-mono text-zinc-400">
                Desenvolvedor Full Stack • Porto Alegre, RS
              </p>
            </div>

            {/* Real human bio */}
            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Trabalho na construção de sistemas web completos — do banco de dados relacional até o frontend reativo e o servidor Linux de produção.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Minha especialidade é arquitetar soluções que lidam com regras complexas: <strong className="text-zinc-200">controle de concorrência e estoque</strong>, 
                integrações financeiras (<strong className="text-zinc-200">Stripe, Asaas, Mercado Pago</strong>), 
                bots em tempo real (<strong className="text-zinc-200">Node.js / WhatsApp</strong>) e servidores web com <strong className="text-zinc-200">Nginx, VPS Ubuntu e Cloudflare</strong>.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href="#cases"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-zinc-100 hover:bg-white text-zinc-950 font-semibold transition-colors"
              >
                <span>ver casos de engenharia</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/5551999065232?text=Ol%C3%A1%20Vitor%2C%20vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 transition-colors"
              >
                <span>iniciar conversa no whatsapp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Engineering HUD / System Spec Card */}
          <div className="lg:col-span-5">
            <div className="rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-xs shadow-2xl overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/70 border-b border-zinc-800 text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="text-[11px] text-zinc-400 ml-2">sys_status.json</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>online</span>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-4 space-y-3.5 text-zinc-300">
                <div>
                  <span className="text-zinc-500">{"// localização & fuso"}</span>
                  <div className="text-zinc-200 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Porto Alegre, RS • UTC-3 (BRT)</span>
                  </div>
                </div>

                <div>
                  <span className="text-zinc-500">{"// stack de produção principal"}</span>
                  <div className="text-zinc-200 mt-0.5 flex flex-wrap gap-1.5">
                    {["PHP 8+", "Laravel 11", "Next.js 14", "MySQL", "Node.js", "Nginx", "Ubuntu"].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-zinc-500">{"// experiência comprovada"}</span>
                  <div className="space-y-1.5 mt-1 text-[11.5px]">
                    <div className="flex justify-between py-1 border-b border-zinc-900">
                      <span className="text-zinc-400">Games Hyped</span>
                      <span className="text-zinc-200">Full Stack & WebOps</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-zinc-900">
                      <span className="text-zinc-400">Messem Investimentos</span>
                      <span className="text-zinc-200">Growth & BI (SQL/Python)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-zinc-900">
                      <span className="text-zinc-400">Arwen Data Analytics</span>
                      <span className="text-zinc-200">Sistemas & RPA</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-zinc-400">General Motors</span>
                      <span className="text-zinc-200">Processos Industriais (4.5a)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-500">
                  <span>uptime infra: 99.9%</span>
                  <span className="text-zinc-400">vitoraguirre.com.br</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
