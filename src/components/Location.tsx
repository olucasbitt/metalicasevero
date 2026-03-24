import { siteContent } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function Location() {
  return (
    <section id="localizacao" className="bg-[#0d2244] py-24">
      <div className="mx-auto grid w-full max-w-[1180px] gap-8 px-4 md:grid-cols-[1.05fr_0.95fr] md:px-8">
        <div>
          <SectionHeading
            label={siteContent.location.label}
            title={siteContent.location.title}
          />

          <div className="mt-8 grid gap-4">
            {siteContent.location.items.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#1a3a6a] bg-[#0f2a52] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.16)]"
              >
                <strong className="mb-2 block font-['Barlow_Condensed'] text-xs font-bold uppercase tracking-[0.14em] text-[#e8651a]">
                  {item.label}
                </strong>

                <span className="block text-[1rem] leading-7 text-[#b8cce0]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <a
		  href={siteContent.location.mapUrl}
		  target="_blank"
		  rel="noreferrer"
		  className="group overflow-hidden rounded-2xl border border-[#1a3a6a] bg-[#0f2a52] shadow-[0_12px_36px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-[#e8651a]/40"
		>
		  {/* IMAGEM */}
		  <div className="relative h-60 w-full overflow-hidden">
			<img
			  src="/images/empresa/oficina2.jpg"
			  alt="Localização da oficina"
			  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
			/>

			{/* overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-[#0f2a52]/90 to-transparent" />
		  </div>

		  {/* CONTEÚDO */}
		  <div className="flex flex-col items-center justify-center p-8 text-center">
			{/* ÍCONE */}
			<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#1a3a6a] bg-white/[0.03] text-xl transition group-hover:border-[#e8651a]/40">
			  📍
			</div>

			<strong className="font-['Barlow_Condensed'] text-3xl font-black uppercase leading-tight text-white">
			  {siteContent.location.mapTitle}
			</strong>

			<span className="mt-3 max-w-[320px] text-[1rem] leading-7 text-[#6a89a8]">
			  {siteContent.location.mapSubtitle}
			</span>

			<span className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-[10px] bg-[#e8651a] px-6 font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.08em] text-white transition group-hover:bg-[#c4520f]">
			  Abrir no mapa
			</span>
		  </div>
		</a>
      </div>
    </section>
  )
}