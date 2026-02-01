import { heroCards, whatsappNumber, whatsappMessage } from '../data/content';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="pt-28 lg:pt-36 pb-20 lg:pb-28 bg-[#F4F3EE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white text-[#6B6860] px-4 py-2 rounded-full text-sm font-medium mb-8 border border-[#B1ADA1]/30">
            <span className="w-2 h-2 bg-[#C15F3C] rounded-full animate-pulse"></span>
            Atendimento humanizado via WhatsApp
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1917] leading-[1.1] mb-6 tracking-tight">
            Sua viagem dos sonhos
            <span className="block text-[#C15F3C]">começa aqui</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[#6B6860] max-w-2xl mx-auto mb-10 leading-relaxed">
            Planejamos cada detalhe para você viajar tranquilo. Passagens, hospedagens e experiências incríveis pelo Brasil.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C15F3C] hover:bg-[#A84E30] text-white font-medium px-8 py-4 rounded-full transition-all text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-white/80 text-[#1A1917] font-medium px-8 py-4 rounded-full border border-[#B1ADA1]/40 transition-all text-base"
            >
              Como funciona
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Mini Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {heroCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-[#B1ADA1]/20 hover:border-[#C15F3C]/30 transition-all group"
              >
                <span className="text-3xl mb-4 block">{card.icon}</span>
                <h3 className="font-semibold text-[#1A1917] mb-1">{card.title}</h3>
                <p className="text-sm text-[#6B6860]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
