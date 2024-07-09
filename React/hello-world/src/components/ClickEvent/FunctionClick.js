import React from "react";

function FunctionClick() {
    function clickButton() {
        console.log('Button Clicked')
    }
    return (<div>
        <button onClick={clickButton}>Function Click Button</button>
    </div>)
}

export default FunctionClick;