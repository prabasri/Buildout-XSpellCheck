import React, { useState } from "react";

export default function SpellCheck() {

  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  }

  const handleChange = (e) => {
    setInputText(e.target.value);

    let enteredWords = inputText.split(" ");

    let correctedWords = enteredWords.map((word) => {
      let correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;   // create an array of corrected words and if there is no correction, return that word itself
    })
    // let correctedText = correctedWords.join(" ");

    const firsCorrection = correctedWords.find((word, index) => word !== enteredWords[index]); // find will return first corrected one
    setSuggestedText(firsCorrection || ""); // suggestion for the first word needed to be corrected.
  }


  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea onChange={(e) => handleChange(e)} value={inputText} placeholder="Enter text..." rows={5} cols={40}/>
      {suggestedText && <p>Did you mean: <strong>{suggestedText}</strong>?</p>}
    </div>
  )
}