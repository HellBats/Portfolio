import type { Drag } from "../Hooks/store";

interface PinProps {
  pos: Drag;
}


const Note:React.FC<PinProps> = ({
    pos,
}) =>
{

    return(
        <svg className="absolute w-full h-full pointer-events-none"
        style={{
        zIndex: 9998, 
        overflow: "visible", 
        }}>
        <rect width="200" height="100" x={pos.x} y={pos.y} fill="#7FE555" rx={2} ry={2} transform="rotate(4, 0,0)"></rect>
        <text x={pos.x+10} y={pos.y+20} fill="black" fontSize={12} transform="rotate(4, 0,0)">Suspect Name: Vishal Goyal</text>
        </svg>
    )
}

export default Note;