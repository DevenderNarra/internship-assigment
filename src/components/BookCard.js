import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => (
  <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
    <div className="card h-100 text-center">
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
        <p className="card-text">Genre: {book.genre}</p>
        <p className="card-text">Rating: {book.rating}</p>
        <Link to={`/book/${book.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  </div>
);

export default BookCard;
