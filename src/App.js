import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Layouts/root';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Root/>
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
