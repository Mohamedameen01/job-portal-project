import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function StatusGraph({ data }) {
  return (
    <ResponsiveContainer width={"80%"} height={500}>
      <BarChart
        width={30}
        height={100}
        data={data}
        margin={{
          top: 35,
          right: 50,
          left: 50,
          bottom: 35,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"date"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="total"
          fill="#8884d8"
          activeBar={<Rectangle fill="#8B93FF" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default StatusGraph;
