import React, { useState } from 'react';

function ToDoItem(props) {
    return ( 
        <div>
            <li>{props.text}</li>
            <button className="buttonCheck" onClick={ () => {props.updateItem(props.id)}}>Update</button>
            <button className="buttonCheck" onClick={ () => {props.deleteItem(props.id)}}>Remove</button>
        </div>
    )
}

export default ToDoItem;