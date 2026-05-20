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

function CornerTag({ label, accent }: { label: string; accent: boolean }) {
  return (
    <div className="absolute left-0 top-0 overflow-hidden">
      <div className="relative flex h-14 w-14 items-start justify-start">
        <div
          className="absolute left-0 top-0 h-0 w-0"
          style={{
            borderStyle: 'solid',
            borderWidth: '56px 56px 0 0',
            borderColor: accent
              ? 'rgba(232,101,26,0.85) transparent transparent transparent'
              : 'rgba(0,0,0,0.75) transparent transparent transparent',
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
    el.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
  }

  const prev = () => scrollTo(Math.max(0, active - 1))
  const next = () => scrollTo(Math.min(items.length - 1, active + 1))

  return (
    <section id="galeria" className="relative overflow-hidden bg-[#09111f] py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e8651a]/4 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label={siteContent.beforeAfter.label}
            title={siteContent.beforeAfter.title}
            description={siteContent.beforeAfter.description}
          />
          <div className="mb-1 flex shrink-0 flex-col items-start md:items-end">
            <span className="font-['Barlow_Condensed'] text-5xl font-bold leading-none text-[#e8651a]">+500</span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/25">reparações realizadas</span>
          </div>
        </div>

        <div className="relative mt-10">
          <button
            onClick={prev}
            aria-label="Anterior"
            className={`absolute -left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#09111f]/80 text-white/60 backdrop-blur-sm transition duration-200 hover:border-[#e8651a]/40 hover:text-[#e8651a] ${canPrev ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={next}
            aria-label="Próximo"
            className={`absolute -right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#09111f]/80 text-white/60 backdrop-blur-sm transition duration-200 hover:border-[#e8651a]/40 hover:text-[#e8651a] ${canNext ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item, i) => (
              <article
                key={i}
                className="group w-[78vw] max-w-[340px] shrink-0 overflow-hidden rounded-xl border border-white/5 bg-[#0f1d33] shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition duration-500 [scroll-snap-align:start] hover:border-[#e8651a]/20 hover:shadow-[0_0_30px_rgba(232,101,26,0.08),0_16px_40px_rgba(0,0,0,0.4)]"
              >
                {/* Antes */}
                <div className="relative overflow-hidden">
                  <img
                    src={`/images/antesdepois/${item.antes}`}
                    alt={`Antes do reparo ${i + 1}`}
                    className="h-52 w-full object-cover"
                    loading="lazy"
                  />
                  <CornerTag label="Antes" accent={false} />
                </div>

                {/* Divider */}
                <div className="relative h-[1px] bg-white/5">
                  <div className="absolute inset-y-0 left-0 w-0 bg-[#e8651a]/50 transition-all duration-700 group-hover:w-full" />
                </div>

                {/* Depois */}
                <div className="relative overflow-hidden">
                  <img
                    src={`/images/antesdepois/${item.depois}`}
                    alt={`Depois do reparo ${i + 1}`}
                    className="h-52 w-full object-cover"
                    loading="lazy"
                  />
                  <CornerTag label="Depois" accent={true} />
                </div>
              </article>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#09111f] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#09111f] to-transparent" />
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Ir para ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? 'h-[6px] w-6 bg-[#e8651a]'
                  : 'h-[6px] w-[6px] bg-white/15 hover:bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}