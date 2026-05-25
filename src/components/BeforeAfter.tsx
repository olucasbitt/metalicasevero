'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { siteContent } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

const items = [
  { antes: 'antes1.png', depois: 'depois1.png' },
  { antes: 'antes2.png', depois: 'depois2.png' },
  { antes: 'antes3.png', depois: 'depois3.png' },
  { antes: 'antes4.png', depois: 'depois4.png' },
  { antes: 'antes5.png', depois: 'depois5.png' },
  { antes: 'antes6.png', depois: 'depois6.png' },
]

function CornerTag({
  label,
  accent,
}: {
  label: string
  accent: boolean
}) {
  return (
    <div className="absolute left-0 top-0 overflow-hidden">
      <div className="relative flex h-14 w-14 items-start justify-start">
        <div
          className="absolute left-0 top-0 h-0 w-0"
          style={{
            borderStyle: 'solid',
            borderWidth: '56px 56px 0 0',
            borderColor: accent
              ? 'rgba(232,101,26,0.88) transparent transparent transparent'
              : 'rgba(15,42,82,0.95) transparent transparent transparent',
          }}
        />

        <span className="relative z-10 ml-[4px] mt-[6px] text-[8px] font-bold uppercase tracking-[0.18em] text-white/90">
          {label}
        </span>
      </div>
    </div>
  )
}

export function BeforeAfter() {
  const trackRef = useRef<HTMLDivElement>(null)

  const [active, setActive] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateState = useCallback(() => {
    const el = trackRef.current

    if (!el) return

    const cardWidth = el.scrollWidth / items.length
    const index = Math.round(el.scrollLeft / cardWidth)

    setActive(index)
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }, [])

  useEffect(() => {
    const el = trackRef.current

    if (!el) return

    el.addEventListener('scroll', updateState, { passive: true })

    updateState()

    return () => el.removeEventListener('scroll', updateState)
  }, [updateState])

  const scrollTo = (index: number) => {
    const el = trackRef.current

    if (!el) return

    const cardWidth = el.scrollWidth / items.length

    el.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth',
    })
  }

  const prev = () => scrollTo(Math.max(0, active - 1))
  const next = () => scrollTo(Math.min(items.length - 1, active + 1))

  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-[#10284f] py-28"
    >
      {/* Glow fundo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e8651a]/4 blur-[160px]" />

      {/* Gradient topo */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/10 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label={siteContent.beforeAfter.label}
            title={siteContent.beforeAfter.title}
            description={siteContent.beforeAfter.description}
          />

          <div className="mb-1 flex shrink-0 flex-col items-start md:items-end">
            <span className="font-['Barlow_Condensed'] text-4xl font-bold leading-none text-[#ff8a3d] md:text-5xl">
              +5000
            </span>

            <span className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#b8cce0]/70">
              reparações realizadas
            </span>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mt-12">
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className={`absolute -left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#163766]/90 text-white/70 backdrop-blur-md transition duration-300 hover:bg-[#1d467d] hover:text-[#ff8a3d] ${
              canPrev
                ? 'opacity-100'
                : 'pointer-events-none opacity-0'
            }`}
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Próximo"
            className={`absolute -right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#163766]/90 text-white/70 backdrop-blur-md transition duration-300 hover:bg-[#1d467d] hover:text-[#ff8a3d] ${
              canNext
                ? 'opacity-100'
                : 'pointer-events-none opacity-0'
            }`}
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-3 [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item, i) => (
              <article
                key={i}
                className="group w-[78vw] max-w-[300px] shrink-0 overflow-hidden rounded-[26px] bg-[#163766]/95 shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-[2px] transition duration-500 [scroll-snap-align:start] hover:-translate-y-1 hover:bg-[#1a4278]"
              >
                {/* Antes */}
                <div className="relative overflow-hidden">
                  <img
                    src={`/images/antesdepois/${item.antes}`}
                    alt={`Antes do reparo ${i + 1}`}
                    className="h-44 w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-48"
                    loading="lazy"
                  />

                  <CornerTag label="Antes" accent={false} />
                </div>

                {/* Divider */}
                <div className="relative h-[1px] bg-white/10">
                  <div className="absolute inset-y-0 left-0 w-0 bg-[#e8651a]/70 transition-all duration-700 group-hover:w-full" />
                </div>

                {/* Depois */}
                <div className="relative overflow-hidden">
                  <img
                    src={`/images/antesdepois/${item.depois}`}
                    alt={`Depois do reparo ${i + 1}`}
                    className="h-44 w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-48"
                    loading="lazy"
                  />

                  <CornerTag label="Depois" accent />
                </div>
              </article>
            ))}
          </div>

          {/* Side gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#10284f] to-transparent" />

          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#10284f] to-transparent" />
        </div>

        {/* Indicators */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Ir para ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? 'h-[6px] w-7 bg-[#e8651a]'
                  : 'h-[6px] w-[6px] bg-[#9fb3c8]/40 hover:bg-[#c7d5e5]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}