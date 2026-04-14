'use client';

import React, { useState } from 'react';
import BusinessToolsSubNavbar from './BusinessToolsSubNavbar';
import BusinessToolsGrid from './BusinessToolsGrid';

const BusinessToolsClient = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <>
      <BusinessToolsSubNavbar 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      <section className="mb-24 mt-12">
        <BusinessToolsGrid activeCategory={activeCategory} />
      </section>
    </>
  );
};

export default BusinessToolsClient;
