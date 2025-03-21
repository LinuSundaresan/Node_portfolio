const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, Images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'My Portfolio', name: 'John Doe', role: 'Web Developer', projects: [
        { name: 'Project One', description: 'A cool project about web development.', link: '#' },
        { name: 'Project Two', description: 'Another amazing project.', link: '#' },
        { name: 'Project Three', description: 'Yet another great project.', link: '#' }
    ] });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
