import { destinations, whatsappNumber, whatsappMessage } from '../data/content';

export default function Destinations() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="destinos" className="py-16 lg:py-24 bg-[#F4F3EE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1917] mb-3">
            Destinos em que somos especialistas
          </h2>
          <p className="text-[#6B6860]">
            Rotas e combinações personalizadas para a Europa
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {destinations.map((destination, index) => (
            <a
              key={index}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
            >
              {/* Image */}
              <img
                src={destination.image}
                alt={destination.country}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-semibold text-white mb-0.5">
                  {destination.country}
                </h3>
                <p className="text-white/70 text-sm">
                  {destination.cities}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
