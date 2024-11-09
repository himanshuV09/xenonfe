import React from 'react';
import { useNavigate } from 'react-router-dom';
import { properties } from '../utils/data';

const Properties = () => {
  const navigate = useNavigate();

  const handleViewDetails = (property) => {
    const viewedProperties = JSON.parse(localStorage.getItem('viewedProperties')) || [];
    viewedProperties.unshift(property);

    if (viewedProperties.length > 5) {
      viewedProperties.pop();
    }

    localStorage.setItem('viewedProperties', JSON.stringify(viewedProperties));
    navigate(`/property/${property.id}`, { state: property });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold text-center mb-12 text-gray-800">Featured Properties</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {properties.map((property) => (
          <div key={property.id} className="relative bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-64 object-cover object-center transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative z-10 p-6">
              <h2 className="text-3xl font-bold text-white mb-2">{property.title}</h2>
              <p className="text-lg text-gray-300">{property.location}</p>
              <p className="text-xl font-semibold text-white mt-4">{property.price}</p>
              <button
                onClick={() => handleViewDetails(property)}
                className="mt-6 w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md shadow-lg transform transition duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
