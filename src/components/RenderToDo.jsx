import "../css/RenderToDo.css";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

function RenderToDo({ todo, removeToDo, completeToDo }) {
  return (
    <div
      className="todo-list-container"
      style={{
        textDecoration: todo.isCompleted ? "line-through" : "none",
        color: todo.isCompleted ? "green" : "var(--primary-color)",
      }}
    >
      <div className="todo-list-content">
        <p className="todo-list-content__text">Para fazer: {todo.text}</p>
        <p className="todo-list-content__category">
          Categoria: ({todo.category})
        </p>
        <div className="todo-list-content__description">
          <p>Descrição:</p>
          <div
            className="desc"
            dangerouslySetInnerHTML={{ __html: todo.description }}
          />
        </div>
      </div>{" "}
      <p className="todo-list-content__date">{todo.date}</p>
      <div className="todo-list-content__buttons-date">
        {" "}
        <button onClick={() => completeToDo(todo.id)} className="complete">
          <AiOutlineCheck />
        </button>
        <button onClick={() => removeToDo(todo.id)} className="delete">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default RenderToDo;
