import ProjectCard from "../Components/ProjectCard";
import { useState, useEffect } from "react";

// 1. Updated Interface:
// - Use lowercase 'string'
// - GitHub API can return 'null' for description and language
export interface Project {
  name: string;
  author: string;
  description: string | null; // Can be null
  language: string | null;  // Can be null
  html_url: string;
  topics:[string] | []
}

// 2. Define types for the raw API data
// This helps TypeScript understand the different data shapes
interface PinnedRepo {
  name: string;
  // ...other fields from pinned.berrysauce.dev
}

interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  owner: {
    login: string;
  };
  topics:[string]
  // ...many other fields from GitHub API
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
            const pinnedResponse = await fetch('https://pinned.berrysauce.dev/get/HellBats');
            const allReposResponse = await fetch("https://api.github.com/users/HellBats/repos");

            if (!pinnedResponse.ok) {
            throw new Error(`Pinned API error! status: ${pinnedResponse.status}`);
            }
            if (!allReposResponse.ok) {
            throw new Error(`GitHub API error! status: ${allReposResponse.status}`);
            }

            // 3. Get JSON with the correct types
            const pinnedReposData: PinnedRepo[] = await pinnedResponse.json();
            const allReposData: GitHubRepo[] = await allReposResponse.json();

            // 4. Create a Set of pinned repo names for efficient lookup
            const pinnedRepoNames = new Set(pinnedReposData.map(repo => repo.name));

            // 5. Filter the *full* repo list to find matches
            const fullPinnedRepos = allReposData.filter(repo =>
            pinnedRepoNames.has(repo.name)
            );

            // 6. Map the filtered data to your final 'Project' interface
            const finalProjects: Project[] = fullPinnedRepos.map(repo => ({
            name: repo.name,
            author: repo.owner.login, // Get author from the 'owner' object
            description: repo.description,
            language: repo.language,
            html_url: repo.html_url,
            topics:repo.topics
            }));
            
            // 7. Set the final, combined data
            setProjects(finalProjects);

            } catch (e) {
                if (e instanceof Error) {
                setError(e.message);
                } else {
                setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();

    }, []); // Empty dependency array to run once on mount

    // --- Render logic ---
    console.log(projects);
    if (loading) return <h1 className="flex flex-row justify-center text-2xl py-50">Loading projects...</h1>;
    if (error) return <p>Error fetching projects: {error}</p>;
    if (projects.length === 0) {
            return <p>No projects found.</p>;
        }

        // 4. This is where your components are rendered
        return (
            <div className="my-10">
                {projects.map(project => (
                    <ProjectCard 
                        key={project.name}
                        name={project.name}
                        description={project.description}
                        author={project.author}
                        language={project.language}
                        html_url={project.html_url}
                        topics = {project.topics}
                    />
                ))}
            </div>
                
        );
}


export default Projects;