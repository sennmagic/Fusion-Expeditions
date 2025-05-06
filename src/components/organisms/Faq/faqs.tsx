'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import TextHeader from '@/components/atoms/headings';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: "faq1",
    question: "How do I book a trip through your website?",
    answer:
      "You can easily book by browsing destinations, selecting your travel package, and completing the booking form. Our team will follow up with confirmation and details!",
  },
  {
    id: "faq2",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and digital wallets like PayPal or Apple Pay.",
  },
  {
    id: "faq3",
    question: "Can I customize my travel itinerary?",
    answer: "Absolutely! Contact us with your preferences, and we’ll tailor your trip to your needs.",
  },
  {
    id: "faq4",
    question: "What is your cancellation policy?",
    answer: "Cancellations made within 7 days of departure may incur charges. Please see our full policy.",
  },
  {
    id: "faq5",
    question: "Do you offer travel insurance?",
    answer: "Yes, we partner with reputable insurance providers to offer you comprehensive travel protection.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      <TextHeader
        text="Need Help? We've Got Answers!"
        specialWordsIndices="4"
        align="start"
        width="622px"
        buttonText="FAQ"
      />

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
          key={faq.id}
          className={`rounded-xl p-6 text-black border border-gray-200 shadow-sm transition-all duration-300 ease-in-out ${
            openId === faq.id ? 'bg-orange-200' : ''
          }`}
  
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex justify-between items-center text-left "
            >
              <span className="text-lg font-semibold">
                {faq.question}
              </span>
              <span className="ml-4">
                {openId === faq.id ? (
                  <Minus className="w-8 h-8 text-white bg-orange-500 rounded" />
                ) : (
                  <Plus className="w-8 h-8 text-white bg-orange-500 rounded" />
                )}
              </span>
            </button>

            {openId === faq.id && (
              <p className="mt-2 text-sm text-gray-800 ">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
