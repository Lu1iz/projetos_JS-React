import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    if(inputText === '')
      alert("Campo vazio!");
    else {
      setItems( (prevItems) => {
        return [...prevItems, inputText]
      } )
    }
  }

  function deleteItem(id) {
    setItems( (prevItems) => {
      return prevItems.filter(
        (item, index) => {
          return index !== id
        }
      )
    } )
  }

  function updateItem(id) {
    const newText = prompt('Digite o novo valor:');

    if(newText) {
      setItems( (prevItems) => 
        prevItems.map( (item, index)  => 
          index === id? newText : item
        )
      )
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
     
      <InputArea onAdd={addItem}/>

      <div>
        <ul>
          {
            items.map( (todoItem, index) => <ToDoItem key={index} id={index} text={todoItem} deleteItem={deleteItem} updateItem={updateItem} /> )
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
