import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AddTask from "./components/addTask";
import MyTask from "./components/MyTask";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CaseTimeline from "./components/CaseTimeline";
import UserTimeline from "./components/UserTimeline";

function App() {
  return (
    <div className="App">
      <div className="addTaskContainer">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addtask" element={<AddTask />} />
          <Route exact path="/mytask" element={<MyTask />} />
          <Route exact path="/caseTimeline" element={<CaseTimeline />} />
          <Route exact path="/userTimeline" element={<UserTimeline />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
