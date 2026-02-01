import { benefits } from '../data/content';

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 lg:py-32 bg-[#F4F3EE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C15F3C] font-medium text-sm uppercase tracking-wider mb-4">
            Por que escolher a 888?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1917] mb-4">
            Benefícios de viajar com a gente
          </h2>
          <p className="text-lg text-[#6B6860] max-w-xl mx-auto">
            Mais do que vender viagens, cuidamos de cada detalhe da sua experiência.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-[#B1ADA1]/20 hover:border-[#C15F3C]/30 transition-all group"
            >
              <span className="text-3xl mb-5 block">
                {benefit.icon}
              </span>
              <h3 className="text-lg font-semibold text-[#1A1917] mb-2">
                {benefit.title}
              </h3>
              <p className="text-[#6B6860] leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
