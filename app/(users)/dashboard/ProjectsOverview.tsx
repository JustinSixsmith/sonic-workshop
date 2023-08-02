import { StatusBadgeProps } from "./TaskSummary";

type ProjectProps = {
  name: string;
  status: string;
};

export default function ProjectsOverview() {
  return (
    <section className="rounded-lg bg-212936 p-4 text-ebebeb shadow-lg">
      <h2 className="text-lg font-semibold text-cad2c5">Projects Overview</h2>
      <div className="mt-2 space-y-2">
        <Project name="Project A" status="In Progress" />
        <Project name="Project B" status="Not Started" />
        <Project name="Project C" status="Completed" />
      </div>
    </section>
  );
}

const Project: React.FC<ProjectProps> = ({ name, status }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <span className="font-medium">{name}</span>
        <StatusBadge status={status} />
      </div>
      <a href="#" className="text-337180 hover:text-cad2c5">
        View
      </a>
    </div>
  );
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let color;

  if (status === "Completed") {
    color = "text-green-500";
  } else if (status === "In Progress") {
    color = "text-yellow-500";
  } else {
    color = "text-red-500";
  }

  return <span className={`rounded-md px-2 py-1 ${color}`}>{status}</span>;
};
