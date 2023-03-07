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
import React, { Component, useContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
// import { BsFillPersonFill } from "react-icons/bs";
// import { MdOutlinePersonOutline, MdOutlineVisibility, MdOutlineVisibilityOff, MdOutlineVpnKey} from "react-icons/md";
import "../styles/adminlogin.scss";
import axios from 'axios'
import Config from '../config'
import { toast } from 'react-toastify';

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, sendEmailVerification  } from "firebase/auth";
import {firebaseConfig} from "../utils/service_config";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errors,setErrors] = useState({});
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  const google_provider = new GoogleAuthProvider();
  google_provider.setCustomParameters({ prompt: 'select_account' });

  const googleLogin = () => {
    console.log("clicked")
    signInWithPopup(auth, google_provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("user info")
      console.log(user)
      navigate('/dashboard');
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
  });
  }
  

  const handleClickShowPassword = () => {
    const show = !showPassword;
    setShowPassword(show);
  };
  const handleSubmit=(e:any)=> {
    e.preventDefault();
    if(validate()){
      // signInWithEmailAndPassword(auth, email, password)
      //   .then((userCredential) => {
      //     // Signed in 
      //     const user = userCredential.user;
      //     if(!user.emailVerified) {
      //     }
      //     // ...
      //   })
      //   .catch((error) => {
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      // });
      let body = {email:email, password:password}
      axios.post(`${Config.baseUrl}/api/auth/customer_login`, body).then(function(res) {

          localStorage.setItem("authority", res.data.authority);
          localStorage.setItem("id", res.data.user_id);
          navigate('/dashboard')

      }).catch(function(err){
        console.log(err.response.data)
        // toast.info(err.response.data);
        alert(err.response.data)
      });
    }
  }
  const validate=()=> {
    const temperrors: {[key:string]: string} = {};
    let isValid = true;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
    if (!email) {
      isValid = false;
      temperrors["email"] = "Please enter your email.";
    }
    else if (!re.test(email) ) {
      isValid = false;
      temperrors["email"] = "Please input email format.";
    }


    if (!password) {
      isValid = false;
      temperrors["password"] = "Please enter your password.";
    }

    setErrors(temperrors);

    return isValid;
  }
  const displayerrors: {[key:string]: string} = errors;


 
 
  return (
    <div className="login w-100">
      <img
        className="w-100"
        style={{ height: "100vh" }}
        src="/images/NotFound/404.png"
        alt="back"
      />
      <div className="notfound-container w-100">
        <Form className="login_form" onSubmit={(e)=>handleSubmit} autoComplete="off">
          <div style={{ textAlign: "center" }}>
            <Image src="/icons/logo.svg" className="logo_img mb-5" />
          </div>
          <div className="white mb-2">Username </div>
          <InputGroup className="mb-3">
            <InputGroup.Text
              id="basic-addon1"
              style={{ borderRight: "none", paddingRight: "0px", color: "#999999" }}
            >
              <img src="/icons/account.svg" alt="user" width={15} />
            </InputGroup.Text>
            <FormControl
              placeholder="Email"
              name="email"
              aria-describedby="basic-addon1"
              style={{ borderLeft: "none", paddingLeft: "7px", color:"white" }}
              onChange={(e)=>setEmail(e.target.value)}
            />
            
          </InputGroup>
          <div className="text-danger" style={{marginTop:"-14px", fontSize:"12px"}}>{displayerrors.email}</div>
          <div className="white mb-2">Password</div>
          <InputGroup>
            <InputGroup.Text
              id="basic-addon1"
              style={{ borderRight: "none", paddingRight: "0px", color: "#999999" }}
            >
              <img src="/icons/key.svg" alt="key" width={15} />
            </InputGroup.Text>
            <FormControl
              placeholder="Password"
              // aria-label="Password"
             
              name="password"
              aria-describedby="basic-addon1"
              style={{ borderLeft: "none", borderRight: "none", paddingLeft: "7px" ,color:"white" }}
              type={showPassword ? "text" : "password"}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <InputGroup.Text style={{ color: "#999999", borderLeft: "none" }}>
              {showPassword ? (
                <img src="/icons/eye-slash.svg" width={15} alt="eye" onClick={handleClickShowPassword} />
              ) : (
                <img src="/icons/eye.svg" width={15} alt="eye-slash" onClick={handleClickShowPassword} />
              )}
            </InputGroup.Text>
          </InputGroup>
          <div className="text-danger" style={{fontSize:"12px"}}>{displayerrors.password}</div>
          <div className="mb-1" style={{ textAlign: "right" }}>
            <a  href="/forgetpassword" style={{ color: "#70BBFD", textDecoration: "none", textAlign: "right" }}>
              Forget password?
            </a>
          </div>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Row className="button_style mb-5">
            <Col sm={6} xs={12}>
              <Button
                className="signin_btn w-100 me-sm-1 me-xs-0"
                onClick={(e) =>handleSubmit(e)}
                type="button"
              >
                Sign In
              </Button>
            </Col>
            <Col sm={6} xs={12}>
              <Button className="create_btn w-100  ms-sm-1 ms-xs-0 mt-xs-2" type="submit">
                Create Account
              </Button>
            </Col>
          </Row>
          <div className="w-100 ">
            <Stack direction="horizontal" className="justify-content-between">
              <div className="white_line"></div>
              <div className="text-light">Or Easily Using</div>
              <div className="white_line"></div>
            </Stack>
            <Stack direction="horizontal" className="justify-content-center d-flex mt-3">
              <div className="pr-10">
                {" "}
                <img src="/icons/facebook.png" style={{ height: "50px" }} />
              </div>
              <div className="pr-10" onClick={()=>googleLogin()} >
                {" "}
                <img src="/icons/google.png" style={{ height: "50px" }} />
              </div>
            </Stack>
          </div>
        </Form>
      </div>
    </div>
  );
};

export { SignIn };
