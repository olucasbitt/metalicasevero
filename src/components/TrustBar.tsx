import { siteContent } from '../data/siteContent'

export function TrustBar() {
  return (
    <section className="border-y border-[#1a3a6a] bg-[#0d2244]">
      <div className="mx-auto grid w-full max-w-[1180px] gap-0 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
        {siteContent.trustItems.map((item, index) => (
          <article
            key={item.title}
            className={`p-6 lg:p-7 ${
              index !== siteContent.trustItems.length - 1
                ? 'border-b border-[#1a3a6a] lg:border-b-0 lg:border-r'
                : ''
            }`}
          >
            <strong className="block font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-[0.02em] text-white">
              {item.title}
            </strong>

            <span className="mt-2 block text-[0.95rem] leading-7 text-[#b8cce0]">
              {item.text}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}