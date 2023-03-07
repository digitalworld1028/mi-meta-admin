import {
  Navbar,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
  Nav,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import Sidebar from "../SideBar/Sidebar";
import "./wrapper.style.scss";

const Wrapper = (props: any) => {
  return (
    <div style={{ display: "flex" }}>
      <div className="sidebar">
        <div style={{ width: 240 }}>
          <div className="d-flex align-items-center ps-2 mb-4">
            <div className="p-2 more-btn">
              <img src="/icons/sidebar/more.svg" alt="more" />
            </div>
            <div className="p-2 ps-3 logo-btn">
              <img src="/icons/sidebar/logo.png" alt="logo" />
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
      <div className="content-wrapper">{props.children}</div>
    </div>
  );
};

export { Wrapper };
