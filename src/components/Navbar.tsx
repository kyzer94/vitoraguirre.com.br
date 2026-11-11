"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight, Copy, Check } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("vitorlacerda1994@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#09090b]/85 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 font-mono text-sm tracking-tight text-zinc-100 group">
          <span className="w-2.5 h-2.5 rounded-sm bg-zinc-100 group-hover:bg-blue-400 transition-colors" />
          <span className="font-semibold text-zinc-100">vitoraguirre</span>
          <span className="text-zinc-500 hidden sm:inline">/ full-stack</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono text-zinc-400">
          <a href="#sobre" className="hover:text-zinc-100 transition-colors">01. sobre</a>
          <a href="#cases" className="hover:text-zinc-100 transition-colors">02. engenharia & cases</a>
          <a href="#solucoes" className="hover:text-zinc-100 transition-colors">03. serviços</a>
          <a href="#stack" className="hover:text-zinc-100 transition-colors">04. stack</a>
          <a href="#contato" className="hover:text-zinc-100 transition-colors">05. contato</a>
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={copyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 transition-all"
            title="Copiar e-mail"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">email copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-500" />
                <span>copiar e-mail</span>
              </>
            )}
          </button>

          <a
            href="https://wa.me/5551999065232?text=Ol%C3%A1%20Vitor%2C%20vi%20seu%20site%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold font-mono transition-colors"
          >
            <span>whatsapp</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b] border-b border-zinc-800 px-6 py-5 space-y-4 font-mono text-xs">
          <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-zinc-400 hover:text-zinc-100">
            01. sobre
          </a>
          <a href="#cases" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-zinc-400 hover:text-zinc-100">
            02. engenharia & cases
          </a>
          <a href="#solucoes" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-zinc-400 hover:text-zinc-100">
            03. serviços
          </a>
          <a href="#stack" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-zinc-400 hover:text-zinc-100">
            04. stack
          </a>
          <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-zinc-400 hover:text-zinc-100">
            05. contato
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={copyEmail}
              className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
            >
              {copied ? "E-mail copiado!" : "Copiar e-mail profissional"}
            </button>
            <a
              href="https://wa.me/5551999065232?text=Ol%C3%A1%20Vitor%2C%20vi%20seu%20site%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-md bg-zinc-100 text-zinc-950 font-bold"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
