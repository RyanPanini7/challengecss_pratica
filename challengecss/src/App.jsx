import "./App.css"
import React, {useState} from "react"
import Car from "./components/Car"

const App = () => {

  const Details = [
    {name: "fusca", km: 199999, color: "black"},
    {name: "celta", km: 10000, color: "silver"},
    {name: "polo", km: 0, color: "white"},
  ];

  return (
    <div>
      <h1>Detalhes dos carros</h1>
      <div className="car-container">
        {Details.map((car) => (
          <Car car={car}/>
        ))}
      </div>
    </div>
  )
};

export default App;