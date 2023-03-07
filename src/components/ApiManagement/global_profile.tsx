import './adminprofile.style.scss';
// import './home.style.css';
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col, Form, Image, Tabs, Tab, Stack, Card, Dropdown, Tooltip, OverlayTrigger } from 'react-bootstrap';





function GlobalProfile() {
  const [explicit, setExplicit] = useState(true);
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"

  const [imageFile, setImagedFile] = useState("");
  const [bannerFile, setBannerFile] = useState("");
  const [inputValues, setInputValues] = useState({});
  const [validated, setValidated] = useState(false);
  const [avatarFile, setAvatarFile] = useState('');


 
  
  const onImageChange = (e:any) => {
    e.preventDefault();
    let file = e.target.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
        if (fileReader.result !== null) {
          setImagedFile(fileReader.result.toString())
        }
        
    };
    fileReader.readAsDataURL(file)
  };
  const onBannerChange = (e:any) => {
    e.preventDefault();
    console.log("123123123")
    let file = e.target.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
        if (fileReader.result !== null) {
          setBannerFile(fileReader.result.toString())
        }
        
    };
    console.log(fileReader.result)
    fileReader.readAsDataURL(file)
  };


  const handleSubmit = (event:any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    console.log("----------------")
    console.log(inputValues);
    console.log(imageFile);
    console.log(bannerFile);
  };

const handleChange = (e:any)=> {
  const temp: {[key:string]: string} = inputValues;
   temp[e.target.name] = e.target.value ;
   setInputValues(temp);
}


const profileImageSelect = () => {
  const profileImage = document.getElementById("profile_image");
  profileImage?.click()
  console.log(profileImage)
}
const profileBannerImage = () => {
  const profileBanner = document.getElementById("profile_banner");
  profileBanner?.click()
  console.log(profileBanner)
}
  return (
    <Row className='p-3'>
      <Form noValidate validated={validated} onSubmit={handleSubmit} >
        <Col xs={8} lg={8} md={12} sm={12} >
          <div className='sub_title mt-3 mb-5'>profile settings</div>
          <Form.Group className="input_form" controlId="name">
            <Form.Label className='up_label'>Name</Form.Label>
            <Form.Control type="text" className='placeholder_bg' value="Aldo Raine" readOnly />
          </Form.Group>
          <Form.Group className="input_form" controlId="username">
            <Form.Label className='up_label'>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" className='placeholder_bg' value="Aldo Raine" readOnly />
          </Form.Group>
          <Form.Group className="input_form d-flex" controlId="displayname" >
            <Form.Label className='up_label'>Display Nmae</Form.Label>
            <Form.Control type="text" placeholder="Aldo13" className='placeholder_bg' name="displayname"  onChange={(e)=>handleChange(e)} required/>
            {/* <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group className="input_form" controlId="email">
            <Form.Label className='up_label'>Email</Form.Label>
            <Form.Control type="email" placeholder="example@mail.com" className='placeholder_bg' name="email" onChange={(e)=>handleChange(e)} />
          </Form.Group>
          <Form.Group className="input_form" controlId="url">
            <Form.Label className='up_label'>URL</Form.Label>
            <Form.Control type="text" placeholder="https://themeforest.net" className='placeholder_bg' name="url" onChange={(e)=>handleChange(e)} />
          </Form.Group>
          <Form.Group className="input_form" controlId="emailaddress">
            <Form.Label className='up_label'>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter email address" className='placeholder_bg' name="password" onChange={(e)=>handleChange(e)} />
          </Form.Group>
          <Form.Group className="input_form" controlId="address1">
            <Form.Label className='up_label'>Address 1</Form.Label>
            <Form.Control type="text" placeholder="123 That Way" className='placeholder_bg' name="address1" onChange={(e)=>handleChange(e)} />
          </Form.Group>
          <Form.Group className="input_form" controlId="address2">
            <Form.Label className='up_label'>Address 2</Form.Label>
            <Form.Control type="text" placeholder="Suite 214" className='placeholder_bg' name="address2" onChange={(e)=>handleChange(e)} />
          </Form.Group>
          <Form.Group className="input_form" controlId="city">
            <Col sm={4} className="d-flex align-items-center me-2">
              <Form.Label className='up_label w-40'>City</Form.Label>
              <Form.Control type="text" placeholder="Lake Jackson" className='placeholder_bg' name="city"  onChange={(e)=>handleChange(e)} />
            </Col>
            <Col sm={4} className='d-flex align-items-center me-2'>
              <Form.Label className='up_label w-40'>State</Form.Label>
              <Form.Control type="text" placeholder="Texas" className='placeholder_bg' name="state" onChange={(e)=>handleChange(e)} />
            </Col>
            <Col sm={4} className='d-flex align-items-center me-2'>
              <Form.Label className='up_label w-40'>Postal Code</Form.Label>
              <Form.Control type="text" placeholder="77488" className='placeholder_bg'  name="postalcode" onChange={(e)=>handleChange(e)} />
            </Col>
          </Form.Group>
          <Form.Group className="input_form" controlId="country">
            <Form.Label className='up_label'>Country</Form.Label>
            <Form.Control type="text" placeholder="United States" className='placeholder_bg' name="country" onChange={(e)=>handleChange(e)} />
          </Form.Group>
          <Form.Group className="input_form" controlId="bio">
            <Form.Label className='up_label'>Bio</Form.Label>
            <textarea name="bio"  onChange={(e)=>handleChange(e)} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus quis nibh diam eget ridiculus sit in habitasse. Nunc amet sagittis dignissim nulla pharetra. Quisque ut sed eget magna venenatis quis. Malesuada augue aliquam pretium quis sagittis. Pellentesque dignissim suspendisse id libero massa. Fringilla laoreet vulputate elit consequat sit id cum orci, lorem. Semper eget tortor vulputate praesent risus. Metus pharetra, risus aliquet urna. Non, odio varius libero " className='placeholder_bg' style={{height:"200px"}} maxLength={500}></textarea>
          </Form.Group>
          <div className='file_upload d-flex'>
            <Col xl={3} md={6} sm={12} className="me-5 xl-me-5">
              <div className='d-flex justify-content-center align-items-center'>
                <div className='sub_title mt-3 text-center mb-2'>profile image</div>
                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props} >
                       We recommend a 1500x1500px JPG, PNG, WEBP, or GIF (1MB max file size)
                    </Tooltip>
                  )}
                  placement="top"
                ><div className='info_icon'><img src={'/images/info.svg'} /></div>
                </OverlayTrigger>
              </div>
              <Stack direction="vertical" className='upload_card' onClick={profileImageSelect}>
                <Card.Img src={imageFile !== ""? imageFile:`/images/profile.png`} style={{height:'160px', width:'160px', borderRadius:'50%'}} />
                <Form.Label for="profile_image" className='upload_button'>Choose File</Form.Label>
                <Form.Control type="file" className="create-file-select  mt-4" name="profile_image"  id="profile_image" onChange={onImageChange} hidden/>
              </Stack>
            </Col>
            <Col xl={3}  md={6} sm={12}>
              <div className='d-flex justify-content-center align-items-center'>
                <div className='sub_title mt-3 text-center mb-2'>profile banner</div>
                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props} >
                       We recommend a 1500x1500px JPG, PNG, WEBP, or GIF (1MB max file size)
                    </Tooltip>
                  )}
                  placement="top"
                ><div className='info_icon'><img src={'/images/info.svg'} /></div>
                </OverlayTrigger>
              </div>
              <Stack direction="vertical" className='upload_card' onClick={profileBannerImage}>
                <Card.Img src={bannerFile !== ""? bannerFile:`/images/profile-banner.png`} style={{height:'160px'}} />
                <Form.Label for="profile_banner" className='upload_button'>Choose File</Form.Label>
                <Form.Control type="file" className="create-file-select  mt-4" name="profile_image"  id="profile_banner" onChange={onBannerChange} hidden/>
              </Stack>
            </Col>
           
          </div>
          <div className='d-flex justify-content-start pt-5 mb-5'>
            <Button variant="primary" type="submit" className='custom_btn me-2 '> Submit </Button>
            <Button variant="primary" type="button" className='cancel_btn '>Cancel</Button>
          </div>
        </Col>
      </Form>
     
    
  </Row>
  );
}

export { GlobalProfile};
