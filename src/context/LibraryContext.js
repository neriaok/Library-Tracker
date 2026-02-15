import React, { createContext, useContext, useState, useEffect } from 'react';

const LibraryContext = createContext();

export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error('useLibrary must be used within a LibraryProvider');
  }
  return context;
};

export const LibraryProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage when component mounts (ONLY ONCE)
  useEffect(() => {
    console.log('🔵 Loading from localStorage...');
    const savedWishList = localStorage.getItem('wishList');
    console.log('📦 Saved data:', savedWishList);
    
    if (savedWishList) {
      try {
        const parsed = JSON.parse(savedWishList);
        console.log('✅ Parsed data:', parsed);
        setWishList(parsed);
      } catch (error) {
        console.error('❌ Error loading wish list from localStorage:', error);
      }
    }
    
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever wishList changes (BUT ONLY AFTER INITIAL LOAD)
  useEffect(() => {
    if (isLoaded) {
      console.log('💾 Saving to localStorage:', wishList);
      localStorage.setItem('wishList', JSON.stringify(wishList));
    }
  }, [wishList, isLoaded]);

  const addToWishList = (book) => {
    console.log('➕ Adding book:', book);
    const exists = wishList.some(item => item.id === book.id);
    if (!exists) {
      setWishList([...wishList, book]);
    }
  };

  const removeFromWishList = (bookId) => {
    console.log('➖ Removing book:', bookId);
    setWishList(wishList.filter(book => book.id !== bookId));
  };

  const isInWishList = (bookId) => {
    return wishList.some(book => book.id === bookId);
  };

  const value = {
    wishList,
    addToWishList,
    removeFromWishList,
    isInWishList
  };

  return (
    <LibraryContext.Provider value={value}>
      {children}
    </LibraryContext.Provider>
  );
};