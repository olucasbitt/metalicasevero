import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { SectionHeading } from '../components/SectionHeading'
import { whatsappUrl } from '../data/siteContent'

type Insurance = {
  name: string
  logo?: string
}

const credenciadas: Insurance[] = [
  { name: 'Alfa Seguros', logo: '/images/seguros/alfa.png' },
  { name: 'Bradesco Seguros', logo: '/images/seguros/bradesco.png' },
  { name: 'Essor', logo: '/images/seguros/essor.png' },
  { name: 'Gente Seguradora', logo: '/images/seguros/gente.png' },
  { name: 'HDI Seguros', logo: '/images/seguros/hdi.png' },
  { name: 'Justos Seguros', logo: '/images/seguros/justos.png' },
  { name: 'Liberty Seguros / Yelum Seguros', logo: '/images/seguros/liberty.png' },
  { name: 'Mapfre Seguros', logo: '/images/seguros/mapfre.png' },
  { name: 'Santander Seguros', logo: '/images/seguros/santander.png' },
  { name: 'Tokio Marine', logo: '/images/seguros/tokio.png' },
]

const naoCredenciadas: Insurance[] = [
  { name: 'AIG Seguros', logo: '/images/seguros/aig.png' },
  { name: 'Allianz', logo: '/images/seguros/allianz.png' },
  { name: 'AXA Seguros', logo: '/images/seguros/axa.png' },
  { name: 'Azul Seguros (Grupo Porto)', logo: '/images/seguros/azul.png' },
  { name: 'Capemisa', logo: '/images/seguros/capemisa.png' },
  { name: 'Cardif Seguros', logo: '/images/seguros/cardif.png' },
  { name: 'Chubb Seguros', logo: '/images/seguros/chubb.png' },
  { name: 'Embracon', logo: '/images/seguros/embracon.png' },
  { name: 'Ezze Seguros', logo: '/images/seguros/ezze.png' },
  { name: 'Fairfax', logo: '/images/seguros/fairfax.png' },
  { name: 'Itaú Seguros', logo: '/images/seguros/itau.png' },
  { name: 'Ituran com Seguro', logo: '/images/seguros/ituran.png' },
  { name: 'Mitsui Sumitomo Seguros', logo: '/images/seguros/mitsui.png' },
  { name: 'Suhai Seguradora', logo: '/images/seguros/suhai.png' },
  { name: 'Swiss Re', logo: '/images/seguros/swissre.png' },
  { name: 'Too Seguros', logo: '/images/seguros/too.png' },
  { name: 'Youse', logo: '/images/seguros/youse.png' },
]

const associacoesCredenciadas: Insurance[] = [
  { name: 'AGV', logo: '/images/seguros/agv.png' },
  { name: 'APVS', logo: '/images/seguros/apvs.png' },
  { name: 'STAR', logo: '/images/seguros/star.png' },
  { name: 'UNNICA', logo: '/images/seguros/unnica.png' },
]

function buildWhatsappLink(company?: string) {
  const message = `Olá! Preciso de atendimento para meu veículo${
    company ? ` pela ${company}` : ''
  }. Gostaria de informações sobre reparo, prazo e processo de atendimento.`

  const separator = whatsappUrl.includes('?') ? '&' : '?'
  return `${whatsappUrl}${separator}text=${encodeURIComponent(message)}`
}

function InsuranceCard({ item }: { item: Insurance }) {
  const hasLogo = Boolean(item.logo)

  return (
    <a
      href={buildWhatsappLink(item.name)}
      target="_blank"
      rel="noreferrer"
      aria-label={`Falar sobre ${item.name}`}
      className="group relative flex flex-col justify-center border border-[#1a3a6a] bg-[#0f2a52] p-6 transition hover:bg-[#133266] cursor-pointer" >
      <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#e8651a] transition duration-300 group-hover:scale-x-100" />

      {hasLogo && (
        <div className="flex h-14 items-center justify-center">
          <img
            src={item.logo}
            alt={item.name}
            className="max-h-10 w-auto object-contain opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
        </div>
      )}

      <h3 className="mt-4 text-center font-['Barlow_Condensed'] text-xl font-bold uppercase text-white">
        {item.name}
      </h3>
    </a>
  )
}

function InsuranceSection({
  id,
  label,
  title,
  description,
  items,
}: {
  id: string
  label: string
  title: string
  description: string
  items: Insurance[]
}) {
  return (
    <section id={id} className="py-24 scroll-mt-24">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        <SectionHeading
          label={label}
          title={title}
          description={description}
        />
		<p className="mt-6 text-sm text-[#b8cce0] text-left">
		  Clique no logo da seguradora para iniciar o atendimento pelo WhatsApp.
		</p>
        <div className="mt-12 grid grid-cols-2 gap-[2px] xl:grid-cols-3">
          {items.map((item) => (
            <InsuranceCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function SeguradorasPage() {
  return (
    <div className="min-h-screen bg-[#0d2244] text-white">
      <Navbar />

      <main>
        {/* HERO */}
       <section className="relative h-[80vh] min-h-[520px] flex items-center overflow-hidden pt-24">
		  {/* IMAGEM DE FUNDO */}
		  <img
			src="/images/empresa/oficina.jpg"
			alt="Reparo automotivo com seguradora"
			className="absolute inset-0 w-full h-full object-cover"
		  />

		  {/* OVERLAY ESCURO */}
		  <div className="absolute inset-0 bg-[#0a1628]/80" />

		  {/* GRADIENTE (PROFISSIONAL) */}
		  <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-transparent" />

		  {/* CONTEÚDO */}
		  <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 md:px-8">
			
			<div className="max-w-2xl">
			  <span className="text-xs uppercase tracking-[0.2em] text-[#e8651a] font-bold">
				Atendimento com seguradoras
			  </span>

			  <h1 className="mt-4 font-['Barlow_Condensed'] text-4xl font-bold uppercase leading-tight md:text-5xl">
				Reparo de veículos com seguradora
				<br />
				sem burocracia e com agilidade
			  </h1>

			  <p className="mt-4 text-[#b8cce0] leading-7">
				Cuidamos de todo o processo com sua seguradora, garantindo rapidez,
				transparência e qualidade no reparo do seu veículo.
			  </p>

			  <div className="mt-8 flex flex-wrap gap-4">
				  <a
					href="#credenciadas"
					className="bg-[#e8651a] px-6 py-3 font-semibold text-white transition hover:brightness-110"
				  >
					Seguradoras credenciadas
				  </a>

				  <a
					href="#outras"
					className="border border-white/20 px-6 py-3 text-white transition hover:bg-white/10"
				  >
					Outras seguradoras
				  </a>

				  <a
					href="#associacoes"
					className="border border-white/20 px-6 py-3 text-white transition hover:bg-white/10"
				  >
					Associações
				  </a>
				</div>

			  
			</div>

		  </div>
		</section>

        {/* SEÇÕES */}
		<InsuranceSection
		  id="credenciadas"
		  label="Credenciadas"
		  title="Seguradoras nas quais somos credenciados"
		  description="Trabalhamos com seguradoras nas quais somos credenciados, garantindo mais agilidade no atendimento, processos simplificados e qualidade nos reparos."
		  items={credenciadas}
		/>

		<InsuranceSection
		 id="outras"
		  label="Outras seguradoras"
		  title="Seguradoras com as quais também trabalhamos"
		  description="Também atendemos seguradoras fora da rede credenciada, oferecendo suporte completo e orientação durante todo o processo."
		  items={naoCredenciadas}
		/>

		<InsuranceSection
		id="associacoes"				
		  label="Associações"
		  title="Associações credenciadas"
		  description="Atendimento especializado para proteção veicular e associações, com acompanhamento completo e qualidade nos serviços."
		  items={associacoesCredenciadas}
		/>

        {/* CTA FINAL */}
        <section className="pb-24">
          <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
            <div className="border border-[#1a3a6a] bg-[#0f2a52] p-8 md:p-10">
              <span className="block font-['Barlow_Condensed'] text-xs font-extrabold uppercase tracking-[0.18em] text-[#e8651a]">
                Suporte completo
              </span>

              <h2 className="mt-4 font-['Barlow_Condensed'] text-3xl font-bold uppercase text-white md:text-4xl">
                Não encontrou sua seguradora?
              </h2>

              <p className="mt-4 max-w-2xl text-[1rem] leading-7 text-[#b8cce0]">
                Fale com nossa equipe e vamos orientar você da melhor forma para
                realizar o reparo do seu veículo com segurança e agilidade.
              </p>

              <div className="mt-8">
                <a
                  href={buildWhatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center bg-[#e8651a] px-5 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Falar no WhatsApp
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