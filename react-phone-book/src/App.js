import React, { useState } from "react";

import PhoneBookForm from "./components/PhoneBookForm";
import InformationTable from "./components/InformationTable";

import "./App.css";

function App(props) {
  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    const cloneUsers = [...users];
    cloneUsers.push(user);
    cloneUsers.sort((a, b) =>
      a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0
    );
    setUsers(cloneUsers);
  };
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addUser} />
      <InformationTable users={users} />
    </section>
  );
}

export default App;
