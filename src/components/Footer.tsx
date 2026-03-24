import { siteContent, whatsappUrl } from '../data/siteContent'
import { MessageCircle } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1a3a6a] bg-[#0a1628] py-12">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
          
          {/* LOGO */}
          <div className="max-w-sm">
			  <img
				src="/images/logo.png"
				alt="Metálica Severo"
				className="h-14 w-auto"
			  />

			
		</div>

          {/* LINKS */}
          <div className="flex flex-col gap-2 text-sm">
            <span className="text-white font-semibold uppercase tracking-wider text-xs mb-2">
              Navegação
            </span>

            <a href="#servicos" className="text-[#6a89a8] hover:text-white transition">
              Serviços
            </a>
            <a href="#sobre" className="text-[#6a89a8] hover:text-white transition">
              Sobre
            </a>
          </div>

          {/* CONTATO */}
          <div className="flex flex-col gap-3">
            <span className="text-white font-semibold uppercase tracking-wider text-xs">
              Contato
            </span>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25d366] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center md:text-right">
          <small className="text-xs text-[#6a89a8]">
            © {year} {siteContent.company.name}. Todos os direitos reservados.
          </small>
        </div>

      </div>
    </footer>
  )
}