import React from "react";
import { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [inputText, setInputText] = useState("");
  const handleAddClick = () => {
    if (inputText.trim() !== "") {
      onAddTask(inputText);
      setInputText("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddClick();
      console.log("Valor enviado:", inputText);
    }
  };

  return (
    <div className="task-input-container">
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          placeholder="Digite sua tarefa"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddClick}>Adicionar</button>
      </label>
    </div>
  );
};

export default TaskInput;
