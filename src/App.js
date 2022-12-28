import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index, { loader as cardsLoader } from './Layouts/Index';
import Root from './Layouts/root';
import './App.css'


const router = createBrowserRouter([
  {
    index: true,
    element: <Index />,
    loader: cardsLoader,
  },
  {
    path: "/",
    element: <Root />
  },
  {
    path: "tasks/:taskId",
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
