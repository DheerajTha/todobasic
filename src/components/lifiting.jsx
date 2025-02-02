import React, { useState } from "react";

const Lifiting = () => {

    const [input, setinput] = useState("");

  return (
    <div>
      <InputComponent  input={input} setinput={setinput} />
      <DisplayComponent input={input}/>
    </div>
  );
};

export default Lifiting;

const InputComponent = ({input, setinput}) => {

  return (
    <>
      <input type="text" 
      placeholder="enter your name"
       value={input}
       onChange={(e) => setinput(e.target.value) }>

       </input>
    </>
  );
};

const DisplayComponent = ({input}) => {
  return (
    <>
      <p>this is: {input}</p>
    </>
  );
};
