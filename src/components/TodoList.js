import React, { useState } from "react";
import EditPage from "./EditPage";
import NewTodo from "./NewTodo";
import "./TodoList.css";

const DummyToDo = [
  {
    id: 1,
    title: "Task 1",
    createdBy: "People 1",
  },
  {
    id: 2,
    title: "Task 2",
    createdBy: "People 2",
  },
  {
    id: 3,
    title: "Task 3",
    createdBy: "People 3",
  },
  {
    id: 4,
    title: "Task 4",
    createdBy: "People 4",
  },
  {
    id: 5,
    title: "Task 5",
    createdBy: "People 5",
  },
];

const TodoList = () => {
  const [toDoList, setToDoList] = useState(DummyToDo);
  const [editedTodo, setEditedTodo] = useState(null);

  const deleteButtonClickHandler = (id) => {
    console.log(id);
    const newToDoList = toDoList;
    const updatedToDo = newToDoList.filter((todo) => todo.id !== id);
    console.log(updatedToDo);
    setToDoList(updatedToDo);
  };

  const newToDoCreated = (todo) => {
    let newToDoList = [...toDoList];
    newToDoList.push(todo);
    setToDoList(newToDoList);
  };

  const initializeEditFunctionality = (id) => {
    const newToDoList = [...toDoList];
    const toDoObj = newToDoList.filter((todo) => todo.id === id);
    setEditedTodo(toDoObj[0]);
    console.log(toDoObj);
    console.log(toDoObj[0]);
  };

  const updatedToDo = (newToDo) => {
    const newToDoList = [...toDoList];
    const id = newToDo.id;
    const objIdx = newToDoList.findIndex((todo) => todo.id === id);
    console.log(objIdx);
    newToDoList[objIdx] = {
      id: id,
      title: newToDo.title,
      createdBy: newToDo.createdBy,
    };
    console.log(newToDoList);
    setToDoList(newToDoList);
    setEditedTodo(null);
  };

  return (
    <div className="todolist-addtodo-edittodo">
      <div className="newToDo">
        <NewTodo newToDoCreated={newToDoCreated} />
      </div>
      <div className="editedtodo">
        {editedTodo !== null && (
          <EditPage editedTodo={editedTodo} updatedToDo={updatedToDo} />
        )}
      </div>
      <div className="to-do-list" style={{ margin: "25px", padding: "15px" }}>
        {toDoList.map((todo) => (
          <div key={todo.id}>
            <span style={{ margin: "15px", padding: "5px" }}>{todo.title}</span>
            <span style={{ margin: "15px", padding: "5px" }}>
              {todo.createdBy}
            </span>
            <button onClick={() => deleteButtonClickHandler(todo.id)}>
              Delete
            </button>
            <button onClick={() => initializeEditFunctionality(todo.id)}>
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
