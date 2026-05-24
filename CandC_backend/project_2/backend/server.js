import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Backend is working 🚀')
})

const PORT = 8000

 //get a list of 5 jokes in 5 ids having id,content,title,author
app.get('/api/jokes', (req, res) => {
    const jokes = [
        { 
            id: 1,
            title: 'Why did the chicken cross the road?', 
            content: 'To get to the other side!', 
            author: 'John Doe' 
        },
        { 
            id: 2, 
            title: 'What do you call a bear with no teeth?', 
            content: 'A gummy bear!', 
            author: 'Jane Smith' 
        },
        { 
            id: 3, 
            title: 'Why don\'t scientists trust atoms?', 
            content: 'Because they make up everything!', 
            author: 'Alice Johnson' 
        },
        { 
            id: 4, 
            title: 'What do you call fake spaghetti?', 
            content: 'An impasta!', 
            author: 'Bob Brown' 
        }, 
    ];
    res.send(jokes)
})

app.listen(PORT, () => {
    console.log(`server at http://localhost:${PORT}`)
})