import { useEffect } from "react";
import useProfile from "../Hooks/store";
import profile_picture from "../assets/Profile.png"


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
        <div className="mx-50 mt-6 justify-center">
            <div className="flex flex-col justify-center">
                <h1 className="text-5xl p-2 font-minecraft" >Hello, I am {pro.Name}</h1>
                <p className="w-2xl text-xl p-2 font-minecraft">
                    {pro.Tagline}
                </p>
            </div>
        </div>
    );
}


export default Home;