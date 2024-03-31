import React, { useEffect, useState } from "react";

export default function SpellCheck() {

  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  }

  useEffect(() => {
    handleChange(); // Don't invoke this inside onChange handler because, it will lead to one letter delay in entered text for inputText
  }, [inputText])

  const handleChange = () => {

    // setInputText(e.target.value);    // Read the above comment and don't do like this because it takes time delay
    let enteredWords = inputText.split(" ");
    console.log(enteredWords);

    let correctedWords = enteredWords.map((word) => {
      let correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;   // create an array of corrected words and if there is no correction, return that word itself
    })
    // let correctedText = correctedWords.join(" ");

    const firsCorrection = correctedWords.find((word, index) => word !== enteredWords[index]); // find will return first corrected one
    setSuggestedText(firsCorrection || ""); // suggestion for the first word needed to be corrected.
    console.log(suggestedText);
  }


  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea onChange={(e) => setInputText(e.target.value)} value={inputText} placeholder="Enter text..." rows={5} cols={40}/>
      {suggestedText && <p>Did you mean: <strong>{suggestedText}</strong>?</p>}
    </div>
  )
}