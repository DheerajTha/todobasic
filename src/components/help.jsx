import React, { useState } from 'react'

const Help = () => {

    const [person, setPerson  ] = useState({name: "abc" , age: "305"})

    const upDPerson = () =>{
        setPerson(prev => ({...prev, age: prev.age+1}) )

    }

    return (
        <div>
          <h2>Updated Person Info</h2>
          <p>Name: {person.name}, Age: {person.age}</p>
          <button onClick={upDPerson}>Increase Age</button>
        </div>
      );
}

export default Help;




  
