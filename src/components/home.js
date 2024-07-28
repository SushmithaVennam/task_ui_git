import React from "react";

function Home() {
  return (
    <div>
      <ul>
        <li>
          <a href="./addTask">Add Task</a>
        </li>
        <li>
          <a href="./MyTask">My Tasks</a>
        </li>
        <li>
          <a href="./CaseTimeline">Case Timeline</a>
        </li>
        <li>
          <a href="./UserTimeline">User Timeline</a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
