import type { Project } from "../Pages/Projects";





const ProjectCard = (repo:Project) =>
{
    return(
        <div className="flex flex-col justify-center mx-20 border-white border-1 rounded-l p-4 my-8" >
            <div className="flex flex-row">
                <div className="text-2xl mr-10">{repo.name}</div>
                <div className="">{repo.language}</div>
            </div>
            <p>{repo.description || ""}</p>
            <div>
                
                    <a href={repo.html_url}>
                        <div className="text-fuchsia-700">Github</div>
                    </a>
            </div>
        </div>
    )

}


export default ProjectCard;