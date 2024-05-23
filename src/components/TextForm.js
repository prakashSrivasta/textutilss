import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text", "success");
  };
  

  const handleSentenceCase = () => {
    const newText = text
    .toLowerCase()
    .split(". ")
    .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
    .join(". ");
    setText(newText);    
    props.showAlert("Became Sentences", "success")
  };

  const handleCopy = () => {
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copy to Clipboard", "success")
  };

  const handleExtraSpaces = () => {
    let extraSpaceText = text.split(/[ ]+/);
    setText(extraSpaceText.join(" "));
    props.showAlert("Remove extra spaces", "success")
  };

  const handleOnChange = (event) => {
    // console.log("On change was clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  const countWords = (text) => {
    return text.split(/\s+/).filter((word) => word.length > 0).length;
  };

  // const one  = (text) => {
  //   const wordArray = text.split(" ");
  //   console.log("wordArray", wordArray);
  //   console.log("Array", wordArray.length);
  //   const filterWord = wordArray.filter((word) => word.length > 0);
  //   console.log("filterWord", filterWord);
  //   console.log("Word", filterWord.length);
  //   return filterWord.length;
  // }
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2 className="mb-4">{props.heading}</h2>
        <div className="my-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter the text here"
            rows="10"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleSentenceCase}
        >
          Convert to Sentence Case
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleClearText}
        >
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text here</h2>
        <p>
          {countWords(text)} words and {text.length} Characters
        </p>
        <p>{0.008 * countWords(text)} Minutes read.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Not to preview"}</p>
      </div>
    </>
  );
}
