import { useState, useEffect, useRef } from 'react'
import { whatsappUrl } from '../data/siteContent'
import { Menu, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

type SectionId = 'servicos' | 'galeria' | 'sobre' | 'seguros' | 'contato'
type OpenMenu = 'sinistros' | null

export function Navbar() {
  const [open, setOpen] = useState<boolean>(false)
  const [active, setActive] = useState<string>('')
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null)

  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const sections: { id: SectionId; label: string }[] = [
    { id: 'servicos', label: 'Serviços' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'seguros', label: 'Sinistros & Seguradoras' },
    { id: 'contato', label: 'Contato' },
  ]

  const indicatorRef = useRef<HTMLSpanElement | null>(null)
  const linksRef = useRef<Record<string, HTMLElement | null>>({})
  const menuRef = useRef<HTMLDivElement | null>(null)

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNavigation = (id: string) => {
    setOpen(false)
    setOpenMenu(null)

    if (isHome) scrollToSection(id)
    else navigate(`/#${id}`)
  }

  // fechar dropdown fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpenMenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () =>
      document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // scroll spy
  useEffect(() => {
    if (!isHome) return

    const handleScroll = () => {
      let current = ''

      sections.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return

        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id
        }
      })

      if (current) setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  // indicator
  useEffect(() => {
    const el = linksRef.current[active]
    const indicator = indicatorRef.current

    if (el && indicator) {
      indicator.style.width = `${el.offsetWidth}px`
      indicator.style.left = `${el.offsetLeft}px`
      indicator.style.opacity = '1'
    }
  }, [active])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center px-4 md:px-8">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" className="h-10" />
        </Link>

        <div className="flex-1" />

        {/* DESKTOP */}
        <nav className="relative hidden md:flex items-center gap-8 text-sm">

          {sections.map(({ id, label }) => {

            if (id === 'seguros') {
              return (
                <div key={id} ref={menuRef} className="relative">

                  <button
                    ref={(el) => {
                      linksRef.current[id] = el
                    }}
                    onClick={() =>
                      setOpenMenu(openMenu === 'sinistros' ? null : 'sinistros')
                    }
                    className={`transition ${
                      active === id
                        ? 'text-white font-semibold'
                        : 'text-[#b8cce0] hover:text-white'
                    }`}
                  >
                    {label}
                  </button>

                  {openMenu === 'sinistros' && (
                    <div className="absolute top-10 left-0 w-[320px] bg-[#0a1628] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

                      <button
                        onClick={() => handleNavigation('seguros')}
                        className="w-full text-left p-4 hover:bg-white/5"
                      >
                        <p className="text-white font-medium">
                          Atendimento de sinistro
                        </p>
                        <p className="text-xs text-[#7f93ad] mt-1">
                          Processo de reparo, análise e suporte com seguradora
                        </p>
                      </button>

                      <div className="h-px bg-white/10" />

                      <Link
                        to="/seguradoras"
                        onClick={() => setOpenMenu(null)}
                        className="block p-4 hover:bg-white/5"
                      >
                        <p className="text-white font-medium">
                          Seguradoras parceiras
                        </p>
                        <p className="text-xs text-[#7f93ad] mt-1">
                          Lista completa de empresas conveniadas
                        </p>
                      </Link>

                    </div>
                  )}
                </div>
              )
            }

            return (
              <button
                key={id}
                ref={(el) => {
                  linksRef.current[id] = el
                }}
                onClick={() => handleNavigation(id)}
                className={`transition ${
                  active === id
                    ? 'text-white font-semibold'
                    : 'text-[#b8cce0] hover:text-white'
                }`}
              >
                {label}
              </button>
            )
          })}

          <span
            ref={indicatorRef}
            className="absolute bottom-[-6px] h-[2px] bg-[#e8651a] transition-all duration-300 opacity-0"
          />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-6 rounded-lg bg-[#e8651a] px-5 py-2 text-sm font-semibold text-white hover:bg-[#d45712]"
          >
            Orçamento
          </a>
        </nav>

        {/* MOBILE BTN */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE */}
      <div className={`md:hidden overflow-hidden transition-all ${open ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="flex flex-col gap-4 px-6 py-4 bg-[#0a1628]/95">

          {sections.map(({ id, label }) => {

            if (id === 'seguros') {
              return (
                <div key={id}>
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === 'sinistros' ? null : 'sinistros')
                    }
                    className="text-left text-[#b8cce0]"
                  >
                    {label}
                  </button>

                  {openMenu === 'sinistros' && (
                    <div className="pl-4 flex flex-col gap-3 mt-2">

                      <button
                        onClick={() => handleNavigation('seguros')}
                        className="text-left text-[#b8cce0]"
                      >
                        Atendimento de sinistro
                      </button>

                      <Link
                        to="/seguradoras"
                        onClick={() => setOpen(false)}
                        className="text-left text-[#b8cce0]"
                      >
                        Seguradoras parceiras
                      </Link>

                    </div>
                  )}
                </div>
              )
            }

            return (
              <button
                key={id}
                onClick={() => handleNavigation(id)}
                className="text-left text-[#b8cce0] hover:text-white"
              >
                {label}
              </button>
            )
          })}

          <a
            href={whatsappUrl}
            className="text-center bg-[#25d366] py-3 rounded-lg font-semibold text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}