import React from "react";

const Rightpanel = props => {
  return (
    <div className="right-panel">
      {props.persons &&
        props.persons.map((person, index) => {
          return (
            <div key={person.email}>
              <p>{person.name.first}</p>
              <div>
                <img
                  src={person.picture.thumbnail}
                  alt={person.name.first}
                  onClick={() => props.getobj(person)}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Rightpanel;
