import React, { useState } from 'react';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // API call will come in next step
  };

  return (
    <div className="page">
      <h2>Search for Books</h2>
      
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchPage;