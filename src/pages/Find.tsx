import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import HomeCard from '../components/HomeCard';
import { MapPin, Filter, Search } from 'lucide-react';

interface Home {
  id: string;
  name: string;
  location: string;
  image: string;
  needsVolunteers: boolean;
  needsDonations: boolean;
  description: string;
  coordinates?: [number, number];
  type?: string;
}

declare global {
  interface Window {
    google?: any;
    initMap?: () => void;
  }
}

const Find: React.FC = () => {
  const [homes, setHomes] = useState<Home[]>([
    {
      id: "1",
      name: "Precious Hearts Children's Home",
      location: "Nairobi, Kenya",
      image: "https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      needsVolunteers: true,
      needsDonations: true,
      description: "A loving home for orphaned children from Nairobi's most vulnerable communities. Currently caring for 27 children aged 3-16.",
      coordinates: [36.8219, -1.2921],
      type: "Children's Home"
    },
    {
      id: "2",
      name: "Hope Haven Teen Mom Shelter",
      location: "Mombasa, Kenya",
      image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      needsVolunteers: true,
      needsDonations: false,
      description: "Supporting teen mothers to care for their babies while continuing their education. Currently housing 14 mothers and their children.",
      coordinates: [39.6682, -4.0435],
      type: "Teen Mom Shelter"
    },
    {
      id: "3",
      name: "Sunshine Children's Center",
      location: "Kisumu, Kenya",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      needsVolunteers: false,
      needsDonations: true,
      description: "Providing education, nutrition, and healthcare to 42 orphaned children in the Lake Victoria region.",
      coordinates: [34.7620, -0.1022],
      type: "Children's Home"
    },
    {
      id: "4",
      name: "New Beginnings Shelter",
      location: "Nakuru, Kenya",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      needsVolunteers: true,
      needsDonations: true,
      description: "A safe haven for abandoned children and those rescued from difficult circumstances. Currently supporting 31 children.",
      coordinates: [36.0800, -0.3031],
      type: "Children's Home"
    },
    {
      id: "5",
      name: "Mothers & Infants Haven",
      location: "Eldoret, Kenya",
      image: "https://images.unsplash.com/photo-1597737369399-65d32d02ed74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      needsVolunteers: true,
      needsDonations: true,
      description: "Providing critical support to young mothers and their infants, offering healthcare, education and life skills.",
      coordinates: [35.2698, 0.5142],
      type: "Teen Mom Shelter"
    },
    {
      id: "6",
      name: "Upendo Children's Village",
      location: "Malindi, Kenya",
      image: "https://images.unsplash.com/photo-1602359337719-a8cdf3406e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      needsVolunteers: false,
      needsDonations: true,
      description: "A community-based care center for orphaned and vulnerable children in the coastal region. Home to 23 children.",
      coordinates: [40.1169, -3.2138],
      type: "Children's Home"
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: 'all',
    needs: 'all'
  });
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapLoaded && mapRef.current) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      window.initMap = () => {
        initializeMap();
        setMapLoaded(true);
      };
      
      document.head.appendChild(script);
      
      return () => {
        delete window.initMap;
      };
    }
  }, [mapRef.current]);

  const initializeMap = () => {
    if (typeof window !== 'undefined' && window.google && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -1.2921, lng: 36.8219 }, // Nairobi coordinates
        zoom: 7,
        styles: [
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [{ visibility: "simplified" }]
          },
          {
            featureType: "poi",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      });

      homes.forEach(home => {
        if (home.coordinates) {
          const marker = new window.google.maps.Marker({
            position: { lat: home.coordinates[1], lng: home.coordinates[0] },
            map,
            title: home.name,
            animation: window.google.maps.Animation.DROP
          });

          const infowindow = new window.google.maps.InfoWindow({
            content: `
              <div style="max-width: 200px">
                <h3 style="font-weight: bold; margin-bottom: 5px;">${home.name}</h3>
                <p style="font-size: 0.9em; margin-bottom: 5px;">${home.location}</p>
                <p style="font-size: 0.8em;">${home.description.substring(0, 100)}...</p>
                <a href="/home/${home.id}" style="color: #F97316; text-decoration: underline; font-size: 0.9em;">View Details</a>
              </div>
            `
          });

          marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              map,
            });
          });
        }
      });
    }
  };

  const filteredHomes = homes.filter(home => {
    const matchesSearch = home.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         home.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         home.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = filters.type === 'all' || home.type?.includes(filters.type);
    
    const matchesNeeds = filters.needs === 'all' || 
                        (filters.needs === 'volunteers' && home.needsVolunteers) ||
                        (filters.needs === 'donations' && home.needsDonations);
    
    return matchesSearch && matchesType && matchesNeeds;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-8">
        <h1 className="text-3xl font-bold mb-2">Find a Home</h1>
        <p className="text-muted-foreground mb-8">Discover children's homes and teen mom shelters across Kenya that need your support</p>
        
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="text"
                  placeholder="Search by name, location, or description..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <Filter className="mr-2" size={18} />
                  Filter Options
                </h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Type of Home</label>
                  <select 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    value={filters.type}
                    onChange={(e) => setFilters({...filters, type: e.target.value})}
                  >
                    <option value="all">All Types</option>
                    <option value="Children's Home">Children's Homes</option>
                    <option value="Teen Mom">Teen Mom Shelters</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Current Needs</label>
                  <select 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    value={filters.needs}
                    onChange={(e) => setFilters({...filters, needs: e.target.value})}
                  >
                    <option value="all">All Needs</option>
                    <option value="volunteers">Needs Volunteers</option>
                    <option value="donations">Needs Donations</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <MapPin className="mr-2" size={18} />
                Found {filteredHomes.length} Homes
              </h3>
              
              <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
                {filteredHomes.map(home => (
                  <div key={home.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <HomeCard {...home} />
                  </div>
                ))}
                
                {filteredHomes.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No homes found matching your criteria.</p>
                    <button 
                      className="mt-2 text-primary hover:underline"
                      onClick={() => {
                        setSearchQuery('');
                        setFilters({type: 'all', needs: 'all'});
                      }}
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-2 h-[800px]">
              <div ref={mapRef} className="w-full h-full rounded-md">
                <div className="flex items-center justify-center h-full bg-muted">
                  <div className="text-center p-8">
                    <p className="text-muted-foreground mb-2">To use the interactive map feature, please add your Google Maps API Key.</p>
                    <p className="text-xs text-muted-foreground">For demonstration purposes, the list view shows all available homes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Find;
