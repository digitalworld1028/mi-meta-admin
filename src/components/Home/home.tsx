import './home.style.scss';
// import './home.style.css';
import {useState, useContext} from 'react'
import { ThemeContext } from '../../providers';
import { Container, Button, Row, Col } from 'react-bootstrap';
import MiLogo from '../../assets/icons/MiLogo.svg';
import CharBlueIcon from '../../assets/dashboard/chart_blue_icon.svg'
import CharRedIcon from '../../assets/dashboard/chart_red_icon.svg'
import PolygonIcon from '../../assets/dashboard/polygon_icon.svg'
import SolanaIcon from '../../assets/dashboard/solana_icon.svg'
// import {ReactComponent as SolanaIcon} from '../../assets/dashboard/solana_icon.svg'
import { RefreshCw, X, Minus } from 'react-feather'

// import {CardComponent} from './CardComponent';
// import {TrendingPane} from './TrendingPane';
import Chart from 'react-apexcharts'
import { TrendingPane } from './TrendingPane';



function Home() {
  const { theme,setTheme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"

  const [options, setOptions] = useState(
    {chart: {id: 'apexchart-example', toolbar: {show: false}}, 
    dataLabels:{enabled: false},  
    xaxis: {enabled: false, labels:{show: false}},
    yaxis: {enabled: true, labels:{show: true}},
    grid: {show: true},
    colors: [chart_color],
  })
  const [series, setSeries] = useState([{name: 'series-1', 
  data: [1.8, 1.7, 0.8, 1.4, 1.5, 1.7, 1.0,1.8, 1.7, 0.8, 1.4, 1.5, 1.7, 1.0,1.8, 1.7, 0.8, 1.4, 1.5, 1.7, 1.0,1.8, 1.7, 0.8, 1.4, 1.5, 1.7, 1.0]}]);

  const [donutseries,setDonutseries] = useState([30,30,20,20])
  const [donutOption,setDonutOption] = useState({
   
    cutout: 10,
    percentageInnerCutout: 10,
    plugins: {
      legend: {
         position: 'bottom',
         display: true,
      }
    },
    datalabels: {
      fontSize:"30px",
      colors:["#FFFFFF"],
      enabled: true
      
    },
    labels: ['USA', 'Canada', 'Mexico', 'Poland'],
    colors:["#B8E986", "#FA697D", "#70BBFD", "#F6DA6E"],
    chart: {
      id: 'donut',
      
    },
    stroke: {
      show: true,
      width:3,
      colors:['#232329']
    },
    plotOptions: {
      pie: {
        expandOnClick: false
      }
    },
    grid: {
      borderColor: "#EF3252"
    },
    datasets: [{
      backgroundColor: ["#BDC3C7","#9B59B6","#E74C3C","#26B99A"],
      borderWidth: 0
    }],
    
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
          foreColor: '#ffffff'
        },
        legend: {
          position: 'bottom'
        },
      },
      
    }],
  },
)

  return (
    <Container fluid>
      <div className="landing" style={{height:"2500px"}}>
      
        <Col sm={12} xs={6}>
          <div className='d-flex'>
            <div><img src={MiLogo} className="dashboard_image"/></div>
            <div className='dashboard_label' style={{color: labelColor}}>Dashboard</div>
          </div>
         <div className='dashboard_sublabel' style={{color: subLabelColor}}>Let's do awesome things today</div>
        </Col>
        <Row>
          <Col className="p-3 card_width p-xs-2 me-xs-2" xl={3}  lg={6} md={6} sm={12} xs={12} >
            <div className='dashboard_card pt-4 pb-4'>
              <div className='d-flex justify-content-center mb-3'>
                <img src={CharBlueIcon}/>
                <div className='span_text'><span className='green me-2'>+ 1.7 %</span>this week</div>
              </div>
              <div className='total_amount text-center mb-3'>5,832.00157232</div>
              <div className='d-flex justify-content-center'>
                <div className='currency'>USD</div>
                <div className='total_amount'>$583,157.023</div>
              </div>
            </div>
          </Col>
          <Col className="p-3 card_width p-xs-2" xl={3}  lg={6} md={6} sm={12} xs={12} >
            <div className='dashboard_card pt-4 pb-4 '>
              <div className='d-flex justify-content-center mb-3'>
                <img src={CharBlueIcon}/>
                <div className='span_text'><span className='green me-2'>+ 1.7 %</span>this week</div>
              </div>
              <div className='total_amount justify-content-center mb-3 d-flex'>
                  <img src={PolygonIcon} className="me-2"/>
                  <div>5,832.00157232</div>
              </div>
              <div className='d-flex justify-content-center'>
                <div className='currency'>USD</div>
                <div className='total_amount'>$583,157.023</div>
              </div>
            </div>
          </Col>
          <Col className="p-3 card_width p-xs-2" xl={3}  lg={6} md={6} sm={12} xs={12} >
            <div className='dashboard_card pt-4 pb-4'>
              <div className='d-flex justify-content-center mb-3'>
                <img src={CharRedIcon}/>
                <div className='span_text'><span className='green me-2'>+ 1.7 %</span>this week</div>
              </div>
              <div className='total_amount justify-content-center mb-3 d-flex'>
                  <img src={SolanaIcon} className="me-2"/>
                  <div>5,832.00157232</div>
              </div>
              <div className='d-flex justify-content-center'>
                <div className='currency'>USD</div>
                <div className='total_amount'>$583,157.023</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="pe-3 pb-md-2 card_width pb-sm-2"  xl={3} lg={6} md={6} sm={12} xs={6}>
            <div className='dashboard_card p-4'>
              <div className='d-flex justify-content-between uppper_label mb-3'>TOTAL</div>
              <div className='total_amount justify-content-between mb-3 d-flex'>
                  <div className='total_number'>1,754,889</div>
                  <div className='inc_percent mt-1'>+79%</div>
              </div>
            </div>
          </Col>
          <Col className="pe-3 pb-md-2 card_width pb-sm-2"   xl={3} lg={6} md={6} sm={12} xs={6}>
            <div className='dashboard_card p-4 '>
              <div className='d-flex justify-content-between uppper_label mb-3'>TOKENS CREATED</div>
              <div className='total_amount justify-content-between mb-3 d-flex'>
                  <div className='total_number'>1,754,889</div>
                  <div className='inc_percent mt-1'>+79%</div>
              </div>
            </div>
          </Col>
          <Col className="pe-3 pb-md-2 card_width pb-sm-2"   xl={3} lg={6} md={6} sm={12} xs={6}>
            <div className='dashboard_card p-4'>
              <div className='d-flex justify-content-between uppper_label mb-3'>TOKENS Commissions Earned</div>
              <div className='total_amount justify-content-between mb-3 d-flex'>
                  <div className='total_number'>1,754,889</div>
                  <div className='inc_percent mt-1'>+79%</div>
              </div>
            </div>
          </Col>
          <Col className="pe-3 pb-md-2 card_width pb-sm-2"   xl={3} lg={6} md={6} sm={12} xs={6}>
            <div className='dashboard_card p-4'>
              <div className='d-flex justify-content-between uppper_label mb-3'>TOKENS royalties Earned</div>
              <div className='total_amount justify-content-between mb-3 d-flex'>
                  <div className='total_number'>1,754,889</div>
                  <div className='inc_percent mt-1'>+79%</div>
              </div>
            </div>
          </Col>
        </Row>
        <Col className="dashboard_card me-5 mt-4 p-lg-4 p-sm-3" sm={12}>
          <div className='d-flex justify-content-between'>
            <div>
              <div className='table_title font_size_14'>USER ACTIVITY</div>
              <div className='table_sub_title font_size_12'>Last 7 days</div>
            </div>
            <div>
              <div className='d-flex align-items-center flex-wrap mt-sm-0 mt-1'>
                  <Minus style={{marginRight:"10px"}} />
                  <RefreshCw  style={{marginRight:"10px"}}/>
                  <X />
              </div>
            </div>
          </div>
          <Chart options={options} series={series} type="line" width={"100%"} height={320} />
        </Col>
        <Col className="dashboard_card me-5 mt-4 p-lg-4 p-sm-3" sm={12}>
          <div className='table_title'>Top 5 Treding Token</div>
          <TrendingPane />
        </Col>
        <Col className="dashboard_card me-5 mt-4 p-lg-4 p-sm-2 p-xs-2" lg={6} sm={12}>
          <div className='d-flex justify-content-between'>
            <div>
              <div className='table_title font_size_14'>USER ACTIVITY</div>
              <div className='table_sub_title font_size_12'>Top selling items statistic by last month</div>
            </div>
            <div>
              <div className='d-flex align-items-center flex-wrap mt-sm-0 mt-1'>
                  <Minus style={{marginRight:"10px"}} />
                  <RefreshCw  style={{marginRight:"10px"}}/>
                  <X />
              </div>
            </div>
          </div>
          <Chart options={donutOption} series={donutseries} type="donut" width={"100%"} height={320}   />
        </Col>
      </div>
    </Container>
  );
}

export { Home};
