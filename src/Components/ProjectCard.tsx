import type { Project } from "../Pages/Projects";





const ProjectCard = (repo:Project) =>
{
    return(
        <div className="flex flex-col justify-center mx-10 border-white border-1 my-8 w-96 h-64" >
            <div className="text-2xl mr-10 px-2 mt-1 h-16">{repo.name}</div>
            <div className="border-1 px-2 flex flex-wrap h-8">
                {repo.topics.map((element) => (<div className="px-2">{element.charAt(0).toUpperCase()
                    + element.slice(1)}</div>))}
            </div>
            <p className="h-32 px-2">{repo.description || ""}</p>
            <div className="px-2">
                <a href={repo.html_url}>
                    <div className="text-fuchsia-700">Github</div>
                </a>
            </div>
        </div>
    )

}


export default ProjectCard;