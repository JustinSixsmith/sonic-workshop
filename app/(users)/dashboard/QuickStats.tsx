// QuickStats component
interface QuickStatsProps {
  totalProjects: number;
  totalTracks: number;
  totalHours: number;
}

const QuickStats: React.FC<QuickStatsProps> = ({
  totalProjects,
  totalTracks,
  totalHours,
}) => {
  return (
    <div className="rounded-lg bg-blue-500 p-4 text-white shadow-md">
      <h2 className="mb-2 text-xl font-bold">Quick Stats</h2>
      <p>Total Projects: {totalProjects}</p>
      <p>Total Tracks: {totalTracks}</p>
      <p>Total Hours: {totalHours}</p>
    </div>
  );
};

export default QuickStats;
