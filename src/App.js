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
import EditTeam from "./Components/EditTeam/EditTeam";
import VRMListEdit from "./Components/VRMList/VRMListEdit";
import AddFeature from "./Components/AddFeature/AddFeature";
import EditLeadList from "./Components/LeadList/EditLeadList/EditLeadList";
import EditCardCommissionList from "./Components/CardCommissionList/EditCardCommissionList";
import EditVRMList from "./Components/VRMCommission/EditVRMList";
import Editfeature from "./Components/Feature/Editfeature/Editfeature";
import ViewFeature from "./Components/Feature/ViewFeature/ViewFeature";
import ViewUser from "./Components/ManageUser/ViewUser";
import EditLoanComission from "./Components/EditLoanComission/EditLoanComission";
import TestCardComission from "./Components/Test1/TestCardComission/TestCardComission";
import SpecialCommission from "./Components/SpecialCommission/SpecialCommission";
import SpecialCommissionList from "./Components/SpecialCommissionList/SpecialCommissionList";
import Login from "./Components/Authentication/login/Login";
import SpecialCommissionEdit from "./Components/SpecialCommissionEdit/SpecialCommissionEdit";
import SpecialCommissionView from "./Components/SpecialCommissionView/SpecialCommissionView";
import PrivateRoute from "./Components/Authentication/login/PrivateRoute/PrivateRoute";
import { useSelector } from "react-redux";
import CardCommissionCardView from "./Components/CardCommissionCardView/CardCommissionCardView";
import LoanCommissionView from "./Components/LoanCommissionView/LoanCommissionView";
import SubmittedLead from "./Components/SubmittedLead/SubmittedLead";
import SubmittedLeadView from "./Components/SubmittedLead/SubmittedLeadView";

function App() {
  const { token, user_data } = useSelector((state) => state.reducer.user);
  console.log("from App", user_data);
  return (
    <div className="grid grid-cols-12 mt-5 mx-5">
      {user_data?.username && (
        <div className=" hidden lg:block col-span-2 overflow-x-hidden ">
          <Sidebar />
        </div>
      )}

      <div
        className={`${
          user_data?.username ? "lg:col-span-10" : "lg:col-span-12"
        }  col-span-12 `}
      >
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/createteam/" element={<CreateTeam />} />
            <Route path="/createteam/:id" element={<EditTeam />} />
            <Route path="/manageteam" element={<ManageTeam />} />
            <Route path="/manageuser" element={<ManageUser />} />
            <Route path="/manageuser/:userId" element={<ManageUser />} />
            <Route path="/vieweuser/:id" element={<ViewUser />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/cardcommission" element={<CardCommission />} />
            <Route path="/cclist" element={<CardCommissionList />} />
            <Route path="/cclist/:id" element={<EditCardCommissionList />} />
            <Route
              path="/cclistview/:id"
              element={<CardCommissionCardView />}
            />
            <Route path="/vrmedit/:id" element={<EditVRMList />} />
            <Route path="/loancommission" element={<LoanCommission />} />
            <Route path="/lclist" element={<LoanCommissionList />} />
            <Route path="/viewloan/:id" element={<LoanCommissionView />} />
            <Route path="/editloan/:id" element={<EditLoanComission />} />
            <Route path="/vrmlist" element={<VRMList />} />
            <Route path="/vrmlist/:id" element={<VRMListEdit />} />
            <Route path="/vrmaccount/:vrmID" element={<VRMAccount />} />
            <Route path="/account" element={<Account />} />
            <Route path="/leadlist" element={<LeadList />} />
            <Route path="/leadlist/:id" element={<EditLeadList />} />
            <Route path="/newagent" element={<Agent />} />
            <Route path="/newlead" element={<NewLead />} />
            <Route path="/paymentstatus" element={<PaymentStatus />} />
            <Route path="/paymenthistory/:id" element={<PaymentHistory />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/addfeature" element={<AddFeature />} />
            <Route path="/editfeature/:id" element={<Editfeature />} />
            <Route path="/viewfeature/:id" element={<ViewFeature />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route
              path="/specialcommission/:id"
              element={<SpecialCommission />}
            />
            <Route
              path="/specialcommissionList"
              element={<SpecialCommissionList />}
            />
            <Route
              path="/specialcommissionedit/:id"
              element={<SpecialCommissionEdit />}
            />
            <Route path="/scview/:id" element={<SpecialCommissionView />} />
            <Route path="/submittedelead" element={<SubmittedLead />} />
            <Route path="/slview/:id" element={<SubmittedLeadView />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test2" element={<Test2 />} />
            <Route path="/test" element={<TestCardComission />} />
          </Routes>
        </Layout>
      </div>
    </div>
  );
}

export default App;
