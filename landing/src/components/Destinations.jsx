import { destinations } from '../data/content';

export default function Destinations() {
  return (
    <section id="destinos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Inspire-se
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Destinos para todos os gostos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Do litoral às serras, do agito à tranquilidade. Descubra o Brasil com a gente.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              {/* Image */}
              <img
                src={destination.image}
                alt={destination.city}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {destination.city}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {destination.state}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/70 text-xs mb-1">a partir de</p>
                    <p className="text-xl font-bold text-white">
                      {destination.price}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
