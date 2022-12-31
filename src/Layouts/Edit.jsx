import { CalendarMonth, EmojiEvents, Receipt } from "@mui/icons-material";
import React, { useState } from "react";
import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";

const Edit = () => {
  const [radio, setRadio] = useState("");
  const todo = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="formik">
      <div className="form-header">
        <h3>Edit Task</h3>
      </div>
      <Form method="post" className="create">
        <label>
          Task:
          <input type="text" defaultValue={todo.name} name="name" />
        </label>
        <label className="radioLabel">
          Category:
          <div className="radio">
            <label className="radioItem" for="receipt">
              <input
                type="radio"
                name="category"
                id="receipt"
                value="Receipt"
                onClick={(e) => setRadio(e.target.value)}
              />
              <span className={radio === "Receipt" ? "radioClicked" : ""}>
                <Receipt className="create-icon" fontSize="small" />{" "}
              </span>
            </label>
            <label className="radioItem" for="calendar">
              <input
                type="radio"
                name="category"
                id="calendar"
                value="CalendarMonth"
                onClick={(e) => setRadio(e.target.value)}
              />
              <span className={radio === "CalendarMonth" ? "radioClicked" : ""}>
                <CalendarMonth className="create-icon" fontSize="small" />{" "}
              </span>
            </label>
            <label className="radioItem" for="events">
              <input
                type="radio"
                name="category"
                id="events"
                value="EmojiEvents"
                onClick={(e) => setRadio(e.target.value)}
              />
              <span className={radio === "EmojiEvents" ? "radioClicked" : ""}>
                <EmojiEvents className="create-icon" fontSize="small" />{" "}
              </span>
            </label>
          </div>
        </label>
        <label>
          When:
          <div className="full-date">
            <input
              type="date"
              name="date"
              defaultValue={new Date(todo.date).toLocaleDateString("en-CA")}
            />
            <input type="time" defaultValue={todo.time} name="time" />
          </div>
        </label>
        <label>
          Details:
          <textarea defaultValue={todo.details} name="details" />
        </label>
        <div className="create-btn edit-cancel__btn">
          <button type="submit">Edit</button>
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </button>
        </div>
      </Form>
    </div>
  );
};
export const loader = async ({ params }) => {
  const response = await fetch("http://localhost:5000/tasks");
  const data = await response.json();
  let task = data.find((task) => task.id.toString() === params.taskId);
  return task;
};
export const action = async ({ request, params }) => {
  const response = await fetch(`http://localhost:5000/tasks/${params.taskId}`);
  const taskData = await response.json();
  let formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates);
  Object.assign(taskData, updates);
  await fetch(`http://localhost:5000/tasks/${params.taskId}`, {
    method: "PUT",
    body: JSON.stringify(taskData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect(`/`);
};

export default Edit;
