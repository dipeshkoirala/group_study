import React, { useState } from "react";

const CardAddForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.addNewCard(formData);
    setFormData({ name: "", age: "" });
  };
  return (
    <div className="dk bg-danger text-blue text-left m-3">
      component is rendering
      <form className="addPeople" onSubmit={submitForm}>
        <label htmlFor="Name">
          <strong>FullName:</strong>
        </label>
        <input
          type="text"
          placeholder="FullName"
          name="fullName"
          onChange={handleChange}
        />

        <label htmlFor="Name">
          <strong>Age:</strong>
        </label>
        <input
          type="text"
          placeholder="Age"
          name="age"
          onChange={handleChange}
        />
        <button className="btn btn-secondary m-2">Add</button>
      </form>
    </div>
  );
};
export default CardAddForm;
