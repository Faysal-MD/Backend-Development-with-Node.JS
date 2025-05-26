const express = require('express');
const path = require('path');

const app = express();

// set the viewengine as ejs
app.set('view engine', 'ejs');

// set the directory for the view
app.set('views', path.join(__dirname, 'views'));

const products = [
    {
        id: 1,
        title: 'product 1'
    },
    {
        id: 2,
        title: 'product 2'
    },
    {
        id: 3,
        title: 'product 3'
    }
]

app.get("/", (req, res) => {
    res.render('home', {title: 'home', products:products});
})

app.get("/about", (req, res) => {
    res.render('about', {title: 'about page'});
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The server is running on PORT ${PORT}`);
})
