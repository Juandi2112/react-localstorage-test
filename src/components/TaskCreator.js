import { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    props.createNewTask(newTaskName)
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSumbit} className="my-2 row">
      <div className="col-9">
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        className="form-control"
      />
      </div>
      <div className="col-3">
      <button className="btn btn-primary btn-sm">Save Task</button>
      </div>
    </form>
  );
};
