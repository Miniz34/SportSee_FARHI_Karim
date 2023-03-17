import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./style.scss";

function Goal({ data }) {
  console.log(data.todayScore);

  const score = data.todayScore ? data.todayScore : data.score;
  const dataArray = [{ name: "score", value: score }];
  console.log(dataArray[0].value);
  return (
    <>
      <h3 className="goal-title">Score</h3>
      <div className="goal-content">
        <p className="goal-content-value">{dataArray[0].value * 100}%</p>
        <p className="goal-content-text">de votre</p>
        <p className="goal-content-text">objectif</p>
      </div>

      <ResponsiveContainer
        width="100%"
        height="100%"
        className={"goal-sessions"}
      >
        <RadialBarChart
          data={dataArray}
          innerRadius="0%"
          outerRadius="0%"
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            data={[{ value: 1 }]}
            dataKey="value"
            barSize={170}
            fill="#FFF"
            isAnimationActive={false}
          />
          <RadialBar
            barSize={10}
            cornerRadius={100}
            fill="#FF0000"
            dataKey="value"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </>
  );
}

export default Goal;
