import React from "react";

const Mainpanel = props => {
  console.log(props.display);
  return (
    <div className="main-panel">
      {props.display && <img src={props.display.picture.large} />}
    </div>
  );
};

export default Mainpanel;
