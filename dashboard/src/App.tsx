import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./Redux/actions"; // Import fetchData
import { RootState } from "./Redux/reducers";
import BarChartComponent from "./Components/BarChart";
import LineChartComponent from "./Components/LineChart";
import PieChartComponent from "./Components/PieChart";
import "./App.css";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const aiData = useSelector((state: RootState) => state.aiData);

  useEffect(() => {
    dispatch(fetchData() as any); 
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>AI Insights Dashboard</h1>
      <div className="charts-container">
        {aiData ? (
          <>
            <BarChartComponent />
            <LineChartComponent />
            <PieChartComponent />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default App;
