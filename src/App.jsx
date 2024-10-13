import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signin from "./pages/Sign-in/Signin";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
     <Route path="/" element={<Signin/>}/>
     <Route element={<Sidebar/>}>
     <Route path="/dashboard" element={<Dashboard/>}/>
     <Route path="/account" element={<Account/>}/>
     </Route> 
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
