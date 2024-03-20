import { platform } from "os";
import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

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
  return (
    <>
      <div className="chart">
        <h2>usage statistics by platform</h2>
        <PieChart width={500} height={300}>
          <Pie dataKey="value" data={byPlatform} fill="#5465ff" label />
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div className="chart">
        <h2>usage statistics by country</h2>
        <PieChart width={500} height={300}>
          <Pie dataKey="value" data={byCountry} fill="#5465ff" label />
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </>
  );
};

export default PieChartComponent;
