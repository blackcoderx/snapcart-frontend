'use client'
import React, { useState } from 'react';
import {Search} from 'lucide-react'
import '@/components/styles/style.css'

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="search-bar flex">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search for products..."
        className="h-full"
      />
      <button onClick={handleSearch}>
        <Search />
      </button>
    </div>
  );
}



