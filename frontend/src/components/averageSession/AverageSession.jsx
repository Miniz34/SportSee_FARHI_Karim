import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

import CustomToolTip from "./CustomToolTip";

import "./style.scss";

/**
 * Render a LineChart using Recharts
 *
 * @category Component
 * @param {Array<Object>} data from props
 * array of session length per day
 * example : [{day: 2, sessionLength: 24}]
 * @returns { React.Component } A React component
 */

function AverageSession({ data }) {
  return (
    <>
      <h3 className="average-title">
        Durée moyenne des <br />
        sessions
      </h3>
      <ResponsiveContainer
        width="90%"
        height="70%"
        className={"average-sessions"}
      >
        <LineChart data={data}>
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            strokeWidth={2}
            activeDot={{
              stroke: "#000000",
              strokeWidth: 4,
              r: 2,
            }}
            dot={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "rgba(255,255,255,0.6)",
              fontSize: "0.75rem",
            }}
            tickMargin={20}
          />
          <Tooltip
            content={<CustomToolTip />}
            cursor={false}
            position={{ y: 0 }}
            fill={"#fff"}
          />
          <YAxis hide domain={["dataMin-10", "dataMax+10"]} />
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

/* A prop type checker. It is a way to check if the data is an array of objects. */
AverageSession.propTypes = {
  /**
   * The type of the required data
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AverageSession;
