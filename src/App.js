// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textbox from "./Components/Textbox";
import Alert from "./Components/Alert";
import About from "./Components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#b8b9b9";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Text Mod- dark mode";
      // setInterval(() => {
      // document.title = 'Text Mod is the future';
      // }, 2000);
      // setInterval(() => {
      // document.title = 'Install Text Mod today';
      // }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
      <Router>
      <Navbar title="Text Mod" mode={mode} togglemode={togglemode} Home="Home"/>
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
              <Textbox
              heading="Enter your text here"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
        </Switch>
      </div>
      </Router>
      {/* <div className="About">
      <About mode={mode}></About>
      </div> */}
    </>
  );
}

export default App;
