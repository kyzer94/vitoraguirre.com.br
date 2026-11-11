import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#09090b] border-t border-zinc-900 py-10 text-zinc-500 font-mono text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-zinc-900">
          <div className="flex items-center gap-2 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-zinc-600" />
            <span className="font-semibold text-zinc-200">vitoraguirre.com.br</span>
            <span className="text-zinc-600">/ software engineer</span>
          </div>

          <div className="flex items-center gap-5">
            <a href="#sobre" className="hover:text-zinc-200 transition-colors">sobre</a>
            <a href="#cases" className="hover:text-zinc-200 transition-colors">cases</a>
            <a href="#solucoes" className="hover:text-zinc-200 transition-colors">serviços</a>
            <a href="#contato" className="hover:text-zinc-200 transition-colors">contato</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/vitoraguirre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/vitor-lacerda-aguirre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-600">
          <div>
            © {new Date().getFullYear()} Vitor de Lacerda Aguirre. Construído com Next.js & Tailwind.
          </div>
          <div>
            Porto Alegre, RS • Brasil
          </div>
        </div>

      </div>
    </footer>
  );
}
