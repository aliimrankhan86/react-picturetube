import React from "react";

const Mainpanel = props => {
  console.log(props.display);
  return (
    <div className="main-panel">
      {props.display && (
        <div>
          <h2>{props.display.name.first}</h2>
          <img src={props.display.picture.large} />
        </div>
      )}
    </div>
  );
};

export default Mainpanel;
