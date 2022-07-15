import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpclick = () => {
        //console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoclick = () => {
        //console.log("Upper case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClrclick = () => {
        //console.log("Upper case was clicked");
        let newText = '';
        setText(newText);
    }

    const handleOnchange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} placeholder="Enter text here" onChange={handleOnchange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClrclick}>To clear the text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p> {text.split(" ").length} words and {text.length} charaters</p>
            <p> {0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        </>
    )
}

