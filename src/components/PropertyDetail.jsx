import React from 'react';
import { useLocation } from 'react-router-dom';

const PropertyDetail = () => {
  const location = useLocation();
  const property = location.state;

  if (!property) {
    return <p>Property details are not available.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
      <img src={property.image} alt={property.title} className="w-full h-auto mb-4" />
      <p className="text-gray-600">{property.location}</p>
      <p className="text-gray-800 mt-2">{property.price}</p>
      <p className="mt-4">{property.description}</p>
    </div>
  );
};

export default PropertyDetail;
