// App.js
import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  const btnMode = (newMode) => {
    setMode(newMode);
    document.body.style.backgroundColor = newMode;
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          btnMode={btnMode}
        />
        <Alert alert={alert} />
        <Routes>
{/*   /users --> component 1
      /users/home --> --> component 2 */}


          <Route exact path="/about" element={<div className="container my-3"><About /></div>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to analyze " mode={mode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
