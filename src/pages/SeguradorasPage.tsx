import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { whatsappUrl } from '../data/siteContent'

type Insurance = {
  name: string
  logo?: string
}

const credenciadas: Insurance[] = [
  { name: 'Bradesco Seguros', logo: '/images/seguros/bradesco.png' },
  { name: 'Tokio Marine', logo: '/images/seguros/tokio.png' },
  { name: 'HDI Seguros', logo: '/images/seguros/hdi.png' },
  { name: 'Mapfre Seguros', logo: '/images/seguros/mapfre.png' },
  { name: 'Liberty Seguros / Yelum Seguros', logo: '/images/seguros/liberty.png' },
  { name: 'Santander Seguros', logo: '/images/seguros/santander.png' },
  { name: 'Alfa Seguros', logo: '/images/seguros/alfa.png' },
  { name: 'Essor' },
  { name: 'Gente Seguradora' },
  { name: 'Justos Seguros' },
]

const naoCredenciadas: Insurance[] = [
  { name: 'Allianz', logo: '/images/seguros/allianz.png' },
  { name: 'Suhai Seguradora', logo: '/images/seguros/suhai.png' },
  { name: 'Azul Seguros (Grupo Porto)', logo: '/images/seguros/azul.png' },
  { name: 'Youse', logo: '/images/seguros/youse.png' },
  { name: 'Ituran com Seguro', logo: '/images/seguros/ituran.png' },
  { name: 'Itaú Seguros', logo: '/images/seguros/itau.png' }, 
  
  { name: 'Fairfax' },
  { name: 'Swiss Re' },
  { name: 'Mitsui Sumitomo Seguros' },
  { name: 'Ezze Seguros' },
  { name: 'Too Seguros' },
  { name: 'Cardif Seguros' },
  { name: 'Capemisa' },
  { name: 'Embracon' },
]

const associacoesCredenciadas: Insurance[] = [
  { name: 'APVS' },
  { name: 'STAR' },
  { name: 'AGV' },
  { name: 'UNNICA' },
]

function buildWhatsappLink(company?: string) {
  const message = `Olá! Preciso de atendimento para meu veículo${
    company ? ` pela ${company}` : ''
  }. Gostaria de informações sobre reparo, prazo e processo de atendimento.`

  const separator = whatsappUrl.includes('?') ? '&' : '?'
  return `${whatsappUrl}${separator}text=${encodeURIComponent(message)}`
}

function InsuranceCard({
  item,
  badge,
}: {
  item: Insurance
  badge: string
}) {
  const hasLogo = Boolean(item.logo)

  return (
    <a
      href={buildWhatsappLink(item.name)}
      target="_blank"
      rel="noreferrer"
      className="group rounded-[24px] border border-white/10 bg-[#0f1d33] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[#e8651a]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          {hasLogo ? (
            <div className="flex h-14 items-center">
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-10 w-auto max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ) : (
            <h3 className="font-['Barlow_Condensed'] text-2xl uppercase tracking-wide text-white md:text-[1.75rem]">
              {item.name}
            </h3>
          )}
        </div>

        <span className="shrink-0 rounded-full border border-[#e8651a]/20 bg-[#e8651a]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ff9b5c]">
          {badge}
        </span>
      </div>

      {hasLogo && (
        <h3 className="mt-4 font-['Barlow_Condensed'] text-xl uppercase tracking-wide text-white">
          {item.name}
        </h3>
      )}

      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#ff9b5c] transition group-hover:translate-x-1">
        Solicitar atendimento
        <span aria-hidden="true">→</span>
      </div>
    </a>
  )
}

function SectionBlock({
  label,
  title,
  description,
  items,
  badge,
}: {
  label: string
  title: string
  description: string
  items: Insurance[]
  badge: string
}) {
  return (
    <section className="rounded-[30px] border border-white/10 bg-[#0b1525] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] md:p-8">
      <div className="max-w-3xl">
        <span className="inline-flex rounded-full border border-[#e8651a]/25 bg-[#e8651a]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff9b5c]">
          {label}
        </span>

        <h2 className="mt-4 font-['Barlow_Condensed'] text-4xl uppercase tracking-wider text-white md:text-5xl">
          {title}
        </h2>

        <p className="mt-3 text-base leading-7 text-[#b8cce0]">
          {description}
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <InsuranceCard key={item.name} item={item} badge={badge} />
        ))}
      </div>
    </section>
  )
}

export function SeguradorasPage() {
  return (
    <div className="min-h-screen bg-[#09111f] text-white">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-[#09111f] py-16 md:py-20">
          <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-[#e8651a]/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1180px] px-4 md:px-8">
            <span className="inline-flex rounded-full border border-[#e8651a]/25 bg-[#e8651a]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff9b5c]">
              Seguros e Associações
            </span>

            <h1 className="mt-4 max-w-3xl font-['Barlow_Condensed'] text-4xl uppercase tracking-wider text-white md:text-5xl">
              Seguradoras e associações atendidas pela Metálica Severo
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#9fb3c8] md:text-base">
              Atendimento com seguradoras credenciadas, outras companhias e
              associações, garantindo mais agilidade e suporte durante todo o
              processo do reparo.
            </p>

            <div className="mt-6 text-sm text-[#9fb3c8]">
              Atendimento ágil • Suporte completo • Garantia no serviço
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#seguros"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 px-4 text-sm text-white/90 transition hover:bg-white/5"
              >
                Voltar
              </a>

              <a
                href={buildWhatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-[#25d366] px-4 text-sm font-medium text-white transition hover:bg-[#1ebe5d]"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto w-full max-w-[1180px] space-y-8 px-4 md:px-8">
            <SectionBlock
              label="Credenciadas"
              title="Seguradoras credenciadas"
              description="Empresas com atendimento credenciado junto à Metálica Severo, proporcionando mais praticidade no processo e mais tranquilidade para o cliente."
              items={credenciadas}
              badge="Credenciada"
            />

            <SectionBlock
              label="Já atendidas"
              title="Seguradoras já atendidas"
              description="Companhias para as quais já realizamos serviços e atendimentos, ampliando as possibilidades para quem busca reparo com qualidade."
              items={naoCredenciadas}
              badge="Atendida"
            />

            <SectionBlock
              label="Associações"
              title="Associações credenciadas"
              description="Também atendemos associações e proteção veicular com o mesmo cuidado, suporte e padrão de qualidade da Metálica Severo."
              items={associacoesCredenciadas}
              badge="Associação"
            />
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,#0f1d33_0%,#0b1525_100%)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-10">
              <span className="inline-flex rounded-full border border-[#e8651a]/25 bg-[#e8651a]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff9b5c]">
                Fale com a equipe
              </span>

              <h2 className="mt-4 max-w-3xl font-['Barlow_Condensed'] text-4xl uppercase tracking-wider text-white md:text-5xl">
                Não encontrou sua seguradora na lista?
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-7 text-[#b8cce0]">
                Entre em contato com a Metálica Severo. Nossa equipe pode avaliar
                seu caso, orientar o processo e verificar a melhor forma de
                atendimento para o seu veículo.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={buildWhatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-[#e8651a] px-5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Falar agora no WhatsApp
                </a>

                <a
                  href="/#contato"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Ver mais formas de contato
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default SeguradorasPage