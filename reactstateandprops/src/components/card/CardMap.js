import React from "react";

const CardMap = (props) => {
  return (
    <div>
      <h3>Mapping is being rendered...</h3>
      {props.card.map((item) => (
        <div className="bg-danger text-white text-center m-3" key={item.id}>
          <span>
            Sn:- {item.id}
            <br></br>
            Name:-{item.fullName}
            <br></br>Age:-{item.age}
          </span>
        </div>
      ))}
    </div>
  );
};
export default CardMap;
