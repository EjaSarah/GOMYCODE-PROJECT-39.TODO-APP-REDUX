import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../redux/taskSlice";

interface TaskProps {
  id: number;
  description: string;
  isDone: boolean;
}

const Task: React.FC<TaskProps> = ({ id, description, isDone }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const handleToggle = () => {
    dispatch(toggleTask(id));
  };

  const handleEdit = () => {
    if (newDescription.trim()) {
      dispatch(editTask({ id, description: newDescription }));
      setIsEditing(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: isDone ? "line-through" : "none" }}
            onClick={handleToggle}
          >
            {description}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Task;
