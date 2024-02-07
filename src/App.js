import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
// import About from './components/About.js';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setDarkMode] = useState('light'); // weather dark mode is enabled or not
  const [alert, setAlert] = useState(null); // to set state variable "alert"

  // converted alert into an object
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  const toggleMode = () => {
    if(mode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

      
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 2000);
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
    {/* <BrowserRouter> */}
        <Navbar title="TextUtils2" aboutText="TextAbouts" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          {/* <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/"
              element={ */}
                <TextForm showAlert={showAlert} heading="Enter Text to analyze " mode={mode} />
              {/* }> */}
            {/* </Route>
          </Routes> */}
        </div>
    {/* </BrowserRouter> */}

    </>
  );
}

export default App;
