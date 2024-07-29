import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

function Timeline(timeline) {
  const my_iconStyle = {
    background: "rgb(130, 139, 178)",
    color: "#fff",
    width: "40px",
    height: "40px",
  };
  const timelineItems = timeline.timeline;
  console.log(timelineItems);
  return (
    <VerticalTimeline>
      {timelineItems.map((entry) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={entry.date}
          iconStyle={my_iconStyle}
        >
          <h3 className="vertical-timeline-element-title">{entry.title}</h3>
          <h2 className="vertical-timeline-element-subtitle">
            {entry.subtitle}
          </h2>
          <p>{entry.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default Timeline;
