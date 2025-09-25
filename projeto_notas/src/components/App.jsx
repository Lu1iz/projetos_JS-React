import React, {useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes( prevNote => {
            return [...prevNote, newNote];
        })
    }

    function removeNote(id) {
        setNotes( prevNote => {
            return prevNote.filter( (noteItem, index) => {
                return id !== index;
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateNote onClick={addNote}/>
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        deleteNote={removeNote}
                    />
                )
            })}
            <Footer />
        </div>
    )
        
}

export default App;