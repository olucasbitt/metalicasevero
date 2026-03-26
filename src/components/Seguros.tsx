import { useMemo, useState } from 'react'
import { whatsappUrl } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

const partners = [
  { name: 'Bradesco Seguros', logo: '/images/seguros/bradesco.png' },
  { name: 'HDI Seguros', logo: '/images/seguros/hdi.png' },
  { name: 'Tokio Marine', logo: '/images/seguros/tokio.png' },
  { name: 'Mapfre Seguros', logo: '/images/seguros/mapfre.png' },
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
            <div className="rounded-[28px] border border-white/10 bg-[#0c182b] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex rounded-full border border-[#e8651a]/20 bg-[#e8651a]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#ff9b5c]">
                    Atendimento credenciado
                  </span>

                  <h3 className="mt-4 font-['Barlow_Condensed'] text-[1.9rem] uppercase leading-none text-white md:text-[2.2rem]">
                    Mais tranquilidade no seu atendimento
                  </h3>

                  <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#b8cce0]">
                    Somos credenciados nas principais seguradoras do mercado e também
                    atendemos diversas outras companhias e associações, garantindo mais
                    flexibilidade e agilidade no seu atendimento.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-white p-4 transition hover:border-[#e8651a]/25"
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

            <div className="flex flex-col items-center gap-3 rounded-[24px] border border-white/10 bg-white/[0.03] px-6 py-6 text-center">
              <p className="text-[15px] leading-7 text-[#b8cce0]">
                Trabalhamos com diversas outras seguradoras e associações além destas.
              </p>

              <a
                href="/seguradoras"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#e8651a]/30 hover:bg-[#e8651a]/10"
              >
                Ver todas as seguradoras →
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-white/10 bg-[#0c182b] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
                >
                  <div className="mb-3 h-1.5 w-12 rounded-full bg-[#e8651a]" />
                  <h4 className="font-['Barlow_Condensed'] text-[1.5rem] uppercase leading-none text-white">
                    {benefit.title}
                  </h4>
                  <p className="mt-3 text-[15px] leading-7 text-[#b8cce0]">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[28px] border border-white/10 bg-[#0c182b] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.3)] md:p-8">
            <span className="inline-flex rounded-full border border-[#25d366]/20 bg-[#25d366]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7ae7aa]">
              Atendimento rápido
            </span>

            <h3 className="mt-4 font-['Barlow_Condensed'] text-[1.9rem] uppercase leading-none text-white md:text-[2.2rem]">
              Solicite atendimento pelo WhatsApp
            </h3>

            <p className="mt-4 text-[15px] leading-7 text-[#b8cce0]">
              Preencha seu nome e selecione a seguradora ou associação. A mensagem
              já será enviada pronta para agilizar o atendimento.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="insurance-name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#d9e6f2]"
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
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#d9e6f2]"
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
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#d9e6f2]"
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

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9e6f2]">
                  Benefícios do atendimento
                </p>

                <div className="mt-3 space-y-2 text-sm leading-7 text-[#b8cce0]">
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