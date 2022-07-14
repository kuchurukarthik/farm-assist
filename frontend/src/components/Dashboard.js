import React, { useEffect, useState } from "react";
import {
  AUTHENTICATED,
  ROLE,
  roles,
  userStructure,
  URLS,
  tabData,
} from "../Constants";
import { useNavigate } from "react-router-dom";
import { DefaultRoutes } from "../AppRoutes";
import { dashboardStyles } from "../Styles";
import Menubar from "./dashboards/Menubar";
import axios from "axios";
import Sidebar from "./dashboards/Sidebar";

function Dashboard(props) {
  let navigate = useNavigate();
  const [role, setRole] = useState(localStorage.getItem(ROLE));
  const [user, setUser] = useState(userStructure);
  const [tabValue, setTabValue] = useState(0);

  const getUserDetails = async () => {
    const url = `${URLS.base}${URLS[role.toLowerCase()]}${
      URLS.user
    }${localStorage.getItem("email")}`;
    console.log(url);
    const response = await axios.get(url);
    console.log(response.data);
    setUser({
      email: response.data.email,
      name: response.data.firstName + " " + response.data.lastName,
      role: response.data.role,
    });
    localStorage.setItem('sellerId',response.data.id);
  };

  useEffect(() => {
    if (!(localStorage.getItem(AUTHENTICATED) && localStorage.getItem(ROLE))) {
      console.log("both details not present", localStorage.getItem(ROLE));
      navigate([DefaultRoutes[0].path]);
    } else {
      console.log(localStorage.getItem(ROLE));
      getUserDetails();
    }
  }, []);

  return (
    <div id="dashboard" style={dashboardStyles.dashboard}>
      <div id="menubar" style={dashboardStyles.menubar}>
        <Menubar user={user} />
      </div>
      <div id="body" style={dashboardStyles.body}>
        <div id="sidebar" style={dashboardStyles.sidebar}>
          <Sidebar
            user={user}
            tabValue={tabValue}
            setTabValue={(e, index) => setTabValue(index)}
          />
        </div>
        <div id="tabdata" style={dashboardStyles.tabdata}>
          {tabData[tabValue].component}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

{
  /* <>{role === roles[0] && <AdminDashboard />}</>
      <>{role === roles[1] && <FarmerDashboard />}</>
      <>{role === roles[2] && <TraderDashboard />}</> */
}
