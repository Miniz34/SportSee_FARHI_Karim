import React, { PureComponent } from "react";
import { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./style.scss";

function DailyCharts({ data }) {
  return (
    <ResponsiveContainer width="60%" aspect={2}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="day"
          tick={{ fill: "#9B9EAC" }}
          tickLine={false}
          stroke="#DEDEDE"
          strokeWidth={2}
          tickMargin={16}
          tickFormatter={(day) => new Date(day).getDate()}
        />
        <YAxis
          orientation="right"
          tickMargin={30}
          tick={{ fill: "#9B9EAC" }}
          tickLine={false}
          axisLine={false}
          domain={["dataMin-2", "dataMax+1"]}
          tickCount={3}
        />
        <YAxis hide yAxisId="calories" />
        <Tooltip />
        <Legend
          verticalAlign="top"
          align="right"
          payload={[
            {
              value: "Poids (kg)",
              type: "circle",
              id: "kilogram",
            },
            {
              value: "Calories brûlées (kCal)",
              type: "circle",
              id: "calories",
              color: "#f00",
            },
          ]}
        />

        <Bar dataKey="kilogram" fill="#8884d8" />
        <Bar dataKey="calories" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default DailyCharts;

{
  /* <YAxis
orientation="right"
tickMargin={30}
tick={{ fill: "#9B9EAC" }}
tickLine={false}
axisLine={false}
domain={["dataMin-2", "dataMax+1"]}
tickCount={3}
/>
<YAxis hide yAxisId="calories" /> */
}

// function DailyCharts({ data }) {
//   return (
//     <ResponsiveContainer width="60%" aspect={2}>
//       <BarChart
//         width={500}
//         height={300}
//         data={data}
//         margin={{
//           top: 20,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="day" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="kilogram" fill="#8884d8" />
//         <Bar dataKey="calories" fill="#82ca9d" />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// }

// export default DailyCharts;

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
// import "./style.scss";

// const DailyCharts = ({ data }) => {

//   return (
//     <BarChart
//       width={600}
//       height={300}
//       data={data}
//       margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="day" />
//       <YAxis
//         label={{
//           dataKey: "kilogram",
//           value: "kilogram",
//           angle: -90,
//           position: "insideLeft",
//         }}
//       />
//       <Tooltip />
//       <Legend verticalAlign="top" align="right" />
//       <Bar dataKey="kilogram" fill="#8884d8" />
//       <Bar dataKey="calories" fill="#82ca9d" />
//     </BarChart>
//   );
// };

// export default DailyCharts;
