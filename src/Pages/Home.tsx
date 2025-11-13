import Draggable from "../Components/Draggable";
import ray_tacer from "../assets/RayTracer.png"
import ProjectCard from "../Components/ProjectCard";
import {useDrag} from "../Hooks/store";
import ConnectorLine from "../Components/ConnectorLine";
import Canvas from "../Components/Canvas";
import SuspectCard from "../Components/SuspectCard";
import Map from "../Components/Map";
import profile_config from "../../profile_config.json"
import LC3 from "../assets/LC3.jpg"
import Notes from "../assets/Solana.svg"


interface Profile
{
    projects: {
        Name: string;
        Description: string;
        Url: string;
    }[];
}

const Home = () =>
{
    const profile:Profile = profile_config;
    const pos1 = useDrag((state) => state.components[0]);
    const pos2 = useDrag((state) => state.components[1]);
    const pos3 = useDrag((state) => state.components[2]);
    const pos4 = useDrag((state) => state.components[3]);
    const pos5 = useDrag((state) => state.components[4]);
    return(
        <Canvas>
        <div className="absolute w-full h-full"> 
            {/* <ConnectorLine start={{ x: 150, y: 150 }} end = {{ x: 600, y: 180 }}></ConnectorLine> */}
            <Draggable initialPosition={{ x: 1800, y: 0 }} id={5}>
                <div className="bg-newspaper text-black w-88 flex flex-col">
                    <div className="text-4xl w-full">
                        <div className="flex justify-center">Instructions</div>
                    </div>
                    <div className="flex flex-row ml-2">
                        Middle mouse button to pan
                    </div>
                    <div className="flex flex-row ml-2">
                        Left mouse button to move components
                    </div>
                    <div className="flex flex-row ml-2">
                        Scrol to zoom in and out
                    </div>
                </div>
            </Draggable>
            <Draggable initialPosition={{ x: 1800, y: 700 }} id={0}>
                <SuspectCard></SuspectCard>
            </Draggable>
            <Draggable initialPosition={{ x: 2700, y: 800 }} id={1}>
                <div className="rounded-2xl shadow-2xl">
                    <ProjectCard 
                    name={profile.projects[0].Name} 
                    description={profile.projects[0].Description}
                    html_url={profile.projects[0].Url}
                    picture={ray_tacer}></ProjectCard>
                </div>
            </Draggable>
            <Draggable initialPosition={{ x: 700, y: 800 }} id={2}>
                <div className="rounded-2xl shadow-2xl">
                    <ProjectCard 
                    name={profile.projects[1].Name} 
                    description={profile.projects[1].Description}
                    html_url={profile.projects[1].Url}
                    picture={LC3}></ProjectCard>
                </div>
            </Draggable>
            <Draggable initialPosition={{ x: 1200, y: 300 }} id={3}>
                <div className="rounded-2xl shadow-2xl">
                    <ProjectCard 
                    name={profile.projects[2].Name} 
                    description={profile.projects[2].Description}
                    html_url={profile.projects[2].Url}
                    picture={Notes}></ProjectCard>
                </div>
            </Draggable>
            <Draggable initialPosition={{ x: 1400, y: 1200 }} id={4}><Map></Map></Draggable>
            {pos1 && pos2 && <ConnectorLine start={pos1} end={pos2}></ConnectorLine>}
            {pos1 && pos3 && <ConnectorLine start={pos1} end={pos3}></ConnectorLine>}
            {pos1 && pos4 && <ConnectorLine start={pos1} end={pos4}></ConnectorLine>}
            {pos1 && pos5 && <ConnectorLine start={pos1} end={pos5}></ConnectorLine>}
        </div> 
        </Canvas>
    );
}


export default Home;