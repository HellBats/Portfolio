import profile_picture from "../assets/Profile.png"
const Profile = () => 
{
    return(
        <div className="flex flex-row-reverse mx-50 mt-6 justify-between">
            <img src={profile_picture} className="w-90 rounded-full m-5"></img>
            <div className="flex flex-col justify-center">
                <h1 className="text-5xl p-2 font-minecraft" >Hello, I am Vishal</h1>
                <p className="w-2xl text-xl p-2 font-minecraft">
                    I am driven by curiosity and a constant hunger for knowledge.
                    My passion for understanding how things work has led me to explore multiple 
                    subfields of computer science and engineering.
                    From delving into the fundamentals of Computer Architecture and Computer Graphics to  
                    experimenting with cutting-edge technologies,
                    I believe that true learning comes from exploration,
                    and I’m always eager to dive deeper into new challenges that push my technical and
                    creative boundaries. 

                </p>
            </div>
        </div>
    )
}


export default Profile;