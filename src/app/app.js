import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './app.css'

const App = () => {

    const [currentDisplay, setCurrentDisplay] = useState("");
    const [previousDisplay, setPreviousDisplay]= useState("");

    const appendNumber = (digit) => {
        setCurrentDisplay(currentDisplay + digit)
    }

    const clear = () => {
        setCurrentDisplay("")
        setPreviousDisplay("")
    }

    const calculate = () => {
        setPreviousDisplay(currentDisplay + " =");
        const sanitizedExpression = currentDisplay.replace(/÷/g, '/').replace(/x/g, '*');
        const calculatedResult = evaluate(sanitizedExpression);
        setCurrentDisplay(calculatedResult);
    }
 
    return(
        <div className="main-content">
            <div className="content-container">
                <div className="invisible">
                    <h1>CALCULATOR</h1>
                    <div className="calculator-display">
                        <h3 className="display-current">{currentDisplay}</h3>
                        <p className='display-previous'>{previousDisplay}</p>
                    </div>
                    <div className="buttons">
                        <button className="button1" onClick={() => clear()}><h1>AC</h1></button>
                        <button className="button2"><h1>(</h1></button>
                        <button className="button3"><h1>)</h1></button>
                        <button className="button4"><h1>%</h1></button>
                        <button className="button5" onClick={() => appendNumber("1")}><h1>1</h1></button>
                        <button className="button6" onClick={() => appendNumber("2")}><h1>2</h1></button>
                        <button className="button7" onClick={() => appendNumber("3")}><h1>3</h1></button>
                        <button className="button8" onClick={() => appendNumber(" ÷ ")}><h1>÷</h1></button>
                        <button className="button9" onClick={() => appendNumber("4")}><h1>4</h1></button>
                        <button className="button10" onClick={() => appendNumber("5")}><h1>5</h1></button>
                        <button className="button11" onClick={() => appendNumber("6")}><h1>6</h1></button>
                        <button className="button12" onClick={() => appendNumber(" x ")}><h1>x</h1></button>
                        <button className="button13" onClick={() => appendNumber("7")}><h1>7</h1></button>
                        <button className="button14" onClick={() => appendNumber("8")}><h1>8</h1></button>
                        <button className="button15" onClick={() => appendNumber("9")}><h1>9</h1></button>
                        <button className="button16" onClick={() => appendNumber(" - ")}><h1>-</h1></button>
                        <button className="button17" onClick={() => appendNumber(".")}><h1>.</h1></button>
                        <button className="button18" onClick={() => appendNumber("0")}><h1>0</h1></button>
                        <button className="button19" onClick={() => calculate()}><h1>=</h1></button>
                        <button className="button20" onClick={() => appendNumber(" + ")}><h1>+</h1></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App;