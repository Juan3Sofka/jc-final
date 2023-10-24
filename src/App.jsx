// import './App.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./view/routes/routes";
import { TaskProvider } from "./view/context/tasks";

function App() {
  return (
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  );
}

export default App;
