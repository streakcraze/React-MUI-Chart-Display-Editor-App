import React, { createContext, useState } from "react";

export const ChartContext = createContext();

export default function ChartContextProvider(props){
    const [newFile, setNewFile] = useState(false);
    const [loadFile, setLoadFile] = useState(false);
    const [chartData, setChartData] = useState([]);

    const updateChartData = data => setChartData(data);

    const handleNewFile = () => {
        setChartData([]);
        setNewFile(true);
    };

    const handleLoadFile = () => {
        const data = JSON.parse(window.localStorage.getItem("chartData"));
        if(data){
           setLoadFile(true);
        } else {
            console.log("no chart data found in local storage");
        }
    };

    const handleSaveFile = () => {
        window.localStorage.setItem("chartData", JSON.stringify(chartData));
    };

    const handleSaveAsFile = () => {
        const fileData = window.localStorage.getItem("chartData");
        if(fileData){
            const blob = new Blob([fileData], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.download = "chart-data.json";
            link.href = url;
            link.click();
        }
    }

    return (<ChartContext.Provider value={{ chartData, newFile, loadFile, updateChartData, handleNewFile, handleLoadFile, handleSaveFile, handleSaveAsFile }}>{props.children}</ChartContext.Provider>);
}
