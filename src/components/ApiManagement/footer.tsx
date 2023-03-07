import './adminprofile.style.scss';
// import './home.style.css';
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col, Form, Image, Tabs, Tab, Stack, Card, Dropdown } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';




function Footer() {
  const [explicit, setExplicit] = useState(true);
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"

  const [logoImage, setLogoImage] = useState("");
  const [customLogo, setCustomLogo] = useState(false);
  const [inputValues, setInputValues] = useState({});
 
  
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
const submitHandle = (e:any) => {
  e.preventDefault();
  console.log(inputValues);
  console.log(logoImage);
  console.log(customLogo);
}



  return (
    <Form onSubmit={submitHandle}>
      <Row className='menusettings'>
          <Col xl={4} lg={4} md={12} xs={12}>
            <Row className="d-flex align-items-center mb-3">
              <Col xl={6} lg={6} md={6} sm={6}>
                <div className='logo_image_title'>Footer Logo</div>
                <div className='logo_image_subtitle'>Leave this option turned off to use your default logo in the footer area. Turn on to add an alternate logo..</div>
              </Col>
              
              <div className='d-flex align-items-center mt-4 mb-3'>
                <div className='up_label'>Off</div>
                <BootstrapSwitchButton onlabel=" " offlabel=" " size='xs' checked={customLogo} onChange={()=>setCustomLogo(!customLogo)}/>
                <div className='up_label ms-2'>On</div>
              </div>
              {customLogo && 
                <Row className="d-flex align-items-center mb-3">
                <Col xl={3} lg={4} md={4} sm={4}>
                  <div className='logo_image_title'>Logo Image</div>
                  <div className='logo_image_subtitle'>Choose a logo to display in light mode</div>
                </Col>
                <Col xl={3} lg={4} md={4} sm={4}>
                  <div  className='upload_card align-items-center'>
                    {logoImage !== "" && <Card.Img src={logoImage} className="upload_img" style={{width:"65px", height:"65px"}} />}
                    {logoImage == "" && <div className="upload_img" style={{border:"1px solid #C4C4C4", width:"65px", height:"65px"}} />}
                    <div className='d-flex'>
                      <Form.Group className='me-1'>
                        <Form.Label for="logoimage" className='upload_button'>Upload</Form.Label>
                        <Form.Control type="file" className="create-file-select  mt-4" name="logoimage"  id="logoimage" onChange={onLogoChagne} hidden/>
                      </Form.Group>
                      <Form.Group>
                        <Button className='upload_button'>Remove</Button>
                      </Form.Group>
                    </div>
                  </div>
                </Col>
              </Row>
              }
              <Col xl={6} lg={12} md={12} sm={12}>
                <div className='logo_image_title'>Footer Links</div>
                <div className='logo_image_subtitle'>Use the generic document titles provided or create your own. Provide a link for the ones that you wish to appear in the footer..</div>
              </Col>
              <Col xl={12} lg={6} md={6} sm={6} className="mt-5">
                <Form.Group className="input_form" controlId="email">
                  <Col xl={4} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="example@mail.com" className='placeholder_bg font_default_color' value="Terms of use" readOnly/></Col>
                  <Col xl={8} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="amazonaws.s3.client/terms.pdf" className='placeholder_bg' name="term" onChange={handleChange} /></Col>
                </Form.Group>
                <Form.Group className="input_form" controlId="email">
                  <Col xl={4} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="example@mail.com" className='placeholder_bg font_default_color' value="FAQ " /></Col>
                  <Col xl={8} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="example@mail.com" className='placeholder_bg' name="faq" onChange={handleChange} /></Col>
                </Form.Group>
                <Form.Group className="input_form" controlId="email">
                  <Col xl={4} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="example@mail.com" className='placeholder_bg font_default_color' value="Support " /></Col>
                  <Col xl={8} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="zoho.com/pandasoverapes" className='placeholder_bg' name="support" onChange={handleChange} /></Col>
                </Form.Group>
                <Form.Group className="input_form" controlId="email">
                  <Col xl={4} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="example@mail.com" className='placeholder_bg font_default_color' value="Privacy Policy " /></Col>
                  <Col xl={8} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="amazonaws.s3.client/terms.pdf" className='placeholder_bg' name="policy" onChange={handleChange} /></Col>
                </Form.Group>
                <Form.Group className="input_form" controlId="email">
                  <Col xl={4} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="example@mail.com" className='placeholder_bg font_default_color' value="GDPR" /></Col>
                  <Col xl={8} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="example@mail.com" className='placeholder_bg' name="gdpr" onChange={handleChange} /></Col>
                </Form.Group>
                <Form.Group className="input_form" controlId="email">
                  <Col xl={4} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="example@mail.com" className='placeholder_bg font_default_color' value="Contact Us" /></Col>
                  <Col xl={8} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="support@client.com" className='placeholder_bg' name="contact" onChange={handleChange} /></Col>
                </Form.Group>
                <Form.Group className="input_form" controlId="email">
                  <Col xl={4} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="example@mail.com" className='placeholder_bg font_default_color' value="Copyright" /></Col>
                  <Col xl={8} lg={6} md={6} sm={6}><Form.Control type="text" placeholder="©2022-2023 Client, LLC All Rights Reserved" className='placeholder_bg' name="copyright" onChange={handleChange} /></Col>
                </Form.Group>
              </Col>
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

export { Footer};
