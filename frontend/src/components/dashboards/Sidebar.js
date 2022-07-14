import { Tabs, Tab } from "@mui/material";
import { tabData } from "../../Constants";

function Sidebar(props) {
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  const tabs = tabData.filter((tab) => tab.roles.includes(props.user.role));
  console.log("sidebar props", props);
  return (
    <div>
      <Tabs
        orientation="vertical"
        value={props.tabValue}
        onChange={props.setTabValue}
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        
        {tabs.map((tab, ind) => (
          <Tab label={tab.label} value={tab.index} {...a11yProps(ind)} />
        ))}
      </Tabs>
    </div>
  );
}

export default Sidebar;
