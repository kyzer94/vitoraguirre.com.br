import { Mail, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#070a12] border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div>
            <div className="text-white text-base font-bold tracking-tight">Vitor de Lacerda Aguirre</div>
            <div className="text-slate-500 mt-0.5">Engenharia de Software • vitoraguirre.com.br</div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#cases" className="hover:text-white transition-colors">Cases Reais</a>
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vitoraguirre"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/vitor-lacerda-aguirre"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-slate-700 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:vitorlacerda1994@gmail.com"
              aria-label="E-mail"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/5551999065232"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-slate-700 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} Vitor Aguirre. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1.5">
            Construído com Next.js & Tailwind CSS • Porto Alegre, RS
          </div>
        </div>

      </div>
    </footer>
  );
}
