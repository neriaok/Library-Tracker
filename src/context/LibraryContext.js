import React, { createContext, useContext, useState } from 'react';

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

  const addToWishList = (book) => {
    const exists = wishList.some(item => item.id === book.id);
    if (!exists) {
      setWishList([...wishList, book]);
    }
  };

  const removeFromWishList = (bookId) => {
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