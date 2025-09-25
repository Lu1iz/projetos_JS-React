import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    const [isExpande, setIsExpande] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        if(note.title.trim() === '' || note.content.trim() === '')
            alert("Preencha o campo vazio!");
        else
            props.onAdd(note)
        
        setNote({
            title: '',
            content: ''
        })
        event.preventDefault();
    }

    function expand() {
        setIsExpande(true);
    }

    return (
        <div>
            <form className="create-note">

                {
                    isExpande? <input 
                        name="title" 
                        value={note.title} 
                        placeholder="Título" 
                        onChange={handleChange}
                    /> : null
                }

                <textarea 
                    name="content" 
                    value={note.content} 
                    placeholder="Descrição da nota..." 
                    onChange={handleChange}
                    onClick={expand}
                    rows={isExpande? 3 : 1}
                />
                <Zoom in={isExpande}> 
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>    
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea;