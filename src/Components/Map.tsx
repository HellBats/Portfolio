import map from "../assets/BathindaMap.png"

const Map  = () =>
{
    return(
    <div className="p-3 shadown-black shadow-2xl bg-white">
        <div className="bg-gray-500">
            <img src={map} className="w-2xl" draggable={false}></img>
        </div>
    </div> 
    );
}

export default Map;