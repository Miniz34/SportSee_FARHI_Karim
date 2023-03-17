import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import "./style.scss";

const activityType = [
  "Cardio",
  "Energie",
  "Endurance",
  "Force",
  "Vitesse",
  "Intensité",
];

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

export default Performance;
