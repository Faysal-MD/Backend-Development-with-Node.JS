const express = require("express");
const app = express();

// Middleware
app.use(express.json());

const books = [
  {
    id: 1,
    title: "book 1",
  },
  {
    id: 2,
    title: "book 2",
  },
  {
    id: 3,
    title: "book 3",
  },
];

// Intro route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to out bookstore API",
  });
});

// Get all books
app.get("/get", (req, res) => {
  res.json(books);
});

// Get a single book
app.get("/get/:id", (req, res) => {
  const book = books.find((item) => item.id === parseInt(req.params.id));

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message: "Book not found! Please try with a different book id.",
    });
  }
});

// Add a new book
app.post("/add", (req, res) => {
  const newBook = {
    id: Math.floor(Math.random() * 1000).toString();
    title: `book ${Math.floor(Math.random() * 1000)}`,
  };

  books.push(newBook);

  res.status(200).json({
    data: newBook,
    message: "New book is added successfully",
  });
});

// Update a book
app.put("/update/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const newTitle = req.body.title;

  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found!" });
  }

  if (newTitle) {
    book.title = newTitle;
  }

  res.status(200).json({
    message: `Book id ${bookId} updated successfully`,
    data: book,
  });
});

// Delete a book
app.delete("/delete/:id", (req, res) => {
    const findIndexOfCurrentBook = books.findIndex(item => item.id == parseInt(req.params.id));

    if(findIndexOfCurrentBook !== -1) {
        const deletedBook = books.splice(findIndexOfCurrentBook, 1);
        res.status(200).json({
            message: "Book deleted successfully",
            data: deletedBook[0],
        })
    } else {
        res.status(404).json({message: "Book not found"});
    }
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running on PORT ${PORT}`);
});
