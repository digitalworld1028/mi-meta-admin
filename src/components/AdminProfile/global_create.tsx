import './adminprofile.style.scss';
// import './home.style.css';
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col, Form, Image, Tabs, Tab, Stack, Card, Dropdown } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';




function GlobalCreate() {
  const [explicit, setExplicit] = useState(true);
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"


  const [allow721, setAllow721] = useState(true);
  const [allow1155, setAllow1155] = useState(true);
  const [allowDTC, setAllowDTC] = useState(true);
  const [allowEthereum, setAllowEthereum] = useState(true);
  const [allowSolana, setAllowSolana] = useState(true);
  const [allowPolygon, setAllowPolygon] = useState(true);

  

 
  
  const handleSubmit = (event:any) => {
    event.preventDefault();
   
    console.log(allow721, allow1155, allowDTC, allowEthereum, allowSolana, allowPolygon)
    
  };
  return (
    <Form onSubmit={handleSubmit} >
      <Row className='menusettings'>
          <Col xl={4} lg={4} md={12} xs={12}>
            <Row className="d-flex align-items-center mb-3">
              <Col xl={6} lg={6} md={6} sm={6}>
                <div className='logo_image_title'>NFT/DTC Types Allowed</div>
                <div className='logo_image_subtitle'>Use these settings to determine what types of NFT/DTC your users are allowed to create.</div>
              </Col>
              <Row>
                <div className='logo_image_title mt-4'>ERC-721</div>
                <div className='d-flex align-items-center mt-2 mb-3'>
                  <div className='up_label'>Off</div>
                  <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs'  checked={allow721} onChange={()=>setAllow721(!allow721)}/>
                  <div className='up_label ms-2'>On</div>
                </div>
              </Row>
              <Row>
                <div className='logo_image_title mt-4'>ERC-1155</div>
                <div className='d-flex align-items-center mt-2 mb-3'>
                  <div className='up_label'>Off</div>
                  <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={allow1155} onChange={()=>setAllow1155(!allow1155)}/>
                  <div className='up_label ms-2'>On</div>
                </div>
              </Row>
              <Row>
                <div className='logo_image_title mt-4'>Fractional DTC</div>
                <div className='d-flex align-items-center mt-2 mb-3'>
                  <div className='up_label'>Off</div>
                  <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={allowDTC} onChange={()=>setAllowDTC(!allowDTC)}/>
                  <div className='up_label ms-2'>On</div>
                </div>
              </Row>
            </Row>
            <Row className="d-flex align-items-center mb-3">
              <Col xl={6} lg={6} md={6} sm={6}>
                <div className='logo_image_title'>Blockchain Options</div>
                <div className='logo_image_subtitle'>Choose which blockchains you can create NFTs/DTCs .</div>
              </Col>
              <Row>
                <div className='logo_image_title mt-4'>Etherium <img src={'icons/dashboard/ethereum-logo.png'} style={{width:"10px", marginLeft:"5px"}}/></div>
                <div className='d-flex align-items-center mt-2 mb-3'>
                  <div className='up_label'>Off</div>
                  <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={allowEthereum} onChange={()=>setAllowEthereum(!allowEthereum)}/>
                  <div className='up_label ms-2'>On</div>
                </div>
              </Row>
              <Row>
                <div className='logo_image_title mt-4'>Solana<img src={'icons/dashboard/solana-logo.png'} style={{width:"10px", marginLeft:"5px"}}/></div>
                <div className='d-flex align-items-center mt-2 mb-3'>
                  <div className='up_label'>Off</div>
                  <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={allowSolana} onChange={()=>setAllowSolana(!allowSolana)}/>
                  <div className='up_label ms-2'>On</div>
                </div>
              </Row>
              <Row>
                <div className='logo_image_title mt-4'>Polygon<img src={'icons/dashboard/polygon-logo.png'} style={{width:"10px", marginLeft:"5px"}}/></div>
                <div className='d-flex align-items-center mt-2 mb-3'>
                  <div className='up_label'>Off</div>
                  <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={allowPolygon} onChange={()=>setAllowPolygon(!allowPolygon)}/>
                  <div className='up_label ms-2'>On</div>
                </div>
              </Row>
            </Row>
          </Col>
          <div className='d-flex justify-content-start pt-5 mb-5 mt-3'>
            <Button variant="primary" type="submit" className='custom_btn me-2 '> Submit </Button>
            <Button variant="primary" type="button" className='cancel_btn '>Cancel</Button>
          </div>
      </Row>
  </Form>
  );
}

export { GlobalCreate};
