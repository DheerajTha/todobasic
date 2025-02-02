import React, { useEffect, useState } from 'react'

const TodoDate = () => {

    const [dateTime, setDateTime] = useState("");


    useEffect(() => {
        const interval = setInterval(() => {
          const formateDate = new Date().toLocaleDateString();
          const formateTime = new Date().toLocaleTimeString();
          setDateTime(` ${formateDate} - ${formateTime} `);
        }, 1000);
        return () => clearInterval(interval);
      }, []);


  return  <h2 className="date-time">{dateTime} </h2>

    
  
}

export default TodoDate;
