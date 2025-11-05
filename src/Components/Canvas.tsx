import { useState, useRef, type ReactNode, type MouseEvent, type WheelEvent } from "react";

interface CanvasProps {
  children?: ReactNode;
}

export default function Canvas({ children }: CanvasProps) {
  const [scale, setScale] = useState(0.2);
  const [offset, setOffset] = useState({ x: 200, y: 200 });
  const [isPanning, setIsPanning] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    e.preventDefault();

    const zoomIntensity = 0.1;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const newScale = Math.min(Math.max(scale + (e.deltaY < 0 ? zoomIntensity : -zoomIntensity), 0.2), 3);

    // Compute world coordinates before zoom
    const worldX = (mouseX - offset.x) / scale;
    const worldY = (mouseY - offset.y) / scale;

    // Compute new offset so that zoom happens around cursor
    const newOffsetX = mouseX - worldX * newScale;
    const newOffsetY = mouseY - worldY * newScale;

    setScale(newScale);
    setOffset({ x: newOffsetX, y: newOffsetY });
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (e.button == 1){ // Only middle mouse
    e.preventDefault();
    setIsPanning(true);
    startPos.current = {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    };
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isPanning) return;
    setOffset({
      x: e.clientX - startPos.current.x,
      y: e.clientY - startPos.current.y,
    });
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    if (e.button === 1) setIsPanning(false);
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-gray-200 select-none"
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="absolute origin-top-left transition-transform duration-75 ease-out border-48 border-amber-700"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
          cursor: isPanning ? "grabbing" : "default",
        }}
      >
        <div className="relative w-[4000px] h-[2000px] bg-orange-300">
          {children}
        </div>
      </div>
    </div>
  );
}