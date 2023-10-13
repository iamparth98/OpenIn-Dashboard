import Dashboard from "../../components/dashboard/Dashboard";
import Sidebar from "../../components/sidebar/sidebar";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <section className="sidebarContainer">
          <Sidebar />
        </section>
        <section className="dashBoardContainer">
          <Dashboard />
        </section>
      </div>
    </div>
  );
}

export default Home;
