import React from "react";
import data from "../config/members.yaml";
import { object } from "prop-types";
import NavigationBar from "../components/Navigationbar";
import Footer from "../components/Footer";

const Team = () => {
  return (
    <div>
      <NavigationBar />
      {Object.keys(data.members).map((key, id) => (
        <ul key={id}>
          <li>{data.members[key].name}</li>
          <li>{data.members[key].work}</li>
          <li>{data.members[key].position}</li>
        </ul>
      ))}
      <Footer />
    </div>
  );
};

export default Team;
