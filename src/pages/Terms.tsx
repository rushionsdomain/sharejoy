
import React from 'react';
import Layout from '../components/Layout';

const Terms: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="prose max-w-none">
            <p className="mb-4">Last Updated: March 1, 2023</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing or using ShareJoy's platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily use ShareJoy's platform for personal, non-commercial purposes. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software on the platform</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Donations and Payments</h2>
            <p className="mb-4">
              All donations made through our platform are considered final and non-refundable. ShareJoy processes donations and directs them to the specified children's homes and teen mom shelters. We make every effort to ensure funds are used as intended, but cannot guarantee how recipient organizations will utilize donations.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Volunteer Services</h2>
            <p className="mb-4">
              ShareJoy facilitates connections between volunteers and children's homes/shelters but is not responsible for the actions, behavior, or safety of either volunteers or the facilities. All volunteering is done at your own risk, and we recommend conducting your own due diligence before volunteering.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Disclaimer</h2>
            <p className="mb-4">
              The materials on ShareJoy's platform are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitations</h2>
            <p className="mb-4">
              In no event shall ShareJoy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ShareJoy's platform.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Governing Law</h2>
            <p className="mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of Kenya and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us at:
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

export default Terms;
