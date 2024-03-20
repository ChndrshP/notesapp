import express  from 'express';
import { getNote,
         getNotes,
         createNote} 
         from './database.js';   


const app = express();

app.use(express.json());
    
//Fetching notes
app.get("/notes", async (req, res) => {
    const notes = await getNotes();
    res.send(notes);
})

app.get("/note/:id", async (req, res) => {
    const id = req.params.id;
    const note = await getNote(id);
    res.send(note);
})

app.post("/create-note", async (req, res) =>{
    const {title, contents} = req.body;
    const note = await createNote(title, contents);
    res.status(201).send(note);
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(8080, () =>{
    console.log('server running on 8080');
})