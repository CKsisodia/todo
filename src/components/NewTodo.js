import React, { useState } from "react";

const NewTodo = (props) => {
  const [title, setTitle] = useState("Goldie");
  const [createdBy, setCreatedBy] = useState("lodu");

  const titleChangeHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const createdByChangeHandler = (e) => {
    e.preventDefault();
    setCreatedBy(e.target.value);
  };
  const submitButtonClickHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(1000 * Math.random()),
      title: title,
      createdBy: createdBy,
    };
    props.newToDoCreated(newTodo);
    console.log(newTodo);
    setTitle("");
    setCreatedBy("");
  };

  return (
    <div>
      <label style={{ margin: "15px", padding: "5px" }} htmlFor="title">
        Title
      </label>
      <input
        style={{ margin: "15px", padding: "5px" }}
        id="title"
        onChange={titleChangeHandler}
        value={title}
      ></input>
      <br />
      <label style={{ margin: "15px", padding: "5px" }} htmlFor="createdby">
        CreatedBy
      </label>
      <input
        style={{ margin: "15px", padding: "5px" }}
        id="createdby"
        onChange={createdByChangeHandler}
        value={createdBy}
      ></input>
      <br />
      <button type="submit" onClick={submitButtonClickHandler}>
        Submit
      </button>
    </div>
  );
};

export default NewTodo;
