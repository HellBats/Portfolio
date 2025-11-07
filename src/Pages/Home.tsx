import Draggable from "../Components/Draggable";
import ray_tacer from "../assets/RayTracer.png"
import ProjectCard from "../Components/ProjectCard";
import {useDrag } from "../Hooks/store";
import ConnectorLine from "../Components/ConnectorLine";
import Canvas from "../Components/Canvas";
import SuspectCard from "../Components/SuspectCard";
import Map from "../Components/Map";




const Home = () =>
{
    const pos1 = useDrag((state) => state.components[0]);
    const pos2 = useDrag((state) => state.components[1]);
    const pos3 = useDrag((state) => state.components[2]);
    return(
        <Canvas>
        <div className="absolute w-full h-full"> 
            {/* <ConnectorLine start={{ x: 150, y: 150 }} end = {{ x: 600, y: 180 }}></ConnectorLine> */}
            <Draggable initialPosition={{ x: 1500, y: 150 }} id={0}>
                <SuspectCard></SuspectCard>
            </Draggable>
            <Draggable initialPosition={{ x: 1800, y: 800 }} id={1}>
                <div className="rounded-2xl shadow-2xl">
                    <ProjectCard 
                    name={"RayTracer"} 
                    description={"A high-performance ray tracing engine built with CUDA for real-time rendering. This project supports reflection, refraction, and Fresnel effects, making it capable of simulating realistic materials like glass and mirrors. It demonstrates physically-based rendering concepts, optimized GPU acceleration, and interactive scene visualization."}
                    topics = {["CUDA", "C++"]}
                    html_url="https://github.com/HellBats/RayTracer"
                    picture={ray_tacer}></ProjectCard>
                </div>
            </Draggable>
            <Draggable initialPosition={{ x: 1000, y: 700 }} id={2}><Map></Map></Draggable>
            {pos1 && pos2 && <ConnectorLine start={pos1} end={pos2}></ConnectorLine>}
            {pos1 && pos3 && <ConnectorLine start={pos1} end={pos3}></ConnectorLine>}
        </div> 
        </Canvas>
    );
}


export default Home;