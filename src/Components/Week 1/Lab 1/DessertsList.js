import React from "react";

const DessertsList = () => {

  const list = [
    {
      name: "Chocolate Cake",
      calories: 400,
      createdAt: "2022-09-01",
    },
    {
      name: "Ice Cream",
      calories: 200,
      createdAt: "2022-01-02",
    },
    {
      name: "Tiramisu",
      calories: 300,
      createdAt: "2021-10-03",
    },
    {
      name: "Cheesecake",
      calories: 600,
      createdAt: "2022-01-04",
    },
  ];

  const lowCalorieDesserts = list.filter(val => {return val.calories < 500}).sort((a,b)=> (a.calories > b.calories ? 1 : -1));

  return(
    <ul>
      {lowCalorieDesserts.map( x => {
        return (
          <li>{`${x.name} - ${x.calories} cal`}</li>
        )
      })}
    </ul>
  )
}

export default DessertsList;