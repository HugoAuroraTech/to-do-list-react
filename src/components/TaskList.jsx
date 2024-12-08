import React from "react";

const TaskList = ({ tasks, onToggleTask, onRemoveTask }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ display: "flex", alignItems: "center" }}>
            <span
              onClick={() => onToggleTask(task.id)}
              className={task.completed ? "completed" : ""}
            >
              {task.text} {task.completed ? "✅" : "❌"}
            </span>
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
