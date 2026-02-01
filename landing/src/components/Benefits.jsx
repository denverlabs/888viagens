import { benefits } from '../data/content';

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Por que escolher a 888?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Benefícios de viajar com a gente
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mais do que vender viagens, cuidamos de cada detalhe da sua experiência.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all group"
            >
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">
                {benefit.icon}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
