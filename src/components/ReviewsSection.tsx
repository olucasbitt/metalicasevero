import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const reviews = [
  {
    name: 'Carlos Fernando Ferreira',
    text: 'Meu carro ficou perfeito, novo de novo… pessoal muito transparente, cumprem com o combinado.',
  },
  {
    name: 'Igor Gemelli',
    text: 'Trabalho espetacular. Ótima infraestrutura, boa gestão ao cliente… nunca saí tão impressionado.',
  },
  {
    name: 'Letícia Carvalho',
    text: 'Eu nem lembrava que meu carro era tão bonito. Sério, a equipe arrasou!!',
  },
  {
    name: 'Fabio Gass',
    text: 'Pintura ficou excelente. Serviço extremamente profissional.',
  },
  {
    name: 'Débora Savionek Pinto',
    text: 'Serviço de qualidade, atendimento diferenciado e muita agilidade.',
  },
  {
    name: 'Adriano Pedroso',
    text: 'Deixei de ganhar meu bônus da seguradora para fazer com eles… carro perfeito.',
  },
]

export function ReviewsSection() {
  return (
    <section id="avaliacoes" className="bg-[#0d2244] py-24">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        <SectionHeading
          label="AVALIAÇÕES REAIS"
          title="A confiança de quem já passou pela Metálica Severo"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
              }}
              className="group relative overflow-hidden rounded-xl border border-[#1a3a6a] bg-[#0f2a52] p-7 shadow-[0_10px_30px_rgba(0,0,0,0.14)] transition duration-300 hover:border-[#e8651a]/40"
            >
              {/* Stars */}
              <div className="mb-5 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#e8651a] text-[#e8651a]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-[1rem] leading-7 text-[#b8cce0]">
                “{review.text}”
              </p>

              {/* Footer */}
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-wide text-white">
                  {review.name}
                </div>

                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#e8651a]">
                  Google Reviews
                </div>
              </div>

              {/* Background Detail */}
              <div className="pointer-events-none absolute -bottom-8 right-2 font-['Barlow_Condensed'] text-[5rem] font-black leading-none text-white/[0.03] transition group-hover:text-white/[0.05]">
                ★
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 rounded-xl border border-[#1a3a6a] bg-[#0f2a52] p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.14)]"
        >
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-[#e8651a] text-[#e8651a]"
              />
            ))}
          </div>

          <h3 className="mt-5 font-['Barlow_Condensed'] text-3xl font-black uppercase text-white md:text-4xl">
            Qualidade que gera confiança
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-[1rem] leading-7 text-[#b8cce0]">
            Atendimento transparente, acabamento impecável e compromisso com
            cada detalhe do seu veículo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}