# Title

    Virtual Book Library 

## Objective

    Create a virtual book library using React.js, allowing users to browse books, view detailed
    information about each book, and manage their personal library. The assignment is
    designed to test your understanding of React, component structure, state management,
    routing, and good coding practices.

## Tech Stack

    React.js and Bootstrap

## Completion Instructions

### Functionality

#### Must Have

    * Home Page (Book Listing):
        - Display a list of books with details such as title, author, genre, and rating.
        - The books should be displayed in a grid or list format with a search functionality to filter books by title, author, or genre.
    * Book Details Page:
        - When a book is clicked from the Home page, navigate to a detailed view page.
        - Display detailed information about the selected book including title, author, genre,rating, description, and publication year.
        - Provide an option to add the book to the "My Library" collection.
    *  My Library Page:
        - A separate page that shows the list of books the user has added to their personal library.
        - Users should be able to remove books from this collection.

#### Nice to Have

    
    - Routing: Implement navigation between pages using `react-router-dom` or any routing solution.
    - State Management: Use React's state management (`useState`, `useContext`, or any preferred state management solution) to handle the list of books, selected books, and the user's personal library.
    - Reusable Components: Create reusable components such as BookCard, BookList, and SearchBar.

    - Prop Drilling/Context API: Ensure data is passed between components effectively, avoiding unnecessary prop drilling by using `Context API` or other state management techniques.
    - Form Handling: Simple form for searching books.
    * Good Practices:
      - Component decomposition
      - Folder structure (e.g., `components`, `pages`, `services`)
      - Use functional components and hooks
      - Follow DRY and clean code principles

### Guidelines to develop a project

#### Must Have

    1. **Project Setup:**
    - Initialize a React project using `create-react-app` or any other preferred method.
    - Install dependencies such as `react-router-dom` for routing.

    2. **Set Up Routing:**
    - Configure routing using `react-router-dom`. Create three routes for:
        - Home Page (Book Listing)
        - Book Details Page
        - My Library Page

    3. **Create Pages:**

    - **Home Page:**
        - Display the list of books in a grid or list format.
        - Add a search bar to filter books by title, author, or genre.

    - **Book Details Page:**
        - When a book is clicked on the Home Page, navigate to this page.
        - Display detailed information about the selected book (title, author, genre, rating, description, and publication year).
        - Provide a button to add the book to "My Library".

    - **My Library Page:**
        - Display books added to the user’s personal library.
        - Implement functionality to remove books from this collection.

    4. **Components:**

    - **Reusable Components:**
        - Create components such as:
            - `BookCard`: Display individual book details in a card.
            - `BookList`: Render a list of books.
            - `SearchBar`: Handle searching/filtering of books.
    - Ensure each component receives necessary data via props or state management.

    5. **State Management:**

    - Use `useState` and `useContext` (or any other state management tool) for:
        - Storing the list of books.
        - Tracking the user’s personal library.
        - Managing the current book selection for the details page.
    - Avoid prop drilling by using the Context API where necessary.

    6. **Data Handling:**

    - Use the provided JSON data to populate the library.
    - Implement search functionality to filter the book list based on the title, author, or genre.

    7. **Adding and Removing Books:**

    - In the Book Details Page, implement functionality to add books to the "My Library".
    - In the My Library Page, implement functionality to remove books from the user’s collection.

#### Nice to Have

    1. **Error Handling:**
        - Handle errors like empty book lists, failed searches, or network issues gracefully. Display appropriate messages to the user when necessary.
    2 **UI/UX and Styling:**

      - Ensure the application is responsive and provides a clean, user-friendly interface.
      - Consider using CSS frameworks like Bootstrap or custom styles for consistent design.

    3 **Final Deliverables:**

    - Ensure all pages and features work as expected.

### Submission Instructions

#### Must Have
    - Ensure all pages and features work as expected.
    - Push the code to GitHub and provide a `README.md` file with setup instructions.
    - A GitHub repository containing the code for the project.
    - A `README.md` file explaining the structure of the project and how to run it.

#### Nice to Have

    - The project should be fully functional with no errors or warnings in the console.

## Resources

### Design files

    /components:

         - MyNavbar.js: Contains your navigation bar component.
         - BookList.js: Responsible for rendering the list of books on the Home page.
         - BookCard.js: Displays individual book information in a card format.
         - SearchBar.js: A component to handle the book search functionality.
         - LibraryContext.js: Context provider for managing the state of the library (e.g., books added to "My Library").
    /pages:
         - Home.js: Main page where the list of books is displayed.
         - BookDetails.js: Displays detailed information about a selected book.
         - MyLibrary.js: Shows the user's personal library with the books they have added.
    /data:
          - data.json: Contains the JSON data for the books. This is where you store the book data you provided.

    App.js: Main application file that sets up routing and wraps your components in the LibraryProvider.

    index.js: Entry point for your React application where ReactDOM renders the App component.

    /context:
        - LibraryContext.js: This file can also be used to provide context for your library state management.

### APIs

   - I'm using static data stored in a JSON file (data.json) rather than fetching data from an API. 

### Third-party packages

    - React Router (react-router-dom), React Bootstrap (react-bootstrap and bootstrap).