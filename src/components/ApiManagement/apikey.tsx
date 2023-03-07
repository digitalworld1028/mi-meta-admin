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
          props.changeFunc(!props.check);
         
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


function ApiKeys(props:any) {
  const [explicit, setExplicit] = useState(true);
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"

  const [validated, setValidated] = useState(false);

  const [ethCheck, setEthCheck] = useState(true);
  const [polygonCheck, setPolygonCheck] = useState(true);
  const [solanaCheck, setSolanaCheck] = useState(true);
  const [bitcoinCheck, setBitcoinCheck] = useState(true);
  const [tetherCheck, setTetherCheck] = useState(true);
  const [allowFixed, setAllowFixed] = useState(true);
  const [allowTimed, setAllowTimed] = useState(true);
  const [allowFree, setAllowFree] = useState(true);
  const [allowExplicit, setAllowExplicit] = useState(true);
  const [allowCredit, setAllowCredit] = useState(true);
  const [allowStripe, setAllowStrip] = useState(true);
  const [allowPaypal, setAllowPaypal] = useState(true);
  const [allowVenmo, setAllowVenmo] = useState(true);

  const [inputValues, setInputValues] = useState({});


  const handleSubmit = (event:any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    console.log("checkbox")
    console.log(ethCheck, polygonCheck, solanaCheck, bitcoinCheck, tetherCheck );
    console.log("radio")
    console.log(allowFixed, allowTimed, allowFree, allowExplicit, allowCredit, allowStripe, allowPaypal,allowVenmo);
    console.log("inputvalues");
    console.log(inputValues);
   
  };

  const handleChange = (e:any)=> {
    const temp: {[key:string]: string} = inputValues;
     temp[e.target.name] = e.target.value ;
     setInputValues(temp);
  }

  return (
      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <Row className='menusettings'>
          <Row  className="mt-3">
          <div className='sub_title mt-3 mb-5'>API KEYS (2/10)</div>
            <Col xl={9} lg={9} md={12} sm={12} className="mt-3">
              <Row>
                <Col  xl={2} lg={2} md={2} sm={2}>
                  <div className='up_label'>Time Created</div>
                </Col>
                <Col  xl={6} lg={5} md={5} sm={5}>
                  <div className='up_label'>API keys</div>
                </Col>
                <Col  xl={2} lg={1} md={1} sm={1}>
                  <div className='up_label'>Actions</div>
                </Col>
                <Col  xl={2} lg={1} md={1} sm={1}>
                  <div className='up_label'>Status</div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row  className="mt-3">
            <Col xl={9} lg={9} md={12} sm={12} className="mt-3 border-bottom pb-3">
              <Row>
                <Col xl={2} lg={2} md={2} sm={2}>
                  <div className='up_label'>May 11, 2022 12:03:09pm</div>
                </Col>
                <Col  xl={6} lg={5} md={5} sm={5}>
                  <div className='up_label mb-3'>Key Name: mi-meta development</div>
                  <Form.Group className="input_form" controlId="formBasicPassword" style={{marginBottom:"10px"}}>
                    <Col xl={2} lg={4} md={6} xs={12}>
                      <div className='up_label'>Public Key</div>
                    </Col>
                    <Col xl={10} lg={8} md={6} xs={12}>
                      <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg'
                      name='paypal_test_pub' onChange={(e)=>handleChange(e)}/>
                    </Col>
                  </Form.Group>
                  <Form.Group className="input_form" controlId="formBasicPassword">
                    <Col xl={2} lg={4} md={6} xs={12}>
                      <div className='up_label'>Secret Key</div>
                    </Col>
                    <Col xl={10} lg={8} md={6} xs={12}>
                      <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg'
                       name='paypal_test_sec' onChange={(e)=>handleChange(e)}/>
                    </Col>
                  </Form.Group>
                </Col>
                <Col  xl={2} lg={1} md={1} sm={1} >
                  <Button variant="primary" type="submit" className='edit_permission mb-1' style={{marginTop:"30px"}}> Edit Permissions </Button>
                  <Button variant="primary" type="button" className='view_log '>View Log</Button>
                </Col>
                <Col  xl={2} lg={1} md={1} sm={1}>
                  <div className='status'>Enabled</div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row  className="mt-3">
            <Col xl={9} lg={9} md={12} sm={12} className="mt-3 border-bottom pb-3">
              <Row>
                <Col xl={2} lg={2} md={2} sm={2}>
                  <div className='up_label'>May 11, 2022 12:03:09pm</div>
                </Col>
                <Col  xl={6} lg={5} md={5} sm={5}>
                  <div className='up_label mb-3'>Key Name: mi-meta development</div>
                  <Form.Group className="input_form" controlId="formBasicPassword" style={{marginBottom:"10px"}}>
                    <Col xl={2} lg={4} md={6} xs={12}>
                      <div className='up_label'>Public Key</div>
                    </Col>
                    <Col xl={10} lg={8} md={6} xs={12}>
                      <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg'
                      name='paypal_test_pub' onChange={(e)=>handleChange(e)}/>
                    </Col>
                  </Form.Group>
                  <Form.Group className="input_form" controlId="formBasicPassword">
                    <Col xl={2} lg={4} md={6} xs={12}>
                      <div className='up_label'>Secret Key</div>
                    </Col>
                    <Col xl={10} lg={8} md={6} xs={12}>
                      <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg'
                       name='paypal_test_sec' onChange={(e)=>handleChange(e)}/>
                    </Col>
                  </Form.Group>
                </Col>
                <Col  xl={2} lg={1} md={1} sm={1} >
                  <Button variant="primary" type="submit" className='edit_permission mb-1' style={{marginTop:"30px"}}> Edit Permissions </Button>
                  <Button variant="primary" type="button" className='view_log '>View Log</Button>
                </Col>
                <Col  xl={2} lg={1} md={1} sm={1}>
                  <div className='status'>Enabled</div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row  className="mt-3">
            <Col xl={9} lg={9} md={12} sm={12} className="mt-3 border-bottom pb-3">
              <Row>
                <Col xl={2} lg={2} md={2} sm={2}>
                  <div className='up_label'>May 11, 2022 12:03:09pm</div>
                </Col>
                <Col  xl={6} lg={5} md={5} sm={5}>
                  <div className='up_label mb-3'>Key Name: mi-meta development</div>
                  <Form.Group className="input_form" controlId="formBasicPassword" style={{marginBottom:"10px"}}>
                    <Col xl={2} lg={4} md={6} xs={12}>
                      <div className='up_label'>Public Key</div>
                    </Col>
                    <Col xl={10} lg={8} md={6} xs={12}>
                      <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg'
                      name='paypal_test_pub' onChange={(e)=>handleChange(e)}/>
                    </Col>
                  </Form.Group>
                  <Form.Group className="input_form" controlId="formBasicPassword">
                    <Col xl={2} lg={4} md={6} xs={12}>
                      <div className='up_label'>Secret Key</div>
                    </Col>
                    <Col xl={10} lg={8} md={6} xs={12}>
                      <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg'
                       name='paypal_test_sec' onChange={(e)=>handleChange(e)}/>
                    </Col>
                  </Form.Group>
                </Col>
                <Col  xl={2} lg={1} md={1} sm={1} >
                  <Button variant="primary" type="submit" className='edit_permission mb-1' style={{marginTop:"30px"}}> Edit Permissions </Button>
                  <Button variant="primary" type="button" className='view_log '>View Log</Button>
                </Col>
                <Col  xl={2} lg={1} md={1} sm={1}>
                  <div className='status'>Enabled</div>
                </Col>
              </Row>
            </Col>
          </Row>
         
          <div className='d-flex justify-content-start pt-5 mb-5 mt-3'>
            <Button variant="primary" type="button" className='edit_permission mb-1 me-3' onClick={props.func(!props.status)} >Genereate new key </Button>
            <Button variant="primary" type="button" className='edit_permission mb-1' style={{background:"#24D6A3"}}> Success </Button>
            
          </div>
        </Row>
    </Form>
    );
  }

export { ApiKeys};
