import React, {useState} from "react";

function App() {
  const [inputText, setInputText] = useState('');
  const [task, setTask] = useState([]);

  function handleChange(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  };

  function addTask() {
    if(inputText === '')
      alert("Preencha o campo!");
    else {
      setTask( (prevTask) => {
        return [...prevTask, inputText];
      })
    }

    setInputText('');
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={inputText} type="text" />
        <button onClick={addTask}>
          <span>Adicionar</span>
        </button>
      </div>
      <div>
        <ul>
          {
            task.map( (todoTask) => <li>{todoTask}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default App;