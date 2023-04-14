import React, { useState } from "react";

const Form = () => {
  const [initialValue, setValue] = useState("");
  const [initialCountry, setCountry] = useState("");
  const [initialTextArea, setTextArea] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleTextArea = (e) => {
    setTextArea(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Username is ${initialValue} : ${initialTextArea} : ${initialCountry}`
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={initialValue}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="description">Comments: </label>
        <textarea
          name="description"
          id=""
          cols="10"
          rows="10"
          value={initialTextArea}
          onChange={handleTextArea}
        ></textarea>
        <select name="country" id="" onChange={handleCountry}>
          <option value="none" selected disabled hidden>
            Select an Option
          </option>
          <option value="India">India</option>
          <option value="Canada">Canada</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
