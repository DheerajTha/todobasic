import React, { useState } from "react";

const StateEvent = () => {
  const [Count, setCount] = useState([
    { name: "Alice", age: 25 },
    { name: "bob", age: 22 },
    { name: "rohan", age: 35 },
    { name: "naved", age: 30 },
    { name: "vasim", age: 40 },
  ]);

  const userCount = Count.length;
  const average = Count.reduce((preview, cur) => preview + cur.age) / userCount;

//   console.log("preview", preview);
//   console.log("cur", cur);
//   console.log("avrage", avrage);

  return (
    <>
      <div>
        {Count.map((curElem, index) => {
          return (
            <>
              {" "}
              <div key={index}>
                <h3> {curElem.name} </h3>
                <p>{curElem.age}</p>
        <p>Average Age: {average.toFixed(2)}</p>
              </div>
            </>
          );
        })}
        <p>userCount :{userCount}</p>
      </div>
    </>
  );
};

export default StateEvent;
