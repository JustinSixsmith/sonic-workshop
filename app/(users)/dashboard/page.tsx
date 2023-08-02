import CalendarEvents from "./CalendarEvents";
import GroupOverview from "./GroupOverview";
import ProjectsOverview from "./ProjectsOverview";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";
import UserCard from "./UserCard";

function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="col-span-3 md:col-span-1">
        <UserCard />
        <QuickActions />
      </div>

      <div className="col-span-3 md:col-span-2">
        <ProjectsOverview />
        <GroupOverview />
      </div>

      <div className="col-span-3 md:col-span-1">
        <RecentActivity />
      </div>

      <div className="col-span-3 md:col-span-2">
        <CalendarEvents />
      </div>
    </div>
  );
}

export default Dashboard;
