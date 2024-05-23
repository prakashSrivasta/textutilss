import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  setTimeout(() => {
    setAlert(null);
  }, 3000);

  const removeClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
  }
  
  const toggleMode = (cls) => {
    console.log(cls);
    removeClasses();

    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing now";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    <Router>
      {/* <Navbar title="TextUtils" aboutText="About Text"/> */}
      {/* <Navbar /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          {/* /users ---> Component 1
          /users.home ---> Component 2 */}
          <Route path="/about"  element={<About mode={mode}/>} />
          <Route path="/" element={ 
          <TextForm
          showAlert={showAlert}
          heading="Try Textutils - Word Counter, Character Counter, Remove extra spaces "
          mode={mode}
          toggleMode={toggleMode}
        /> 
         }
         />
        </Routes>    
      </div>
    </Router>
    </>
  );
}
export default App;
