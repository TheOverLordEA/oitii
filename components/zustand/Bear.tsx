"use client";

import React from "react";
import useStore from "../../stores/useStore";

const TaskList = () => {
  const { tasks, addTask } = useStore();

  const handleAddTask = () => {
    const newTask = { id: "1", title: "Buy fruits", status: "pending" };
    addTask(newTask);
  };

  return (
    <div>
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
