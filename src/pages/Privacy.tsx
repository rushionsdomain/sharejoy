
import React from 'react';
import Layout from '../components/Layout';

const Privacy: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="prose max-w-none">
            <p className="mb-4">Last Updated: March 1, 2023</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              ShareJoy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="mb-4">
              Please read this Privacy Policy carefully. By accessing or using our platform, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect information about you in a variety of ways, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal Data: Name, email address, phone number, mailing address</li>
              <li>Volunteer Information: Skills, availability, areas of interest</li>
              <li>Donation Information: Payment details, donation history</li>
              <li>Log Data: IP address, browser type, pages visited, time spent on pages</li>
              <li>Device Information: Device type, operating system</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We may use the information we collect about you to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Process donations and volunteer applications</li>
              <li>Connect you with children's homes and teen mom shelters</li>
              <li>Communicate with you about our services, events, and impact</li>
              <li>Improve our website and user experience</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Disclosure of Your Information</h2>
            <p className="mb-4">We may share information we have collected about you in certain situations:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>With children's homes and shelters: To facilitate volunteering and donations</li>
              <li>With service providers: For payment processing, data analysis, and other services</li>
              <li>For legal compliance: To comply with legal obligations and protect our rights</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Security of Your Information</h2>
            <p className="mb-4">
              We use administrative, technical, and physical security measures to help protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-4">
              Email: <a href="mailto:rushionchegge@gmail.com" className="text-primary hover:underline">rushionchegge@gmail.com</a><br />
              Phone: <a href="https://wa.me/254798639575" className="text-primary hover:underline">+254 798 639 575</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
