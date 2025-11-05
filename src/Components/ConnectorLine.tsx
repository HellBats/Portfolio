import React from "react";
import type { Drag } from "../Hooks/store";
import Pin from "./Pin";



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
      <Pin pos={start} ></Pin>
      <Pin pos={end} ></Pin>
    </svg>
  );
};

export default ConnectorLine;
