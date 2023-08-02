import { HiOutlinePlus } from "react-icons/hi";

export default function QuickActions() {
  return (
    <section className="rounded-lg bg-212936 p-4 text-ebebeb shadow-lg">
      <h2 className="text-lg font-semibold text-cad2c5">Quick Actions</h2>
      <div className="mt-2 space-y-2">
        <button className="flex items-center space-x-2 text-337180 hover:text-d64933">
          <HiOutlinePlus className="flex-shrink-0" />
          <span>Create New Project</span>
        </button>
        <button className="flex items-center space-x-2 text-337180 hover:text-d64933">
          <HiOutlinePlus className="flex-shrink-0" />
          <span>Add New Member</span>
        </button>
        <button className="flex items-center space-x-2 text-337180 hover:text-d64933">
          <HiOutlinePlus className="flex-shrink-0" />
          <span>Upload New Track</span>
        </button>
        <button className="flex items-center space-x-2 text-337180 hover:text-d64933">
          <HiOutlinePlus className="flex-shrink-0" />
          <span>Invite Collaborator</span>
        </button>
      </div>
    </section>
  );
}
