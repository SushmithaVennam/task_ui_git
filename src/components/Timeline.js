import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline(timeline) {
  const my_iconStyle = { background: "rgb(33, 150, 243)", color: "#fff" };
  const timelineItems = timeline.timeline;
  console.log(timelineItems);
  return (
    <VerticalTimeline
      className="border" //layout="1-column-left"
    >
      {timelineItems.map((entry) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date={entry.date}
          iconStyle={my_iconStyle}
          // icon={<WorkIcon />}
          // position="right"
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
