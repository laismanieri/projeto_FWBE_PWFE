import React from "react";
import { Chart } from "react-google-charts";
import  './Dashboard.css';

export const data = [
    ["Task", "Genero"],
    ["Homem", 2],
    ["Mulher", 8],
   // CSS-style declaration
  ];
  
  export const options = {
    title: "Cadastros por Gênero",
    pieHole: 0.4,
    is3D: true,
  };
  
  export const data2 = [
    ["Task", "Cadastros por Profissão"],
    ["Programador", 4],
    ["Cientista de Dados", 3],
    ["Analista de BI", 2],
    ["Outros", 1], // CSS-style declaration
  ];
  
  export const options2 = {
    title: "Cadastros por Profissão",
    pieHole: 0.4,
    is3D: false,
  };
  

const Dashboard = () =>{

    return(
        <><div>
            <h1>Dasboard</h1>
        </div>
        <div className="div-dash">
            <div >
            <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
            />
            </div>
        </div>
        <div className="div-dash">
            <div >
            <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data2}
            options={options2}
            />
            </div>
        </div>
       
       </> 
        
    )

}

export default Dashboard;