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
    <>
      <div className="chart">
        <h2>Response Times (Daily)</h2>
        <LineChart width={500} height={300} data={responseTimesDaily}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="average_time" stroke="#5465ff" />
        </LineChart>
      </div>
      <div className="chart">
        <h2>Response Times (Weekly)</h2>
        <LineChart width={500} height={300} data={responseTimesWeekly}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="average_time" stroke="#5465ff" />
        </LineChart>
      </div>
    </>
  );
};

export default LineChartComponent;
