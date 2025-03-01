
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Users, Heart, ArrowLeft, Calendar, Phone, Mail, ExternalLink } from 'lucide-react';
import Layout from '../components/Layout';

interface HomeData {
  id: string;
  name: string;
  location: string;
  image: string;
  needsVolunteers: boolean;
  needsDonations: boolean;
  description: string;
  fullDescription?: string;
  contactPerson?: string;
  contactPhone?: string;
  contactEmail?: string;
  website?: string;
  establishedYear?: number;
  currentNeeds?: string[];
  images?: string[];
  volunteerOpportunities?: string[];
  donationNeeds?: string[];
}

const homesData: HomeData[] = [
  {
    id: "1",
    name: "Precious Hearts Children's Home",
    location: "Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    needsVolunteers: true,
    needsDonations: true,
    description: "A loving home for orphaned children from Nairobi's most vulnerable communities. Currently caring for 27 children aged 3-16.",
    fullDescription: "Precious Hearts Children's Home was established in 2010 to provide care, education, and support for orphaned and vulnerable children in Nairobi. Our mission is to create a nurturing environment where children can heal, grow, and develop the skills needed for a successful future. We currently house 27 children between the ages of 3 and 16, providing them with shelter, nutritious meals, healthcare, education, and psychosocial support.",
    contactPerson: "Grace Wambui",
    contactPhone: "+254 712 345 678",
    contactEmail: "info@precioushearts.org",
    website: "https://preciousheartshome.org",
    establishedYear: 2010,
    currentNeeds: ["School supplies", "Food donations", "Clothing", "Medical supplies", "Volunteers for tutoring"],
    images: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1145&q=80",
      "https://images.unsplash.com/photo-1615394610791-92e52c61fdef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    ],
    volunteerOpportunities: ["Teaching assistance", "Play therapy", "Administrative support", "Cooking and meal preparation", "Maintenance and gardening"],
    donationNeeds: ["Food", "Clothing", "School supplies", "Hygiene products", "Medical supplies", "Financial support"]
  },
  {
    id: "2",
    name: "Hope Haven Teen Mom Shelter",
    location: "Mombasa, Kenya",
    image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    needsVolunteers: true,
    needsDonations: false,
    description: "Supporting teen mothers to care for their babies while continuing their education. Currently housing 14 mothers and their children.",
    fullDescription: "Hope Haven was founded in 2015 to address the growing need for support services for teenage mothers in Mombasa. We provide a safe, nurturing environment where young mothers can live with their babies while continuing their education and developing essential life skills. Our comprehensive program includes healthcare for mothers and babies, childcare while mothers attend school, counseling, parenting classes, and vocational training.",
    contactPerson: "Amina Juma",
    contactPhone: "+254 723 456 789",
    contactEmail: "contact@hopehaven.org",
    website: "https://hopehavenkenya.org",
    establishedYear: 2015,
    currentNeeds: ["Baby supplies", "Educational materials", "Food", "Mentors", "Vocational training volunteers"],
    images: [
      "https://images.unsplash.com/photo-1516627145497-ae6968895b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1140&q=80",
      "https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    volunteerOpportunities: ["Childcare", "Tutoring", "Mentoring", "Vocational skills training", "Counseling support"],
    donationNeeds: ["Baby formula", "Diapers", "Baby clothes", "Educational materials", "Food", "Financial support"]
  },
  {
    id: "3",
    name: "Sunshine Children's Center",
    location: "Kisumu, Kenya",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    needsVolunteers: false,
    needsDonations: true,
    description: "Providing education, nutrition, and healthcare to 42 orphaned children in the Lake Victoria region.",
    fullDescription: "Sunshine Children's Center was established in 2012 to serve orphaned and vulnerable children in the Lake Victoria region. We focus on providing high-quality education, regular nutritious meals, and comprehensive healthcare to children who have lost parents to HIV/AIDS and other causes. Our center currently supports 42 children, offering them a safe space to learn, play, and grow into confident, capable adults.",
    contactPerson: "Daniel Otieno",
    contactPhone: "+254 734 567 890",
    contactEmail: "info@sunshinechildren.org",
    website: "https://sunshinechildrencenter.org",
    establishedYear: 2012,
    currentNeeds: ["Educational materials", "Food supplies", "Medical supplies", "Sports equipment", "Financial support"],
    images: [
      "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1597113366853-fea190b6cd82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    ],
    volunteerOpportunities: ["Teaching", "Healthcare assistance", "Administrative support", "Facility maintenance", "IT training"],
    donationNeeds: ["School supplies", "Books", "Food", "Medical supplies", "Clothing", "Financial support"]
  },
  {
    id: "4",
    name: "New Beginnings Shelter",
    location: "Nakuru, Kenya",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    needsVolunteers: true,
    needsDonations: true,
    description: "A safe haven for abandoned children and those rescued from difficult circumstances. Currently supporting 31 children.",
    fullDescription: "New Beginnings Shelter was founded in 2014 to provide immediate care and protection for children who have been abandoned, neglected, or rescued from abusive situations. We work closely with child protection services to ensure children receive the care they need while efforts are made to reunite them with family members when appropriate or find loving foster homes. Currently, we support 31 children of varying ages, providing them with trauma-informed care, education, and a stable, loving environment during their transition period.",
    contactPerson: "Sarah Kimani",
    contactPhone: "+254 745 678 901",
    contactEmail: "contact@newbeginnings.org",
    website: "https://newbeginningsshelter.org",
    establishedYear: 2014,
    currentNeeds: ["Bedding", "Toiletries", "Clothing", "Trauma counselors", "Educational supplies"],
    images: [
      "https://images.unsplash.com/photo-1536337005238-94b997371b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1183&q=80"
    ],
    volunteerOpportunities: ["Child care assistance", "Play therapy", "Tutoring", "Counseling support", "Administrative help"],
    donationNeeds: ["Bedding", "Clothing", "Hygiene products", "Food", "Educational materials", "Financial support"]
  },
  {
    id: "5",
    name: "Mothers & Infants Haven",
    location: "Eldoret, Kenya",
    image: "https://images.unsplash.com/photo-1597737369399-65d32d02ed74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    needsVolunteers: true,
    needsDonations: true,
    description: "Providing critical support to young mothers and their infants, offering healthcare, education and life skills.",
    fullDescription: "Mothers & Infants Haven was established in 2017 in response to the high maternal and infant mortality rates in rural communities around Eldoret. Our organization provides prenatal care, safe delivery options, postnatal support, and ongoing healthcare for vulnerable mothers and their babies. We also offer education on infant care, nutrition, and family planning, as well as vocational training for mothers to help them become economically independent.",
    contactPerson: "Elizabeth Chebet",
    contactPhone: "+254 756 789 012",
    contactEmail: "info@mothersinfantshaven.org",
    website: "https://mothersinfantshaven.org",
    establishedYear: 2017,
    currentNeeds: ["Infant formula", "Medical supplies", "Baby clothes", "Diapers", "Maternity clothes"],
    images: [
      "https://images.unsplash.com/photo-1577368520321-1df9bf3038b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    volunteerOpportunities: ["Healthcare professionals", "Childcare assistance", "Vocational trainers", "Administrative support", "Counselors"],
    donationNeeds: ["Medical supplies", "Baby supplies", "Food", "Clothing", "Hygiene products", "Financial support"]
  },
  {
    id: "6",
    name: "Upendo Children's Village",
    location: "Malindi, Kenya",
    image: "https://images.unsplash.com/photo-1602359337719-a8cdf3406e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    needsVolunteers: false,
    needsDonations: true,
    description: "A community-based care center for orphaned and vulnerable children in the coastal region. Home to 23 children.",
    fullDescription: "Upendo Children's Village was founded in 2013 to provide family-based care for orphaned and vulnerable children in the coastal region of Kenya. Rather than traditional institutional care, we operate on a village model where children live in small family units with dedicated house parents. This creates a more natural family environment that supports healthy development. Currently, 23 children live in our village across 4 family houses, receiving education, healthcare, nutritious meals, and plenty of love and support.",
    contactPerson: "James Odhiambo",
    contactPhone: "+254 767 890 123",
    contactEmail: "contact@upendovillage.org",
    website: "https://upendochildrensvillage.org",
    establishedYear: 2013,
    currentNeeds: ["Food supplies", "School fees", "Clothing", "Building maintenance", "Medical care"],
    images: [
      "https://images.unsplash.com/photo-1617092815784-15b77fe4e733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1559060618-879489165a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    volunteerOpportunities: ["House parent assistants", "Tutoring", "Sports coaching", "Arts and crafts", "Maintenance work"],
    donationNeeds: ["Food", "School supplies", "Clothing", "Building materials", "Medical supplies", "Financial support"]
  }
];

const HomeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [home, setHome] = useState<HomeData | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundHome = homesData.find(h => h.id === id);
    if (foundHome) {
      setHome(foundHome);
    }
  }, [id]);

  if (!home) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 mt-8 text-center">
          <h1 className="text-2xl font-bold">Home not found</h1>
          <p className="mt-4 text-muted-foreground">The home you're looking for doesn't exist or has been removed.</p>
          <button 
            className="mt-8 btn-primary"
            onClick={() => navigate('/find')}
          >
            Back to Find a Home
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-8">
        <button 
          onClick={() => navigate('/find')}
          className="flex items-center text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to all homes
        </button>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="rounded-xl overflow-hidden bg-muted h-[400px] relative">
              <img 
                src={home.images?.[activeImage] || home.image} 
                alt={home.name} 
                className="object-cover w-full h-full"
              />
              
              {/* Tags */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                {home.needsVolunteers && (
                  <span className="px-3 py-1 bg-secondary/90 backdrop-blur-sm text-white text-sm rounded-full flex items-center">
                    <Users className="w-4 h-4 mr-1" /> Needs Volunteers
                  </span>
                )}
                {home.needsDonations && (
                  <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-sm rounded-full flex items-center">
                    <Heart className="w-4 h-4 mr-1" /> Needs Donations
                  </span>
                )}
              </div>
            </div>
            
            {/* Thumbnail Images */}
            {home.images && home.images.length > 1 && (
              <div className="flex mt-4 gap-2 overflow-x-auto pb-2">
                {home.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                      activeImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`${home.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Content */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{home.name}</h1>
            <p className="flex items-center text-muted-foreground mb-4">
              <MapPin className="w-4 h-4 mr-2" /> {home.location}
            </p>
            
            <div className="flex items-center text-sm text-muted-foreground mb-6">
              <Calendar className="w-4 h-4 mr-2" /> 
              Established in {home.establishedYear || 'unknown'}
            </div>
            
            <p className="mb-6 text-lg">{home.fullDescription || home.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {home.volunteerOpportunities && home.volunteerOpportunities.length > 0 && (
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-secondary" /> Volunteer Opportunities
                  </h3>
                  <ul className="space-y-2">
                    {home.volunteerOpportunities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {home.donationNeeds && home.donationNeeds.length > 0 && (
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-primary" /> Donation Needs
                  </h3>
                  <ul className="space-y-2">
                    {home.donationNeeds.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="bg-accent p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Contact Information</h3>
              
              {home.contactPerson && (
                <p className="mb-2">
                  <span className="font-medium">Contact Person:</span> {home.contactPerson}
                </p>
              )}
              
              {home.contactPhone && (
                <p className="mb-2 flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                  <a href={`tel:${home.contactPhone}`} className="hover:text-primary transition-colors">
                    {home.contactPhone}
                  </a>
                </p>
              )}
              
              {home.contactEmail && (
                <p className="mb-2 flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                  <a href={`mailto:${home.contactEmail}`} className="hover:text-primary transition-colors">
                    {home.contactEmail}
                  </a>
                </p>
              )}
              
              {home.website && (
                <p className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2 text-muted-foreground" />
                  <a 
                    href={home.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Visit Website
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {home.needsVolunteers && (
              <a 
                href="/volunteer" 
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/volunteer');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-secondary"
              >
                <Users className="w-5 h-5 mr-2" /> Volunteer with {home.name.split(" ")[0]}
              </a>
            )}
            
            {home.needsDonations && (
              <a 
                href="/donate" 
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/donate');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                <Heart className="w-5 h-5 mr-2" /> Donate to {home.name.split(" ")[0]}
              </a>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomeDetail;
