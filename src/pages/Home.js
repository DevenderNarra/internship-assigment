import React, { useState } from 'react';
import bookData from '../data/books.json';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const Home = () => {
  const [books] = useState(bookData.books);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="my-4 text-center">Book Library</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default Home;
