import React, { useState } from "react";
import {
  Receipt,
  CalendarMonth,
  EmojiEvents,
  EmojiFlags,
  Cancel,
} from "@mui/icons-material";
import { redirect, useNavigate, Form } from "react-router-dom";
import { getNewDate } from "../date";

const Create = () => {
  const [radio, setRadio] = useState("");
  const { date, time } = getNewDate();

  const navigate = useNavigate();
  return (
    <div className="formik">
      <div className="form-header">
        <Cancel
          style={{ color: "#fff" }}
          className="icon"
          onClick={() => navigate(-1)}
        />
        <h3>Add New Task</h3>
      </div>
      <Form className="create" method="post">
        <label>
          Task:
          <input type="text" placeholder="task" name="name" />
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
            <input type="date" defaultValue={date} name="date" />
            <input type="time" defaultValue={time} name="time" />
          </div>
        </label>
        <label>
          Details:
          <textarea
            name="details"
            placeholder="Add your details here"
            defaultValue=""
          />
        </label>
        <button className="create-btn">Save</button>
      </Form>
    </div>
  );
};
export async function action({ request }) {
  const formData = await request.formData();
  const newTask = Object.fromEntries(formData);
  const id_checked = {
    id: crypto.randomUUID(),
    checked: false,
  };
  Object.assign(newTask, id_checked);
  await fetch(`http://localhost:5000/tasks`, {
    method: "POST",
    body: JSON.stringify(newTask),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect(`/`);
}
// const object = {
//   id: 2,
//   name: "Task 2",
//   category: "image2.jpg",
//   time: "12:00",
//   date: "12/09/2023",
//   details: "Details for task 2",
//   checked: true,
// };
// let formData = await request.formData();
//   const updates = Object.fromEntries(formData);
//   Object.assign(taskData, updates);
//   await fetch(`http://localhost:5000/tasks/${params.taskId}`, {
//     method: "PUT",
//     body: JSON.stringify(taskData),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
export default Create;
