import { siteContent, whatsappUrl } from '../data/siteContent';

export function Cta() {
  return (
    <section
      id="contato"
      className="bg-[radial-gradient(circle_at_center,rgba(232,101,26,0.14),transparent_40%)] bg-[#0a1628] py-24"
    >
      <div className="mx-auto w-full max-w-[900px] px-4 text-center md:px-8">
        <p className="font-['Barlow_Condensed'] text-xs font-bold uppercase tracking-[0.22em] text-[#e8651a] md:text-sm">
          Contato
        </p>

        <h2 className="mt-4 font-['Barlow_Condensed'] text-[clamp(2.4rem,6vw,4.8rem)] font-black uppercase leading-[0.95] text-white">
          {siteContent.cta.titleTop}{' '}
          <em className="italic text-[#e8651a]">
            {siteContent.cta.titleHighlight}
          </em>
        </h2>

        <p className="mx-auto mt-6 max-w-[620px] text-[1.05rem] leading-7 text-[#b8cce0]">
          {siteContent.cta.description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            className="inline-flex min-h-[56px] items-center justify-center rounded-[10px] bg-[#25d366] px-8 font-['Barlow_Condensed'] text-base font-bold uppercase tracking-[0.08em] text-white shadow-[0_10px_28px_rgba(37,211,102,0.25)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            {siteContent.cta.whatsappText}
          </a>

          <a
            className="inline-flex min-h-[56px] items-center justify-center rounded-[10px] border border-[#1a3a6a] bg-white/[0.02] px-8 font-['Barlow_Condensed'] text-base font-bold uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:border-[#e8651a]/50 hover:bg-white/[0.04]"
            href={`tel:${siteContent.company.phoneDisplay.replace(/\D/g, '')}`}
          >
            {siteContent.cta.phoneText}
          </a>
        </div>
      </div>
    </section>
  );
}