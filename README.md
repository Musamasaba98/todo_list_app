## Creating a TODO LIST project using react with react-routerv6.4

I'm trying to learn the new react router version 6.6. It gives elements or formerly components super power to work with data using new data routers.
#### New Data Routers include
- createBrowserRouter 
- createHashRouter 
- createMemoryRouter 
- RouterProvider 

These allow elements to get data through the lorder functions and manipulate the data using action function. I call this super power functionality of react-router. Saving us from the pain of droping hooks everywhere👌👌👌

### Follow me up as I get this running
First and foremost I created project using create react app and cleared up some files and my folder structure looked like
```
src
   |---index.css
   |---app.css
   |---app.js
   |---index.js
```   
I created a folder called Layouts that is going to contain the global layout file(root.jsx) with other layout files of our todo app called root at path "src/Layouts/root.jsx and it looked like:-

```
src
   |📁-Layout
       |--root.jsx
   |---index.css
   |---app.css
   |---app.js
   |---index.js
``` 
Well the app.js file is our entry point where we are going to create our browser router using createBrowserRouter function. We pass all our router objects to the RouterProvider component to render our app and enable our components as shown below

```
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
```
U may be wondering what really happened to the BrowserRouter that was used in the recent versions😃. The thing is, you can still use the BrowserRouter but you won't be able to use the v6.4 data APIs like loaders,actions,fetches and more.

### QUESTION: Is that the only way we can create routes💁

Not really, the first style is when we pass our routes as objects to the router creation function(createBrowserRouter).

**NOTE:You can also declare routes using createRoutesFromElements function where we pass props to the <Route> element and there the same as the properties of the route objects, in that case the router in our app.js will look like this👇
```
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<Root />}
      path="/"
    />
  )
);
```
Since we are going to work with data, I created db.json file that contains my todo task that looks like;
```
{
  "tasks": [
    { "id": 1, "name": "Task 1", "image": "image1.jpg", "details": "Details for task 1", "checked": false },
    ......more_tasks
    ]
 }   
```
I installed a json-server package that helped me to start a mock API sever and make the data from my file available at **http://localhost:3000**

After setting all the pre-requisites for my project, lets give this a deep dive😠
