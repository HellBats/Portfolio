import ProjectCard from "../Components/ProjectCard";
import { useState, useEffect } from "react";
import useProfile from "../Hooks/store"; // Your Zustand store

// ... (Your 'Project', 'PinnedRepo', and 'GitHubRepo' interfaces remain the same) ...
export interface Project {
  name: string;
  author: string;
  description: string | null;
  language: string | null;
  html_url: string;
  topics: [string] | [];
}

interface PinnedRepo {
  name: string;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  owner: {
    login: string;
  };
  topics: [string];
}

const Projects = () => {
  // --- Local state for this component (for projects) ---
  const [projects, setProjects] = useState<Project[]>([]);
  const [profileloading, setLoading] = useState<boolean>(true); // This is for *projects* loading
  const [profilerror, setError] = useState<string | null>(null); // This is for *projects* error

  // --- Get state and actions from your Zustand store ---
  const { pro, loading, error, fetchData } = useProfile();

  // --- Effect 1: Fetch the profile data (from config.json) on mount ---
  useEffect(() => {
    fetchData();
  }, []); // Runs once on mount

  // --- Effect 2: Fetch projects *after* profile is loaded ---
  useEffect(() => {
    // Don't run if profile is loading or has no RepoName
    if (loading || !pro.RepoName) {
      return;
    }

    const fetchProjects = async () => {
      setLoading(true); // Start *projects* loading
      setError(null);

      try {
        const pinnedResponse = await fetch(
          "https://pinned.berrysauce.dev/get/" + pro.RepoName
        );
        const allReposResponse = await fetch(
          "https://api.github.com/users/" + pro.RepoName + "/repos"
        );

        if (!pinnedResponse.ok) {
          throw new Error(`Pinned API error! status: ${pinnedResponse.status}`);
        }
        if (!allReposResponse.ok) {
          throw new Error(`GitHub API error! status: ${allReposResponse.status}`);
        }

        const pinnedReposData: PinnedRepo[] = await pinnedResponse.json();
        const allReposData: GitHubRepo[] = await allReposResponse.json();

        const pinnedRepoNames = new Set(
          pinnedReposData.map((repo) => repo.name)
        );

        const fullPinnedRepos = allReposData.filter((repo) =>
          pinnedRepoNames.has(repo.name)
        );

        const finalProjects: Project[] = fullPinnedRepos.map((repo) => ({
          name: repo.name,
          author: repo.owner.login,
          description: repo.description,
          language: repo.language,
          html_url: repo.html_url,
          topics: repo.topics,
        }));

        setProjects(finalProjects);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false); // Stop *projects* loading
      }
    };

    fetchProjects();
  }, [pro.RepoName, loading]); // Dependency: Re-run if RepoName or profileLoading changes

  // --- Render logic ---

  // 1. Show profile loading state first
  if (loading)
    return (
      <h1 className="flex flex-row justify-center text-2xl py-50">
        Loading profile...
      </h1>
    );

  // 2. Show profile error
  if (error)
    return (
      <h1 className="flex flex-row justify-center text-2xl py-50">
        Error loading profile: {error}
      </h1>
    );

  // 3. Show *projects* loading state
  if (profileloading)
    return (
      <h1 className="flex flex-row justify-center text-2xl py-50">
        Loading projects...
      </h1>
    );

  // 4. Show *projects* error
  if (profilerror)
    return (
      <h1 className="flex flex-row justify-center text-2xl py-50">
        Err: {profilerror}
      </h1>
    );

  // 5. Show no projects found
  if (projects.length === 0) {
    return (
      <h1 className="flex flex-row justify-center text-2xl py-50">
        No Projects Found
      </h1>
    );
  }

  // 6. Render the projects
  return (
    <div className="my-10">
      {projects.map((project) => (
        <ProjectCard
          key={project.name}
          name={project.name}
          description={project.description}
          author={project.author}
          language={project.language}
          html_url={project.html_url}
          topics={project.topics}
        />
      ))}
    </div>
  );
};

export default Projects;