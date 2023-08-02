type TaskProps = {
  name: string;
  status: string;
};

export type StatusBadgeProps = {
  status: string;
};

export default function TaskSummary() {
  return (
    <section className="rounded-lg bg-212936 p-4 text-ebebeb shadow-lg">
      <h2 className="text-lg font-semibold text-cad2c5">Task Summary</h2>
      <div className="mt-2 space-y-2">
        <Task name="Mix Track 1" status="Completed" />
        <Task name="Record Vocals" status="In Progress" />
        <Task name="Edit Drums" status="Not Started" />
      </div>
    </section>
  );
}

const Task: React.FC<TaskProps> = ({ name, status }) => {
  return (
    <div className="flex items-center justify-between">
      <span>{name}</span>
      <StatusBadge status={status} />
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
