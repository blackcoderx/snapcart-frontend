'use client'
import React, { useState } from 'react';
import SearchBar from '@/components/custom/seacrhbar';
import { useGetProductsQuery } from '@/redux/service/Products';

export default function ExplorePage() {
  const [query, setQuery] = useState('');
  const { data: products, error, isLoading } = useGetProductsQuery(query);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    console.log(products);
  };

  return (
    <div className="explore-page">
      <SearchBar onSearch={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading products</p>}
    </div>
  );
}