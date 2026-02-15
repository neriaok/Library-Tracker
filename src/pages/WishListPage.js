import React from 'react';
import { useLibrary } from '../context/LibraryContext';

function WishListPage() {
  const { wishList, removeFromWishList } = useLibrary();

  if (wishList.length === 0) {
    return (
      <div className="page">
        <h2>My Wish List</h2>
        <p className="empty-message">Your wish list is empty. Start adding books from the search page!</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>My Wish List ({wishList.length} {wishList.length === 1 ? 'book' : 'books'})</h2>
      
      <div className="books-list">
        {wishList.map(book => (
          <div key={book.id} className="book-item">
            {book.thumbnail && (
              <img src={book.thumbnail} alt={book.title} />
            )}
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>{book.authors.join(', ')}</p>
              <button
                onClick={() => removeFromWishList(book.id)}
                className="remove-button"
              >
                Remove from Wish List
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishListPage;