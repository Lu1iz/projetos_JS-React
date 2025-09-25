import React, {useState} from "react";

function CreateNote(props) {
    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    function handleChange(e) {
        const {name, value} = e.target;

        setNote( (prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        })
    }

    function handeClick(e) {
        e.preventDefault();

        if(note.title.trim() === '' || note.content.trim() === '')
            alert('Preencha o campo vazio!');
        else 
            props.onClick(note);

        setNote({
            title: '',
            content: ''
        })
    }

    return (
        <div>
            <form>
                <input 
                    name="title"
                    placeholder="Title"
                    value={note.title}
                    onChange={handleChange}
                />
                <textarea 
                    name="content"
                    placeholder="Description"
                    value={note.content}
                    onChange={handleChange}
                />
                <button onClick={handeClick}>ADD</button>
            </form>
        </div>
    )
}

export default CreateNote;