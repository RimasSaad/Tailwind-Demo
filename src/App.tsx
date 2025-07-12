// App.tsx
// Entry point for your React app. Renders the PricingSection component.

import PricingSection from './components/PricingSection'; // Import the PricingSection component
import FAQSection from './components/FAQSection'; // Import the FAQSection component
import CTASection from './components/CTASection'; // Import the CTASection component

function App() {
  return (
    <div>
      {/* Render the Pricing Section */}
      <PricingSection />
      {/* Render the FAQ Section */}
      <FAQSection />
      {/* Render the CTA Section*/}
      <CTASection />
    </div>
  );
}

export default App;