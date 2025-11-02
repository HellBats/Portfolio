import React from "react";
import type { Drag } from "../Hooks/store";



interface ConnectorLineProps {
  start: Drag;
  end: Drag;
  color?: string;
  width?: number;
  dashed?: boolean;
}

const ConnectorLine: React.FC<ConnectorLineProps> = ({
  start,
  end,
  color = "#EC4642",
  width = 2,
  dashed = false,
}) => {
  
  return (

    <svg className="absolute w-full h-full pointer-events-none">
      <line
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        stroke={color}
        strokeWidth={width}
        strokeDasharray={dashed ? "6 3" : "none"}
      />
      <circle r="10" cx={start.x-5} cy={start.y+5} fill="#CA2020" />
      <circle r="10" cx={start.x} cy={start.y} fill="#DA2222" />
      <circle r="10" cx={end.x-5} cy={end.y+5} fill="#CA2020" />
      <circle r="10" cx={end.x} cy={end.y} fill="#DA2222" />
    </svg>
  );
};

export default ConnectorLine;
