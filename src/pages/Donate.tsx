import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { toast } from "@/components/ui/use-toast";
import { CreditCard, DollarSign, Home, Wallet, Mail, Send, Smartphone, PhoneCall } from 'lucide-react';

const Donate: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('mpesa');
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [mpesaOption, setMpesaOption] = useState('deeplink'); // 'deeplink' or 'ussd'

  const handleMpesaDeepLink = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !phoneNumber) {
      toast({
        title: "Missing Information",
        description: "Please enter both amount and phone number",
        variant: "destructive"
      });
      return;
    }
    
    // Create MPESA deep link
    const formattedPhone = phoneNumber.startsWith('254') ? phoneNumber : `254${phoneNumber.substring(phoneNumber.startsWith('0') ? 1 : 0)}`;
    const deepLink = `https://tinypesa.com/express?code=245798639575&amount=${amount}`;
    
    // Open deep link
    window.open(deepLink, '_blank');
    
    // Show success message
    toast({
      title: "MPESA Link Opened",
      description: "Complete the payment in your browser or MPESA app.",
      duration: 5000,
    });
  };

  const copyUSSDCode = () => {
    const ussdCode = `*334*${amount}*254798639575#`;
    navigator.clipboard.writeText(ussdCode);
    
    toast({
      title: "USSD Code Copied",
      description: "Dial this code on your phone to complete payment",
      duration: 5000,
    });
  };

  const handlePaypalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`mailto:rushionchegge@gmail.com?subject=PayPal Donation of ${amount} KES&body=I would like to donate ${amount} KES via PayPal. Please provide me with the necessary instructions.`);
  };

  const handleAirTMSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`mailto:francisgchegge@gmail.com?subject=AirTM Donation of ${amount} KES&body=I would like to donate ${amount} KES via AirTM. Please provide me with the necessary instructions.`);
  };

  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate card payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Payment Successful",
        description: `Thank you for your donation of ${amount} KES. A receipt has been sent to your email.`,
        duration: 5000,
      });
      setAmount('');
      setCardDetails({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: ''
      });
    }, 2000);
  };

  const handleLargeDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`mailto:rushionchegge@gmail.com?subject=Large Donation Inquiry&body=I am interested in making a large donation and would like more information.`);
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCardDetails(prev => ({ ...prev, [id]: value }));
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-16">
        <h1 className="text-3xl font-bold mb-10">Make a Donation</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Your Contribution Matters</h2>
            <p className="mb-4">
              Every donation, no matter the size, makes a significant impact on the lives of children 
              and teen mothers in need across Kenya.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">How Your Donation Helps</h3>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Provides nutritious meals and clean water</li>
              <li className="mb-2">Supports education through books and school supplies</li>
              <li className="mb-2">Ensures access to healthcare and medications</li>
              <li className="mb-2">Improves living conditions and facilities</li>
              <li className="mb-2">Funds recreational and developmental activities</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
              <p className="text-sm text-blue-700">
                All donations are tax-deductible. You will receive a receipt via email after your donation is processed.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Select Payment Method</h2>
            
            <div className="flex flex-wrap border-b mb-6">
              <button 
                className={`px-4 py-2 font-medium text-sm flex items-center ${activeTab === 'mpesa' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
                onClick={() => setActiveTab('mpesa')}
              >
                <Wallet className="w-4 h-4 mr-2" /> MPESA
              </button>
              <button 
                className={`px-4 py-2 font-medium text-sm flex items-center ${activeTab === 'paypal' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
                onClick={() => setActiveTab('paypal')}
              >
                <DollarSign className="w-4 h-4 mr-2" /> PayPal
              </button>
              <button 
                className={`px-4 py-2 font-medium text-sm flex items-center ${activeTab === 'airtm' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
                onClick={() => setActiveTab('airtm')}
              >
                <Send className="w-4 h-4 mr-2" /> AirTM
              </button>
              <button 
                className={`px-4 py-2 font-medium text-sm flex items-center ${activeTab === 'card' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
                onClick={() => setActiveTab('card')}
              >
                <CreditCard className="w-4 h-4 mr-2" /> Card
              </button>
              <button 
                className={`px-4 py-2 font-medium text-sm flex items-center ${activeTab === 'physical' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
                onClick={() => setActiveTab('physical')}
              >
                <Home className="w-4 h-4 mr-2" /> Physical
              </button>
              <button 
                className={`px-4 py-2 font-medium text-sm flex items-center ${activeTab === 'large' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
                onClick={() => setActiveTab('large')}
              >
                <Mail className="w-4 h-4 mr-2" /> Large Donations
              </button>
            </div>
            
            {activeTab === 'mpesa' && (
              <>
                {showSuccess ? (
                  <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                    <h3 className="text-green-800 font-medium">Thank You for Your Donation!</h3>
                    <p className="text-green-700 mt-1">
                      You should receive an MPESA confirmation shortly. A receipt will be sent to your email.
                    </p>
                    <button 
                      onClick={() => {
                        setShowSuccess(false);
                        setAmount('');
                        setPhoneNumber('');
                      }}
                      className="mt-3 text-sm text-green-700 underline"
                    >
                      Make another donation
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <div className="flex space-x-2 mb-4">
                        <button
                          onClick={() => setMpesaOption('deeplink')}
                          className={`px-4 py-2 rounded-md flex items-center text-sm ${
                            mpesaOption === 'deeplink' 
                              ? 'bg-green-600 text-white' 
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          <Smartphone className="w-4 h-4 mr-2" /> MPESA App/Link
                        </button>
                        <button
                          onClick={() => setMpesaOption('ussd')}
                          className={`px-4 py-2 rounded-md flex items-center text-sm ${
                            mpesaOption === 'ussd' 
                              ? 'bg-green-600 text-white' 
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          <PhoneCall className="w-4 h-4 mr-2" /> USSD Code
                        </button>
                      </div>
                      
                      {mpesaOption === 'deeplink' ? (
                        <form onSubmit={handleMpesaDeepLink} className="space-y-4">
                          <div>
                            <label htmlFor="amount" className="block mb-1 font-medium">Donation Amount (KES)</label>
                            <input 
                              type="number" 
                              id="amount" 
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                              placeholder="Enter amount"
                              required
                              min="10"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="phone" className="block mb-1 font-medium">Your MPESA Phone Number</label>
                            <div className="relative">
                              <input 
                                type="tel" 
                                id="phone" 
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                placeholder="e.g. 254712345678"
                                required
                              />
                              <div className="text-xs text-gray-500 mt-1">
                                Payment will be directed to 254798639575
                              </div>
                            </div>
                          </div>
                          
                          <div className="pt-2">
                            <button 
                              type="submit" 
                              className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
                            >
                              Pay with MPESA
                            </button>
                          </div>
                          
                          <div className="text-center mt-4">
                            <p className="text-sm text-gray-600">
                              This will open the MPESA payment page in a new tab.
                            </p>
                          </div>
                        </form>
                      ) : (
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="ussd-amount" className="block mb-1 font-medium">Donation Amount (KES)</label>
                            <input 
                              type="number" 
                              id="ussd-amount" 
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                              placeholder="Enter amount"
                              required
                              min="10"
                            />
                          </div>
                          
                          <div className="bg-green-50 border border-green-200 rounded-md p-4">
                            <h3 className="text-green-800 font-medium mb-2">USSD Code for Payment:</h3>
                            <div className="flex items-center">
                              <div className="bg-white py-2 px-4 rounded border border-green-300 flex-1 font-mono">
                                *334*{amount || "amount"}*254798639575#
                              </div>
                              <button 
                                onClick={copyUSSDCode}
                                className="ml-2 bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
                                disabled={!amount}
                              >
                                Copy
                              </button>
                            </div>
                            <p className="text-green-700 text-sm mt-2">
                              Dial this code on your phone to complete the MPESA payment
                            </p>
                          </div>
                          
                          <div className="text-center mt-4">
                            <p className="text-sm text-gray-600">
                              Copy the code and dial it on your phone to make the payment.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </>
            )}
            
            {activeTab === 'paypal' && (
              <form onSubmit={handlePaypalSubmit} className="space-y-4">
                <div>
                  <label htmlFor="paypal-amount" className="block mb-1 font-medium">Donation Amount (KES)</label>
                  <input 
                    type="number" 
                    id="paypal-amount" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Enter amount"
                    required
                    min="10"
                  />
                </div>
                
                <div>
                  <label htmlFor="paypal-email" className="block mb-1 font-medium">Your Email</label>
                  <input 
                    type="email" 
                    id="paypal-email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Continue to PayPal
                  </button>
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    You will be redirected to PayPal to complete your donation to rushionchegge@gmail.com
                  </p>
                </div>
              </form>
            )}
            
            {activeTab === 'airtm' && (
              <form onSubmit={handleAirTMSubmit} className="space-y-4">
                <div>
                  <label htmlFor="airtm-amount" className="block mb-1 font-medium">Donation Amount (KES)</label>
                  <input 
                    type="number" 
                    id="airtm-amount" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Enter amount"
                    required
                    min="10"
                  />
                </div>
                
                <div>
                  <label htmlFor="airtm-email" className="block mb-1 font-medium">Your Email</label>
                  <input 
                    type="email" 
                    id="airtm-email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors"
                  >
                    Continue to AirTM
                  </button>
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Payment will be directed to AirTM account: francisgchegge@gmail.com
                  </p>
                </div>
              </form>
            )}
            
            {activeTab === 'card' && (
              <form onSubmit={handleCardSubmit} className="space-y-4">
                <div>
                  <label htmlFor="card-amount" className="block mb-1 font-medium">Donation Amount (KES)</label>
                  <input 
                    type="number" 
                    id="card-amount" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Enter amount"
                    required
                    min="10"
                  />
                </div>
                
                <div>
                  <label htmlFor="cardholderName" className="block mb-1 font-medium">Cardholder Name</label>
                  <input 
                    type="text" 
                    id="cardholderName" 
                    value={cardDetails.cardholderName}
                    onChange={handleCardInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Name on card"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="cardNumber" className="block mb-1 font-medium">Card Number</label>
                  <input 
                    type="text" 
                    id="cardNumber" 
                    value={cardDetails.cardNumber}
                    onChange={handleCardInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="1234 5678 9012 3456"
                    required
                    maxLength={19}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiryDate" className="block mb-1 font-medium">Expiry Date</label>
                    <input 
                      type="text" 
                      id="expiryDate" 
                      value={cardDetails.expiryDate}
                      onChange={handleCardInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="MM/YY"
                      required
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block mb-1 font-medium">CVV</label>
                    <input 
                      type="text" 
                      id="cvv" 
                      value={cardDetails.cvv}
                      onChange={handleCardInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="123"
                      required
                      maxLength={4}
                    />
                  </div>
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className={`w-full bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Complete Donation'}
                  </button>
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Your card information is secure and encrypted
                  </p>
                </div>
              </form>
            )}
            
            {activeTab === 'physical' && (
              <div className="space-y-4">
                <p className="mb-4">
                  You can donate items directly to children's homes and shelters. Find a facility near you to arrange a drop-off.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
                  <h3 className="text-blue-800 font-medium mb-2">Commonly Needed Items:</h3>
                  <ul className="list-disc pl-5 text-blue-700">
                    <li>Non-perishable food items</li>
                    <li>Clothing and shoes</li>
                    <li>Educational materials and books</li>
                    <li>Toys and recreational equipment</li>
                    <li>Hygiene products</li>
                    <li>Baby supplies (for teen mom shelters)</li>
                  </ul>
                </div>
                
                <button 
                  onClick={() => {
                    navigate('/find');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors"
                >
                  Find a Home Near You
                </button>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    We recommend contacting the facility before your visit to confirm their specific needs.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'large' && (
              <form onSubmit={handleLargeDonationSubmit} className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-4">
                  <h3 className="text-yellow-800 font-medium">For Large Donations</h3>
                  <p className="text-yellow-700 mt-2">
                    If you're considering a significant contribution or would like to discuss corporate sponsorship options, 
                    please contact us directly. We'd be happy to provide more information and work with you to create 
                    a customized donation plan.
                  </p>
                </div>
                
                <div>
                  <label htmlFor="large-email" className="block mb-1 font-medium">Your Email</label>
                  <input 
                    type="email" 
                    id="large-email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div className="flex space-x-4">
                  <button 
                    type="submit" 
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Email Us
                  </button>
                  
                  <a 
                    href="https://wa.me/254798639575" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors text-center"
                  >
                    WhatsApp
                  </a>
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Contact: rushionchegge@gmail.com or WhatsApp +254 798 639 575
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
