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
  { name: 'AXA Seguros' },
  { name: 'Chubb Seguros' },
  { name: 'AIG Seguros'  },
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
      className="group rounded-[20px] border border-white/10 bg-[#0f1d33] p-4 shadow-[0_10px_25px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-0.5 hover:border-[#e8651a]/40"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0 flex-1">
          {hasLogo ? (
            <div className="flex h-10 items-center">
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-8 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ) : (
            <h3 className="font-['Barlow_Condensed'] text-xl uppercase tracking-wide text-white">
              {item.name}
            </h3>
          )}
        </div>

        <span className="shrink-0 rounded-full border border-[#e8651a]/20 bg-[#e8651a]/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#ff9b5c]">
          {badge}
        </span>
      </div>

      {hasLogo && (
        <h3 className="mt-2 font-['Barlow_Condensed'] text-lg uppercase tracking-wide text-white">
          {item.name}
        </h3>
      )}

      <div className="mt-3 text-xs font-semibold text-[#ff9b5c] transition group-hover:translate-x-1">
        Solicitar atendimento →
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

        <h2 className="mt-4 font-['Barlow_Condensed'] text-3xl uppercase tracking-wider text-white md:text-4xl">
          {title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#b8cce0]">
          {description}
        </p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
        {/* HERO MAIS SUAVE */}
        <section className="relative overflow-hidden border-b border-white/10 bg-[#09111f] py-16 md:py-20">
          <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-[#e8651a]/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1180px] px-4 md:px-8">
            

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

        {/* LISTAS */}
        <section className="py-16 md:py-20">
          <div className="mx-auto w-full max-w-[1180px] space-y-8 px-4 md:px-8">
            <SectionBlock
              label="Credenciadas"
              title="Seguradoras credenciadas"
              description="Empresas com atendimento credenciado junto à Metálica Severo."
              items={credenciadas}
              badge="Credenciada"
            />

            <SectionBlock
              label="Já atendidas"
              title="Seguradoras já atendidas"
              description="Companhias com as quais já realizamos serviços."
              items={naoCredenciadas}
              badge="Atendida"
            />

            <SectionBlock
              label="Associações"
              title="Associações credenciadas"
              description="Atendimento para proteção veicular e associações."
              items={associacoesCredenciadas}
              badge="Associação"
            />
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="pb-20">
          <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,#0f1d33,#0b1525)] p-8 md:p-10">
              <h2 className="font-['Barlow_Condensed'] text-3xl uppercase text-white md:text-4xl">
                Não encontrou sua seguradora?
              </h2>

              <p className="mt-3 text-sm text-[#b8cce0]">
                Fale com nossa equipe e vamos te orientar no atendimento.
              </p>

              <a
                href={buildWhatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-[#e8651a] px-5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default SeguradorasPage