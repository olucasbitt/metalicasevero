import { useMemo, useState } from 'react'
import { whatsappUrl } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

const partners = [
  { name: 'Bradesco Seguros', logo: '/images/seguros/bradesco.png' },
  { name: 'Porto', logo: '/images/seguros/porto.png' },
  { name: 'HDI', logo: '/images/seguros/hdi.png' },
  { name: 'Tokio Marine', logo: '/images/seguros/tokio.png' },
  { name: 'Mapfre', logo: '/images/seguros/mapfre.png' },
  { name: 'Allianz', logo: '/images/seguros/allianz.png' },
  { name: 'Suhai', logo: '/images/seguros/suhai.png' },
  { name: 'Zurich', logo: '/images/seguros/zurich.png' },
]

const benefits = [
  {
    title: 'Atendimento ágil',
    description:
      'Processo mais rápido para orçamento, avaliação e liberação do reparo.',
  },
  {
    title: 'Franquia parcelada',
    description:
      'Mais facilidade para organizar o pagamento e seguir com o conserto.',
  },
  {
    title: 'Garantia no serviço',
    description:
      'Mais segurança e confiança em cada etapa do reparo realizado.',
  },
  {
    title: 'Suporte no processo',
    description:
      'Auxílio no contato com seguradora ou associação para tornar tudo mais simples.',
  },
]

const insuranceOptions = [
  'Bradesco Seguros',
  'Porto',
  'HDI',
  'Tokio Marine',
  'Mapfre',
  'Allianz',
  'Suhai',
  'Azos',
  'Yelum',
  'Zurich',
  'Associação / Proteção Veicular',
  'Outra',
]

export function Seguros() {
  const [name, setName] = useState('')
  const [insurance, setInsurance] = useState('')
  const [customInsurance, setCustomInsurance] = useState('')

  const whatsappLink = useMemo(() => {
    const selectedInsurance =
      insurance === 'Outra' ? customInsurance : insurance

    const message = `Olá! Meu nome é ${name || '[seu nome]'}. Preciso de atendimento para ${selectedInsurance || '[seguradora/associação]'}. Gostaria de informações sobre reparo, prazo e condições da franquia.`

    const separator = whatsappUrl.includes('?') ? '&' : '?'
    return `${whatsappUrl}${separator}text=${encodeURIComponent(message)}`
  }, [name, insurance, customInsurance])

  return (
    <section id="seguros" className="scroll-mt-24 bg-[#09111f] py-24">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        <SectionHeading
          label="Seguros e Associações"
          title="Atendimento para seguradoras e proteção veicular"
          description="Somos oficina credenciada e preparada para atender sinistros com mais agilidade, segurança e suporte durante todo o processo."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="rounded-[28px] border border-white/10 bg-[#0f1d33] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex rounded-full border border-[#e8651a]/25 bg-[#e8651a]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff9b5c]">
                    Atendimento credenciado
                  </span>

                  <h3 className="mt-4 font-['Barlow_Condensed'] text-3xl uppercase tracking-wider text-white md:text-4xl">
					  Mais tranquilidade no seu atendimento
					</h3>

                  <p className="mt-3 text-[1rem] leading-7 text-[#b8cce0]">
                    Trabalhamos com atendimento voltado a seguradoras e associações,
                    oferecendo mais praticidade desde a entrada do veículo até a
                    entrega final.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-white p-4 transition hover:border-[#e8651a]/30"
					>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-white/10 bg-[#0c182b] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
                >
                  <div className="mb-3 h-1.5 w-12 rounded-full bg-[#e8651a]" />
                  <h4 className="font-['Barlow_Condensed'] text-2xl uppercase tracking-wide text-white">
                    {benefit.title}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-[#b8cce0]">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#0f1d33,#0b1525)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.3)] md:p-8">
            <span className="inline-flex rounded-full border border-[#25d366]/25 bg-[#25d366]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6ee7a0]">
              Atendimento rápido
            </span>

            <h3 className="mt-4 font-['Barlow_Condensed'] text-3xl uppercase tracking-wider text-white">
			  Solicite atendimento pelo WhatsApp
			</h3>

            <p className="mt-3 text-sm leading-7 text-[#b8cce0]">
              Preencha seu nome e selecione a seguradora ou associação. A mensagem
              já será enviada pronta para agilizar o atendimento.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="insurance-name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#d9e6f2]"
                >
                  Seu nome
                </label>
                <input
                  id="insurance-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome"
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-[#6a89a8] focus:border-[#e8651a]/60"
                />
              </div>

              <div>
                <label
                  htmlFor="insurance-company"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#d9e6f2]"
                >
                  Seguradora ou associação
                </label>
                <select
                  id="insurance-company"
                  value={insurance}
                  onChange={(e) => setInsurance(e.target.value)}
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition focus:border-[#e8651a]/60"
                >
                  <option value="" className="text-black">
                    Selecione
                  </option>
                  {insuranceOptions.map((option) => (
                    <option key={option} value={option} className="text-black">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {insurance === 'Outra' && (
                <div>
                  <label
                    htmlFor="custom-insurance"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#d9e6f2]"
                  >
                    Qual seguradora?
                  </label>
                  <input
                    id="custom-insurance"
                    type="text"
                    value={customInsurance}
                    onChange={(e) => setCustomInsurance(e.target.value)}
                    placeholder="Digite o nome da seguradora"
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-[#6a89a8] focus:border-[#e8651a]/60"
                  />
                </div>
              )}

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-[#d9e6f2]">
                  Benefícios do atendimento
                </p>

                <div className="mt-3 space-y-2 text-sm text-[#b8cce0]">
                  <div>• Agilidade no processo de atendimento</div>
                  <div>• Possibilidade de franquia parcelada</div>
                  <div>• Garantia no serviço executado</div>
                  <div>• Mais suporte durante o reparo</div>
                </div>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#25d366] px-5 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
              >
                Falar no WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}