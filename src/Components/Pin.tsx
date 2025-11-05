import type { Drag } from "../Hooks/store";

interface PinProps {
  pos: Drag;
}


const Pin:React.FC<PinProps> = ({
    pos,
}) =>
{
    return(
        <svg className="absolute w-full h-full pointer-events-none"
        style={{
        zIndex: 9999, 
        overflow: "visible", 
      }}>
        <circle r="10" cx={pos.x-5} cy={pos.y+5} fill="#CA2020" />
        <circle r="10" cx={pos.x} cy={pos.y} fill="#DA2222" />
        </svg>
    )
}

export default Pin;