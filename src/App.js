import logo from "./logo.svg";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Shared/Sidebar/Sidebar";
import Test1 from "./Components/Test1/Test1";
import Test2 from "./Components/Test1/Test2";
import CreateTeam from "./Components/CreateTeam/CreateTeam";
import ManageTeam from "./Components/ManageTeam/ManageTeam";
import ManageUser from "./Components/ManageUser/ManageUser";
import CreateUser from "./Components/CreateUser/CreateUser";
import CardCommission from "./Components/CardCommission/CardCommission";
import LoanCommission from "./Components/LoanCommission/LoanCommission";
function App() {
  return (
    <div className="grid grid-cols-12 mt-5 mx-10">
      <div className="col-span-2 overflow-x-hidden ">
        <Sidebar />
      </div>

      <div className="col-span-10 ">
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/createteam/" element={<CreateTeam />} />
            <Route path="/createteam/:id" element={<CreateTeam />} />
            <Route path="/manageteam" element={<ManageTeam />} />
            <Route path="/manageuser" element={<ManageUser />} />
            <Route path="/manageuser/:userId" element={<ManageUser />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/cardcommission" element={<CardCommission />} />
            <Route path="/loanommission" element={<LoanCommission />} />

            <Route path="/test1" element={<Test1 />} />
            <Route path="/test2" element={<Test2 />} />
          </Routes>
        </Layout>
      </div>
    </div>
  );
}

export default App;
