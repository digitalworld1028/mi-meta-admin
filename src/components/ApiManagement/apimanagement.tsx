import './adminprofile.style.scss';
import { useLocation } from 'react-router-dom'
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col, Form, Image, Tabs, Tab, Stack, Card, Dropdown } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import MiLogo from '../../assets/icons/MiLogo.svg';

import {ApiKeys} from './apikey';
import {NewApiKey} from './new_apikey';
import {ApiLog} from './apilog';
import {ApiLogDetail} from './apilog_detail';




function APIManagement() {
  const [explicit, setExplicit] = useState(true);
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"
  const [showApiKey, setShowApiKey] = useState(true);
  const [showApiLog, setShowApiLog] = useState(true);

  const changeKeyScreen = ()=> {
    console.log("changeKeyScreen")
    var temp = showApiKey;
    setShowApiKey(!temp);
  }
  const changeLogScreen = ()=> {
    console.log("changeLogScreen")
    console.log(showApiLog)
    var temp = showApiLog;
    setShowApiLog(!temp);
  }

  const location = useLocation();
  console.log("show API key : ", showApiKey)
  console.log("show Log : ", showApiLog)
  return (
    <Container fluid>
      <div className="adminprofile" >
      
        <Col sm={12} xs={6}>
          <div className='d-flex'>
            <div><img src={MiLogo} className="dashboard_image"/></div>
            <div className='dashboard_label' style={{color: labelColor}}>Dashboard</div>
          </div>
         <div className='dashboard_sublabel' style={{color: subLabelColor}}>Let's do awesome things today</div>
        </Col>
        <Col  className="mt-4 ">
            <div className='dashboard_card '>
              <div className='title_style'>API Management</div>
              <Tabs defaultActiveKey="api_key" id="uncontrolled-tab-example" className="mb-3 ps-3 mt-5 ">
                <Tab eventKey="api_key" title="API Keys">
                  {showApiKey ? <ApiKeys func = {()=>changeKeyScreen} status={showApiKey} />: <NewApiKey func = {()=>changeKeyScreen} status={showApiKey} />}
                  
                   {/* <ApiKeys /> */}
                </Tab>
                <Tab eventKey="api_log" title="API Log">
                  <ApiLog />
                  {/* {showApiLog ? <ApiLog func = {()=>changeLogScreen} status={showApiLog} /> : <ApiLogDetail func = {()=>changeLogScreen} status={showApiLog} />} */}
                </Tab>
                {/* <Tab eventKey="api_log_detail" title="API Log Detail">
                  <ApiLogDetail />
                </Tab> */}
                
              </Tabs>
            </div>
          </Col>
      </div>
    </Container>
  );
}

export { APIManagement};
