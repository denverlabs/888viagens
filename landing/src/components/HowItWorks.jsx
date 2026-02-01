import { steps } from '../data/content';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-[#C15F3C] font-medium text-sm uppercase tracking-wider mb-4">
            Simples e rápido
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1917] mb-4">
            Como funciona
          </h2>
          <p className="text-lg text-[#6B6860] max-w-xl mx-auto">
            Em três passos você sai do sonho para a realidade. Sem complicação.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-px bg-gradient-to-r from-[#B1ADA1]/40 to-transparent" />
              )}

              <div className="text-center">
                {/* Number */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F4F3EE] rounded-2xl mb-6">
                  <span className="text-2xl font-bold text-[#C15F3C]">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#1A1917] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6B6860] leading-relaxed">
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
