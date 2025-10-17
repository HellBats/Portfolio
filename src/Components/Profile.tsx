import profile_picture from "../assets/Profile.png"
const Profile = () => 
{
    return(
        <div className="flex flex-row-reverse mx-50 mt-6 justify-between">
            <img src={profile_picture} className="w-90 rounded-full m-5"></img>
            <div className="flex flex-col justify-center">
                <h1 className="text-5xl p-2 font-minecraft" >Hello, I am Vishal</h1>
                <p className="w-2xl text-xl p-2 font-minecraft">
                    Computer Engineering student with a strong foundation in computer architecture, data structures, and
 algorithms. Experienced in real-time graphics, system-level programming, and low-level design through academic
 projects and research. Interested in applying technical expertise to innovative software and research-driven
 projects.
                </p>
            </div>
        </div>
    )
}


export default Profile;