import React, { useState } from 'react';
import Navigation from './components/Navigation';
import SearchPage from './pages/SearchPage';
import WishListPage from './pages/WishListPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('search');

  return (
    <div className="app">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="main-content">
        {currentPage === 'search' ? <SearchPage /> : <WishListPage />}
      </main>
    </div>
  );
}

export default App;
