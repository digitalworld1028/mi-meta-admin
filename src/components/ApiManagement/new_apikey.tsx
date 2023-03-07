import './adminprofile.style.scss';
// import './home.style.css';
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col, Form, Image, Tabs, Tab, Stack, Card, Dropdown } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

function Custom_Chekbox(props:any) {
  return (
    <label>
      <input
        type="checkbox"
        onChange={() => {
          props.changeFunc(props.index);
         
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


function NewApiKey(props:any) {
  const [explicit, setExplicit] = useState(true);
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"

  const [logoImage, setLogoImage] = useState("");
  const [customLogo, setCustomLogo] = useState(false);
  const [inputValues, setInputValues] = useState({});
  const [keyEnable, setKeyEnable] = useState(true);
  const [keyName, setKeyName] = useState("");
  const [restrictIp, setRestrictIp] = useState("");

  const [keyPermission, setKeyPermission] = useState([{name:"get_basic_info", value:true}, {name:"set_basic_info", value:true}, {name:"create_transaction", value:true},{name:"get_tx_info", value:false},{name:"get_callback_address", value:true}, {name:"update_user", value:true}, {name:"create_user", value:true}])
 
  
const onLogoChagne = (e:any) => {
  e.preventDefault();
  console.log("logoimage")
  let file = e.target.files[0];
  let fileReader = new FileReader();

  fileReader.onloadend = () => {
      console.log(fileReader.result)
      if (fileReader.result !== null) {
        setLogoImage(fileReader.result.toString())
      }
      
  };
  console.log(fileReader.result)
  fileReader.readAsDataURL(file)
};

const handleChange = (e:any)=> {
  const temp: {[key:string]: string} = inputValues;
  const { name, value } = e.target;
  temp[name] = value;
  setInputValues(temp);
}


const handleCheckBox= (i:any) => {
  var temp = keyPermission;
  temp[i].value = !temp[i].value;
  setKeyPermission([...temp]);
}

const submitHandle = (e:any) => {
  e.preventDefault();
 
  console.log(keyPermission)
  console.log(keyEnable);
  console.log(keyName);
}



  return (
    <Form onSubmit={submitHandle}>
      <Row className='menusettings'>
        <Row className='border-bottom'>
          <Col xl={5} lg={5} md={12} xs={12}>
            <Row className="d-flex align-items-center mb-3">
              <Col xl={6} lg={6} md={6} sm={6}>
                <div className='logo_image_title'>API Key Settings</div>
                <div className='logo_image_subtitle'>Use these settings to customize wht functions this API key can access. For maximum security leave all commands disabled unless you are using them.</div>
              </Col>
            </Row>
            <Row>
              <Col xl={6} lg={6} md={6} sm={6} className="d-flex align-itmes-center mb-3">
                <div className='logo_image_title me-2 mt-1'>API Key Enabled</div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => {
                      setKeyEnable(!keyEnable)
                      
                      }}
                    />
                    <svg
                      className={`checkbox ${keyEnable ? "checkbox--active" : ""}`}
                      aria-hidden="true"
                      viewBox="0 0 15 11"
                      fill="none"
                    >
                      <path
                        d="M1 4.5L5 9L14 1"
                        strokeWidth="2"
                        stroke={keyEnable ? "#fff" : "none"} 
                      />
                    </svg>
                  </label>
                </div>
              </Col>
            </Row>
            <Row className="d-flex align-items-center mb-3">
              <Col  xl={2} lg={2} md={2} sm={2} >
                  <div className='logo_image_title'>Key Name</div>
                  <div className='logo_image_subtitle'>(optional)</div>
              </Col>
              <Col  xl={10} lg={10} md={10} sm={10}>
                  <Form.Control type="text" placeholder="example@mail.com" className='placeholder_bg font_default_color w-100' value={keyName} onChange={(e)=>{setKeyName(e.target.value)}}   />
                  <div className='logo_image_subtitle'>The key name is just for your reference in case you have multiple keys to help remind you what it is used for.</div>
              </Col>
            </Row>
            <Row className="d-flex align-items-center mb-3">
              <Col  xl={2} lg={2} md={2} sm={2} >
                  <div className='logo_image_title'>Restrict to IP Range</div>
              </Col>
              <Col  xl={10} lg={10} md={10} sm={10}>
                  <Form.Control type="text" placeholder="1.1.1.1-23" className='placeholder_bg font_default_color w-100' value={restrictIp} onChange={(e)=>{setRestrictIp(e.target.value)}}  />
                  <div className='logo_image_subtitle'>Allowed formats single IP xxx.xxx.xxx.xxx or CIDR range xxx.xxx.xxx.xxx/yyy You may have multiple entries separated with a semicolon (;) For example: 127.0.0.1;127.0.0.2</div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xl={5} lg={5} md={12} xs={12}>
            <Row className="d-flex align-items-center mb-3 mt-3">
              <Col xl={6} lg={6} md={6} sm={6}>
                <div className='logo_image_title'>API Key Permissions</div>
              </Col>
            </Row>
            <Row className="d-flex align-items-center mb-3 mt-3">
              <Col xl={10} lg={10} md={10} sm={10}>
                <div className='logo_image_title text-center'>Command</div>
              </Col>
              <Col xl={2} lg={2} md={2} sm={2}>
                <div className='logo_image_title text-center'>Allow Access</div>
              </Col>
            </Row>
            {keyPermission.map((item,i)=>
              <Row className="d-flex align-items-center mb-3 mt-3" key={i}>
                <Col xl={10} lg={10} md={10} sm={10}>
                  <div className='logo_image_title'>{item.name}</div>
                </Col>
                <Col xl={2} lg={2} md={2} sm={2} className="text-center">
                  <Custom_Chekbox check={item.value} changeFunc = {handleCheckBox} index = {i} />
                </Col>
              </Row>
            )}
            
          </Col>
        </Row>
          
        <div className='d-flex justify-content-start pt-5 mb-5 mt-3'>
          <Button variant="primary" type="submit" className='custom_btn me-2'> Save </Button>
          {/* <a href="/apimanagement"><Button variant="primary" type="button" className='cancel_btn '>Cancel</Button></a> */}
         <Button variant="primary" type="button" className='cancel_btn ' onClick = {props.func(!props.status)}>Cancel</Button>
        </div>
      </Row>
  </Form>
  );
}

export { NewApiKey};
