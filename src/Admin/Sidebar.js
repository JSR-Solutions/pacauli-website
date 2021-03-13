import React from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import "../Styles/Sidebar.css";
import { MdDashboard } from "react-icons/md";
import { VscPackage} from "react-icons/vsc";
import { RiCustomerService2Fill } from "react-icons/ri";
import {AiFillFileAdd} from "react-icons/ai";
import "../Styles/Sidebar.scss";
import {GoPackage} from 'react-icons/go';

function Sidebar() {
  return (
    <div>
      <ProSidebar className="admin-dashboard-sidebar dashboard-sidebar">
        <SidebarHeader>
          <div className="admin-dashboard-sidebar-header-div">
            <h3 className="admin-dashboard-sidebar-heading">Admin Dashboard</h3>
          </div>
        </SidebarHeader>
        <Menu>
          <MenuItem icon={<MdDashboard />} className="sidebar-menu-item">
            <Link to="/admin/dashboard">Dashboard</Link>{" "}
          </MenuItem>
            <MenuItem icon={<VscPackage />} className="sidebar-menu-item">
              <Link to="/admin/allpackages">All Packages</Link>{" "}
            </MenuItem>
            {/* <MenuItem className="sidebar-menu-item">
              <Link to="/editpackages">Edit Packages</Link>{" "}
            </MenuItem> */}
            <MenuItem icon={<AiFillFileAdd />} className="sidebar-menu-item">
              <Link to="/admin/addpackage">Add Package</Link>{" "}
            </MenuItem>
          <MenuItem icon={<GoPackage />} className="sidebar-menu-item">
            <Link to="/admin/customrequests">Custom Package</Link>{" "}
          </MenuItem>
          <MenuItem
            icon={<RiCustomerService2Fill />}
            className="sidebar-menu-item"
          >
            <Link to="/admin/allenquiries">All Enquiries</Link>{" "}
          </MenuItem>
        </Menu>
        <SidebarFooter className="admin-dashboard-sidebar-footer">
          Copyright © PacAuli
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
