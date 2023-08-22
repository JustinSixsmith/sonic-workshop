import { Project } from "@/typings";
import Link from "next/link";

const fetchTracks = async () => {
  const res = await fetch(
    "https://64c4022067cfdca3b6608e88.mockapi.io/project",
  );
  const projects: Project[] = await res.json();
  return projects;
};

async function ProjectList() {
  const projects = await fetchTracks();

  return (
    <>
      {projects.map((project) => (
        // eslint-disable-next-line react/jsx-key
        <p>
          <Link href={`/projects/${project.id}`}>
            Track name: {project.name}
          </Link>
        </p>
      ))}
    </>
  );
}

export default ProjectList;
