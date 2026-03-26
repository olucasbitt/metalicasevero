import { siteContent, whatsappUrl } from '../data/siteContent'
import { MessageCircle, MapPin, Phone, Clock3 } from 'lucide-react'
import { useLocation } from 'react-router-dom'

export function Footer() {
  const year = new Date().getFullYear()
  const location = useLocation()

  const anchorLink = (section: string) => {
    return location.pathname === '/' ? `#${section}` : `/#${section}`
  }

  return (
    <footer className="border-t border-white/10 bg-[#0a1628]">
      <div className="mx-auto w-full max-w-[1180px] px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_1fr]">
          
          <div>
            <img
              src="/images/logo.png"
              alt="Metálica Severo"
              className="h-14 w-auto"
            />

            <p className="mt-5 max-w-md text-sm leading-7 text-[#9bb0c7]">
              Excelência em funilaria, pintura e restauração automotiva, com
              atendimento de confiança, acabamento de alto padrão e suporte
              completo para clientes particulares, seguradoras e associações.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5d] hover:scale-[1.02]"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Navegação
            </span>

            <a href={anchorLink('home')} className="text-sm text-[#9bb0c7] transition hover:text-white">
              Início
            </a>
            <a href={anchorLink('servicos')} className="text-sm text-[#9bb0c7] transition hover:text-white">
              Serviços
            </a>
            <a href={anchorLink('sobre')} className="text-sm text-[#9bb0c7] transition hover:text-white">
              Sobre
            </a>
            <a href={anchorLink('galeria')} className="text-sm text-[#9bb0c7] transition hover:text-white">
              Galeria
            </a>
            <a href="/seguradoras" className="text-sm text-[#9bb0c7] transition hover:text-white">
              Seguradoras
            </a>
            <a href={anchorLink('contato')} className="text-sm text-[#9bb0c7] transition hover:text-white">
              Contato
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Contato
            </span>

            <div className="flex items-start gap-3 text-sm text-[#9bb0c7]">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[#e8651a]" />
              <span>{siteContent.company.address}</span>
            </div>

            <div className="flex items-start gap-3 text-sm text-[#9bb0c7]">
              <Phone size={18} className="mt-0.5 shrink-0 text-[#e8651a]" />
              <span>{siteContent.company.phoneDisplay}</span>
            </div>

            <div className="flex items-start gap-3 text-sm text-[#9bb0c7]">
              <Clock3 size={18} className="mt-0.5 shrink-0 text-[#e8651a]" />
              <span>08:00–12:00 e 13:00–17:48</span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <small className="text-xs text-[#6f87a3]">
              © {year} {siteContent.company.name}. Todos os direitos reservados.
            </small>

            <small className="text-xs text-[#6f87a3]">
              Desenvolvido para destacar qualidade, confiança e agilidade no atendimento.
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}