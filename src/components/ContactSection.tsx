"use client";

import { useState } from "react";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [demandType, setDemandType] = useState("Projeto Freelance / Desenvolvimento");
  const [details, setDetails] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("vitorlacerda1994@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    <section id="contato" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                {"// 05. contato & contratação"}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Vamos Conversar
              </h2>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Disponível para posições fixas de engenharia (CLT ou PJ), contratos de desenvolvimento de projetos
              completos (SaaS / E-commerce) e integrações críticas de pagamentos ou bots.
            </p>

            <div className="space-y-3 pt-2 font-mono text-xs">
              
              <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="text-zinc-500 text-[11px]">e-mail profissional</div>
                  <div className="text-zinc-200 mt-0.5">vitorlacerda1994@gmail.com</div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300"
                  title="Copiar e-mail"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <a
                href="https://wa.me/5551999065232?text=Ol%C3%A1%20Vitor%2C%20vi%20seu%20site%20e%20gostaria%20de%20conversar."
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-700 flex items-center justify-between group transition-colors"
              >
                <div>
                  <div className="text-zinc-500 text-[11px]">whatsapp direto</div>
                  <div className="text-zinc-200 mt-0.5 group-hover:text-emerald-400 transition-colors">(51) 99906-5232</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="https://linkedin.com/in/vitor-lacerda-aguirre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center gap-2 text-zinc-300 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>linkedin</span>
                </a>
                <a
                  href="https://github.com/kyzer94"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center gap-2 text-zinc-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                  <span>github</span>
                </a>
              </div>

            </div>

            <div className="text-[11px] font-mono text-zinc-500 pt-2">
              • Resposta em até 24h úteis • Porto Alegre, RS
            </div>
          </div>

          {/* Right Column: Clean Briefing Form */}
          <div className="lg:col-span-7 bg-zinc-950 border border-zinc-800 rounded-lg p-6 sm:p-8 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-zinc-900 text-zinc-400">
              <span>form_proposta.sh</span>
              <span className="text-[11px] text-zinc-600">{"// envio direto via whatsapp"}</span>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4 font-sans">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  nome / empresa:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos / Empresa X"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded bg-zinc-900 border border-zinc-800 focus:border-zinc-600 focus:outline-none text-zinc-100 text-sm placeholder:text-zinc-600 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  contato (e-mail ou whatsapp):
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: (51) 99999-9999 ou email@empresa.com"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded bg-zinc-900 border border-zinc-800 focus:border-zinc-600 focus:outline-none text-zinc-100 text-sm placeholder:text-zinc-600 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  tipo de oportunidade:
                </label>
                <select
                  value={demandType}
                  onChange={(e) => setDemandType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded bg-zinc-900 border border-zinc-800 focus:border-zinc-600 focus:outline-none text-zinc-100 text-sm font-mono"
                >
                  <option value="Projeto Freelance / Desenvolvimento">Projeto Freelance / Desenvolvimento</option>
                  <option value="Oportunidade de Vaga Fixa (PJ / CLT)">Oportunidade de Vaga Fixa (PJ / CLT)</option>
                  <option value="Integração de Pagamentos (Stripe, Asaas, etc.)">Integração de Pagamentos (Stripe, Asaas, etc.)</option>
                  <option value="Automação / Bot de WhatsApp">Automação / Bot de WhatsApp</option>
                  <option value="WebOps / Infraestrutura Linux">WebOps / Infraestrutura Linux</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  detalhes do projeto ou vaga:
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva brevemente o projeto, escopo, tecnologias ou informações sobre a vaga..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded bg-zinc-900 border border-zinc-800 focus:border-zinc-600 focus:outline-none text-zinc-100 text-sm placeholder:text-zinc-600 font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded bg-zinc-100 hover:bg-white text-zinc-950 font-bold font-mono text-xs shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>enviar proposta pelo whatsapp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
