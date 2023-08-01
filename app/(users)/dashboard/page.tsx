import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div>
      <p>Welcome to the Dashboard!</p>
      <Sidebar />
      <Main />
      {/* This is where the main content will go. You can replace this with routing logic based on the selected section. */}
    </div>
  );
}

export default Dashboard;
