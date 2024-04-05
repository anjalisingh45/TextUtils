import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success")
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const handleLoClick = () => {
    // console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success")

  };
  const handleClearClick = () => {
    // Clear was clicked
    let newText = "";
    setText(newText);
    props.showAlert("All text has been cleared","danger")

  };
  const handleSpeak = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };
  const handleCopy = () => {
    //document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text);
    props.showAlert("Text copy to Clipboard","success")

  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("All Extra spaces has been removed","success")

  };

  const [text, setText] = useState("");
  // text = "new text" ; //Wrong way to change the State
  // setText ("new text"); //Correct way to change the State

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white' : 'black'}}>
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{backgroundColor: props.mode==='dark'?'#13466e' : 'white',color: props.mode==='dark'?'white' : 'black'}}
            onChange={handleOnChange}
            id="myBox"
            rows="10 "
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 " onClick={handleUpClick}  style={{ color: props.btnMode }}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleLoClick}  style={{ color: props.btnMode }}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-info mx-2 text-light" onClick={handleExtraSpaces}>
          Remove ExtraSpaces
        </button>
        <button
          disabled={text.length===0} className="btn btn-danger mx-1 my-1 "
          onClick={handleClearClick}
        >
          <i className="fas fa-trash"></i>
        </button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1 " onClick={handleCopy}>
          {" "}
          <i className="fas fa-copy"></i>
        </button>
        <button disabled={text.length===0} onClick={handleSpeak} className="btn btn-dark mx-1 my-1 ">
          <i className="fas fa-volume-up"></i>
        </button>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white' : 'black'}}>
        <h2>your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters
        </p>

        <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Nothing to preview!'}</p>
      </div>
    </>
  );
}
