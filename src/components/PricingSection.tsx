// PricingSection.tsx
// This file defines a React component that renders a pricing section with three pricing cards. 
// Each card includes a plan name, price, features, and a button to get started. 
// The component uses Tailwind CSS for styling.

import {useState} from 'react';

const PricingSection = () => {

  // State to track selected billing period (monthly or annually)
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');
   // State to track selected plan (‘Basic’, ‘Advanced’, or ‘Enterprise’)
  const [selectedPlan, setSelectedPlan] = useState<'Basic' | 'Advanced' | 'Enterprise'>('Advanced');

  // Pricing cards data
  const pricingOptions = [
    {
      name: 'Basic',
      description: 'Essential features made affordable',
      price: '$19',
      features: ['1 user account', 'Basic analytics', 'Limited customer support', 'Access to core features'],
    },
    {
      name: 'Advanced',
      description: 'Advanced Insights for growth',
      price: '$79',
      features: ['1 user account', 'Basic analytics', 'Limited customer support', 'Access to core features'],
      badge: 'Most popular',
    },
    {
      name: 'Enterprise',
      description: 'Tailored analytics for large enterprises',
      price: '$199',
      features: ['1 user account', 'Basic analytics', 'Limited customer support', 'Access to core features'],
    },
  ];
  
  return (
    // Section with full width 
    <section className="w-full">
        {/* Container to center content with max width */}
        <div className="w-[1440px] bg-white mx-auto"> 

            {/* Containerfor 1 */}
            <div className="w-full max-w-[1280px] flex flex-col items-center pt-24 px-8 gap-8 mx-auto">
                {/* Heading and Supporting text */}
                <div className="w-full max-w-[768px] flex flex-col gap-[16px] mx-auto text-center">
                    <div className="w-full max-w-[768px] flex flex-col gap-[12px]">
                        <h4 className="font-inter text-[16px] leading-[24px] font-semibold tracking-normal text-[var(--sub-headline)]">Pricing</h4>
                        <h2 className="font-inter text-[36px] leading-[44px] font-semibold tracking-[-2px] text-[var(--heading-primary)]">
                            Scalable plans for any team size</h2> 
                    </div>
                    <p className=" font-inter text-[18px] text-[var(--body)] text-base leading-[28px] tracking-normal max-w-[768px] mx-auto">                            Unlock the power of scalability with our plans tailored to accommodate teams of any size, 
                        providing the flexibility you need to grow and succeed.
                    </p>
                </div>

                {/* Monthly/Annually toggle buttons */}
                    <div className="flex justify-center items-center bg-[var(--bg-secondary)] rounded-3xl w-[185px] h-[44px] mx-auto p-[4px]">
                    <button
                        onClick={() => setBillingPeriod('monthly')}
                        className={`w-[83px] h-[36px] rounded-3xl text-sm font-medium focus:outline-none transition
                        ${billingPeriod === 'monthly'
                            ? 'bg-white shadow text-gray-900'
                            : 'bg-transparent text-gray-500'}`
                        }
                    >
                        Monthly
                    </button>

                    <button
                        onClick={() => setBillingPeriod('annually')}
                        className={`w-[86px] h-[36px] rounded-3xl text-sm font-medium focus:outline-none transition
                        ${billingPeriod === 'annually'
                            ? 'bg-white shadow text-gray-900'
                            : 'bg-transparent text-gray-500'}`
                        }
                    >
                        Annually
                    </button>
                </div>

            </div>

            {/* Conditionally rendering Pricing Cards */}
            {billingPeriod === 'monthly' ? (
                // Container 2
                <div className="flex flex-col pt-[64px] pb-[96px] gap-[36px] px-[32px] w-full">
                <div className="flex flex-wrap justify-center gap-[16px] w-full max-w-[1280px] mx-auto">
                {/* Pricing */}
                    {pricingOptions.map((option) => (
                        // Borders and styles
                        <div
                        key={option.name}
                        onClick={() => setSelectedPlan(option.name as 'Basic' | 'Advanced' | 'Enterprise')}
                        className={`flex flex-col justify-between bg-white rounded-[24px] 
                            border ${
                            selectedPlan === option.name ? 'border-2 border-[#4F46E5]' : 'border-[#E5E7EB]'
                            } 
                            px-8 py-8 h-[450px] w-full sm:w-[60%] md:w-[48%] lg:w-[32%] cursor-pointer`}
                        >
                            {/* Title + badge */}
                            <div>
                                <h3 className="text-xl font-semibold mb-1 flex items-center text-left">
                                {option.name}
                                {option.badge && (
                                    <span className="border border-[#C7D2FE] bg-[#EEF2FF] text-[#4338CA] text-xs font-medium px-[10px] rounded-[6px] ml-2">
                                    {option.badge}
                                    </span>
                                )}
                                </h3>
                                <p className="text-[16px] leading-[24px] text-gray-500 text-left">{option.description}</p>
                            </div>

                            {/* Price */}
                            <div className="flex items-baseline text-left">
                                <span className="text-[48px] font-semibold">{option.price}</span>
                                <span className="text-gray-500 ml-1 text-base">/month</span>
                            </div>

                            {/* Features */}
                            <ul className="space-y-[12px] text-[16px] text-gray-600 text-left">
                                {option.features.map((feature) => (
                                <li key={feature} className="flex items-center">
                                    <span className="text-[#6366F1] mr-2">✓</span>
                                    {feature}
                                </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button
                                className={`py-[10px] px-[20px] gap-[8px] w-full rounded-[6px] transition font-medium text-sm ${
                                selectedPlan === option.name
                                    ? 'bg-[var(--bg-button-primary)] text-white'
                                    : 'border border-gray-300 text-gray-800 font-semibold'
                                }`}
                            >
                                Get started
                            </button>
                        </div>
                    ))}
                </div>
                </div>
            ) : (
                    <div className="text-center text-gray-500">
                        {/* Empty state for annually for now */}
                        <p className="pt-[64px] pb-[96px]">No annual plans available yet.</p>
                    </div>
                )
            }

        </div>
    </section>
  );
};

export default PricingSection;