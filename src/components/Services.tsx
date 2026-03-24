import { siteContent } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function Services() {
  return (
    <section id="servicos" className="bg-[#0d2244] py-24">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        <SectionHeading
          label={siteContent.servicesIntro.label}
          title={siteContent.servicesIntro.title}
          description={siteContent.servicesIntro.description}
        />

        <div className="mt-12 grid gap-[2px] sm:grid-cols-2 xl:grid-cols-3">
          {siteContent.services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden border border-[#1a3a6a] bg-[#0f2a52] p-8 transition hover:bg-[#133266]"
            >
              <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#e8651a] transition duration-300 group-hover:scale-x-100" />

              <span className="mb-4 block font-['Barlow_Condensed'] text-xs font-extrabold uppercase tracking-[0.18em] text-[#e8651a]">
                {service.number}
              </span>

              <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase leading-tight text-white">
                {service.name}
              </h3>

              <p className="mt-3 text-[1rem] leading-7 text-[#b8cce0]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}