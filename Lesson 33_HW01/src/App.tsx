import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Users from './components/Users/Users';
import Albums from './components/Albums/Albums';
import Photos from './components/Photos/Photos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users/>,
  },
  {
    path: "/albums/:userId",
    element: <Albums/>,
  },
  {
    path: "/photos/:albumId",
    element:  <Photos/>,
  },  
]);

function App() {

  return (
    <div className="App">
         <RouterProvider router={router} />
    </div>
  )
}

export default App
