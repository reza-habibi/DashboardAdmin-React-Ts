import "./Sidebar.Style.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  AttachMoney,
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink
              exact
              activeClassName="active"
              to={(location) => ({ ...location, pathname: "/" })}
              className="link"
            >
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcons" />
                Home
              </li>
            </NavLink>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcons" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <NavLink
              activeClassName="active"
              to={(location) => ({ ...location, pathname: "/users" })}
              className="link"
            >
              <li className="sidebarListItem ">
                <PermIdentity className="sidebarIcons" />
                Users
              </li>
            </NavLink>

            <NavLink
              activeClassName="active"
              to={(location) => ({ ...location, pathname: "/products" })}
              className="link"
            >
              <li className="sidebarListItem">
                <Storefront className="sidebarIcons" />
                Products
              </li>
            </NavLink>

            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcons" />
              Transaction
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcons" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutline className="sidebarIcons" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcons" />
              FeedBack
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcons" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <WorkOutline className="sidebarIcons" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcons" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
