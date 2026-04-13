import { siteContent, whatsappUrl } from '../data/siteContent'
import { MessageCircle, MapPin, Phone, Clock3 } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

export function Footer() {
  const year = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()

  const goToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`)
      return
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const goToPage = (path: string) => {
    navigate(path)
  }

  return (
    <footer className="border-t border-white/10 bg-[#0a1628]">
      <div className="mx-auto w-full max-w-[1180px] px-4 py-14 md:px-8">

        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_1fr]">

          {/* LOGO + DESCRIÇÃO */}
          <div>
            <img
              src="/images/logo.png"
              alt="Metálica Severo"
              className="h-14 w-auto"
            />

            <p className="mt-5 max-w-md text-sm leading-7 text-[#9bb0c7]">
              Excelência em funilaria, pintura e restauração automotiva, com atendimento de confiança.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>

            </div>
          </div>

          {/* NAVEGAÇÃO */}
          <div className="flex flex-col gap-3">

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Navegação
            </span>

            <button onClick={() => goToSection('servicos')} className="text-left text-sm text-[#9bb0c7] hover:text-white">
              Serviços
            </button>

            <button onClick={() => goToSection('sobre')} className="text-left text-sm text-[#9bb0c7] hover:text-white">
              Sobre
            </button>

            <button onClick={() => goToSection('galeria')} className="text-left text-sm text-[#9bb0c7] hover:text-white">
              Galeria
            </button>

            <button onClick={() => goToPage('/seguradoras')} className="text-left text-sm text-[#9bb0c7] hover:text-white">
              Seguradoras
            </button>

            <button onClick={() => goToSection('contato')} className="text-left text-sm text-[#9bb0c7] hover:text-white">
              Contato
            </button>

          </div>

          {/* CONTATO */}
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

        {/* FOOTER BOTTOM */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center md:flex md:justify-between md:text-left">

          <small className="text-xs text-[#6f87a3]">
            © {year} {siteContent.company.name}. Todos os direitos reservados.
          </small>

          

        </div>
      </div>
    </footer>
  )
}