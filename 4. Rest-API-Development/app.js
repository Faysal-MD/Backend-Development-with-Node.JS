const express = require ('express');
const app = express();

// Middleware
app.use(express.json());

const books = [
    {
        id: 1,
        title: 'book 1'
    },
    {
        id: 2,
        title: 'book 2'
    },
    {
        id: 3,
        title: 'book 3'
    },
]

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
    const book = books.find(item => item.id === parseInt(req.params.id));

    if(book) {
        res.status(200).json(book);
    } else {
        res.status (404).json({
            message: "Book not found! Please try with a different book id."
        })
    }
})

// Add a new book
app.post("/add", (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: `book ${books.length + 1}`
    }

    books.push(newBook);
    
    res.status(200).json({
        data: newBook,
        message: "New book is added successfully",
    });
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The server is running on PORT ${PORT}`);
})