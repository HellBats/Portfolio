import map from "../assets/BathindaMap.png"
import type { Drag } from "../Hooks/store";
import Note from "./StickyNote";

const Map  = () =>
{
    const pin_pos:Drag = {x:650,y:-500};
    return(
    <div className="p-3 shadown-black shadow-2xl bg-white">
        <div className="bg-gray-500">
            <img src={map} className="w-2xl" draggable={false}></img>
        </div>
        <Note pos={pin_pos} points={["Address?"]} width={300} height={180} transform="rotate(-8,0,0)"
            text_size={54} color="#FDE83F"></Note>
    </div> 
    );
}

export default Map;