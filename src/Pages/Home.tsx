import Draggable from "../Components/Draggable";
import ray_tacer from "../assets/RayTracer.png"
import ProjectCard from "../Components/ProjectCard";
import {useDrag } from "../Hooks/store";
import ConnectorLine from "../Components/ConnectorLine";
import Canvas from "../Components/Canvas";
import SuspectCard from "../Components/SuspectCard";




const Home = () =>
{
    const a = useDrag((state) => state.components[0]);
    const b = useDrag((state) => state.components[1]);
    return(
        <Canvas>
        <div className="absolute w-full h-full"> 
            {/* <ConnectorLine start={{ x: 150, y: 150 }} end = {{ x: 600, y: 180 }}></ConnectorLine> */}
            <Draggable initialPosition={{ x: 150, y: 150 }} id={0}>
                <SuspectCard></SuspectCard>
            </Draggable>
            <Draggable initialPosition={{ x: 600, y: 180 }} id={1}>
                <div className="rounded-2xl shadow-2xl">
                    <ProjectCard 
                    name={"RayTracer"} 
                    description={"A high-performance ray tracing engine built with CUDA for real-time rendering. This project supports reflection, refraction, and Fresnel effects, making it capable of simulating realistic materials like glass and mirrors. It demonstrates physically-based rendering concepts, optimized GPU acceleration, and interactive scene visualization."}
                    topics = {["CUDA", "C++"]}
                    html_url="https://github.com/HellBats/RayTracer"
                    picture={ray_tacer}></ProjectCard>
                </div>
            </Draggable>
            {a && b && <ConnectorLine start={a} end={b}></ConnectorLine>}
        </div> 
        </Canvas>
    );
}


export default Home;