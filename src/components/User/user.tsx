import './user.style.scss';
// import './home.style.css';
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import MiLogo from '../../assets/icons/MiLogo.svg';
import CharBlueIcon from '../../assets/dashboard/chart_blue_icon.svg'
import CharRedIcon from '../../assets/dashboard/chart_red_icon.svg'
import PolygonIcon from '../../assets/dashboard/polygon_icon.svg'
import SolanaIcon from '../../assets/dashboard/solana_icon.svg'
// import {ReactComponent as SolanaIcon} from '../../assets/dashboard/solana_icon.svg'
import { RefreshCw, X, Minus } from 'react-feather'

// import {CardComponent} from './CardComponent';
// import {TrendingPane} from './TrendingPane';
import Chart from 'react-apexcharts';
import {SearchResultPane} from './SearchResultPane';

function User() {
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"

  const [inputValues, setInputValues] = useState({});
  const [errors,setErrors] = useState({});

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("here");
  };

  const handleChange = (e:any)=> {
    const temp: {[key:string]: string} = inputValues;
    console.log(inputValues);
     temp[e.target.name] = e.target.value ;
     setInputValues(temp);
 }

  return (
    <Container fluid>
      <div className="user">
        <Col sm={12} xs={6}>
          <div className='dashboard_label' style={{color: labelColor}}>Customer Management</div>
          <div className='dashboard_sublabel pe-3' style={{color: subLabelColor}}>View, edit, and manage your customers</div>
        </Col>
        <Col className="dashboard_card me-5 mt-4 p-lg-4 p-sm-2" sm={12}>
          <div className='table_title font_size_14'>Customer Lookup</div>
          <Form  onSubmit={(e)=>handleSubmit}>
            <Row className='mt-3'>
              <Col lg={6} sm={12}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label >Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" className='placeholder_bg' name="username" onChange={(e)=>handleChange(e)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email address" className='placeholder_bg'  name="email" onChange={(e)=>handleChange(e)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicWallet">
                  <Form.Label>Wallet</Form.Label>
                  <Form.Control type="text" placeholder="Enter wallet address or type" className='placeholder_bg'   name="wallet" onChange={(e)=>handleChange(e)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicBlocked">
                  <Form.Label>Include blocked users?</Form.Label>
                  <div className='d-flex'>
                    <Form.Check type="radio" label="Yes" name="block_state" className='me-2' value="yes"   onChange={(e)=>handleChange(e)}/>
                    <Form.Check type="radio" label="No" name="block_state"  value="no" onChange={(e)=>handleChange(e)}/>
                  </div>
                </Form.Group>
              </Col>
              <Col lg={6} sm={12}>
                <Form.Group className="mb-3" controlId="formBasicCountry" >
                  <Form.Label>Country</Form.Label>
                  <Form.Select aria-label="Default select example" className='placeholder_bg'  name="country" onChange={(e)=>handleChange(e)}>
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
               
                <Form.Group className="mb-3" controlId="formBasicRegisteredTime">
                  <Form.Label>Registered Time</Form.Label>
                  <Form.Control type="text" placeholder="Enter registration time" className='placeholder_bg'  name="registertime" onChange={(e)=>handleChange(e)}/>
                  
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicIPAddress">
                  <Form.Label>IP Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter IP address" className='placeholder_bg'  name="ipaddress" onChange={(e)=>handleChange(e)} />
                </Form.Group>
                <div className='d-flex justify-content-end pt-3'>
                  <Button variant="primary" type="button" className='me-2 cancel_btn '>Cancel</Button>
                  <Button variant="primary" type="submit" className='submit_btn'>Submit </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col className="dashboard_card me-5 mt-4 p-lg-4 p-sm-2" sm={12}>
          <div className='table_title'>Search Result</div>
          <SearchResultPane />
        </Col>
      
      </div>
    </Container>
  );
}

export { User};
