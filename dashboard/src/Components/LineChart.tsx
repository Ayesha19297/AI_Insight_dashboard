import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./main.css";

const LineChartComponent: React.FC = () => {
  const responseTimesDaily = useSelector(
    (state: any) => state.aiData?.response_times?.day_wise
  );
  const responseTimesWeekly = useSelector(
    (state: any) => state.aiData?.response_times?.week_wise
  );

  if (!responseTimesDaily || !responseTimesWeekly) {
    return <div>Loading...</div>; // Add loading indicator
  }

  return (
    <div className="chart-container">
      <div className="chart">
        <h2>Insights based on response times (Daily)</h2>
        <LineChart width={500} height={300} data={responseTimesDaily}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="average_time" stroke="#ff4d6d" />
        </LineChart>
      </div>
      <div className="chart">
        <h2>Insights based on response times (Weekly)</h2>
        <LineChart width={500} height={300} data={responseTimesWeekly}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="average_time" stroke="#ff4d6d" />
        </LineChart>
      </div>
    </div>
  );
};

export default LineChartComponent;
