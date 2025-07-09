// PricingSection.tsx
// This file defines a React component that renders a pricing section with three pricing cards. 
// Each card includes a plan name, price, features, and a button to get started. 
// The component uses Tailwind CSS for styling.

import React, {useState} from 'react';

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
    // Section with vertical padding and white background 
    <section className="py-16 bg-white">
        {/* Container to center content with max width and horizontal padding */}
        <div className="max-w-6xl mx-auto px-4"> 

            {/* Containerfor 1: Frame 13 */}
            <div className="text-center mb-8"> 
                {/* Heading and Supporting text */}
                <div className="text-center mb-8">
                    <h4 className="text-blue-600 font-semibold mb-2">Pricing</h4> {/* Subheading */}
                    <h2 className="text-3xl font-bold mb-4">Scalable plans for any team size</h2> {/* Main heading */}
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Unlock the power of scalability with our plans tailored to accommodate teams of any size, 
                        providing the flexibility you need to grow and succeed.
                    </p>
                </div>

                {/* Monthly/Annually toggle buttons */}
                <div className="flex justify-center space-x-0 mb-12 bg-gray-100 rounded-full p-1 w-max mx-auto">
                    <button
                        onClick={() => setBillingPeriod('monthly')} 
                        className={`px-6 py-2 rounded-full text-sm font-medium focus:outline-none transition 
                            ${billingPeriod === 'monthly'?'bg-white shadow text-gray-900': 'bg-transparent text-gray-500'}`
                        } 
                    >
                    Monthly
                    </button>

                    <button
                        onClick={() => setBillingPeriod('annually')}
                        className={`px-6 py-2 rounded-full text-sm font-medium focus:outline-none transition 
                            ${billingPeriod === 'annually'?'bg-white shadow text-gray-900': 'bg-transparent text-gray-500'}`
                        }
                    >
                    Annually
                    </button>
                </div>
            </div>

            {/* Containerfor 2: Pricing Cards Conditionally rendering */}

            {billingPeriod === 'monthly' ? (

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {pricingOptions.map((option) => (
                        // Map through pricing options and render each card
                        <div key={option.name}
                            onClick={() => setSelectedPlan(option.name as 'Basic' | 'Advanced' | 'Enterprise')}
                            // Card border styling based on the selected item
                            className={`rounded-lg shadow p-6 flex flex-col items-center cursor-pointer border
                                ${ selectedPlan === option.name
                                    ? 'border-blue-600'
                                    : 'border-gray-200' }`
                            }
                        > 
                            {/* Card Title and badge if available */}
                            <h3 className="text-xl font-semibold mb-1 flex items-center">
                                {option.name}
                                {/* Badge for "Most popular" plan */}
                                {option.badge && (
                                <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full ml-2">
                                    {option.badge}
                                </span>
                                )}
                            </h3>
                            
                            {/* Card Description, Price, Features*/}
                            <p className="text-gray-500 mb-4">{option.description}</p>
                            <p className="text-4xl font-bold mb-1">{option.price}</p>
                            <p className="text-gray-500 mb-4">/month</p>
                            <ul className="mb-6 space-y-2 text-gray-600">
                                {option.features.map((feature) => (
                                <li key={feature}>✓ {feature}</li>
                                ))}
                            </ul>

                            {/* Card button styling based on the selected item*/}
                            <button
                                className={`w-full px-4 py-2 rounded transition font-medium
                                    ${selectedPlan === option.name
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : 'border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100'}`
                                }
                            >
                            Get started
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                    <div className="text-center text-gray-500">
                        {/* Empty state for annually for now */}
                        <p>No annual plans available yet.</p>
                    </div>
                )
            }

        </div>
    </section>
  );
};

export default PricingSection;