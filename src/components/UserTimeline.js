import React from "react";
import Timeline from "./Timeline";

function UserTimeline() {
  const timelineItems = [
    {
      date: "2022-01-01",
      title: "New user created.",
      subtitle: "User1",
      description: "New account created for User1. Title: Analyst",
    },
    {
      date: "2022-01-02",
      title: "User login",
    },
    {
      date: "2022-01-15",
      title: "Uploaded new file",
      subtitle: "agreement.pdf",
      description: "Uploading sale agreement for case:1234",
    },
  ];

  return (
    <div className="w-100">
      <Timeline timeline={timelineItems} />
    </div>
  );
}

export default UserTimeline;
