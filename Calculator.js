import React, { useState, useEffect, useRef } from 'react';
// import ReactDOM from 'react-dom';
import './calculator.css';


export default function Calculator() {
    const [result, setResult] = useState("");
    const inputRef = useRef(null);

    useEffect(() => inputRef.current.focus());



    function clickbuttons(e) {
        //  setResult(result concat(e.target.name));
         if (result.length < 10) {
        setResult(result + e.target.name);
         }
        // it is use for value concate  like perivious result show + new value or operation 
        // in other word  :- like a string ( to add many value or operation ) 
    }
    function backspace() {
        setResult(result.slice(0, result.length - 1));
        //setResult(result.slice(0 , -1));
        // becouse (right value , left value )so -1 is delete one by one value in left side
    }
    function clear() {
        //setResult(result.slice(0,0));
        setResult("")
    }
    function calculate() {
        try {
            //setResult(eval(result).toString());
            setResult(eval(result) + "");

        }
        catch (error) {
            setResult("error wrong syntex to operation")
        }
    }

    return (
        <div><h1> CALCULATOR </h1>


            <div className="calc-app">

                <form>
                    <input type="text" value={result} ref={inputRef} />

                </form>
                <div className="key-opt" id=" button">
                    <button className="clr" id="clear" onClick={clear}>Clear</button>
                    <button id="backspace" onClick={backspace}>delete</button>
                    <button name="+" onClick={clickbuttons}>+</button>
                    <button name="7" onClick={clickbuttons}>7</button>
                    <button name="8" onClick={clickbuttons}>8</button>
                    <button name="9" onClick={clickbuttons}>9</button>
                    <button name="-" onClick={clickbuttons}>-</button>
                    <button name="4" onClick={clickbuttons}>4</button>
                    <button name="5" onClick={clickbuttons}>5</button>
                    <button name="6" onClick={clickbuttons}>6</button>
                    <button name="*" onClick={clickbuttons}>&times;</button>
                    <button name="1" onClick={clickbuttons}>1</button>
                    <button name="2" onClick={clickbuttons}>2</button>
                    <button name="3" onClick={clickbuttons}>3</button>
                    <button name="/" onClick={clickbuttons}>/</button>
                    <button name="0" onClick={clickbuttons}>0</button>
                    <button name="." onClick={clickbuttons}>.</button>
                    <button id="result" onClick={calculate}>=</button>





                </div>

            </div>

        </div>
    );
}



