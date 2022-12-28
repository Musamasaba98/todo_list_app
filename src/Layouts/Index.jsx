import React from "react";
import { getDate } from "../date";
import Card from "./Card";
import { NavLink, useLoaderData } from "react-router-dom";

const Index = () => {
  const cards = useLoaderData();
  return (
    <div className="index-page">
      <div className="index-page__header">
        <p className="index-page__header--date">{getDate()}</p>
        <h1 className="index-page__header--heading">My Todo List</h1>
      </div>
      <div className="index-page__bottom">
        <div className="index-page__bottom--tasks">
          <div className="index-page__bottom--tasks__all">
            {cards.length ? (
              <ul className="cards-list">
                {cards.map((card) => {
                  return (
                    <li key={card.id}>
                      <NavLink
                        to={`cards/${card.id}`}
                        className={({ isActive, isPending }) =>
                          isActive ? "active" : isPending ? "pending" : ""
                        }
                      >
                        <div className="card-list__item"></div>
                        {card.name}
                      </NavLink>{" "}
                    </li>
                  );
                })}
              </ul>
            ) : (
              "Add Task"
            )}
          </div>
          <h3 className="index-page__completed--heading">Completed</h3>
          <div className="index-page__bottom--tasks__completed index-page__bottom--tasks__css">
            <Card />
          </div>
        </div>
        <button className="index-page__button">Add New Task</button>
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
