import type { Drag } from "../Hooks/store";

interface PinProps {
  pos: Drag;
  points: string[];
  width?:number;
  height?:number;
  color?:string;
  transform?:string;
  text_size?:number;
}


const Note:React.FC<PinProps> = ({
    pos,
    points,
    width=200,
    height=100,
    color="#7FE555",
    transform="rotate(4, 0,0)",
    text_size=12,
}) =>
{
    return(
        <svg className="absolute w-full h-full pointer-events-none"
        style={{
        zIndex: 9998, 
        overflow: "visible", 
        }}>
        <rect width={width} height={height} x={pos.x} y={pos.y} fill={color} rx={2} ry={2} transform={transform}></rect>
        {
            points.map((point,index)=> <text x={pos.x+10} y={pos.y + index*15 + text_size*1.8} fill="black" 
                fontSize={text_size} transform={transform}>{point}</text>)
        }
        
        </svg>
    )
}

export default Note;