import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import bookData from '../data/books.json';
import { LibraryContext } from '../context/LibraryContext';

const BookDetails = () => {
  const { id } = useParams();
  const book = bookData.books.find((b) => b.id === parseInt(id));
  const { addToLibrary } = useContext(LibraryContext);
  const [isAdded, setIsAdded] = useState(false)

  if (!book) return <p>Book not found</p>;

  const handleAddToLibrary = () => {
    addToLibrary(book); 
    setIsAdded(true); 
  };

  return (
    <div className="container my-5">
      <div className="card text-center">
        <div className="card-body">
          <h1 className="card-title">{book.title}</h1>
          <h5 className="card-subtitle mb-3 text-muted">Author: {book.author}</h5>
          <p className="card-text">Genre: {book.genre}</p>
          <p className="card-text">Rating: {book.rating}</p>
          <p className="card-text">Description: {book.description}</p>
          <p className="card-text">Publication Year: {book.publication_year}</p>
          <button onClick={handleAddToLibrary} 
        disabled={isAdded} className="btn btn-success mt-3">
             {isAdded ? 'Added' : 'Add to My Library'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
