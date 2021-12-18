import React from "react";
import langContext from "./context/LangContext";
import MainSection from "./MainSection";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { languages: "JavaScript" };
  }

  handleToggle() {
    this.setState({
      languages:
        this.state.languages === "JavaScript" ? "Python" : "JavaScript",
    });
  }

  render() {
    return (
      <langContext.Provider
        value={{
          languages: this.state.languages,
          handleToggle: this.handleToggle.bind(this),
        }}
      >
        <MainSection />
      </langContext.Provider>
    );
  }
}

export default App;
