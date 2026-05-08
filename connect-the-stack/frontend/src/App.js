import React, { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Book List</h1>

      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;