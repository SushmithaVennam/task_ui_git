import React from "react";
import Timeline from "./Timeline";

function CaseTimeline() {
  const timelineItems = [
    {
      date: "2024-01-01",
      title: "Created New Case 1234.",
      subtitle: "John vs Doe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      date: "2024-01-02",
      title: "Case assigned to John Doe.",
      subtitle: "",
      description: "",
    },
    {
      date: "2024-01-15",
      title: "Case hearing",
      subtitle: "",
      description: "Outcome: next hearing 2024-02-15",
    },
  ];

  return (
    <div>
      <Timeline timeline={timelineItems} />
    </div>
  );
}

export default CaseTimeline;
