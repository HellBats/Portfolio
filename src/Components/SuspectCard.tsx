import profile_picture from "../assets/Profile.png"
import type { Drag } from "../Hooks/store";
import Note from "./StickyNote";

const SuspectCard = () =>
{
    const note_pos:Drag = {x:15,y:5};
    const ProfileNotes = ["Suspect Name: Vishal Goyal",
         "Age: 22",
         "Occupation: Student",
         "Email",
         "vishalgoyal452003@gmail.com"
        ]
    return(
        <div className="p-3 shadown-black shadow-2xl bg-white pb-7">
            <div className="bg-gray-500">
                <img src={profile_picture} className="w-56" draggable={false}></img>
            </div>
            {/* <Pin pos={pin_pos}></Pin> */}
            <Note pos={note_pos} points={ProfileNotes}></Note>
        </div> 
    );
}

export default SuspectCard;