import { useState, useRef, type MouseEvent, type ReactNode } from "react";

interface DraggableProps {
  children: ReactNode;
  initialPosition?: { x: number; y: number };
}

export const Draggable: React.FC<DraggableProps> = ({
  children,
  initialPosition = { x: 100, y: 100 },
}) => {
  const [pos, setPos] = useState(initialPosition);
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    setPos({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        onMouseDown={handleMouseDown}
        className={`absolute ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      >
        {children}
      </div>
    </div>
  );
};