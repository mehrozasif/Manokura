import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/Styles/style.scss";
import "./assets/Styles/media.scss";
import "./assets/Styles/animations.css";
import React from "react";
import { Landing } from "./components/Landing";
const App = () => {
  return (
    <React.Fragment>
      <Landing />
    </React.Fragment>
  );
};
export default App;
