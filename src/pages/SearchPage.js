import React, { useState } from 'react';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=20`
      );
      const data = await response.json();
      
      const formattedBooks = (data.items || []).map(item => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors || ['Unknown Author'],
        thumbnail: item.volumeInfo.imageLinks?.thumbnail
      }));
      
      setBooks(formattedBooks);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchBooks();
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

      {loading && <p>Loading...</p>}

      {books.length > 0 && (
        <div className="books-list">
          {books.map(book => (
            <div key={book.id} className="book-item">
              {book.thumbnail && (
                <img src={book.thumbnail} alt={book.title} />
              )}
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.authors.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;