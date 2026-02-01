import { steps } from '../data/content';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Simples e rápido
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Como funciona
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Em três passos você sai do sonho para a realidade. Sem complicação.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-teal-200 to-transparent" />
              )}

              <div className="text-center">
                {/* Number */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl mb-6 relative">
                  <span className="text-3xl font-bold text-teal-600">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
