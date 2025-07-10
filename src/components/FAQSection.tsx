// FAQSection.tsx
// This file defines a React component that renders a Frequently asked questions section.
// The component uses Tailwind CSS for styling.

import React, {useState} from 'react';

const FAQSection = () => {

    return (
        //Secion with full width
        <section className="w-full">
            <div className="w-[1440px] h-[652px] bg-white mx-auto flex flex-col items-center pt-[96px] pb-[96px] gap-[48px]">
                {/* Container to hold Heading, supporting text and the FAQ */}
                <div className="w-[1280px] h-[460px] pr-[32px] pl-[32px] gap-[64px] mx-auto">
                    {/* Heading and supporting text */}
                    <div className="w-[768px] h-[116px] flow flow-col gap-[16px] mx-auto">
                        {/* Heading */}
                        <div className="w-[768px] h-[44px] gap-[12px]">
                            <h4 className="font-inter font-semibold text-[36px] leading-[44px] tracking-[-2px] text-center text-[#111827]">Frequently asked questions</h4>
                        </div>
                        <p className="font-inter font-normal text-[18px] leading-[28px] text-center">
                            Here are some of the most frequent questions we get asked.
                        </p>
                        <p className="font-inter font-normal text-[18px] leading-[28px] text-center">
                            Got more questions? Visit our 
                            <a href="#" className="text-blue-600"> help center</a>.
                        </p>
                    </div>
                    {/* FAQ Container */}
                    <div className="grid grid-cols-3 gap-x-[32px] gap-y-[32px] w-[1216px] mx-auto">
                        {/* Question 1 */}
                        <div className="flex flex-col w-[384px] gap-[8px]">
                            <p className="font-inter font-semibold text-[18px] leading-[28px] text-[#111827]">
                            How do I get started with your product?
                            </p>
                            <p className="font-inter font-normal text-[16px] leading-[24px] text-[#4B5563]">
                            Sign up on our website, explore features, customize your profile, and start using our product. We're here to help!
                            </p>
                        </div>

                        {/* Question 2 */}
                        <div className="flex flex-col w-[384px] gap-[8px]">
                            <p className="font-inter font-semibold text-[18px] leading-[28px] text-[#111827]">
                            What payment methods do you accept?
                            </p>
                            <p className="font-inter font-normal text-[16px] leading-[24px] text-[#4B5563]">
                            We accept major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for payment.
                            </p>
                        </div>

                        {/* Question 3 */}
                        <div className="flex flex-col w-[384px] gap-[8px]">
                            <p className="font-inter font-semibold text-[18px] leading-[28px] text-[#111827]">
                            Is there a free trial available?
                            </p>
                            <p className="font-inter font-normal text-[16px] leading-[24px] text-[#4B5563]">
                            Yes! We offer a free trial period for new users. You can sign up and explore our product's features and functionalities before making a commitment.
                            </p>
                        </div>

                        {/* Question 4 */}
                        <div className="flex flex-col w-[384px] gap-[8px]">
                            <p className="font-inter font-semibold text-[18px] leading-[28px] text-[#111827]">
                            Is technical support available?
                            </p>
                            <p className="font-inter font-normal text-[16px] leading-[24px] text-[#4B5563]">
                            Yes, technical support is available for our product. If you encounter any issues or have questions, simply reach out to our support team.
                            </p>
                        </div>

                        {/* Question 5 */}
                        <div className="flex flex-col w-[384px] gap-[8px]">
                            <p className="font-inter font-semibold text-[18px] leading-[28px] text-[#111827]">
                            Can I cancel my subscription?
                            </p>
                            <p className="font-inter font-normal text-[16px] leading-[24px] text-[#4B5563]">
                            Yes, you can cancel your subscription. Simply access your account settings and follow the cancellation instructions.
                            </p>
                        </div>

                        {/* Question 6 */}
                        <div className="flex flex-col w-[384px] gap-[8px]">
                            <p className="font-inter font-semibold text-[18px] leading-[28px] text-[#111827]">
                            Is my data secure with your product?
                            </p>
                            <p className="font-inter font-normal text-[16px] leading-[24px] text-[#4B5563]">
                            Yes, your data is secure with our product. We prioritize the protection and privacy of your information.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            
        </section>
    );

};
export default FAQSection;