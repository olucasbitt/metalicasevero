import { siteContent } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

const items = [
  { nome: 'BYD', antes: 'bydAntes.jpeg', depois: 'bydDepois.jpeg' },
  { nome: 'Duster', antes: 'dusterAntes.jpeg', depois: 'dusterDepois.jpeg' },
  { nome: 'EcoSport', antes: 'ecoAntes.jpeg', depois: 'ecoDepois.jpeg' },
  { nome: 'Kwid', antes: 'kwidAntes.jpeg', depois: 'kwidDepois.jpeg' },
  { nome: 'Onix', antes: 'onixAntes.jpeg', depois: 'onixDepois.jpeg' },
  { nome: 'Yaris', antes: 'yarisAntes.jpeg', depois: 'yarisDepois.jpeg' },
]

export function BeforeAfter() {
  return (
    <section id="galeria" className="py-20 bg-[#09111f]">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionHeading
          label={siteContent.beforeAfter.label}
          title={siteContent.beforeAfter.title}
          description={siteContent.beforeAfter.description}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.nome}
              className="group overflow-hidden rounded-2xl border border-[#1a3a6a] bg-[#0f1d33] shadow-[0_10px_35px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
            >
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={`/images/antesdepois/${item.antes}`}
                      alt={`${item.nome} antes do reparo`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                      Antes
                    </span>
                  </div>

                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={`/images/antesdepois/${item.depois}`}
                      alt={`${item.nome} depois do reparo`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-[#e8651a] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                      Depois
                    </span>
                  </div>
                </div>

                <div className="absolute inset-y-0 left-1/2 z-10 w-px -translate-x-1/2 bg-white/25" />
              </div>

              <div className="border-t border-white/10 px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-['Barlow_Condensed'] text-2xl uppercase tracking-wider text-white">
                    {item.nome}
                  </h3>

                  <span className="rounded-full border border-[#e8651a]/30 bg-[#e8651a]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ff9b5c]">
                    Reparação Automotiva
                  </span>
                </div>

                
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}