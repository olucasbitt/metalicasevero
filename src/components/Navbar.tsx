import { useState } from 'react'

import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center px-4 md:px-8">
        
        {/* LOGO */}
        <a href="#home" className="flex items-center">
          <img src="/images/logo.png" alt="Metálica Severo" className="h-10" />
        </a>

        {/* ESPAÇO FLEX */}
        <div className="flex-1" />

        {/* LINKS DESKTOP (ALINHADOS À DIREITA) */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#b8cce0]">
          <a href="#servicos" className="hover:text-white transition">
            Serviços
          </a>
          <a href="#sobre" className="hover:text-white transition">
            Sobre
          </a>
          <a href="#galeria" className="hover:text-white transition">
            Galeria
          </a>
          <a href="#contato" className="hover:text-white transition">
            Contato
          </a>

          {/* BOTÃO */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-4 inline-flex items-center rounded-lg bg-[#e8651a] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#e8651a]/20 transition hover:bg-[#d45712] hover:scale-[1.03]"
          >
            Orçamento
          </a>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4 px-6 pb-6 pt-4 bg-[#0a1628]/95 backdrop-blur border-t border-white/10">
          
          <a onClick={() => setOpen(false)} href="#servicos" className="text-[#b8cce0] hover:text-white">
            Serviços
          </a>
          <a onClick={() => setOpen(false)} href="#sobre" className="text-[#b8cce0] hover:text-white">
            Sobre
          </a>
          <a onClick={() => setOpen(false)} href="#galeria" className="text-[#b8cce0] hover:text-white">
            Galeria
          </a>
          <a onClick={() => setOpen(false)} href="#contato" className="text-[#b8cce0] hover:text-white">
            Contato
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-center rounded-lg bg-[#25d366] px-4 py-3 font-semibold text-white"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}