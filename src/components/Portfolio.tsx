import { siteContent } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function Portfolio() {
  return (
    <section id="trabalhos" className="bg-[#0d2244] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label={siteContent.portfolio.label}
          title={siteContent.portfolio.title}
          description={siteContent.portfolio.description}
        />

        <div className="mt-10 grid auto-rows-[220px] gap-5 md:grid-cols-12">
          {siteContent.portfolio.items.map((item, index) => {
            const sizeClass =
              item.size === 'large'
                ? 'md:col-span-6 md:row-span-2'
                : item.size === 'medium'
                ? 'md:col-span-3 md:row-span-1'
                : 'md:col-span-3 md:row-span-1'

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0f2a52] ${sizeClass}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081526]/85 via-[#081526]/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-['Barlow_Condensed'] text-2xl uppercase tracking-wide text-white md:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}