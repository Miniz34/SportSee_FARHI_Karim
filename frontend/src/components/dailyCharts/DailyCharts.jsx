import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

import CustomToolTip from "./CustomToolTip";

import "./style.scss";

/**
 * Render a BarChart using Recharts
 *
 * @category Components
 * @param {Array<Object>} props.data
 * array of calories burned and weight per day
 * example : [{day: '2020-07-01', kilogram: 80, calories: 240}]
 * @returns { React.Component } A React component
 */

function DailyCharts({ data }) {
  return (
    <>
      <h3 className="chartactivity-title">Activité quotidienne</h3>

      <ResponsiveContainer width="100%" height="100%">
        {/* aspect={2.5} */}
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
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
            yAxisId="kilogram"
            orientation="right"
            tickMargin={30}
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            axisLine={false}
            domain={["dataMin-2", "dataMax+1"]}
            tickCount={3}
          />
          <YAxis hide yAxisId="calories" />
          <ReferenceLine yAxisId="calories" />
          <ReferenceLine yAxisId="kilogram" />

          <Tooltip content={<CustomToolTip />} cursor={false} />
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
              },
            ]}
          />

          <Bar
            dataKey="kilogram"
            fill="#282D30"
            yAxisId="kilogram"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            yAxisId="calories"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

DailyCharts.propTypes = {
  /**
 Type of the required data
 */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DailyCharts;
