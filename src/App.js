import "./App.css";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Shared/Sidebar/Sidebar";
import Test2 from "./Components/Test1/Test2";
import CreateTeam from "./Components/CreateTeam/CreateTeam";
import ManageTeam from "./Components/ManageTeam/ManageTeam";
import ManageUser from "./Components/ManageUser/ManageUser";
import CreateUser from "./Components/CreateUser/CreateUser";
import CardCommission from "./Components/CardCommission/CardCommission";
import LoanCommission from "./Components/LoanCommission/LoanCommission";
import CardCommissionList from "./Components/CardCommissionList/CardCommissionList";
import LoanCommissionList from "./Components/LoanCommissionList/LoanCommissionList";
import VRMList from "./Components/VRMList/VRMList";
import VRMAccount from "./Components/VRMAccount/VRMAccount";
import Account from "./Components/Account/Account";
import LeadList from "./Components/LeadList/LeadList";
import Agent from "./Components/Agent/Agent";
import NewLead from "./Components/LeadList/NewLead/NewLead";
import PaymentStatus from "./Components/PaymentStatus/PaymentStatus";
import PaymentHistory from "./Components/PaymentStatus/PaymentHistory";
import Feature from "./Components/Feature/Feature";
import Inbox from "./Components/Inbox/Inbox";

function App() {
  return (
    <div className="grid grid-cols-12 mt-5 mx-10">
      <div className=" hidden lg:block col-span-2 overflow-x-hidden ">
        <Sidebar />
      </div>

      <div className=" lg:col-span-10 col-span-12 ">
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
            <Route path="/cclist" element={<CardCommissionList />} />
            <Route path="/loancommission" element={<LoanCommission />} />
            <Route path="/lclist" element={<LoanCommissionList />} />
            <Route path="/vrmlist" element={<VRMList />} />
            <Route path="/vrmaccount/:vrmID" element={<VRMAccount />} />
            <Route path="/account" element={<Account />} />
            <Route path="/leadlist" element={<LeadList />} />
            <Route path="/newagent" element={<Agent />} />
            <Route path="/newlead" element={<NewLead />} />
            <Route path="/paymentstatus" element={<PaymentStatus />} />
            <Route path="/paymenthistory" element={<PaymentHistory />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/test2" element={<Test2 />} />
          </Routes>
        </Layout>
      </div>
    </div>
  );
}

export default App;
