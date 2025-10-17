

const NavBar = () => 
{
    return(
        <div className="flex flex-row mx-50">
            <div className="grow m-3 ">PlaceHolder</div>
            <div className="grow flex flex-row-reverse">
                <div className="navbar_elements">Contact Me</div>
                <div className="navbar_elements">
                    <a href="/Personal.pdf"  target="_blank" rel="noopener noreferrer">
                    Resume</a></div>
                <div className="navbar_elements">Projects</div>
                <div className="navbar_elements">About</div>
            </div>
        </div>
    )
}

export default NavBar;