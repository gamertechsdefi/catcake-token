'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: 'What is Cat Cake Token?',
    answer: 'Cat Cake ($CCT) is a community-driven token on the Binance Smart Chain that rewards its holders with $CAKE. Just by holding $CCT, you automatically receive $CAKE rewards in your wallet.',
  },
  {
    question: 'What are the taxes',
    answer: 'The current taxes are 3% BUY & 5% SELL respectively',
  },
  {
    question: 'How do I receive my $CAKE rewards?',
    answer: 'The $CAKE rewards are automatically sent to your wallet. There\'s no need to claim them manually. The frequency of rewards depends on the trading volume.',
  },
  {
    question: 'Is the liquidity locked?',
    answer: 'Yes, the initial liquidity is locked to ensure the safety and trust of our community. We are committed to transparency and long-term growth.',
  },
  {
    question: 'What is the contract address?',
    answer: 'The official contract address is: 0x8489c022a10a8d2a65eb5aF2b0E4aE0191e7916D. Please be careful and only use the official address.',
  },
];

const FaqItemComponent = ({ item, isOpen, onClick }: { item: FaqItem; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="bg-yellow-100 text-black p-6 rounded-xl shadow-md border border-gray-200" id='faq'>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
        aria-expanded={isOpen}
      >
        <h3 className="font-bold text-xl">{item.question}</h3>
        <ChevronDown
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-700 pt-4">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-brown-900 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="space-y-6 text-left">
          {faqData.map((item, index) => (
            <FaqItemComponent
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;