import './userdetail.style.scss';
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col, Form, Image, Tabs, Tab } from 'react-bootstrap';
import { ReactComponent as DiscordIcon } from '../../assets/icons/social_icon/discord.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/social_icon/instagram.svg';
import { ReactComponent as YouTubeIcon } from '../../assets/icons/social_icon/twitter.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/social_icon/youtube.svg';
import { ReactComponent as WomenIcon } from '../../assets/women.svg';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function UserDetail() {
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"
  const [explicit, setExplicit] = useState(true);
  const iconColor = {
    background: 'linear-gradient(180deg, #70BCFD -19.23%, #403896 -19.22%, #8D3695 51.86%, #BB2E69 117.49%)',
    color:'#DDDDDD'
  }
 
  return (
    <Container fluid>
      <div className="userdetail">
        <Col>
          <div className='dashboard_label' style={{color: labelColor}}>Customer Management</div>
          <div className='dashboard_sublabel pe-3' style={{color: subLabelColor}}>View, edit, and manage your customers</div>
        </Col>
        <Row>
          
          <Col lg={4} md={6} sm={12} className="mt-4">
            <div className='dashboard_card'>
              <div className='p-3 d-flex' style={{borderBottom:"1px solid #3A3A40"}}>
                <WomenIcon  className="user_avatar me-3" />
                <div className='user_info'>
                    <div className='user_name font_default_color font_size_13 font_weight_900 mt-2'>aldo_raine45</div>
                    <div className='default_color font_size_13 font_weight_400 mb-2 '>aldoraine45@gmail.com</div>
                    <Button className='custom_btn mb-2'>Message User</Button>
                    <div className='social d-flex'>
                        <DiscordIcon className="social_icon me-1" />
                        <TwitterIcon className="social_icon me-1"/>
                        <YouTubeIcon className="social_icon me-1"/>
                        <InstagramIcon className="social_icon me-1"/>
                    </div>
                </div>
              </div>
              <Row className='collection_info d-flex pt-2 pb-3'>
                <Col sm={4} xs={4}>
                  <div className='collection_number'>05</div>
                  <div className='collection_label'>Collections</div>
                </Col>
                <Col sm={4} xs={4}>
                  <div className='collection_number'>05</div>
                  <div className='collection_label'>Collections</div>
                </Col>
                <Col sm={4} xs={4}>
                  <div className='collection_number'>05</div>
                  <div className='collection_label'>Collections</div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={8} md={6} sm={12} className="mt-4">
            <div className='dashboard_card'>
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 ps-3">
                <Tab eventKey="home" title="PROFILE INFO" style={{color:"white"}}>
                  <Row className='p-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className='up_label'>Username</Form.Label>
                      <Form.Control type="text" placeholder="Enter username" className='placeholder_bg' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className='up_label'>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email address" className='placeholder_bg' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className='up_label'>Wallet</Form.Label>
                      <Form.Control type="text" placeholder="Enter wallet address or type" className='placeholder_bg' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className='up_label'>Registered Time</Form.Label>
                      <Form.Control type="password" placeholder="Enter registration time" className='placeholder_bg' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className='up_label'>Bio</Form.Label>
                      <Form.Control type="text" placeholder="Enter IP address" className='placeholder_bg' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Label className='up_label'>Block User</Form.Label>
                      <p className='block_sub_label'>The user will receive an email informing then that they have been blocked from the system.</p>
                      <div className='d-flex align-items-center'>
                        <div className='up_label'>Unblocked</div> 
                        <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={explicit} onChange={()=>setExplicit(!explicit)}/>
                        <div className='up_label ms-2'>Blocked</div>
                      </div>
                    </Form.Group>
                    <div className='d-flex justify-content-start pt-3'>
                      <Button variant="primary" type="submit" className='custom_btn me-2 '>Update profile </Button>
                      <Button variant="primary" type="button" className='cancel_btn '>Cancel</Button>
                    </div>
                  </Row>
                </Tab>
                <Tab eventKey="profile" title="TIMELINE">
                  <Row className='p-3'>
                    <VerticalTimeline lineColor="grey">
                      <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{ background: '#2A2A31'}}
                          contentArrowStyle={{ borderRight: '7px solid #2A2A31' }}
                          // date="2011 - present"
                          iconStyle={{ background: iconColor.background}}
                          // icon={<div style={{border:"0px"}}></div>}
                      >
                          <div className="timeline-title mb-1">Customer blocked</div>
                          <div className="timeline-date mb-1">Ann Jones- Customer Service</div>
                          <div className="timeline-date mb-2">06-12-2022 4:00pm</div>
                          <div className="timeline-content">Dependent certainty off discovery him his tolerably offending. Ham for attention remainder sometimes additions recommend fat our.</div>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{ background: '#2A2A31'}}
                          contentArrowStyle={{ borderRight: '7px solid #2A2A31' }}
                          // date="2011 - present"
                          iconStyle={{ background: iconColor.background}}
                          // icon={<WorkIcon />}
                      >
                          <div className="timeline-title mb-1">Video conference with customer</div>
                          <div className="timeline-date mb-1">Ann Jones - Customer Service Manager</div>
                          <div className="timeline-date mb-2">06-12-2022 3:30pm</div>
                          <div className="timeline-content">Object remark lively all did feebly excuse our wooded. Old her object chatty regard vulgar missed. Speaking throwing breeding betrayed children my to. Me marianne no he horrible produced ye.</div>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{ background: '#2A2A31'}}
                          contentArrowStyle={{ borderRight: '7px solid #2A2A31' }}
                          // date="2011 - present"
                          iconStyle={{ background: iconColor.background}}
                          // icon={<WorkIcon />}
                      >
                          <div className="timeline-title mb-1">internal note</div>
                          <div className="timeline-date mb-1">Jeff Crosson - Customer Service Agent</div>
                          <div className="timeline-date mb-2">05-22-2022 1:45pm</div>
                          <div className="timeline-content">Dependent certainty off discovery him his tolerably offending. Ham for attention remainder sometimes additions recommend fat our.</div>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{ background: '#2A2A31'}}
                          contentArrowStyle={{ borderRight: '7px solid #2A2A31' }}
                          // date="2011 - present"
                          iconStyle={{ background: iconColor.background}}
                          // icon={<WorkIcon />}
                      >
                          <div className="timeline-title mb-1">Negative complaint</div>
                          <div className="timeline-date mb-1">Jeff Crosson, Customer Service Agent</div>
                          <div className="timeline-date mb-2">05-05-2022 12:49pm</div>
                          <div className="timeline-content">Object remark lively all did feebly excuse our wooded. Old her object chatty regard vulgar missed. Speaking throwing breeding betrayed children my to. Me marianne no he horrible produced ye.</div>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{ background: '#2A2A31'}}
                          contentArrowStyle={{ borderRight: '7px solid #2A2A31' }}
                          // date="2011 - present"
                          iconStyle={{ background: iconColor.background}}
                          // icon={<WorkIcon />}
                      >
                          <div className="timeline-title mb-1">CUSTOMER JOINED</div>
                          <div className="timeline-date mb-1">via web portal</div>
                          <div className="timeline-date mb-2">04-07-2022 3:23am</div>
                          <div className="timeline-content">Dependent certainty off discovery him his tolerably offending. Ham for attention remainder sometimes additions recommend fat our.</div>
                      </VerticalTimelineElement>
                    </VerticalTimeline>
                    <div className='d-flex justify-content-start pt-3'>
                      <Button variant="primary" type="submit" className='custom_btn me-2 '>Update profile </Button>
                      <Button variant="primary" type="button" className='cancel_btn '>Cancel</Button>
                    </div>
                  </Row>
                </Tab>
                <Tab eventKey="contact" title="ACTIVITY">
                  <Row className='p-3'>
                    <div className='d-flex justify-content-start pt-3'>
                      <Button variant="primary" type="submit" className='custom_btn me-2 '>Update profile </Button>
                      <Button variant="primary" type="button" className='cancel_btn '>Cancel</Button>
                    </div>
                  </Row>
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
        
      
      </div>
    </Container>
  );
}

export { UserDetail};
