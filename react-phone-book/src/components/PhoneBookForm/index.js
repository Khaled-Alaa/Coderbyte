import style from "./styles.js";

function PhoneBookForm({ addEntryToPhoneBook }) {
  const handleAddUser = (event) => {
    event.preventDefault();
    addEntryToPhoneBook({
      firstName: event.target.elements.userFirstname.value,
      lastName: event.target.elements.userLastname.value,
      phone: event.target.elements.userPhone.value,
    });
  };

  return (
    <form onSubmit={handleAddUser} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

export default PhoneBookForm;
