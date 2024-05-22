import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Mapbox from './Mapbox';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Mapbox />
    </div>
  );
};

export default Dashboard;