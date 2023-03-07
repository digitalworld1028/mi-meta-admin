import {
  Row,
  Table,
  Stack,
  Image,
  Form,
  FormGroup,
  Button,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import React, { Component, useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
// import { BsFillPersonFill } from "react-icons/bs";
// import { MdOutlinePersonOutline, MdOutlineVisibility, MdOutlineVisibilityOff, MdOutlineVpnKey} from "react-icons/md";
import "../styles/adminlogin.scss";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    const show = !showPassword;
    setShowPassword(show);
  };
  return (
    <div className="login w-100">
      <img
        className="w-100"
        style={{ height: "100vh" }}
        src="/images/NotFound/404.png"
        alt="back"
      />
      <div className="notfound-container w-100">
        <Form className="login_form">
          <div style={{ textAlign: "center" }}>
            <Image src="/icons/logo.svg" className="logo_img mb-5" />
          </div>
          <div className="forget-title mb-4">Forgot your password?</div>
          <div className="forget-subtitle mb-4">Enter your email. An email link will be sent with instructions to reset your password if you have an account with mi-meta.</div>
          <InputGroup className="mb-3">
            <InputGroup.Text
              id="basic-addon1"
              style={{ borderRight: "none", paddingRight: "0px", color: "#999999" }}
            >
              <img src="/icons/account.svg" alt="user" width={15} />
            </InputGroup.Text>
            <FormControl
              placeholder="Email Address"
              aria-label="Username"
              aria-describedby="basic-addon1"
              style={{ borderLeft: "none", paddingLeft: "7px" }}
            />
          </InputGroup>
          <Row className="button_style mb-5 center">
            <Col sm={6} xs={12} className="mt-5" >
              <Button
                className="signin_btn w-100 me-sm-1 me-xs-0 forget_btn "
                onClick={() => navigate("/dashboard")}
                type="submit"
              >
                Reset My Password
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export { ForgetPassword };
