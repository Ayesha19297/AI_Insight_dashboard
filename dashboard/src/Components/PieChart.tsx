import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import "./main.css";

const PieChartComponent: React.FC = () => {
  const usageStatistics = useSelector(
    (state: any) => state.aiData?.usage_statistics
  );

  if (!usageStatistics) {
    return <div>Loading...</div>; // Add loading indicator
  }
  const byPlatform = Object.entries(usageStatistics.by_platform).map(
    ([platform, count]) => ({
      name: platform,
      value: count,
    })
  );
  const byCountry = Object.entries(usageStatistics.by_country).map(
    ([country, count]) => ({
      name: country,
      value: count,
    })
  );
  const COLORS = ["#FFBB28", "#00C49F", "#AF19FF", "#FF8042", "#0088FE"];
  return (
    <div className="chart-container">
      <div className="chart">
        <h2>Insights based on usage statistics by platform</h2>
        <PieChart width={500} height={300}>
          <Pie dataKey="value" data={byPlatform} label>
            {byPlatform.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div className="chart">
        <h2>Insights based on usage statistics by country</h2>
        <PieChart width={500} height={300}>
          <Pie dataKey="value" data={byCountry} fill="#ff4d6d" label>
            {byCountry.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default PieChartComponent;
