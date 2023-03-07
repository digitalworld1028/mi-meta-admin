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


function GlobalMarketplace() {
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
          <Row className="d-flex align-items-center mb-3">
            <Col xl={2} lg={2} md={4} sm={4}>
              <div className='logo_image_title'>NFT/DTC Types Allowed</div>
              <div className='logo_image_subtitle'>Use these settings to determine what types of NFT/DTC your users are allowed to create.</div>
              <Row>
                <div className='logo_image_title mt-4'>Fixed Price</div>
                <div className='d-flex align-items-center mt-2 mb-3'>
                  <div className='up_label'>Off</div>
                  <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={allowFixed} onChange={()=>setAllowFixed(!allowFixed)}/>
                  <div className='up_label ms-2'>On</div>
                </div>
              </Row>
              <Row>
                <div className='logo_image_title mt-4'>Timed Auction</div>
                <div className='d-flex align-items-center mt-2 mb-3'>
                  <div className='up_label'>Off</div>
                  <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={allowTimed} onChange={()=>setAllowTimed(!allowTimed)}/>
                  <div className='up_label ms-2'>On</div>
                </div>
              </Row>
              <Row>
                <div className='logo_image_title mt-4'>Free / Promotional</div>
                <div className='d-flex align-items-center mt-2 mb-3'>
                  <div className='up_label'>Off</div>
                  <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={allowFree} onChange={()=>setAllowFree(!allowFree)}/>
                  <div className='up_label ms-2'>On</div>
                </div>
              </Row>
              <Row>
                <div className='logo_image_title mt-4'>Allow Explicit Content</div>
                <div className='d-flex align-items-center mt-2 mb-3'>
                  <div className='up_label'>Off</div>
                  <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={allowExplicit} onChange={()=>setAllowExplicit(!allowExplicit)} />
                  <div className='up_label ms-2'>On</div>
                </div>


              </Row>
              <div className='logo_image_title'>Currency Collection</div>
              <div className='logo_image_subtitle'>Use these settings to determine what types of currency is collected in your marketplace</div>
            </Col>
          </Row>
          <Row>
            <Col xl={4} lg={3} md={4} sm={4}>
                <Row>
                  <Col xl={4} lg={4} md={4} sm={4} className="currency_block">
                    <div className='logo_image_title mt-4 mb-2'>Etherium (ETH) <img src={'icons/dashboard/ethereum-logo.png'} style={{width:"10px", marginLeft:"5px"}}/></div>
                    <Custom_Chekbox check = {ethCheck} changeFunc = {setEthCheck} />
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={4} className="currency_block">
                    <div className='logo_image_title mt-4 mb-2'>Polygon (MATIC)<img src={'icons/dashboard/polygon-logo.png'} style={{width:"10px", marginLeft:"5px"}}/></div>
                    <Custom_Chekbox check = {polygonCheck} changeFunc = {setPolygonCheck} />
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={4} className="currency_block">
                    <div className='logo_image_title mt-4 mb-2'>Solana (SOL) <img src={'icons/dashboard/solana-logo.png'} style={{width:"10px", marginLeft:"5px"}}/></div>
                    <Custom_Chekbox check = {solanaCheck} changeFunc = {setSolanaCheck} />
                  </Col>
                </Row>
                <Row>
                  <Col xl={4} lg={4} md={4} sm={4} className="currency_block">
                    <div className='logo_image_title mt-4 mb-2'>Bitcoin (BTC) <img src={'icons/dashboard/btc.svg'} style={{width:"15px", marginLeft:"5px"}}/></div>
                    <Custom_Chekbox check = {bitcoinCheck} changeFunc = {setBitcoinCheck} />
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={4} className="currency_block">
                    <div className='logo_image_title mt-4 mb-2'>Tether (USDT)<img src={'icons/dashboard/usdt.svg'} style={{width:"10px", marginLeft:"5px"}}/></div>
                    <Custom_Chekbox check = {tetherCheck} changeFunc = {setTetherCheck} />
                  </Col>
                </Row>

                <Row>
                  <div className='logo_image_title mt-4'>Accept Credit Cards</div>
                  <div className='d-flex align-items-center mt-2 mb-3'>
                    <div className='up_label'>Off</div>
                    <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs'  checked={allowCredit} onChange={()=>setAllowCredit(!allowCredit)} />
                    <div className='up_label ms-2'>On</div>
                  </div>
              </Row>
            </Col>
          </Row>
          <Row  className="mt-3">
            <div><img src={'icons/stripe.svg'} alt="stripe"/></div>
            <Col xl={6} lg={6} md={6} sm={6} className="mt-3">
              <Row>
                <Col  xl={4} lg={4} md={12} sm={12}>
                  <div className='d-flex align-items-center mt-2 mb-3'>
                    <div className='up_label'>Test</div>
                    <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={allowStripe} onChange={()=>setAllowStrip(!allowStripe)} />
                    <div className='up_label ms-2'>Production</div>
                  </div>
                  <div className='logo_image_subtitle'>Be sure to disable Test Mode before going live!</div>
                </Col>
                <Col  xl={8} lg={8} md={12} sm={12}>
                  <div className='up_label mb-3'>Test Mode API Keys</div>
                  <Form.Group className="input_form" controlId="formBasicPassword">
                    <Col xl={2} lg={4} md={6} xs={12}>
                      <div className='up_label'>Public Key</div>
                    </Col>
                    <Col xl={10} lg={8} md={6} xs={12}>
                      <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg' 
                      name='stripe_test_pub' onChange={(e)=>handleChange(e)} required/>
                    </Col>
                  </Form.Group>
                  <Form.Group className="input_form" controlId="formBasicPassword">
                    <Col xl={2} lg={4} md={6} xs={12}>
                      <div className='up_label'>Secret Key</div>
                    </Col>
                    <Col xl={10} lg={8} md={6} xs={12}>
                      <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg'
                      name='stripe_test_sec' onChange={(e)=>handleChange(e)}/>
                    </Col>
                  </Form.Group>
                  <div className='up_label mb-3'>Production API Keys</div>
                  <Form.Group className="input_form" controlId="formBasicPassword">
                    <Col xl={2} lg={4} md={6} xs={12}>
                      <div className='up_label'>Public Key</div>
                    </Col>
                    <Col xl={10} lg={8} md={6} xs={12}>
                      <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg'
                      name='stripe_produc_pub' onChange={(e)=>handleChange(e)}/>
                    </Col>
                  </Form.Group>
                  <Form.Group className="input_form" controlId="formBasicPassword">
                    <Col xl={2} lg={4} md={6} xs={12}>
                      <div className='up_label'>Secret Key</div>
                    </Col>
                    <Col xl={10} lg={8} md={6} xs={12}>
                      <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg'
                      name='stripe_produc_sec' onChange={(e)=>handleChange(e)}/>
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row  className="mt-3">
            <div><img src={'icons/paypal.svg'} alt="paypal"/></div>
            <Col xl={6} lg={6} md={6} sm={6} className="mt-3">
              <Row>
                <Col  xl={4} lg={4} md={12} sm={12}>
                  <div className='d-flex align-items-center mt-2 mb-3'>
                    <div className='up_label'>Test</div>
                                
                    <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={allowPaypal} onChange={()=>setAllowPaypal(!allowPaypal)} />
                    <div className='up_label ms-2'>Production</div>
                  </div>
                  <div className='logo_image_subtitle'>Be sure to disable Test Mode before going live!</div>
                </Col>
                <Col  xl={8} lg={8} md={12} sm={12}>
                  <div className='up_label mb-3'>Test Mode API Keys</div>
                  <Form.Group className="input_form" controlId="formBasicPassword">
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
                  <div className='up_label mb-3'>Production API Keys</div>
                  <Form.Group className="input_form" controlId="formBasicPassword">
                    <Col xl={2} lg={4} md={6} xs={12}>
                      <div className='up_label'>Public Key</div>
                    </Col>
                    <Col xl={10} lg={8} md={6} xs={12}>
                      <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg'
                       name='paypal_produc_pub' onChange={(e)=>handleChange(e)}/>
                    </Col>
                  </Form.Group>
                  <Form.Group className="input_form" controlId="formBasicPassword">
                    <Col xl={2} lg={4} md={6} xs={12}>
                      <div className='up_label'>Secret Key</div>
                    </Col>
                    <Col xl={10} lg={8} md={6} xs={12}>
                      <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg'
                       name='paypal_produc_sec' onChange={(e)=>handleChange(e)}/>
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row  className="mt-3">
            <div><img src={'icons/venmo.svg'} alt="venmo"/></div>
            <Col xl={6} lg={6} md={6} sm={6} className="mt-3">
              <Row>
                <Col  xl={4} lg={4} md={12} sm={12}>
                  <div className='d-flex align-items-center mt-2 mb-3'>
                    <div className='up_label'>Test</div>
                    <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={allowVenmo} onChange={()=>setAllowVenmo(!allowVenmo)} />
                    <div className='up_label ms-2'>Production</div>
                  </div>
                  <div className='logo_image_subtitle'>Be sure to disable Test Mode before going live!</div>
                </Col>
                <Col  xl={8} lg={8} md={12} sm={12}>
                  <div className='up_label mb-3'>Test Mode API Keys</div>
                  <Form.Group className="input_form" controlId="formBasicPassword">
                    <Col xl={2} lg={4} md={6} xs={12}>
                      <div className='up_label'>Public Key</div>
                    </Col>
                    <Col xl={10} lg={8} md={6} xs={12}>
                      <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg'
                       name='venmo_test_pub' onChange={(e)=>handleChange(e)}/>
                    </Col>
                  </Form.Group>
                  <Form.Group className="input_form" controlId="formBasicPassword">
                    <Col xl={2} lg={4} md={6} xs={12}>
                      <div className='up_label'>Secret Key</div>
                    </Col>
                    <Col xl={10} lg={8} md={6} xs={12}>
                      <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg'
                       name='venmo_test_sec' onChange={(e)=>handleChange(e)}/> 
                    </Col>
                  </Form.Group>
                  <div className='up_label mb-3'>Production API Keys</div>
                  <Form.Group className="input_form" controlId="formBasicPassword">
                    <Col xl={2} lg={4} md={6} xs={12}>
                      <div className='up_label'>Public Key</div>
                    </Col>
                    <Col xl={10} lg={8} md={6} xs={12}>
                      <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg'
                       name='venmo_produc_pub' onChange={(e)=>handleChange(e)}/> 
                      
                    </Col>
                  </Form.Group>
                  <Form.Group className="input_form" controlId="formBasicPassword">
                    <Col xl={2} lg={4} md={6} xs={12}>
                      <div className='up_label'>Secret Key</div>
                    </Col>
                    <Col xl={10} lg={8} md={6} xs={12}>
                      <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg'
                      name='venmo_produc_sec' onChange={(e)=>handleChange(e)}/>
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
          
        
          <div className='d-flex justify-content-start pt-5 mb-5 mt-3'>
            <Button variant="primary" type="submit" className='custom_btn me-2 '> Submit </Button>
            <Button variant="primary" type="button" className='cancel_btn '>Cancel</Button>
          </div>
        </Row>
    </Form>
    );
  }

export { GlobalMarketplace};
