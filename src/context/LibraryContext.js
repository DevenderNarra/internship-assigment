import React, { createContext,useState} from 'react';

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [library, setLibrary] = useState([]);


  const addToLibrary = (book) => {
    setLibrary((prevLibrary) => {
      if (!prevLibrary.some((item) => item.id === book.id)) {
        return [...prevLibrary, book];
      }
      return prevLibrary;
    });
  };

  const removeFromLibrary = (id) => {
    setLibrary((prevLibrary) => prevLibrary.filter((book) => book.id !== id));
  };

  return (
    <LibraryContext.Provider value={{ library, addToLibrary, removeFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};

