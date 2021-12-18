import React, { useState } from "react";

const langContext = React.createContext({
  languages: "",
  handleToggle: () => {},
});

export default langContext;
