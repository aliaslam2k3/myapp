import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClink = ()=> {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toLocaleUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","success");
  }

  const handleLowClink = ()=> {
    // console.log("Lowercase was clicked: " + text);
    let newText = text.toLocaleLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!","success");
  }
  

  // whenever the value changes in the textbox, the function will run and setText will be updated with the new value in textbox
  const handleOnChange = (event)=>{
    // console.log("On change")
    setText(event.target.value)
  }


  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Coppied!","success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed!","success");
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent === "Speak") {
        toogle.innerHTML = "Stop"
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML === "Speak"){
            window.speechSynthesis.cancel()
        }
    }
}

// (REACT HOOK) text is a state variable which will store "Enter text here" as a default value and whenever i will update it i will do it with the setText function
const [text, setText] = useState('Enter text here');
// text = "new text"; // Wrong way to update variable value
// setText("New Text"); // Correct way to change variable value
  return (
    <>
    <div className="my-4">
        <h3 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClink}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLowClink}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2" id="toggle">Speak</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } Minutes Reading</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
