import './adminprofile.style.scss';
// import './home.style.css';
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col, Form, Image, Tabs, Tab, Stack, Card, Dropdown } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';




function Communication() {
  const [explicit, setExplicit] = useState(true);
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"

  const [imageFile, setImagedFile] = useState("");
  const [socialEnable, setSocialEnable] = useState(true);
  const [contactEnable, setContactEnable] = useState(true);
  const [inputValues, setInputValues] = useState({});
  
// const onImageChange = (e:any) => {
//   e.preventDefault();
//   let file = e.target.files[0];
//   let fileReader = new FileReader();

//   fileReader.onloadend = () => {
//       console.log(fileReader.result)
//       if (fileReader.result !== null) {
//         setImagedFile(fileReader.result.toString())
//       }
      
//   };
//   console.log(fileReader.result)
//   fileReader.readAsDataURL(file)
// };

const handleChange = (e:any)=> {
  console.log("here");
  const temp: {[key:string]: string} = inputValues;
  temp[e.target.name] = e.target.value ;
  if(e.target.name=="gradientimage") {
    let file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      console.log(fileReader.result)
      if (fileReader.result !== null) {
        setImagedFile(fileReader.result.toString())
        temp["gradientimage"] = fileReader.result.toString();
      }
  };
  console.log(fileReader.result)
  fileReader.readAsDataURL(file)
  }
  setInputValues(temp);
}

const handleSubmit = (event:any) => {
  event.preventDefault();
  console.log(inputValues);
  
};

  return (
    <Form  onSubmit={handleSubmit}>
      <Row className='menusettings'>
        <Row>
          <Col xl={4} lg={4} md={12} xs={12}>
            <Row className="d-flex align-items-center mb-3">
              <Col xl={6} lg={6} md={6} sm={6}>
                <div className='logo_image_title'>Enable Social Icons</div>
                <div className='logo_image_subtitle'>Turn this off if you do not wish to link any social media to your marketplace.</div>
              </Col>
              <div className='d-flex align-items-center mt-4 mb-3'>
                <div className='up_label'>Off</div>
                <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={socialEnable} onChange={()=>setSocialEnable(!socialEnable)}/>
                <div className='up_label ms-2'>On</div>
              </div>
            </Row>
            {socialEnable && 
             <Row>
             <Col xl={12} lg={12} md={12} sm={12}>
               <div className='logo_image_title'>Social Links</div>
             </Col>
             <Col xl={10} lg={6} md={6} sm={6} className="mt-2">
               <Form.Group className="input_form" controlId="discord">
                 <Col xl={3} lg={6} md={6} sm={6} className="d-flex align-items-center justify-content-between">
                     <div className='up_label'>Discord</div>
                     <div><img src={'/icons/social_icon/discord_red.svg'} className="me-2"/></div>
                 </Col>
                 <Col xl={9} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="Enter your url" className='placeholder_bg' name="discord" onChange={(e)=>handleChange(e)} /></Col>
               </Form.Group>
               <Form.Group className="input_form" controlId="twitter">
                 <Col xl={3} lg={6} md={6} sm={6} className="d-flex align-items-center justify-content-between">
                     <div className='up_label'>Twitter</div>
                     <div><img src={'/icons/social_icon/twitter_red.svg'} className="me-2"/></div>
                 </Col>
                 <Col xl={9} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="Enter your url" className='placeholder_bg' name="twitter" onChange={(e)=>handleChange(e)} /></Col>
               </Form.Group>
               <Form.Group className="input_form" controlId="facebook">
                 <Col xl={3} lg={6} md={6} sm={6} className="d-flex align-items-center justify-content-between">
                     <div className='up_label'>Facebook</div>
                     <div><img src={'/icons/social_icon/facebook_red.svg'} className="me-2"/></div>
                 </Col>
                 <Col xl={9} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="Enter your url" className='placeholder_bg' name="facebook" onChange={(e)=>handleChange(e)} /></Col>
               </Form.Group>
               <Form.Group className="input_form" controlId="instagram">
                 <Col xl={3} lg={6} md={6} sm={6} className="d-flex align-items-center justify-content-between">
                     <div className='up_label'>Instagram</div>
                     <div><img src={'/icons/social_icon/instagram_red.svg'} className="me-2"/></div>
                 </Col>
                 <Col xl={9} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="Enter your url" className='placeholder_bg'  name="instagram" onChange={(e)=>handleChange(e)}/></Col>
               </Form.Group>
              
               <Form.Group className="input_form" controlId="tiktok">
                 <Col xl={3} lg={6} md={6} sm={6} className="d-flex align-items-center justify-content-between">
                     <div className='up_label'>TikTok</div>
                     <div><img src={'/icons/social_icon/tiktok_red.svg'} className="me-2"/></div>
                 </Col>
                 <Col xl={9} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="Enter your url" className='placeholder_bg' name="tiktok" onChange={(e)=>handleChange(e)} /></Col>
               </Form.Group>
               <Form.Group className="input_form" controlId="linkedin">
                 <Col xl={3} lg={6} md={6} sm={6} className="d-flex align-items-center justify-content-between">
                     <div className='up_label'>Linked In</div>
                     <div><img src={'/icons/social_icon/linkedin_red.svg'} className="me-2"/></div>
                 </Col>
                 <Col xl={9} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="Enter your url" className='placeholder_bg' name="linkedin" onChange={(e)=>handleChange(e)} /></Col>
               </Form.Group>
               <Form.Group className="input_form" controlId="youtube">
                 <Col xl={3} lg={6} md={6} sm={6} className="d-flex align-items-center justify-content-between">
                     <div className='up_label'>YouTube</div>
                     <div><img src={'/icons/social_icon/youtube_red.svg'} className="me-2"/></div>
                 </Col>
                 <Col xl={9} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="Enter your url" className='placeholder_bg' name="youtube" onChange={(e)=>handleChange(e)} /></Col>
               </Form.Group>
              
               <Form.Group className="input_form" controlId="rumble">
                 <Col xl={3} lg={6} md={6} sm={6} className="d-flex align-items-center justify-content-between">
                     <div className='up_label'>Rumble</div>
                     <div><img src={'/icons/social_icon/rumble_red.svg'} className="me-2"/></div>
                 </Col>
                 <Col xl={9} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="Enter your url" className='placeholder_bg' name="rumble" onChange={(e)=>handleChange(e)} /></Col>
               </Form.Group>
              
             </Col>
           </Row>
           }
           
          </Col>
        </Row>
   
        <Row>
          <Col xl={4} lg={4} md={6} xs={12} >
            <Col xl={5} lg={6} md={6} sm={6}>
              <div className='enable-contact-capture'>
                <div className='logo_image_title'>Enable Contact Capture</div>
                <div className='logo_image_subtitle'>Use these settings to turn on and edit the email newsletter signup on the homepage of your marketplace. </div>
                <div className='d-flex align-items-center mt-4 mb-3'>
                  <div className='up_label'>Off</div>
                  <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={contactEnable} onChange={()=>setContactEnable(!contactEnable)}/>
                  <div className='up_label ms-2'>On</div>
                </div>
              </div>
            </Col>
            </Col>
        </Row>
        {contactEnable && 
          <Row className='contact-capture-background' >
            <Col xl={4} lg={4} md={6} xs={12} >
              <Row>
                <Col  xl={7} lg={7} md={6} sm={6} className="mt-3">
                  <div className='logo_image_title'>Contact Capture Background</div>
                  <div className='logo_image_subtitle'>Choose a background for your page hero section. We recommend 1920x200px .png/.jpg. </div>
                </Col>
                <Col xl={5} lg={5} md={4} sm={4} className="mt-3">
                  <div  className='upload_card align-items-center'>
                    <Card.Img src={imageFile !== ""? imageFile:`/images/gradient_rect.svg`} style={{width:"153px", height:"21px"}} />
                    <div className='d-flex'>
                      <Form.Group className='me-1'>
                        <Form.Label for="gradientimage" className='upload_button'>Upload</Form.Label>
                        <Form.Control type="file" className="create-file-select  mt-4" name="gradientimage"  id="gradientimage" onChange={handleChange} hidden/>
                      </Form.Group>
                      <Form.Group>
                        <Button className='upload_button'>Remove</Button>
                      </Form.Group>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl={8} lg={8} md={6} xs={12}>
              <div className='font_default_color font_size_13 mb-2'>Preview</div>
              {/* <Row className='p-3' style={{background: `url(${imageFile!='' ? imageFile:"/images/gradient_rect.svg"})`}}> */}
              <Row className='p-3' style={{background: imageFile!='' ? `url(${imageFile})`: 'linear-gradient(180deg, #70BCFD -19.23%, #403896 -19.22%, #8D3695 51.86%, #BB2E69 117.49%)'}}>
                <Col  xl={4} lg={4} md={6} xs={12} className="p-2">
                  <div className='font_default_color font_size_20 font-weight-700 mb-2'>Never Miss a drop!</div>
                  <div className='font_color_white font_size_12'>Join our email newsletter to stay in the loop on all things happening in our marketplace... new drops, special promos, limited offers, and much more!</div>
                </Col>
                <Col  xl={8} lg={8} md={6} xs={12} className="d-flex email_notify">
                  <Col xl={6} lg={6} md={6} xs={12}><Form.Control type="text" placeholder="Enter your email address" className='email_notify_form w-100 ' /></Col>
                  <Col xl={6} lg={6} md={6} xs={12}><Button className='notify_me ms-2'>Notify me</Button></Col>
                </Col>
              </Row>
            </Col>
          </Row>
        }
       
        <Row>
          <Col xl={4} lg={4} md={6} xs={12} className="mt-4" >
            <Form.Group className="input_form" controlId="formBasicPassword">
              <Col xl={2} lg={4} md={6} xs={12}>
                <div className='up_label'>Headline H1</div>
                <div className='sub_label'>50 Char. Max.</div>
              </Col>
              <Col xl={10} lg={8} md={6} xs={12}><Form.Control type="text" placeholder="United States" className='placeholder_bg' maxLength={50} name="headline" onChange={(e)=>handleChange(e)} /></Col>
            </Form.Group>
            <Form.Group className="input_form" controlId="formBasicPassword">
              <Col xl={2} lg={4} md={6} xs={12}>
                <div className='up_label'>Subtext</div>
                <div className='sub_label'>250 Char. Max.</div>
              </Col>
              <Col xl={10} lg={8} md={6} xs={12}>
                <textarea placeholder="Join our email newsletter to stay in the loop on all things happening in our marketplace... new drops, special promos, limited offers, and much more! " className='placeholder_bg'  maxLength={250} style={{height:"100px"}} name="subtxt" onChange={(e)=>handleChange(e)}></textarea>
              </Col>
            </Form.Group>
            <Form.Group className="input_form" controlId="formBasicPassword">
              <Col xl={2} lg={4} md={6} xs={12}>
                <div className='up_label'>Button Text</div>
              </Col>
              <Col xl={10} lg={8} md={6} xs={12}><Form.Control type="text" placeholder="Notify me!" className='placeholder_bg' name="btn_text" onChange={(e)=>handleChange(e)}  /></Col>
            </Form.Group>
            <Form.Group className="input_form" controlId="formBasicPassword">
              <Col xl={2} lg={4} md={6} xs={12}>
                <div className='up_label'>Email List</div>
              </Col>
              <Col xl={10} lg={8} md={6} xs={12}><Form.Control type="text" placeholder="mailgun/leads" className='placeholder_bg' name="email_list" onChange={(e)=>handleChange(e)}  /></Col>
            </Form.Group>
            <Form.Group className="input_form" controlId="formBasicPassword">
              <Col xl={2} lg={4} md={6} sm={6}>
                <div className='up_label'>Button Hex#</div>
              </Col>
              <Col xl={10} lg={6} md={6} sm={6}>
                <Form.Group className='me-1 d-flex align-items-center'>
                  <Form.Control
                    type="color"
                    id="exampleColorInput"
                    defaultValue="#70BBFD"
                    title="Choose your color"
                    className="color_picker"
                    name="btn_color" 
                    onChange={(e)=>handleChange(e)}
                  />
                  <Form.Label htmlFor="exampleColorInput" className='logo_image_title picker_label'>Select Color</Form.Label>
                </Form.Group>
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={6} md={12} xs={12} >
            <Row>
              <Col xl={5} lg={5} md={6} sm={6}>
                <div className='logo_image_title'>Email Setup</div>
                <div className='logo_image_subtitle'>Enter your API credentials for SendGrid or Mailgun here.</div>
              </Col>
              <Col xl={7} lg={7} md={6} sm={6}>
                <div className='logo_image_title'>Important Note</div>
                <div className='logo_image_subtitle'>Some platforms may require you to whitelist your IP. If this is required please add these IP ranges to your platform.  1.1.1.1 -23..</div>
              </Col>
            </Row>
            <Row>
              <div className='mt-3'><img src={'/images/sendgrid.svg'} /></div>
              <div className='ms-5 mt-3'>
                <Form.Group className="input_form" controlId="formBasicPassword">
                  <Col xl={2} lg={4} md={6} xs={12}>
                    <div className='up_label'>Public Key</div>
                  </Col>
                  <Col xl={10} lg={8} md={6} xs={12}>
                    <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg' name="sendgrid_pb" onChange={(e)=>handleChange(e)}/>
                  </Col>
                </Form.Group>
                <Form.Group className="input_form" controlId="formBasicPassword">
                  <Col xl={2} lg={4} md={6} xs={12}>
                    <div className='up_label'>Secret Key</div>
                  </Col>
                  <Col xl={10} lg={8} md={6} xs={12}>
                    <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg' name="sendgrid_pr" onChange={(e)=>handleChange(e)}/>
                  </Col>
                </Form.Group>
              </div>
            </Row>
            <Row>
              <div><img src={'/images/mailgun.svg'} /></div>
              <div className='ms-5 mt-3'>
                <Form.Group className="input_form" controlId="formBasicPassword">
                  <Col xl={2} lg={4} md={6} xs={12}>
                    <div className='up_label'>Public Key</div>
                  </Col>
                  <Col xl={10} lg={8} md={6} xs={12}>
                    <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg' name="mailgun_pb" onChange={(e)=>handleChange(e)}/>
                  </Col>
                </Form.Group>
                <Form.Group className="input_form" controlId="formBasicPassword">
                  <Col xl={2} lg={4} md={6} xs={12}>
                    <div className='up_label'>Secret Key</div>
                  </Col>
                  <Col xl={10} lg={8} md={6} xs={12}>
                    <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg' name="mailgun_pr" onChange={(e)=>handleChange(e)}/>
                  </Col>
                </Form.Group>
              </div>
            </Row>
            <Row>
              <div><img src={'/images/mailchimp 1.svg'} /></div>
              <div className='ms-5 mt-3'>
                <Form.Group className="input_form" controlId="formBasicPassword">
                  <Col xl={2} lg={4} md={6} xs={12}>
                    <div className='up_label'>Public Key</div>
                  </Col>
                  <Col xl={10} lg={8} md={6} xs={12}>
                    <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg' name="mailchimp_pb" onChange={(e)=>handleChange(e)}/>
                  </Col>
                </Form.Group>
                <Form.Group className="input_form" controlId="formBasicPassword">
                  <Col xl={2} lg={4} md={6} xs={12}>
                    <div className='up_label'>Secret Key</div>
                  </Col>
                  <Col xl={10} lg={8} md={6} xs={12}>
                    <Form.Control type="text" placeholder="DVONQ2350Q24SDFBKNSDKFBN;2434TFHLFNFG3433R*&%&%#^(*&)(%(&LKHLK" className='placeholder_bg' name="mailchimp_pr" onChange={(e)=>handleChange(e)}/>
                  </Col>
                </Form.Group>
              </div>
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

export { Communication};
