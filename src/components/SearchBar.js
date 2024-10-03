import React from 'react';

const SearchBar = ({ setSearchTerm }) => (
  <div className="mb-4">
    <input
      type="text"
      className="form-control"
      placeholder="Search books..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
);

export default SearchBar;
