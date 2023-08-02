import { Project, Track } from "@/typings";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type PageProps = {
  params: {
    projectId: string;
  };
};

const fetchProject = async (projectId: string) => {
  const res = await fetch(
    `https://64c4022067cfdca3b6608e88.mockapi.io/track/${projectId}`,
    { next: { revalidate: 60 } },
  );

  const project: Project = await res.json();
  return project;
};

async function ProjectPage({ params: { projectId } }: PageProps) {
  const project = await fetchProject(projectId);

  if (!project.id) return notFound();

  return (
    <div className="m-2, border-2 bg-[#CAD2C5] p-10 text-[#212936] shadow-lg">
      <p>
        #{project.id}: {project.name}
      </p>
      Users:{" "}
      {/* {project.tracks.map((track) => (
        // eslint-disable-next-line react/jsx-key
        <div key={track.id}>
          <p>{track.name}</p>
          <p>{track.fileUrl}</p>
        </div>
      ))} */}
      <p>For use in: {project.id}</p>
      <p className="mt-5 border-t border-gray-400 text-right">
        Users:{" "}
        {/* {project.users.map((user) => (
          // eslint-disable-next-line react/jsx-key
          <p key={user.id}>{user.name}</p>
        ))} */}
      </p>
    </div>
  );
}

export default ProjectPage;
