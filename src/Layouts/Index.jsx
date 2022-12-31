import React, { useEffect } from "react";
import { getDate } from "../date";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import Receipt from "@mui/icons-material/Receipt";
import Checkbox from "./Checkbox";
import { CalendarMonth, EmojiEvents } from "@mui/icons-material";

const Index = () => {
  const tasks = useLoaderData();

  return (
    <div className="index-page">
      <div className="index-page__header">
        <p className="index-page__header--date">{getDate()}</p>
        <h1 className="index-page__header--heading">My Todo List</h1>
      </div>
      <div className="index-page__bottom">
        <div className="index-page__bottom--tasks">
          <div className="index-page__bottom--tasks__all">
            {tasks.length ? (
              <ul className="tasks-list">
                {tasks
                  .filter((task) => task.checked == false)
                  .map((task) => {
                    return (
                      <li key={task.id}>
                        <NavLink
                          to={`tasks/${task.id}`}
                          className={({ isActive, isPending }) =>
                            isActive ? "active" : isPending ? "pending" : ""
                          }
                        >
                          <div className="task-list__item">
                            <div className="task-list__item--left">
                              <div className="category">
                                {task.category === "Receipt" ? (
                                  <Receipt />
                                ) : false ||
                                  task.category === "CalendarMonth" ? (
                                  <CalendarMonth />
                                ) : false || task.category === "EmojiEvents" ? (
                                  <EmojiEvents />
                                ) : (
                                  false
                                )}
                              </div>
                            </div>
                            <div className="name__details">
                              <p className="name">{task.name}</p>
                              <p className="time">{task.time}</p>
                            </div>
                          </div>
                        </NavLink>
                        <Checkbox task={task} />
                      </li>
                    );
                  })}
              </ul>
            ) : (
              "Add Task"
            )}
          </div>
          <h3 className="index-page__completed--heading">Completed</h3>
          <div className="index-page__bottom--tasks__completed">
            {tasks.length ? (
              <ul className="tasks-list">
                {tasks
                  .filter((task) => task.checked == !false)
                  .map((task) => {
                    return (
                      <li key={task.id}>
                        <Link to={`/tasks/${task.id}/edit`}>
                          <div className="task-list__item disabled">
                            <div className="task-list__item--left">
                              <div className="category">
                                {task.category === "Receipt" ? (
                                  <Receipt />
                                ) : false ||
                                  task.category === "CalendarMonth" ? (
                                  <CalendarMonth />
                                ) : false || task.category === "EmojiEvents" ? (
                                  <EmojiEvents />
                                ) : (
                                  false
                                )}
                              </div>
                            </div>
                            <div className="name__details">
                              <p className="name">{task.name}</p>
                              <p className="time">{task.time}</p>
                            </div>
                          </div>
                        </Link>
                        <Checkbox task={task} />
                      </li>
                    );
                  })}
              </ul>
            ) : (
              "Add Task"
            )}
          </div>
        </div>
        <Link to="tasks/create">
          <button className="index-page__button">Add New Task</button>
        </Link>
      </div>
    </div>
  );
};

export const loader = async () => {
  const response = await fetch("http://localhost:5000/tasks");
  const data = await response.json();
  return data;
};

export default Index;
