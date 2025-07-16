//CTASection.tsx
// This file defines a React component that renders a Call to Action section.


import ArrowIcon from '../assets/arrow-right.svg';


const CTASection = () => {

    return (
        //Secion with full width
        <section className="w-full">
            <div className="flow flow-col w-full max-w-[1440px] h-[448px] bg-white items-center mx-auto">
                {/* Container to hold Heading, supporting text and the CTA buttons */}
                    <div className="flow flow-col w-[1440px] rounded-[32px] py-[64px] px-[64px] gap-[32px] bg-[var(--bg-secondary)] items-center mx-auto">
                        {/* Heading and supporting text */}
                        <div className="flow flow-col w-[1216px] h-[116px] items-center gap-[48px] mx-auto">
                            {/* Heading */}
                            <h4 className="font-inter font-semibold text-[36px] leading-[44px] tracking-[-2px] text-center text-[var(--heading-primary)]">Get started with free trial</h4>
                            {/* Supporting text */}
                            <p className="font-inter font-normal text-[18px] leading-[28px] text-center text-[var(--body)]">Start your journey towards data-driven success by taking advantage of our free trial.</p>
                            <p className="font-inter font-normal text-[18px] leading-[28px] text-center text-[var(--body)]">Sign up today and gain access to our powerful analytics platform.</p>
                        </div>
                        {/* CTA Buttons */}
                        <div className="flex flex-row items-center justify-center gap-[24px]">
                            {/* Get Started Button */}
                            <a href="#" className="w-[128px] h-[44px] bg-[var(--bg-button-primary)] text-white font-inter font-semibold text-[16px] leading-[24px] rounded-[8px] px-[20px] py-[10px] flex items-center justify-center">Get started</a>
                            {/* Learn More Button */}
                            <a href="#" className="w-[115px] h-[44px] flex items-center justify-center gap-[8px] text-[var(--button-link)] font-inter font-semibold text-[16px] leading-[24px]">Learn more<img src={ArrowIcon} alt="arrow right" className="w-[20px] h-[20px]" /></a>
                        </div>
                    </div>
            </div>

        </section>
    );
};
export default CTASection;

