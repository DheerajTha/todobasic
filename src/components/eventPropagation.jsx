import React from 'react'

const EventPropagation = () => {

    const grandfather = (evet) =>{
        console.log("grandfather");
        console.log(evet)

    }

    const parent = (evet) =>{
        console.log("parent");
        console.log(evet)


    }
    const child = (evet) =>{
        console.log("child");
        console.log(evet);
        evet.stopPropagation();
    }


  return (

    <div>
      <div className="grandfather" style={{backgroundColor:"red"}} onClickCapture={grandfather}>
        <div className="parent" style={{backgroundColor:"green"}} onClickCapture={parent}>
            <div className="child" style={{backgroundColor:"yellow"}} onClickCapture={child}>
                Child
            </div>
        </div>
      </div>
    </div>
  )
}

export default EventPropagation;
