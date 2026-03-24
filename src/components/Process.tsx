import { siteContent } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function Process() {
  return (
    <section id="processo" className="bg-[#0d2244] py-24">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        <SectionHeading
          label={siteContent.process.label}
          title={siteContent.process.title}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {siteContent.process.steps.map((step) => (
            <article
              key={step.number}
              className="group relative overflow-hidden rounded-xl border border-[#1a3a6a] bg-[#0f2a52] p-7 shadow-[0_10px_30px_rgba(0,0,0,0.14)] transition hover:-translate-y-1 hover:border-[#e8651a]/40"
            >
              <span className="mb-4 block font-['Barlow_Condensed'] text-xs font-extrabold uppercase tracking-[0.18em] text-[#e8651a]">
                {step.number}
              </span>

              <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase leading-tight text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-[1rem] leading-7 text-[#b8cce0]">
                {step.description}
              </p>

              <div className="pointer-events-none absolute -bottom-6 right-2 font-['Barlow_Condensed'] text-[5rem] font-black leading-none text-white/[0.03] transition group-hover:text-white/[0.05]">
                {step.number}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}