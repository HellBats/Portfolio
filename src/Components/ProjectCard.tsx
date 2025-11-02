
interface Project {
  name: string;
  description: string | null;
  html_url: string;
  topics: string[] | [];
  picture: string | null;
}


const ProjectCard = (repo:Project) =>
{
    return(
        <div
      className="flex flex-col max-w-xl bg-news-texture text-ink border border-paperborder rounded-l overflow-hidden"
    >
        {/* Repo name */}
        <div className="flex justify-center"><div className="text-4xl mr-10 px-2 mt-5 font-semibold">{repo.name}</div></div>

        {/* Description + Image */}
        <div className="flex flex-row">
            {/* Text section */}
            <div className="flex flex-col w-1/2 p-2 mx-3 text-justify">
            <p className="text-sm">{repo.description || ""}</p>
            <div className="text-sm break-all">
                For more information go to{" "}
                <a
                href={repo.html_url}
                className=" underline "
                >
                {repo.html_url}
                </a>
            </div>
            </div>

            {/* Image section */}
            {repo.picture ? (
            <div className="w-1/2 h-auto overflow-hidden">
                <img
                src={repo.picture}
                alt="Repository visual"
                className="w-full h-full object-cover filter grayscale sepia-20 contrast-90 brightness-95 p-2 "
                draggable={false}
                />
            </div>
            ) : null}
        </div>
        </div>

    )

}


export default ProjectCard;