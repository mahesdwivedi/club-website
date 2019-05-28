import React, { Component } from "react";
import data from "../../config/timeline.yaml";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "./timeline.css";
import StarIcon from "@material-ui/icons/Star";
import Timeline from "@material-ui/icons/Timeline";
import Typography from "@material-ui/core/Typography";

const styles = {
  width: `100%`
};

const headingText = {
  fontFamily: `Courier New`,
  fontSize: `36px`,
  marginTop: `5%`,
  color: "#A9A9A9"
};

const hrStyle = {
  width: `20%`,
  color: `black`,
  height: `2px`,
  marginBottom: `3%`,
  marginTop: `0%`
};

const innerPara = {
  fontSize: `16px`,
  fontFamily: `Lato`,
  marginBottom: `5%`,
  lineHeight: `2`
};

const section = {
  marginBottom: `10%`
};

class TimeLine extends Component {
  render() {
    return (
      <div>
        <Typography
          component="h2"
          align="center"
          variant="h5"
          gutterBottom
          style={headingText}
        >
          TIMELINE
        </Typography>
        <hr style={hrStyle} />
        <div style={{ "background-color": "rgb(232, 245, 252)" }}>
          <VerticalTimeline>
            {Object.keys(data.content).map((key, id) => (
              <VerticalTimelineElement
                key={id}
                className="vertical-timeline-element--work"
                date={data.content[key].date}
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "white"
                }}
                icon={<Timeline />}
              >
                <h3 classname="vertical-timeline-element-title">
                  {data.content[key].head}
                </h3>
                <p>{data.content[key].body}</p>
              </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<StarIcon />}
            />
          </VerticalTimeline>
        </div>
      </div>
    );
  }
}
export default TimeLine;
