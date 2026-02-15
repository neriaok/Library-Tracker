import React from 'react';
import { useLibrary } from '../context/LibraryContext';

function WishListPage() {
  const { wishList, removeFromWishList } = useLibrary();

  if (wishList.length === 0) {
    return (
      <div className="page">
        <h2>My Wish List</h2>
        <div className="empty-state">
          <span className="empty-icon">📖</span>
          <h3>Your Wish List is Empty</h3>
          <p>Start searching for books and add them to your wish list to keep track of what you want to read!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="wishlist-header">
        <h2>My Wish List</h2>
        <div className="wishlist-stats">
          <span className="stat-badge">
            {wishList.length} {wishList.length === 1 ? 'book' : 'books'}
          </span>
        </div>
      </div>
      
      <div className="books-list">
        {wishList.map(book => (
          <div key={book.id} className="book-item">
            {book.thumbnail ? (
              <img src={book.thumbnail} alt={book.title} />
            ) : (
              <div className="no-image">
                <span>📚</span>
                <p>No Cover</p>
              </div>
            )}
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>{book.authors.join(', ')}</p>
              <button
                onClick={() => removeFromWishList(book.id)}
                className="remove-button"
              >
                🗑️ Remove from Wish List
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishListPage;