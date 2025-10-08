import React, {useState} from "react";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
    const initialState = {
        displayValue: '0',
        clearDisplay: false,
        operation: null,
        values: [0, 0],
        current: 0
    }

    const [displayValue, setDisplayValue] = useState(initialState.displayValue);
    const [clearDisplay, setClearDisplay] = useState(initialState.clearDisplay);
    const [operation, setOperation] = useState(initialState.operation);
    const [values, setValues] = useState(initialState.values);
    const [current, setCurrent] = useState(initialState.current);

    function clearMemory() {
        const { displayValue, clearDisplay, operation, values, current } = initialState;

        setDisplayValue(displayValue);
        setClearDisplay(clearDisplay);
        setOperation(operation);
        setValues([...values]);
        setCurrent(current);
    }

    function handleSetOperation(op) {
        if(current === 0) {
            setOperation(op);
            setCurrent(1);
            setClearDisplay(true);
        }else {
            const finished = op === '=';
            const currentOperation = operation;
            const newValues = [...values];

            try {
                newValues[0] = eval(` ${newValues[0]} ${currentOperation} ${newValues[1]} `);
            }catch(e) {
                newValues[0] = values[0];
            }

            newValues[1] = 0;

            setDisplayValue(String(newValues[0]));
            setOperation(finished ? null : op);
            setCurrent(finished ? 0 : 1);
            setClearDisplay(!finished);
            setValues(newValues);
        }
    }

    function addDigit(n) {
        if(n === '.' && displayValue.includes('.')) return;

        const shouldClear = displayValue === "0" || clearDisplay;
        const currentValue = shouldClear ? "" : displayValue;
        const newDisplayValue = currentValue + n;

        setDisplayValue(newDisplayValue);
        setClearDisplay(false);

        if(n !== ".") {
            const i = current;
            const newValue = parseFloat(newDisplayValue);
            const newValues = [...values];

            newValues[i] = newValue;
            setValues(newValues);
        }
    }

    return (
        <div className="calculator">
            <Display value={displayValue}/>
            <Button label="AC" click={clearMemory} col3/>
            <Button label="/" click={handleSetOperation} operator/>
            <Button label="7" click={addDigit}/>
            <Button label="8" click={addDigit}/>
            <Button label="9" click={addDigit}/>
            <Button label="*" click={handleSetOperation} operator/>
            <Button label="4" click={addDigit}/>
            <Button label="5" click={addDigit}/>
            <Button label="6" click={addDigit}/>
            <Button label="-" click={handleSetOperation} operator/>
            <Button label="1" click={addDigit}/>
            <Button label="2" click={addDigit}/>
            <Button label="3" click={addDigit}/>
            <Button label="+" click={handleSetOperation} operator/>
            <Button label="0" click={addDigit} col2/>
            <Button label="." click={addDigit}/>
            <Button label="=" click={handleSetOperation} operator/>
        </div>
    )
}

export default App;