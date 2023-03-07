import './adminprofile.style.scss';
// import './home.style.css';
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col, Form, Image, Tabs, Tab, Stack, Card, Dropdown, InputGroup, FormGroup } from 'react-bootstrap';




function ApiLogDetail(props:any) {
  const [explicit, setExplicit] = useState(true);
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"

 
  const [logList, setLogoList] = useState([{time:"May 11, 2022 12:03:09pm", result:true, ip:"18.116.187.201"}]);

  const handleSubmit = (event:any) => {
    event.preventDefault();
  
  };
  console.log("---------------------------")
  console.log(props.logList.time)
  
  return (
    <Row className='p-3 appearence'>
      <Form  onSubmit={handleSubmit} >
        <Row>
          <Col xl={6} lg={6} md={12} sm={12} >
            <Row>
              <Col xl={2} lg={2} md={4} sm={6}  className="mb-5 up_label" >Time</Col>
              <Col   className="mb-5 up_label" >{props.logList.time}</Col>
            </Row>
            <Row>
              <Col xl={2} lg={2} md={4} sm={6}  className="mb-5 up_label" >Result</Col>
              <Col   className="mb-5 up_label" ><img src={`icons/Check.svg`} /></Col>
            </Row>
            <Row>
              <Col xl={2} lg={2} md={4} sm={6}  className="mb-5 up_label" >IP Address</Col>
              <Col   className="mb-5 up_label" >{props.logList.ip}</Col>
            </Row>
            <Row>
              <Col xl={2} lg={2} md={4} sm={6}  className="mb-5 up_label" >Raw Request</Col>
              <Col  className="mb-5" >
                <textarea name="rawrequest"   placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus quis nibh diam eget ridiculus sit in habitasse. Nunc amet sagittis dignissim nulla pharetra. Quisque ut sed eget magna venenatis quis. Malesuada augue aliquam pretium quis sagittis. Pellentesque dignissim suspendisse id libero massa. Fringilla laoreet vulputate elit consequat sit id cum orci, lorem. Semper eget tortor vulputate praesent risus. Metus pharetra, risus aliquet urna. Non, odio varius libero " className='placeholder_bg' style={{height:"200px"}} maxLength={500}></textarea>
              </Col>
            </Row>
            <Row>
              <Col xl={2} lg={2} md={4} sm={6}  className="mb-5 up_label" >Request Variables</Col>
              <Col  className="mb-5" >
                <textarea name="requestvariable"   placeholder="" className='placeholder_bg' style={{height:"200px"}} maxLength={500}></textarea>
              </Col>
            </Row>
            <Row>
              <Col xl={2} lg={2} md={4} sm={6}  className="mb-5 up_label" >Reply</Col>
              <Col  className="mb-5" >
                <textarea name="reply"   placeholder=" " className='placeholder_bg' style={{height:"200px"}} maxLength={500}></textarea>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className='d-flex justify-content-start pt-5 mb-5 mt-3'>
            {/* <Button variant="primary" type="button" className='edit_permission mb-1 me-3' onClick={props.func(!props.status)} >Back to Log</Button> */}
            <Button variant="primary" type="button" className='edit_permission mb-1 me-3' onClick={props.func(!props.enable)} >Back to Log</Button>
          </div>
     
        
        
      </Form>
      
  </Row>
  );
}

export { ApiLogDetail};
