import React from 'react';
import { X } from 'lucide-react';

type ModalType = 'terms' | 'privacy' | 'disclaimer' | null;

interface LegalModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

export default function LegalModals({ activeModal, onClose }: LegalModalsProps) {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl relative mt-10 mb-10">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-serif font-bold text-text-main">
            {activeModal === 'terms' && 'Terms & Conditions'}
            {activeModal === 'privacy' && 'Privacy Policy'}
            {activeModal === 'disclaimer' && 'Disclaimer'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto text-gray-600 prose prose-sm max-w-none">
          {activeModal === 'terms' && (
            <div className="space-y-4">
              <p className="text-sm text-gray-400 italic">Last Updated: July 2026</p>
              <p>Welcome to New Soldier City. By accessing or using our website, you agree to these Terms & Conditions.</p>
              
              <h3 className="text-lg font-bold text-text-main mt-6">1. Website Use</h3>
              <p>This website is intended to provide information about New Soldier City, including available properties, payment plans, and investment opportunities.</p>
              
              <h3 className="text-lg font-bold text-text-main mt-6">2. Information Accuracy</h3>
              <p>While we strive to keep all information accurate and up to date, project details, prices, availability, and offers may change without prior notice.</p>
              
              <h3 className="text-lg font-bold text-text-main mt-6">3. Intellectual Property</h3>
              <p>All content, including logos, images, graphics, text, and designs, is the property of New Soldier City or its authorized partners and may not be copied or reproduced without written permission.</p>
              
              <h3 className="text-lg font-bold text-text-main mt-6">4. Bookings & Inquiries</h3>
              <p>Submitting an inquiry or callback request does not constitute a reservation or legal agreement for purchasing a property.</p>
              
              <h3 className="text-lg font-bold text-text-main mt-6">5. Third-Party Links</h3>
              <p>Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.</p>
              
              <h3 className="text-lg font-bold text-text-main mt-6">6. Changes</h3>
              <p>We reserve the right to update these Terms & Conditions at any time without prior notice.</p>
            </div>
          )}

          {activeModal === 'privacy' && (
            <div className="space-y-4">
              <p>At New Soldier City, we respect your privacy and are committed to protecting your personal information.</p>
              
              <h3 className="text-lg font-bold text-text-main mt-6">Information We Collect</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Full Name</li>
                <li>Phone Number</li>
                <li>Email Address</li>
                <li>Any information you submit through contact or booking forms</li>
              </ul>
              
              <h3 className="text-lg font-bold text-text-main mt-6">How We Use Your Information</h3>
              <p>We use your information to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Respond to your inquiries</li>
                <li>Schedule callbacks</li>
                <li>Provide project updates</li>
                <li>Share promotional offers (if requested)</li>
                <li>Improve our customer service</li>
              </ul>

              <h3 className="text-lg font-bold text-text-main mt-6">Data Protection</h3>
              <p>Your personal information is stored securely and is never sold or shared with unauthorized third parties.</p>

              <h3 className="text-lg font-bold text-text-main mt-6">Cookies</h3>
              <p>Our website may use cookies to improve your browsing experience and analyze website traffic.</p>

              <h3 className="text-lg font-bold text-text-main mt-6">Contact</h3>
              <p>If you have any questions regarding this Privacy Policy, please contact our support team.</p>
            </div>
          )}

          {activeModal === 'disclaimer' && (
            <div className="space-y-4">
              <p>The information provided on this website is for general informational purposes only.</p>
              
              <ul className="list-disc pl-5 space-y-3 mt-4">
                <li>Property prices, payment plans, availability, and project features are subject to change without prior notice.</li>
                <li>Images, renders, illustrations, and visualizations are for marketing purposes and may differ from the final development.</li>
                <li>Nothing on this website constitutes legal, financial, or investment advice.</li>
                <li>Interested buyers are encouraged to verify all information with our official sales representatives before making any purchasing decision.</li>
              </ul>

              <p className="mt-8 font-semibold text-text-main">Marketing Partner: SAS Marketing</p>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-gray-100 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
