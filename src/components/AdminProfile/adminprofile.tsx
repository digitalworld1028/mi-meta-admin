import './adminprofile.style.scss';
// import './home.style.css';
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col, Form, Image, Tabs, Tab, Stack, Card, Dropdown } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import MiLogo from '../../assets/icons/MiLogo.svg';
import {GlobalProfile} from './global_profile';
import {Appearence} from './appearence';
import {HeroSlider} from './heroslider';
import {MenuSettings} from './menusettings';
import {Footer} from './footer';
import {GlobalDocuments} from './global_documents';
import {Communication} from './global_communication';
import {GlobalCreate} from './global_create';
import {GlobalMarketplace} from './global_marketplace';
import {GlobalWallet} from './global_wallet';
import {GlobalPermissions} from './global_permissions';

import CharBlueIcon from '../../assets/dashboard/chart_blue_icon.svg'
import CharRedIcon from '../../assets/dashboard/chart_red_icon.svg'
import PolygonIcon from '../../assets/dashboard/polygon_icon.svg'
import SolanaIcon from '../../assets/dashboard/solana_icon.svg'
// import {ReactComponent as SolanaIcon} from '../../assets/dashboard/solana_icon.svg'
// import { RefreshCw, X, Minus } from 'react-feather'

// import {CardComponent} from './CardComponent';
// import {TrendingPane} from './TrendingPane';
import Chart from 'react-apexcharts'
import { TrendingPane } from './TrendingPane';



function AdminProfile() {
  const [explicit, setExplicit] = useState(true);
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"

  const [imageFile, setImagedFile] = useState("");
  const [bannerFile, setBannerFile] = useState("");

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
  console.log(e.target.files)
  let file = e.target.files[0];
  let fileReader = new FileReader();

  fileReader.onloadend = () => {
      if (fileReader.result !== null) {
        setBannerFile(fileReader.result.toString())
      }
      
  };
  fileReader.readAsDataURL(file)
};
  return (
    <Container fluid>
      <div className="adminprofile" >
      
        <Col sm={12} xs={6}>
          <div className='d-flex'>
            <div><img src={MiLogo} className="dashboard_image"/></div>
            <div className='dashboard_label' style={{color: labelColor}}>Dashboard</div>
          </div>
         <div className='dashboard_sublabel' style={{color: subLabelColor}}>Let's do awesome things today</div>
        </Col>
        <Col  className="mt-4 ">
            <div className='dashboard_card '>
              <div className='title_style'>Marketplace Global Settings</div>
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 ps-3 mt-5 justify-content-between">
                <Tab eventKey="profile" title="Profile">
                  <GlobalProfile />
                </Tab>
                <Tab eventKey="appearence" title="Appearence">
                  <Appearence />
                </Tab>
                <Tab eventKey="slider" title="Hero Slider">
                  <HeroSlider />
                </Tab>
                <Tab eventKey="menu" title="Menu Settings">
                  <MenuSettings />
                </Tab>
                <Tab eventKey="footer" title="Footer">
                  <Footer />
                </Tab>
                <Tab eventKey="documents" title="Documents">
                  <GlobalDocuments />
                </Tab>
                <Tab eventKey="communication" title="Communications">
                  <Communication />
                </Tab>
                <Tab eventKey="create" title="Create">
                  <GlobalCreate />
                </Tab>
                <Tab eventKey="marketplace" title="Marketplace">
                  <GlobalMarketplace />
                </Tab>
                <Tab eventKey="wallet" title="Wallets">
                  <GlobalWallet />
                </Tab>
                <Tab eventKey="role" title="Roles/Permissions">
                  <GlobalPermissions />
                </Tab>
                {/* <Tab eventKey="drag" title="Drag">
                  <HorizontalExample />
                </Tab> */}
              </Tabs>
            </div>
          </Col>
      </div>
    </Container>
  );
}

export { AdminProfile};
