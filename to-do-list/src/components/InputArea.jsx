import React, {useState} from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState('');

  function handleChange(event) {
    const newValue = event.target.value;

    setInputText(newValue);
  };

  return (
    <div className="form">
      <form onSubimt={ (event) => {
          props.onAdd(inputText);
          setInputText('');
          event.preventDefault();
        }}>
        <input onChange={handleChange} type="text" value={inputText} />
        <button type="text">
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}

export default InputArea;
