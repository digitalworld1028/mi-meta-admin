import { Navbar, Offcanvas, NavDropdown, Form, FormControl, Nav, Button } from "react-bootstrap";
import "./sidebar.style.scss";

const Sidebar = ({ show, setShow }: { show: boolean; setShow: (f: boolean) => void }) => {
  return (
    <Navbar.Offcanvas
      show={show}
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
      className="sidebar"
      // style={{width:240}}
    >
      <Offcanvas.Header closeButton onHide={() => setShow(false)}>
        <div style={{ display: "flex" }}>
          <img src="/icons/wallet.png" className="ps-4" />
          <Offcanvas.Title id="offcanvasNavbarLabel" style={{ color: "white" }}>
            My Wallet
          </Offcanvas.Title>
        </div>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-start flex-grow-1 pe-3">
          <Nav.Link href="#action1" className="wallet-item">
            <img src="/icons/sidebar/dashboard.png" width={20} />
            <span className="ps-3 text-light">Dashboard</span>
          </Nav.Link>
          <Nav.Link href="#action2" className="wallet-item">
            <img src="/icons/sidebar/customer.png" width={20} />
            <span className="ps-3 text-light">Customer Management</span>
          </Nav.Link>
          <Nav.Link href="#action2" className="wallet-item">
            <img src="/icons/sidebar/transaction.png" width={20} />
            <span className="ps-3 text-light">Transaction Management</span>
          </Nav.Link>
          <Nav.Link href="#action2" className="wallet-item">
            <img src="/icons/sidebar/token.png" width={20} />
            <span className="ps-3 text-light">Token Management</span>
          </Nav.Link>
          <Nav.Link href="#action2" className="wallet-item">
            <img src="/icons/sidebar/content.png" width={20} />
            <span className="ps-3 text-light">Content Management</span>
          </Nav.Link>
          <Nav.Link href="#action2" className="wallet-item">
            <img src="/icons/sidebar/notification.png" width={20} />
            <span className="ps-3 text-light">Notification Management</span>
          </Nav.Link>
          <Nav.Link href="#action2" className="wallet-item">
            <img src="/icons/sidebar/support.png" width={20} />
            <span className="ps-3 text-light">Support Management</span>
          </Nav.Link>
          <Nav.Link href="#action2" className="wallet-item">
            <img src="/icons/sidebar/roles.png" width={20} />
            <span className="ps-3 text-light">Roles & Permissions</span>
          </Nav.Link>
          <Nav.Link href="#action2" className="wallet-item">
            <img src="/icons/sidebar/api.png" width={20} />
            <span className="ps-3 text-light">API Management</span>
          </Nav.Link>
          <Nav.Link href="#action2" className="wallet-item">
            <img src="/icons/sidebar/profile.png" width={20} />
            <span className="ps-3 text-light">Profile</span>
          </Nav.Link>
          <Nav.Link href="#action2" className="wallet-item">
            <img src="/icons/sidebar/logout.png" width={20} />
            <span className="ps-3 text-light">Log Out</span>
          </Nav.Link>
        </Nav>
        {/* <Form className="d-flex">
          <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
};

// export { Sidebar };
export default Sidebar;
