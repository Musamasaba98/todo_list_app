import React from "react";
import { Link, redirect, useLoaderData, useNavigate } from "react-router-dom";
import {
  CalendarMonth,
  Cancel,
  EmojiEvents,
  Receipt,
} from "@mui/icons-material";

const Task = () => {
  const task = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <div className="formik">
        <div className="form-header">
          <Cancel
            style={{ color: "#fff" }}
            className="icon"
            onClick={() => navigate("/")}
          />
          <h3>My Task</h3>
        </div>
        <div className="my-task__card">
          <div className="my-task__card--header">
            <h2 className="task-heading__name">{task.name}</h2>
            {task.category === "Receipt" ? (
              <Receipt />
            ) : false || task.category === "CalendarMonth" ? (
              <CalendarMonth />
            ) : false || task.category === "EmojiEvents" ? (
              <EmojiEvents />
            ) : (
              false
            )}
          </div>
          <p>Time: {task.time}</p>
          <p>Date: {task.date}</p>
          <h4 className="task-details">Details</h4>
          <p>{task.details}</p>
          <input type="checkbox" checked={task.checked} />
        </div>
        <Link to={`/tasks/${task.id}/edit`}>
          <button className="create-btn task-btn">Edit</button>
        </Link>
      </div>
    </div>
  );
};
export const loader = async ({ params }) => {
  const response = await fetch("http://localhost:5000/tasks");
  const data = await response.json();
  const task = await data.find(({ id }) => id == params.taskId);
  return task;
};
export async function action({ request, params }) {
  let formData = await request.formData();
  console.log(formData);
  return null;
}
export default Task;
