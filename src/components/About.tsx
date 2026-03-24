import { siteContent } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="sobre" className="bg-[#0a1628] py-24">
      <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-4 md:grid-cols-[1.08fr_0.92fr] md:px-8">
        {/* TEXTO */}
        <div className="flex flex-col justify-center">
          <SectionHeading
            label={siteContent.about.label}
            title={siteContent.about.title}
          />

          <blockquote className="mt-6 max-w-[720px] border-l-4 border-[#e8651a] pl-5 font-['Barlow_Condensed'] text-2xl leading-snug text-white md:text-3xl">
            “{siteContent.about.quote}”
          </blockquote>

          <p className="mt-6 max-w-[680px] text-[1.05rem] leading-8 text-[#b8cce0]">
            {siteContent.about.description}
          </p>
        </div>

        {/* IMAGEM + STATS */}
        <div className="relative min-h-[560px] overflow-hidden rounded-[30px] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <img
            src="/images/empresa/oficina.jpg"
            alt="Oficina Metálica Severo"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* camada para leitura */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,18,33,0.82),rgba(7,18,33,0.38)_45%,rgba(7,18,33,0.18)_75%,rgba(7,18,33,0.08))]" />

          {/* vinheta suave */}
          <div className="absolute inset-0 shadow-[inset_0_-120px_120px_rgba(0,0,0,0.35)]" />

          {/* glow decorativo */}
          <div className="absolute left-1/2 top-8 h-24 w-24 -translate-x-1/2 rounded-full bg-[#e8651a]/15 blur-3xl" />

         <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
			  <div className="flex gap-3">
				{siteContent.about.stats.map((stat) => (
				  <div
					key={stat.label}
					className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-sm"
				  >
					<strong className="block font-['Barlow_Condensed'] text-3xl font-black text-[#e8651a] leading-none">
					  {stat.value}
					</strong>

					<span className="mt-1 block text-[10px] uppercase tracking-[0.15em] text-[#d9e6f2]">
					  {stat.label}
					</span>
				  </div>
				))}
			  </div>

			  
			</div>
        </div>
      </div>
    </section>
  )
}