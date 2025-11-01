import React from "react";

interface Point {
  x: number;
  y: number;
}

interface ConnectorLineProps {
  start: Point;
  end: Point;
  color?: string;
  width?: number;
  dashed?: boolean;
}

const ConnectorLine: React.FC<ConnectorLineProps> = ({
  start,
  end,
  color = "white",
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
    </svg>
  );
};

export default ConnectorLine;
