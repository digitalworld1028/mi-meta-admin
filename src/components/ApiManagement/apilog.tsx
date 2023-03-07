import './adminprofile.style.scss';
// import './home.style.css';
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col, Form, Image, Tabs, Tab, Stack, Card, Dropdown, InputGroup, FormGroup } from 'react-bootstrap';
import {ApiLogDetail} from './apilog_detail';




function ApiLog(props:any) {
  const [explicit, setExplicit] = useState(true);
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"

  const [logoLight, setLogoLight] = useState("");
  const [logoDark, setLogoDark] = useState("");
 
  const [mainColor, setMainColor] = useState("#8D3695");
  const [secondColor, setSecondColor] = useState("#F66C7D");
  const [gradienColor1, setGradientColor1] = useState("#4CE1B6");
  const [gradienColor2, setGradientColor2] = useState("#70BBFD");

  const [fontType, setFontType] = useState(0);
  const [searchval, setSearchval] = useState("");

  const [logList, setLogoList] = useState([
    {time:"May 11, 2022 12:03:09pm", result:true, ip:"18.116.187.201"}, 
    {time:"May 12, 2022 12:03:09pm", result:true, ip:"18.116.187.202"}, 
    {time:"May 13, 2022 12:03:09pm", result:true, ip:"18.116.187.203"}, 
    {time:"May 14, 2022 12:03:09pm", result:true, ip:"18.116.187.204"}, 
    {time:"May 15, 2022 12:03:09pm", result:true, ip:"18.116.187.205"}, 
    {time:"May 16, 2022 12:03:09pm", result:true, ip:"18.116.187.206"}, 
    {time:"May 17, 2022 12:03:09pm", result:true, ip:"18.116.187.207"}]);

  const [index, setIndex] = useState(0);

  const [enable, setEnable] = useState(true);
    
  const handleSubmit = (event:any) => {
    event.preventDefault();
  
  };

  const hanleClick = (i:any) => {
    console.log("index is :", i)
    setIndex(i)
    setEnable(!enable);

  }

  const handelEnable = () => {
    setEnable(!enable);
  }

  return (
    <Row className='p-3 appearence'>
      {enable ?  
      <Form  onSubmit={handleSubmit} >
        <Row>
          <Col xl={2} lg={2} md={4} sm={16}  className="mb-5" >
            <Form.Control
              type="search"
              placeholder="Search..."
              className={theme === "dark" ? "search-input-dark search-form" : "search-input-light"}
              aria-label="Search"
              value={searchval}
              onChange={(e:any) => setSearchval(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col xl={8} lg={8} md={12} sm={12} className="mb-3" >
              <Row>
                <Col className="up_label">Time</Col>
                <Col className="up_label text-center">Result</Col>
                <Col className="up_label text-center">IP Address</Col>
                <Col className="up_label text-center">View</Col>
              </Row>
           </Col>
        </Row>
      
        {logList.map((item,i)=>
          <Row key={i}>
            <Col xl={8} lg={8} md={12} sm={12}  className="mb-3" >
              <Row>
                <Col className="up_label">{item.time}</Col>
                <Col className="up_label text-center">{item.result ? <img src="/icons/Check.svg"/> :""}</Col>
                <Col className="up_label text-center">{item.ip}</Col>
                <Col className="up_label text-center">
                   <Button variant="primary" type="button" className='view_button mb-1 me-3' onClick={()=>hanleClick(i)}>View</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
        <div className='text-danger font_size_10'>NOTE: Log only contains the most recent 7 dyas or up to 2,500 API calls.</div>
      </Form> : <ApiLogDetail logList = {logList[index]} enable={enable} func = {()=>handelEnable}  />}
     
      
  </Row>
  );
}

export { ApiLog};
