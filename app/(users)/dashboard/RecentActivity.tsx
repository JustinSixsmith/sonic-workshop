type ActivityProps = {
  project: string;
  activity: string;
  time: string;
};

export default function RecentActivity() {
  return (
    <section className="rounded-lg bg-212936 p-4 text-ebebeb shadow-lg">
      <h2 className="text-lg font-semibold text-cad2c5">Recent Activity</h2>
      <div className="mt-2 space-y-2">
        <Activity
          project="Project A"
          activity="Task 1 started"
          time="5 minutes ago"
        />
        <Activity
          project="Project B"
          activity="Task 2 completed"
          time="2 hours ago"
        />
        <Activity
          project="Project A"
          activity="Task 3 assigned"
          time="1 day ago"
        />
      </div>
    </section>
  );
}

const Activity: React.FC<ActivityProps> = ({ project, activity, time }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <span className="font-medium">{project}</span>
        <span>: {activity}</span>
      </div>
      <span className="text-sm text-gray-400">{time}</span>
    </div>
  );
};
