import React, { useState, useEffect } from 'react';
import { useLibrary } from '../context/LibraryContext';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const { addToWishList, isInWishList } = useLibrary();

  // Debounced search effect
  useEffect(() => {
    // Don't search if search term is empty
    if (!searchTerm.trim()) {
      setBooks([]);
      return;
    }

    // Set loading and clear previous error
    setLoading(true);
    setError(null);

    // Debounce: wait 500ms after user stops typing
    const timer = setTimeout(() => {
      searchBooks();
    }, 500);

    // Cleanup: cancel the timer if user types again
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const searchBooks = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&maxResults=20`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch books. Please try again.');
      }

      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        setBooks([]);
        setError('No books found. Try different keywords.');
        setLoading(false);
        return;
      }
      
      const formattedBooks = data.items.map(item => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors || ['Unknown Author'],
        thumbnail: item.volumeInfo.imageLinks?.thumbnail
      }));
      
      setBooks(formattedBooks);
      setError(null);
    } catch (err) {
      console.error('Error fetching books:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h2>Search for Books</h2>
      
      <div className="search-form">
        <input
          type="text"
          placeholder="Start typing to search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm('')}
            className="clear-button"
          >
            ✕
          </button>
        )}
      </div>

      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Searching for books...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <span className="error-icon">⚠️</span>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && searchTerm && books.length === 0 && (
        <div className="empty-state">
          <span className="empty-icon">📭</span>
          <h3>No Results Found</h3>
          <p>Try searching with different keywords</p>
        </div>
      )}

      {!loading && !error && !searchTerm && (
        <div className="empty-state">
          <span className="empty-icon">🔍</span>
          <h3>Start Your Search</h3>
          <p>Type a book title or author name to begin</p>
        </div>
      )}

      {!loading && books.length > 0 && (
        <div className="books-list">
          {books.map(book => (
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
                  onClick={() => addToWishList(book)}
                  disabled={isInWishList(book.id)}
                  className="add-button"
                >
                  {isInWishList(book.id) ? '✓ In Wish List' : '+ Add to Wish List'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;