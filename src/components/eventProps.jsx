import React from 'react'

const EventProps = () => {

    const clickWelcomeUser = (user) =>{
        console.log(`hey ${user} welcome clickWelcomeUser`)
    }

    const handlerHover = () =>{
        console.log("hello welcome handlerHover")
        alert("a")
    }

  return (
    <div>
       <WelcomeUser onClick={() => clickWelcomeUser("dheeraj")} onMouseEnter ={handlerHover} />
    </div>
  )
}

export default EventProps;


const WelcomeUser = (props) =>{
    const handlerGreeting = () =>{
        console.log("handlerGreeting")
    }

    return (
        <>
        
        <button onClick={props.onClick}>click

        </button> 
        <br/> <br/><br/>
        <button onMouseEnter={props.onMouseEnter}>
        hover
        </button>
        <button onClick={handlerGreeting}></button>
        </>
    )
}
