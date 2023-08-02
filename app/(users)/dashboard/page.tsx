import CalendarEvents from "./CalendarEvents";
import GroupOverview from "./GroupOverview";
import ProjectsOverview from "./ProjectsOverview";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";
import UserCard from "./UserCard";
import TaskSummary from "./TaskSummary";
import QuickStats from "./QuickStats";
import UploadedTracks from "./UploadedTracks";

const stats = { totalProjects: 5, totalTracks: 20, totalHours: 150 };
const tracks = [
  { id: 1, name: "Track 1", uploadDate: "2023-07-29", length: "3:00" },
  // More tracks...
];

function Dashboard() {
  return (
    <div className="flex flex-col gap-6 rounded bg-212936 p-4 text-ebebeb lg:flex-row">
      <div className="flex w-full flex-col space-y-6 lg:w-1/3">
        <UserCard />
        <QuickActions />
        <TaskSummary />
        <QuickStats {...stats} />
        <UploadedTracks tracks={tracks} />
      </div>

      <div className="flex w-full flex-col space-y-6 lg:w-2/3">
        <ProjectsOverview />
        <GroupOverview />
        <RecentActivity />
        <CalendarEvents />
      </div>
    </div>
  );
}

export default Dashboard;
