import Draggable from "../Components/Draggable";
import profile_picture from "../assets/Profile.png"
import ray_tacer from "../assets/RayTracer.png"
import ProjectCard from "../Components/ProjectCard";



const Home = () =>
{

    return(
        <div> 
            {/* <ConnectorLine start={{ x: 150, y: 150 }} end = {{ x: 600, y: 180 }}></ConnectorLine> */}
            <Draggable initialPosition={{ x: 150, y: 150 }}>
                <div className="bg-gray-500 border-10 shadown-black shadow-2xl">
                    <img src={profile_picture} className="w-56" draggable={false}></img>
                </div>
            </Draggable>
            <Draggable initialPosition={{ x: 600, y: 180 }}>
                <div className="rounded-2xl shadow-2xl">
                    <ProjectCard 
                    name={"RayTracer"} 
                    description={"A high-performance ray tracing engine built with CUDA for real-time rendering. This project supports reflection, refraction, and Fresnel effects, making it capable of simulating realistic materials like glass and mirrors. It demonstrates physically-based rendering concepts, optimized GPU acceleration, and interactive scene visualization."}
                    topics = {["CUDA", "C++"]}
                    html_url="https://github.com/HellBats/RayTracer"
                    picture={ray_tacer}></ProjectCard>
                </div>
            </Draggable>
        </div>
    );
}


export default Home;