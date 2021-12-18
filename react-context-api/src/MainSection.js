import React from "react";
import langContext from "./context/LangContext";

class MainSection extends React.Component {
  render() {
    return (
      <langContext.Consumer>
        {({ languages, handleToggle }) => (
          <div>
            <p id="favoriteLanguage">
              Favorite programing language: {languages}
            </p>
            <button id="changeFavorite" onClick={handleToggle}>
              Toggle language
            </button>
          </div>
        )}
      </langContext.Consumer>
    );
  }
}

export default MainSection;
