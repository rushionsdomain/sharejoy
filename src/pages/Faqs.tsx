
import React from 'react';
import Layout from '../components/Layout';

const Faqs: React.FC = () => {
  const faqItems = [
    {
      question: "What is ShareJoy?",
      answer: "ShareJoy is a platform that connects caring individuals with children's homes and teen mom shelters across Kenya. We make it easy to donate, volunteer, and make a difference in the lives of those who need it most."
    },
    {
      question: "How can I volunteer?",
      answer: "You can volunteer by visiting our Volunteer page, filling out the application form, and specifying your areas of interest. Our team will then match you with a suitable home based on your skills and their needs."
    },
    {
      question: "Are my donations tax-deductible?",
      answer: "Yes, all donations made through ShareJoy are tax-deductible. You will receive a receipt via email after your donation is processed, which you can use for tax purposes."
    },
    {
      question: "How is my donation used?",
      answer: "Your donations go directly to supporting the children's homes and teen mom shelters in our network. Funds are used for food, education, healthcare, facility maintenance, and other essential needs."
    },
    {
      question: "Can I donate items instead of money?",
      answer: "Absolutely! Many homes accept in-kind donations such as clothes, books, toys, and food. Visit our 'Find a Home' page to locate a facility near you and learn about their specific needs."
    },
    {
      question: "How do I know my donation is going to the right place?",
      answer: "ShareJoy partners directly with verified children's homes and teen mom shelters. We conduct regular visits and maintain close relationships with all facilities in our network to ensure transparency and accountability."
    },
    {
      question: "Can I visit a home before donating or volunteering?",
      answer: "Yes, many homes welcome visits from potential donors and volunteers. You can arrange a visit by contacting the home directly through their profile page on our website."
    },
    {
      question: "How can I start my own fundraising campaign for a home?",
      answer: "We encourage supporters to create personal fundraising campaigns. Please contact us at rushionchegge@gmail.com for guidance on setting up your campaign."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-8">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-md">
          <h3 className="text-lg font-semibold mb-2">Have more questions?</h3>
          <p className="mb-4">We're here to help! Get in touch with us via:</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="font-medium mr-2">Email:</span>
              <a href="mailto:rushionchegge@gmail.com" className="text-primary hover:underline">rushionchegge@gmail.com</a>
            </li>
            <li className="flex items-center">
              <span className="font-medium mr-2">WhatsApp:</span>
              <a href="https://wa.me/254798639575" className="text-primary hover:underline">+254 798 639 575</a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Faqs;
