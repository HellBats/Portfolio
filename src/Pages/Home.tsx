import { useEffect } from "react";
import useProfile from "../Hooks/store";
import { Draggable } from "../Components/Draggable";
import profile_picture from "../assets/Profile.png"
import ProjectCard from "../Components/ProjectCard";


const Home = () =>
{
    const { pro, loading, error, fetchData } = useProfile()

    // 3. Call the action to load data when the component mounts
    useEffect(() => {
        fetchData();
    }, []); // Dependency array ensures it only runs once

    // 4. Render based on the store's state
    if (loading) {
        return <h1 className="flex flex-row justify-center text-2xl py-50">Loading Profile...</h1>;
    }

    if (error) {
        return <h1 className="flex flex-row justify-center text-2xl py-50">Error: {error}</h1>;
    }
    return(
        <div> 
            <Draggable initialPosition={{ x: 150, y: 150 }}>
                <div className="bg-gray-500 border-10">
                    <img src={profile_picture} className="w-56" draggable={false}></img>
                </div>
            </Draggable>
            <Draggable initialPosition={{ x: 600, y: 180 }}>
                <div className="rounded-2xl">
                    <ProjectCard name={"RayTracer"} description={"A high-performance ray tracing engine built with CUDA for real-time rendering."}></ProjectCard>
                </div>
            </Draggable>
        </div>
    );
}


export default Home;