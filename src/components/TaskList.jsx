import React from "react";

const TaskList = ({ tasks, onToggleTask, onRemoveTask }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ display: "flex", alignItems: "center" }}>
            <span className={task.completed ? "completed" : ""}>
              {task.text} {task.completed ? "✅" : "❌"}
            </span>
            <button
              className={
                task.completed
                  ? "toggle-button-completed"
                  : "toggle-button-uncompleted"
              }
              onClick={() => onToggleTask(task.id)}
              style={{ marginLeft: "30px" }}
            >
              {task.completed ? "Concluido" : "Incompleto"}
            </button>
            <button
              onClick={() => onRemoveTask(task.id)}
              style={{ marginLeft: "10px" }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
