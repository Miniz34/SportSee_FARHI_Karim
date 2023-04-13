import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

import "./style.scss";

const activityType = [
  "Cardio",
  "Energie",
  "Endurance",
  "Force",
  "Vitesse",
  "Intensité",
];

/**
 * Render a RadarChart using Recharts
 *
 * @category Components
 * @param {Array<Object>} props.data
 * array of value per kind of performance
 * example : [{value: 120, kind: 2}]
 * @returns { React.Component } A React component
 */

function Performance({ data }) {
  const updatedData = data.map((obj) =>
    Object.assign({}, obj, { kind: activityType[obj.kind - 1] })
  );
  data = updatedData;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        outerRadius={90}
        data={[...data].reverse()}
        className="perf-chart"
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

Performance.propTypes = {
  /**
  Type of the required Data
  */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Performance;
