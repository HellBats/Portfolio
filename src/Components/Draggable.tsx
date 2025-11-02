import { useState, useRef, type MouseEvent as ReactMouseEvent, type ReactNode, useEffect } from "react";
import { useDrag } from "../Hooks/store";

interface DraggableProps {
  children: ReactNode;
  id: number;
  initialPosition?: { x: number; y: number };
}

const Draggable: React.FC<DraggableProps> = ({
  children,
  id,
  initialPosition = { x: 100, y: 100 },
}) => {
  const setPosArray = useDrag((state) => state.setPos);
  const [pos, setPos] = useState(initialPosition);
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  // Set initial position in global store ONCE
  useEffect(() => {
    setPosArray(id, initialPosition.x +100, initialPosition.y+20);
    // Add all dependencies for this effect
  }, []); 

  // This effect will now handle ALL drag logic
  useEffect(() => {
    // We only care about this effect if we are dragging
    if (!dragging) {
      return;
    }

    // These handlers use the NATIVE MouseEvent, not React's
    const handleMouseMove = (e: MouseEvent) => {
      // Use clientX/Y from the native window event
      const newX = e.clientX - offset.current.x;
      const newY = e.clientY - offset.current.y;
      
      // Update local state for visual position
      setPos({ x: newX, y: newY });
      // Update global state for connector line
      setPosArray(id, newX+100, newY+20);
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    // Add listeners to the window object
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // This is the cleanup function.
    // It runs when the effect "cleans up" (i.e., when `dragging` becomes false)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
    
    // This effect runs every time `dragging` state changes
  }, [dragging, id, setPosArray]); 

  // This is a React MouseEvent
  const handleMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    // Prevent default drag behavior (like text selection)
    e.preventDefault(); 
    
    setDragging(true);
    // Use clientX/Y from React's synthetic event
    offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
  };

  return (
    // We remove the mousemove/mouseup handlers from here
      <div
        onMouseDown={handleMouseDown}
        className={`${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{ position: "fixed",left: `${pos.x}px`, top: `${pos.y}px` }}
      >
        {children}
      </div>
  );
};

export default Draggable;