
interface Project {
  name: string;
  description: string | null;
//   language: string | null;
//   html_url: string;
//   topics: [string] | [];
}


const ProjectCard = (repo:Project) =>
{
    return(
        <div className="flex flex-col w-64 h-72 bg-amber-50 text-black rounded-l" >
            <div className="text-2xl mr-10 px-2 mt-5">{repo.name}</div>
            {/* <div className="border-1 px-2 flex flex-wrap h-8">
                {repo.topics.map((element) => (<div className="px-2">{element.charAt(0).toUpperCase()
                    + element.slice(1)}</div>))}
            </div> */}
            <p className=" px-2">{repo.description || ""}</p>
            {/* <div className="px-2">
                <a href={repo.html_url}>
                    <div className="text-fuchsia-700">Github</div>
                </a>
            </div> */}
        </div>
    )

}


export default ProjectCard;