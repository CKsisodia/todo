import React, { useState } from "react";

const EditPage = (props) => {
  const toDo = props.editedTodo;
  const title = toDo.title;
  const createdBy = toDo.createdBy;
  const [newTitle, setNewTitle] = useState(title);
  const [newCreatedBy, setNewCreatedBy] = useState(createdBy);

  const newEditedTitleChangeHandler = (e) => {
    e.preventDefault();

    setNewTitle(e.target.value);
    console.log(e.target.value);
  };
  const newEditedCreatedByChangeHandler = (e) => {
    e.preventDefault();
    setNewCreatedBy(e.target.value);
    console.log(e.target.value);
  };

  const updateButtonClickHandler = (e) => {
    e.preventDefault();
    const updatedToDo = {
      id: toDo.id,
      title: newTitle,
      createdBy: newCreatedBy,
    };
    props.updatedToDo(updatedToDo);
    console.log(updatedToDo);
    setNewTitle("");
    setNewCreatedBy("");
  };
  const cancelButtonClickHandler = (e) => {
    e.preventDefault();
    const updatedToDo = {
      id: toDo.id,
      title: toDo.title,
      createdBy: toDo.createdBy,
    };
    props.updatedToDo(updatedToDo);
    console.log(updatedToDo);
    setNewTitle("");
    setNewCreatedBy("");
  };

  return (
    <div>
      <label style={{ margin: "15px", padding: "5px" }} htmlFor="newTitle">
        New Title
      </label>
      <input
        style={{ margin: "15px", padding: "5px" }}
        id="newTitle"
        onChange={newEditedTitleChangeHandler}
        value={newTitle}
      ></input>
      <br />
      <label style={{ margin: "15px", padding: "5px" }} htmlFor="newcreatedby">
        New CreatedBy
      </label>
      <input
        style={{ margin: "15px", padding: "5px" }}
        id="newcreatedby"
        onChange={newEditedCreatedByChangeHandler}
        value={newCreatedBy}
      ></input>
      <br />
      <button type="submit" onClick={updateButtonClickHandler}>
        Update
      </button>
      <button type="submit" onClick={cancelButtonClickHandler}>
        Cancel
      </button>
    </div>
  );
};

export default EditPage;
