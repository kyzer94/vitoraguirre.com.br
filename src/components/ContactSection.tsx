"use client";

import { useState } from "react";
import { MessageSquare, Mail, Send, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [demandType, setDemandType] = useState("Projeto Freelance");
  const [details, setDetails] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá Vitor! Meu nome é ${name || "Visitante"}.
Contato: ${contact || "Não informado"}
Tipo de Demanda: ${demandType}
Mensagem: ${details || "Gostaria de conversar sobre um projeto/oportunidade."}`;

    const url = `https://wa.me/5551999065232?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#0b101d] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider">
              Vamos Conversar
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Tem um projeto em mente ou uma oportunidade na sua equipe?
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Estou disponível para novos projetos sob demanda (Freelance / PJ), consultorias em pagamentos e arquitetura web, ou posições fixas como Desenvolvedor Full Stack / Backend.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="https://wa.me/5551999065232?text=Ol%C3%A1%20Vitor%2C%20vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%2Foportunidade."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">WhatsApp Direto</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    (51) 99906-5232
                  </div>
                </div>
              </a>

              <a
                href="mailto:vitorlacerda1994@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">E-mail Profissional</div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    vitorlacerda1994@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex gap-3 pt-2">
                <a
                  href="https://linkedin.com/in/vitor-lacerda-aguirre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/vitoraguirre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-slate-400" />
                  GitHub
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <Clock className="w-4 h-4 text-slate-500" />
              <span>Resposta média em poucas horas • Porto Alegre, RS (Atendendo remoto)</span>
            </div>
          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Solicitar Proposta ou Enviar Mensagem
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Preencha os detalhes e o sistema abrirá o WhatsApp com sua mensagem formatada para envio imediato:
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Seu Nome ou Empresa
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva / Minha Empresa"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none text-white text-sm placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Seu WhatsApp ou E-mail para Retorno
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: (51) 99999-9999 ou email@empresa.com"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none text-white text-sm placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Tipo de Oportunidade
                </label>
                <select
                  value={demandType}
                  onChange={(e) => setDemandType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none text-white text-sm"
                >
                  <option value="Projeto Freelance / Desenvolvimento Web">Projeto Freelance / Desenvolvimento Web</option>
                  <option value="Oportunidade de Vaga (PJ / CLT)">Oportunidade de Vaga (PJ / CLT)</option>
                  <option value="Integração de Pagamentos (Stripe, Asaas, etc.)">Integração de Pagamentos (Stripe, Asaas, etc.)</option>
                  <option value="Automação / Bot de WhatsApp">Automação / Bot de WhatsApp</option>
                  <option value="Consultoria / Infraestrutura WebOps">Consultoria / Infraestrutura WebOps</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Detalhes do Projeto ou Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Conte um pouco sobre o projeto, objetivo, prazos ou o perfil da vaga..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none text-white text-sm placeholder:text-slate-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                Enviar Mensagem pelo WhatsApp
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
