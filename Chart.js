"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { time: "10:00", price: 1.12 },
  { time: "10:05", price: 1.13 },
  { time: "10:10", price: 1.115 },
];

export default function Chart() {
  return (
    <div>
      <h2>Sample Price Chart</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#000000" />
      </LineChart>
    </div>
  );
}
