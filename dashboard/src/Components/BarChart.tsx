import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarChartComponent: React.FC = () => {
  const categoryDistribution = useSelector(
    (state: any) => state.aiData?.category_distribution
  );
  const userSatisfaction = useSelector(
    (state: any) => state.aiData?.user_satisfaction
  );

  if (!categoryDistribution || !userSatisfaction) {
    return <div>Loading...</div>; // Add loading indicator
  }

  // Transform data if necessary
  const transformedData1 = Object.keys(categoryDistribution).map(
    (category) => ({
      category,
      value: categoryDistribution[category],
    })
  );
  const transformedData2 = userSatisfaction.ratings.map((rating: any) => ({
    rating: rating.rating,
    count: rating.count,
  }));

  return (
    <>
      <div className="chart">
        <h2>Category Distribution</h2>
        <BarChart width={600} height={400} data={transformedData1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#5465ff" />
        </BarChart>
      </div>
      <div className="chart">
        <h2>User Satisfaction</h2>
        <BarChart width={600} height={400} data={transformedData2}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="rating" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#5465ff" />
        </BarChart>
      </div>
    </>
  );
};

export default BarChartComponent;
