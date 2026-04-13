import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

type SectionId = 'servicos' | 'galeria' | 'sobre' | 'seguros' | 'contato'
type OpenMenu = 'sinistros' | null

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null)

  const location = useLocation()
  const navigate = useNavigate()

  const menuRef = useRef<HTMLDivElement | null>(null)

  const sections: { id: SectionId; label: string }[] = [
    { id: 'servicos', label: 'Serviços' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'seguros', label: 'Sinistros e Seguradoras' }
  ]
 

  // 🔥 NAVEGAÇÃO ENTRE PÁGINAS
  const goTo = (path: string) => {
    setOpenMenu(null)

    requestAnimationFrame(() => {
      navigate(path)
      setOpen(false)
    })
  }

  // 🔥 SCROLL SEGURO
  const scrollTo = (id: string) => {
    setOpenMenu(null)

    requestAnimationFrame(() => {
      setOpen(false)

      if (location.pathname !== '/') {
        navigate(`/#${id}`)
        return
      }

      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
      })
    })
  }

  // click outside submenu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center px-4 md:px-8">

        {/* LOGO */}
        <button onClick={() => goTo('/')} className="flex items-center">
          <img src="/images/logo.png" className="h-10" />
        </button>

        <div className="flex-1" />

        {/* DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm relative">

          {sections.map(({ id, label }) => {
            if (id === 'seguros') {
              return (
                <div key={id} ref={menuRef} className="relative">

                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === 'sinistros' ? null : 'sinistros')
                    }
                    className="text-[#b8cce0] hover:text-white"
                  >
                    {label}
                  </button>

                  {openMenu === 'sinistros' && (
                    <div className="absolute top-10 left-0 w-[320px] bg-[#0a1628] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

                      <button
                        onClick={() => scrollTo('seguros')}
                        className="w-full text-left p-4 hover:bg-white/5"
                      >
                        Atendimento de sinistro
                      </button>

                      <div className="h-px bg-white/10" />

                      <button
                        onClick={() => goTo('/seguradoras')}
                        className="w-full text-left p-4 hover:bg-white/5"
                      >
                        Seguradoras parceiras
                      </button>

                    </div>
                  )}
                </div>
              )
            }

            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-[#b8cce0] hover:text-white"
              >
                {label}
              </button>
            )
          })}

          {/* ORÇAMENTO (DESKTOP) */}
          <button
            onClick={() => scrollTo('contato')}
            className="ml-6 rounded-lg bg-[#e8651a] px-5 py-2 text-sm font-semibold text-white hover:bg-[#d45712]"
          >
            Orçamento
          </button>
        </nav>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open
            ? 'max-h-[700px] opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        } bg-[#0a1628]/95 border-t border-white/10`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">

          {sections.map(({ id, label }) => {
            if (id === 'seguros') {
              return (
                <div key={id}>
                  <button
                    onPointerDown={(e) => {
                      e.preventDefault()
                      setOpenMenu(openMenu === 'sinistros' ? null : 'sinistros')
                    }}
                    className="text-left text-[#b8cce0]"
                  >
                    {label}
                  </button>

                  {openMenu === 'sinistros' && (
                    <div className="pl-4 flex flex-col gap-3 mt-2">

                      <button
                        onPointerDown={(e) => {
                          e.preventDefault()
                          scrollTo('seguros')
                        }}
                        className="text-left text-[#b8cce0]"
                      >
                        Atendimento de sinistro
                      </button>

                      <button
                        onPointerDown={(e) => {
                          e.preventDefault()
                          goTo('/seguradoras')
                        }}
                        className="text-left text-[#b8cce0]"
                      >
                        Seguradoras parceiras
                      </button>

                    </div>
                  )}
                </div>
              )
            }

            return (
              <button
                key={id}
                onPointerDown={(e) => {
                  e.preventDefault()
                  scrollTo(id)
                }}
                className="text-left text-[#b8cce0] hover:text-white"
              >
                {label}
              </button>
            )
          })}

          {/* ORÇAMENTO (MOBILE) */}
          <button
            onPointerDown={(e) => {
              e.preventDefault()
              scrollTo('contato')
              setOpen(false)
              setOpenMenu(null)
            }}
            className="text-center bg-[#e8651a] py-3 rounded-lg font-semibold text-white"
          >
            Orçamento
          </button>
        </div>
      </div>
    </header>
  )
}