import { Link } from "react-router-dom";


const NavBar = () => 
{
    return(
        <div className="flex flex-row mx-50">
            <div className="grow m-3 "><Link to="/">Placeholder</Link></div>
            <div className="grow flex flex-row-reverse">
                <div className="navbar_elements text-amber-500">Contact Me</div>
                <div className="navbar_elements text-blue-300">
                    <a href="/files/Personal.pdf"  target="_blank" rel="noopener noreferrer">
                    Resume</a></div>
                <div className="navbar_elements text-green-400">
                    <Link to="/projects">Projects</Link>
                </div>
                <div className="navbar_elements text-red-400"><Link to="/about-me">About Me</Link></div>
            </div>
        </div>
    )
}

export default NavBar;