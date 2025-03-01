
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { toast } from "@/components/ui/use-toast";

const Volunteer: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interests: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission to email
    try {
      // Here you would normally make an API call to send the email
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Application Submitted",
        description: "Thank you for choosing to volunteer with ShareJoy. We'll be in touch soon!",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interests: '',
        message: ''
      });
      
      // Redirect to home page after 5-7 seconds
      setTimeout(() => {
        navigate('/');
      }, 6000);
      
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-16">
        <h1 className="text-3xl font-bold mb-6">Volunteer With Us</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Make a Difference</h2>
          <p className="mb-4">
            Volunteering with ShareJoy connects you directly with children's homes and teen mom 
            shelters across Kenya. Your time and skills can make a meaningful impact in the lives 
            of those who need it most.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Volunteer Opportunities</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Teaching and tutoring</li>
            <li className="mb-2">Organizing recreational activities</li>
            <li className="mb-2">Skills training workshops</li>
            <li className="mb-2">Administrative support</li>
            <li className="mb-2">Maintenance and facility improvements</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Volunteer Application</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block mb-1 font-medium">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-1 font-medium">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block mb-1 font-medium">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="interests" className="block mb-1 font-medium">Areas of Interest</label>
              <select 
                id="interests" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.interests}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="teaching">Teaching and Tutoring</option>
                <option value="activities">Recreational Activities</option>
                <option value="workshops">Skills Training</option>
                <option value="admin">Administrative Support</option>
                <option value="maintenance">Maintenance and Repairs</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Why do you want to volunteer?</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your motivation to volunteer..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Volunteer;
