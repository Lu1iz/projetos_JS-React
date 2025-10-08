import React from "react";

function Button(props) {
    let classes = 'button';

    classes += props.operator ? ' operator' : '';
    classes += props.col2 ? ' col2' : '';
    classes += props.col3 ? ' col3' : '';

    return (
        <button onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}

export default Button;