// FAQSection.tsx
// This file defines a React component that renders a Frequently asked questions section.
// The component uses Tailwind CSS for styling.

const faqItems = [
  {
    question: "How do I get started with your product?",
    answer:
      "Sign up on our website, explore features, customize your profile, and start using our product. We're here to help!",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for payment.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a free trial period for new users. You can sign up and explore our product's features and functionalities before making a commitment.",
  },
  {
    question: "Is technical support available?",
    answer:
      "Yes, technical support is available for our product. If you encounter any issues or have questions, simply reach out to our support team.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription. Simply access your account settings and follow the cancellation instructions.",
  },
  {
    question: "Is my data secure with your product?",
    answer:
      "Yes, your data is secure with our product. We prioritize the protection and privacy of your information.",
  },
];

const FAQSection = () => {

  return (
      //Secion with full width
      <section className="w-full">
        <div className="w-[1440px] mx-auto bg-white flex flex-col items-center pt-16 pb-16 gap-16 mx-auto">
          {/* Container to hold Heading, supporting text and the FAQ */}
          <div className="w-full max-w-[1280px] px-4 gap-16 flex flex-col items-center">
            {/* Heading and supporting text */}
            <div className="w-full max-w-[768px] flow flow-col gap-7 text-center">
              {/* Heading */}
                <h4 className="font-inter font-semibold text-[36px] leading-[44px] tracking-[-2px] text-center text-[var(--heading-primary)]">Frequently asked questions</h4>
              {/* Supporting text */}
                <p className="font-inter font-normal text-[18px] leading-[28px] text-center">Here are some of the most frequent questions we get asked.</p>
                <p className="font-inter font-normal text-[18px] leading-[28px] text-center">Got more questions? Visit our <a href="#" className="text-[var(--sub-headline)]"> help center</a>.</p>
            </div>
            {/* FAQ Container */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-[32px] gap-y-8 w-full max-w-[1216px] place-items-center">
              {faqItems.map((item, index) => (
                <div key={index} 
                  className="flex flex-col w-full max-w-[384px] gap-2">
                  <p className="font-inter font-semibold text-[18px] leading-[28px] text-[var(--heading-primary)]">{item.question}</p>
                  <p className="font-inter font-normal text-[16px] leading-[24px] text-[var(--body)]">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>  
      </section>
  );

};
export default FAQSection;