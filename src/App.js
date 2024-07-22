import { Routes, Route } from "react-router-dom";
import AddTask from "./components/addTask";
import MyTask from "./components/MyTask";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="addTaskContainer">
        <Routes>
          <Route exact path="/addtask" element={<AddTask />} />
          <Route exact path="/mytask" element={<MyTask />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
