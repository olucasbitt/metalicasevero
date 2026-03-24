import { whatsappUrl } from '../data/siteContent'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[#0a1628] pt-32 md:pt-36"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#06101d_0%,#0b1d3b_52%,#071325_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_22%,rgba(232,101,26,0.16),transparent_26%),radial-gradient(circle_at_65%_30%,rgba(255,255,255,0.04),transparent_18%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-[1180px] items-center gap-12 px-4 pb-16 md:px-8 md:pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-[760px]">
          <p className="mb-4 font-['Barlow_Condensed'] text-[0.82rem] font-bold uppercase tracking-[0.18em] text-[#e8651a] md:text-base md:tracking-[0.24em]">
            Funilaria & Estética Automotiva
          </p>

          <h1 className="font-['Barlow_Condensed'] text-[clamp(3rem,10vw,6.8rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-[#f5f5f0]">
            Seu carro
            <span className="block italic text-[#e8651a]">
              no capricho
            </span>
            de novo
          </h1>

          <p className="mt-6 max-w-[650px] text-[1rem] leading-8 text-[#d7e3f3] md:text-[1.1rem]">
            Funilaria e estética automotiva com padrão profissional, rapidez na
            entrega e atendimento direto pelo WhatsApp. Seu carro bem cuidado,
            sem dor de cabeça.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[58px] items-center justify-center rounded-[12px] bg-[#e8651a] px-8 font-['Barlow_Condensed'] text-base font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_30px_rgba(232,101,26,0.24)] transition hover:-translate-y-0.5 hover:bg-[#c4520f]"
            >
              Chamar no WhatsApp
            </a>

            <a
              href="#servicos"
              className="inline-flex min-h-[58px] items-center justify-center rounded-[12px] border border-white/15 bg-white/[0.03] px-8 font-['Barlow_Condensed'] text-base font-bold uppercase tracking-[0.08em] text-[#f5f5f0] transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.05]"
            >
              Ver serviços
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#b8cce0]">
            <span>• Atendimento rápido</span>
            <span>• Orçamento sem compromisso</span>
            <span>• Acabamento profissional</span>
          </div>
        </div>

        <div className="relative hidden lg:block">
		  <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-[#e8651a]/10 blur-3xl" />
		  <div className="absolute -right-8 bottom-12 h-36 w-36 rounded-full bg-white/5 blur-3xl" />

		  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
			<img
			  src="/images/hero-carro.jpg"
			  alt="Veículo atendido pela Metálica Severo"
			  className="h-[620px] w-full object-cover [filter:saturate(1.08)_contrast(1.06)_brightness(1.02)]"
			/>

			<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,16,29,0.22),rgba(6,16,29,0.06)_36%,transparent)]" />

			<div className="absolute bottom-0 left-0 right-0 p-8">
			  <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#e8651a] backdrop-blur">
				Resultado que aparece
			  </div>

			  <h2 className="font-['Barlow_Condensed'] text-4xl font-black uppercase leading-none text-white">
				Cuidado em cada detalhe
			  </h2>

			  <p className="mt-3 max-w-[440px] text-sm leading-7 text-[#d7e3f3]">
				Serviço feito com atenção, transparência e foco no acabamento final.
			  </p>
			</div>
		  </div> 

          <div className="absolute -right-6 top-8 hidden h-[138px] w-[138px] place-items-center rounded-full border border-[rgba(26,58,106,0.9)] bg-[rgba(7,19,37,0.65)] text-center shadow-[0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur md:grid">
            <div>
              <span className="block font-['Barlow_Condensed'] text-[2.4rem] font-black leading-none text-[#e8651a]">
                +30
              </span>
              <small className="mt-2 block text-[0.78rem] uppercase leading-[1.35] tracking-[0.1em] text-[#b8cce0]">
                Anos de experiência
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}