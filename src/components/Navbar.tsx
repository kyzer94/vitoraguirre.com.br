"use client";

import { useState } from "react";
import { MessageSquare, Menu, X, ArrowUpRight, Code2 } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#090d16]/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
            </div>
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              Vitor Aguirre
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Full Stack
              </span>
            </span>
            <span className="text-xs text-slate-400 block -mt-0.5">vitoraguirre.com.br</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#cases" className="hover:text-blue-400 transition-colors">Cases Reais</a>
          <a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços & Soluções</a>
          <a href="#stack" className="hover:text-blue-400 transition-colors">Stack Técnica</a>
          <a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>Disponível para projetos</span>
          </div>

          <a
            href="https://wa.me/5551999065232?text=Ol%C3%A1%20Vitor%2C%20vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%2Foportunidade."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all duration-200 hover:scale-[1.02]"
          >
            <MessageSquare className="w-4 h-4" />
            Falar no WhatsApp
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090d16]/95 border-b border-slate-800 px-4 pt-2 pb-6 space-y-4">
          <a
            href="#cases"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-300 hover:text-blue-400"
          >
            Cases Reais
          </a>
          <a
            href="#servicos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-300 hover:text-blue-400"
          >
            Serviços & Soluções
          </a>
          <a
            href="#stack"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-300 hover:text-blue-400"
          >
            Stack Técnica
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-300 hover:text-blue-400"
          >
            Contato
          </a>

          <div className="pt-2 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>Disponível para novos projetos</span>
            </div>

            <a
              href="https://wa.me/5551999065232?text=Ol%C3%A1%20Vitor%2C%20vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%2Foportunidade."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
