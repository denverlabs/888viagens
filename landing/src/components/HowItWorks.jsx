import { steps } from '../data/content';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1917] mb-3">
            Como funciona
          </h2>
          <p className="text-[#6B6860]">
            Simples e rápido, em três passos
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Number */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#F4F3EE] rounded-full mb-4">
                <span className="text-lg font-bold text-[#C15F3C]">{step.number}</span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-[#1A1917] mb-2">
                {step.title}
              </h3>
              <p className="text-[#6B6860] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
