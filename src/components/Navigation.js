import React from 'react';

function Navigation({ currentPage, setCurrentPage }) {
  return (
    <nav className="navigation">
      <h1 className="nav-title">📚 Personal Library</h1>
      
      <div className="nav-buttons">
        <button
          className={currentPage === 'search' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentPage('search')}
        >
          Search Books
        </button>
        
        <button
          className={currentPage === 'wishlist' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentPage('wishlist')}
        >
          My Wish List
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
