import React, {useEffect} from "react";

const Test = () =>  {

  const getTest = async () => {
    const response = await fetch(`http://localhost:3001/main`);
    let data = await response.json();
    console.log(data);
  }


  return (
    <div>
      <button onClick={getTest}></button>
    </div>
  )

}

export default Test;