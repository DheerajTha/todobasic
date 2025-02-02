import React from 'react'

const EventHandling = () => {

    function handleButton () {
        console.log("function");
      alert("abc")
    }

  const  handleButton1 = (event) =>{
        console.log("fat arrow");
        console.log("event" ,event)
    }

    const handlerUser = (para) =>{
      console.log(`hello ${para} welcome`)

    }


  return (
    <div>
      <button onClick={handleButton }>click Here</button> <br/> <br/>
      <button onClick={(event) =>handleButton1(event)}>click Here</button>
      <br/> <br/><br/> <br/>
      <button onClick={() =>handlerUser("dheeraj")}>click Here</button>

    </div>
  )
}

export default EventHandling;
