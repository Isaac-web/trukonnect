import React, { useState } from 'react';

const Accordion = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full py-6 flex items-center justify-between text-left"
        onClick={onToggle}
      >
        <span className="text-lg font-medium">{question}</span>
        <span
          className={`text-2xl transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-48 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-white/70">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does Trukonnect work?',
      answer:
        'Trukonnect connects brands with authentic Ghanaian audiences through verified social media engagements. Users earn tokens by completing genuine engagement tasks, while brands get real, measurable results.',
    },
    {
      question: 'How do I earn rewards on Trukonnect?',
      answer:
        'Complete engagement tasks like following brands, liking posts, and leaving meaningful comments. Each verified action earns you tokens that can be converted to real money.',
    },
    {
      question: 'Is Trukonnect safe to use?',
      answer:
        'Yes! We use advanced verification systems and manual reviews to ensure all activities are legitimate. Your data is protected, and all transactions are secure.',
    },
    {
      question: 'How do brands benefit from Trukonnect?',
      answer:
        'Brands get access to genuine Ghanaian audiences, verified engagement metrics, and tools to create custom campaigns. Our platform ensures authentic interactions that drive real business results.',
    },
    {
      question: 'How much can I earn as a user?',
      answer:
        'Earnings vary based on task types and engagement levels. Users can earn tokens for each verified action, with higher rewards for more meaningful engagements.',
    },
    {
      question: 'Can I use Trukonnect outside of Ghana?',
      answer:
        'Currently, Trukonnect is focused on the Ghanaian market to ensure the best experience for our local community. We plan to expand to other regions in the future.',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-16">
            Everything you need to know about Trukonnect and how it works.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/60">
            Still have questions? We're here to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
