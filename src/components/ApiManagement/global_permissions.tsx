import './adminprofile.style.scss';
import {useState, useContext, useEffect} from 'react'
import { ThemeContext } from '../../providers';
import { Button, Row, Col, Form, Image, Tabs, Tab, Stack, Card, Dropdown, InputGroup } from 'react-bootstrap';
import {RoleConstant} from './constant'

function Custom_Chekbox(props:any) {
  return (
    <label>
      <input
        type="checkbox"
        onChange={() => {
          props.changeFunc(props.index,props.type);
         
        }}
      />
      <svg
        className={`checkbox ${props.check ? "checkbox--active" : ""}`}
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke={props.check ? "#fff" : "none"} 
        />
      </svg>
    </label>
  )
}


function GlobalPermissions() {
  const [explicit, setExplicit] = useState(true);
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"
  const [validated, setValidated] = useState(false);

  const [inputValues, setInputValues] = useState({});
  const [checkValues, setCheckValues] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [superCustom, setSuperCustom] = useState(true);


  const [rolePermission, setRolePermission] = useState({
    superAdmin:[{name:RoleConstant.CUSTOM, value:false},{name:RoleConstant.TRANSACTION, value:false},{name:RoleConstant.TOKEN, value:false},{name:RoleConstant.CONTENT, value:false},{name:RoleConstant.NOTIFICATION, value:true},{name:RoleConstant.SUPPORT, value:true},{name:RoleConstant.PERMISSIONS, value:true},{name:RoleConstant.API, value:true}], 
    admin:[{name:RoleConstant.CUSTOM, value:false},{name:RoleConstant.TRANSACTION, value:false},{name:RoleConstant.TOKEN, value:false},{name:RoleConstant.CONTENT, value:false},{name:RoleConstant.NOTIFICATION, value:true},{name:RoleConstant.SUPPORT, value:true},{name:RoleConstant.PERMISSIONS, value:true},{name:RoleConstant.API, value:true}], 
    manager:[{name:RoleConstant.CUSTOM, value:false},{name:RoleConstant.TRANSACTION, value:false},{name:RoleConstant.TOKEN, value:false},{name:RoleConstant.CONTENT, value:false},{name:RoleConstant.NOTIFICATION, value:true},{name:RoleConstant.SUPPORT, value:true},{name:RoleConstant.PERMISSIONS, value:true},{name:RoleConstant.API, value:true}]
  });



  const handleClickShowPassword = () => {
    const show = !showPassword;
    setShowPassword(show);
  };

  const handleChange = (e:any)=> {
    console.log("here")
    setValidated(false);
    console.log(e.target.type)
    const temp: {[key:string]: any} = inputValues;
     temp[e.target.name] = e.target.value ;
     temp["superCustom"] = superCustom
     if(temp["username"]=="admin" || temp["username"]=="Admin" ) {
        setValidated(true);
        return
     }
     setInputValues(temp);
  }
  const handleCheckBox = (i:any, type:String) => {
   if(type=="superAdmin") {
      var temp = rolePermission;
      temp.superAdmin[i].value = !temp.superAdmin[i].value;
      setRolePermission({...temp});
   }
   if(type=="admin") {
      var temp = rolePermission;
      temp.admin[i].value = !temp.admin[i].value;
      setRolePermission({...temp});
   }
   if(type=="manager") {
      var temp = rolePermission;
      temp.manager[i].value = !temp.manager[i].value;
      setRolePermission({...temp});
   }
  }


  const handleSubmit = (event:any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("123123",form)
      event.preventDefault();
      event.stopPropagation();
    }
    // setValidated(true);
    const temp: {[key:string]: string} = inputValues;
    console.log("inputValues");
    console.log(inputValues);
    console.log(rolePermission)
    
  };
 
  const superAdminRole = rolePermission.superAdmin;
  const adminRole = rolePermission.admin;
  const managerRole = rolePermission.manager;
  return (
    <Form onSubmit={handleSubmit} >
      <Row className='menusettings'>
        <Row className="d-flex align-items-center mb-3">
          <Row>
            <Col xl={2} lg={2} md={4} sm={4}>
              <div className='logo_image_title'>Roles & Permissions</div>
              <div className='logo_image_subtitle'>Choose what administrative features each role on your team has access to.</div>
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12} style={{borderBottom:"2px solid #979797", paddingBottom:"30px", paddingTop:"20px"}}>
              <Row>
                <div className='logo_image_title mt-4 mb-2'>Full Access Admin</div>
                {superAdminRole.map((item, i)=>
                   <Col xl={3} lg={3} md={6} sm={6} className="currency_block" key={i}>
                    <div className='logo_image_title mt-4 mb-2'>{item.name}</div>
                    <Custom_Chekbox check={item.value} changeFunc = {handleCheckBox} index = {i} type="superAdmin"/>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12} style={{borderBottom:"2px solid #979797", paddingBottom:"30px", paddingTop:"20px"}}>
              <Row>
                <div className='logo_image_title mt-4 mb-2'>Administrator</div>
                {adminRole.map((item, i)=>
                   <Col xl={3} lg={3} md={6} sm={6} className="currency_block" key={i}>
                    <div className='logo_image_title mt-4 mb-2'>{item.name}</div>
                    <Custom_Chekbox check={item.value} changeFunc = {handleCheckBox} index = {i} type="admin"/>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12} style={{borderBottom:"2px solid #979797", paddingBottom:"30px", paddingTop:"20px"}}>
              <Row>
                <div className='logo_image_title mt-4 mb-2'>Manager</div>
                {managerRole.map((item, i)=>
                   <Col xl={3} lg={3} md={6} sm={6} className="currency_block" key={i}>
                    <div className='logo_image_title mt-4 mb-2'>{item.name}</div>
                    <Custom_Chekbox check={item.value} changeFunc = {handleCheckBox} index = {i} type="manager"/>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        
       
          <Row>
            <Col xl={6} lg={6} md={12} sm={12} >
              <Row className="mb-3">
                <div className='logo_image_title mt-4 mb-2'>Add New User</div>
                <div className='logo_image_subtitle'>Choose what administrative features each role on your team has access to.</div>
              </Row>
              <Row>
                <Form.Group className="input_form" controlId="name">
                  <Form.Label className='up_label'>Name</Form.Label>
                  <Form.Control type="text" className='placeholder_bg' placeholder="Terry Hogan" name="name" onChange = {(e=>handleChange(e))}  />
                </Form.Group>
                <Form.Group className="input_form" controlId="username" style={{marginBottom:"2px"}} >
                  <Form.Label className='up_label'>Username</Form.Label>
                  <Form.Control type="text" placeholder="Admin" className='placeholder_bg'  name="username" onChange = {(e=>handleChange(e))} />
                </Form.Group>
                {validated && <div className='text-danger' style={{marginLeft:"74px",fontSize:"10px"}}>Username can not be Admin, Administrator, or User.  Please try again.</div>}
                <Form.Group className="input_form" controlId="displayname">
                  <Form.Label className='up_label'>Display Nmae</Form.Label>
                  <Form.Control type="text" placeholder="TerryAdmin" className='placeholder_bg' name="displayname" onChange = {(e=>handleChange(e))} />
                </Form.Group>
                
                <Form.Group className="input_form" controlId="email">
                  <Form.Label className='up_label'>Email</Form.Label>
                  <Form.Control type="email" placeholder="example@mail.com" className='placeholder_bg' name="email" onChange = {(e=>handleChange(e))} />
                </Form.Group>
                <Form.Group className="input_form" controlId="password" style={{position:"relative"}}>
                  <Form.Label className='up_label'>Password</Form.Label>
                  <Form.Control  type={showPassword ? "text" : "password"} placeholder="Enter email address" className='placeholder_bg'  name="password" onChange = {(e=>handleChange(e))}  />
                  {showPassword ? (
                      <img src="/icons/eye.svg" width={15} alt="eye" onClick={handleClickShowPassword} style={{position:"absolute", right:"20px"}} />
                    ) : (
                      <img src="/icons/eye.svg" alt="eye" onClick={handleClickShowPassword} style={{position:"absolute", right:"20px"}} />
                    )}
                </Form.Group>
               
                <Form.Group className="input_form" controlId="role">
                  <Form.Label className='up_label'>Role</Form.Label>
                  <Form.Control type="text" placeholder="Manager" className='placeholder_bg' name="role" onChange = {(e=>handleChange(e))} />
                </Form.Group>
                <Form.Group className="input_form" controlId="whitelistip">
                  <Form.Label className='up_label'>Whitelist IP</Form.Label>
                  <Form.Control type="text" placeholder="140.112.1.1" className='placeholder_bg' name="ip" onChange = {(e=>handleChange(e))} />
                </Form.Group>
              </Row>
            </Col>
          </Row>
        </Row>
        <div className='d-flex justify-content-start pt-5 mb-5 mt-3'>
          <Button variant="primary" type="submit" className='custom_btn me-2 '> Submit </Button>
          <Button variant="primary" type="button" className='cancel_btn '>Cancel</Button>
        </div>
      </Row>
  </Form>
  );
}

export { GlobalPermissions};
