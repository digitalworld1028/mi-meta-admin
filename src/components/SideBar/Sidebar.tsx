import { Nav } from "react-bootstrap";
import "./sidebar.style.scss";

const Sidebar = () => {
  return (
    <Nav style={{ flexDirection: "column" }} className="justify-content-start flex-grow-1 pe-3">
      <div>
        <Nav.Link href="/dashboard" className="wallet-item">
          <img alt="dashboard" src="/icons/sidebar/dashboard.svg" width={15} height={15} />
          <span className="sidebar-link-item ps-1">Dashboard</span>
        </Nav.Link>
      </div>
      <div>
        <Nav.Link href="/customer" className="wallet-item">
          <img alt="customer" src="/icons/sidebar/customer.svg" width={15} height={15} />
          <span className="sidebar-link-item ps-1">Customer Management</span>
        </Nav.Link>
      </div>
      <div>
        <Nav.Link href="#action2" className="wallet-item">
          <img alt="transaction" src="/icons/sidebar/transaction.svg" width={15} height={15} />
          <span className="sidebar-link-item ps-1">Transaction Management</span>
        </Nav.Link>
      </div>
      <div>
        <Nav.Link href="#action2" className="wallet-item">
          <img alt="token" src="/icons/sidebar/token.svg" width={15} height={15} />
          <span className="sidebar-link-item ps-1">Token Management</span>
        </Nav.Link>
      </div>
      <div>
        <Nav.Link href="#action2" className="wallet-item">
          <img alt="content" src="/icons/sidebar/content.svg" width={15} height={15} />
          <span className="sidebar-link-item ps-1">Content Management</span>
        </Nav.Link>
      </div>
      <div>
        <Nav.Link href="#action2" className="wallet-item">
          <img alt="notification" src="/icons/sidebar/notification.svg" width={15} height={15} />
          <span className="sidebar-link-item ps-1">Notification Management</span>
        </Nav.Link>
      </div>
      <div>
        <Nav.Link href="#action2" className="wallet-item">
          <img alt="support" src="/icons/sidebar/support.svg" width={15} height={15} />
          <span className="sidebar-link-item ps-1">Support Management</span>
        </Nav.Link>
      </div>
      <div>
        <Nav.Link href="#action2" className="wallet-item">
          <img alt="roles" src="/icons/sidebar/roles.svg" width={15} height={15} />
          <span className="sidebar-link-item ps-1">Roles & Permissions</span>
        </Nav.Link>
      </div>
      <div>
        <Nav.Link href="/apimanagement" className="wallet-item">
          <img alt="api" src="/icons/sidebar/api.svg" width={15} height={15} />
          <span className="sidebar-link-item ps-1">API Management</span>
        </Nav.Link>
      </div>
      <div>
        <Nav.Link href="/profile" className="wallet-item">
          <img alt="profile" src="/icons/sidebar/global_settings.svg" width={15} height={15} />
          <span className="sidebar-link-item ps-1">Global Settings</span>
        </Nav.Link>
      </div>
      <hr className="sidebar-hr" />
      <div>
        <Nav.Link href="#action2" className="wallet-item">
          <img alt="logout" src="/icons/sidebar/logout.svg" width={15} height={15} />
          <span className="sidebar-link-item ps-1">Log Out</span>
        </Nav.Link>
      </div>
    </Nav>
  );
};

// export { Sidebar };
export default Sidebar;
