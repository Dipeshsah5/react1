import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import Sdata from "./Sdata";

function ncard(val) {
  return (
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      link={val.link}
    />
  );
}
ReactDOM.render(
  <>
    <div className="main">
    {Sdata.map(ncard)}
    </div>
  </>,
  document.getElementById("root")
);
