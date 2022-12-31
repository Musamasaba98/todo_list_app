import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index, { loader as cardsLoader } from './Layouts/Index';
import Task, { loader as taskLoader, action as taskAction } from './Layouts/Task'
import Root from './Layouts/root';
import './App.css'
import Create, { action as createAction } from './Layouts/Create';
import Edit, { action as editAction, loader as editLoader } from './Layouts/Edit';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: cardsLoader,
      },
      {
        path: "/tasks/create",
        element: <Create />,
        action: createAction
      },
      {
        path: "tasks/:taskId",
        element: <Task />,
        loader: taskLoader,
        action: taskAction,
      },
      {
        path: 'tasks/:taskId/edit',
        element: <Edit />,
        loader: editLoader,
        action: editAction,
      }

    ]
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
