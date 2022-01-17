// import { waitForElementToBeRemoved } from "@testing-library/react";
import React, { useState } from "react";

export default function Textbox(props) {
  const handleUpCase = () => {
    if (text === "") {
      props.showAlert("Text cannot be empty", "Warning");
    }
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDnCase = () => {
    if (text === "") {
      props.showAlert("Text cannot be empty", "Warning");
    }
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClt = () => {
    if (text === "") {
      props.showAlert("Text cannot be empty", "Warning");
    }
    let newText = "";
    setText(newText);
  };
  const handOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div className="mb-3">
          <h1 className="heading my-3">{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handOnChange}
            id="MyBox"
            rows="5"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#2e2d2d",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length===0}
          className={`btn btn-${props.mode} border border-${
            props.mode === "light" ? "dark" : "light"
          } mx-1 my-1`}
          onClick={handleUpCase}
        >
          Convert to Upper Case
        </button>
        <button
          disabled={text.length===0}
          className={`btn btn-${props.mode} border border-${
            props.mode === "light" ? "dark" : "light"
          } mx-1 my-1`}
          onClick={handleDnCase}
        >
          Convert to lower Case
        </button>
        <button
          disabled={text.length===0}
          className={`btn btn-${props.mode} border border-${
            props.mode === "light" ? "dark" : "light"
          } mx-1 my-1`}
          onClick={handleClt}
        >
          Clear Text
        </button>
        <div className="summary">
          <h2>Your Text Summary</h2>
          <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words</p>
          <p>{text.length} characters</p>
        </div>
      </div>
    </>
  );
}
