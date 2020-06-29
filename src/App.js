import React, { useState, useEffect } from "react";
import "./styles.css";
import Rightpanel from "./Rightpanel";
import Mainpanel from "./Mainpanel";

const App = () => {
  const [data, setdata] = useState(null);
  const [obj, setobj] = useState(null);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then(res => res.json())
      .then(newdata => setdata(newdata.results));
  }, []);

  const getobj = obj => {
    const filterobj = data.filter(
      (objs, index) => objs.name.first === obj.name.first
    );
    setobj(filterobj[0]);
  };

  return (
    <div className="App">
      <h1>PictureTube</h1>
      <div className="container">
        <Mainpanel display={obj} />
        <Rightpanel persons={data} getobj={getobj} />
      </div>
    </div>
  );
};

export default App;
