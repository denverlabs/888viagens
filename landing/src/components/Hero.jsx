import { services, whatsappNumber, whatsappMessage } from '../data/content';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#F4F3EE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white text-[#6B6860] px-4 py-1.5 rounded-full text-sm mb-8 border border-[#B1ADA1]/20">
            <span className="w-1.5 h-1.5 bg-[#C15F3C] rounded-full"></span>
            Brasil → Europa
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1917] leading-tight mb-6">
            Hotéis e pacotes para a Europa, com alertas quando é o{' '}
            <span className="text-[#C15F3C]">melhor momento para comprar</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-[#6B6860] max-w-2xl mx-auto mb-10">
            Pare de adivinhar quando comprar sua viagem. Criamos alertas inteligentes e avisamos quando surge a melhor oportunidade.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C15F3C] hover:bg-[#A84E30] text-white font-medium px-6 py-3 rounded-full transition-colors"
            >
              Criar alerta para minha viagem
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center text-[#6B6860] hover:text-[#1A1917] font-medium px-6 py-3 transition-colors"
            >
              Solicitar cotação
            </a>
          </div>

          {/* Services */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border border-[#B1ADA1]/10"
              >
                <span className="text-2xl mb-2 block">{service.icon}</span>
                <h3 className="font-medium text-[#1A1917] text-sm">{service.title}</h3>
                <p className="text-xs text-[#6B6860]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
