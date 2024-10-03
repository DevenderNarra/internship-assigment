import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';

const MyLibrary = () => {
  const { library, removeFromLibrary } = useContext(LibraryContext);
  

  return (
    <div className="container">
      <h1 className="my-4 text-center">My Library</h1>
      {library.length === 0 ? <p>No books in your library.</p> : null}
      <div className="row">
        {library.map((book) => (
          <div key={book.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                <button onClick={() => removeFromLibrary(book.id)} className="btn btn-danger mt-3">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLibrary;
