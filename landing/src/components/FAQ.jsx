import { useState } from 'react';
import { faqs } from '../data/content';

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-[#B1ADA1]/20 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="text-base font-medium text-[#1A1917] pr-8">
          {question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#F4F3EE] transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            className="w-4 h-4 text-[#6B6860]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="text-[#6B6860] leading-relaxed text-sm">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#C15F3C] font-medium text-sm uppercase tracking-wider mb-4">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1917] mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-[#6B6860]">
            Não encontrou sua dúvida? Fale com a gente pelo WhatsApp.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="bg-white rounded-2xl border border-[#B1ADA1]/20 px-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
