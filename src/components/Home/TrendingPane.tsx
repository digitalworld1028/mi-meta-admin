import './home.style.scss';
import { useState, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Stack,
  Image,
  ListGroup,
  InputGroup,
  FormControl,
  Table,
} from "react-bootstrap";

import { ThemeContext } from "../../providers";
import Chart from 'react-apexcharts'

const heads = ["#", "Name", "Creator", "Price", "Owner", "Circulating Supply", "Change", "Graph(7 days)"];
const data: DType[] = [
  {
    id: 1,
    activity: "Sale",
    item: "Infinity#495",
    price: "1.76",
    qty: "1",
    from: "MonsterMagnet",
    to: "TheCollector",
    time: "2 days ago",
  },
  {
    id: 1,
    activity: "Transfer",
    item: "Infinity#495",
    price: "---",
    qty: "1",
    from: "MonsterMagnet",
    to: "TheCollector",
    time: "2 days ago",
  },
  {
    id: 1,
    activity: "List",
    item: "Infinity#495",
    price: "1.76",
    qty: "1",
    from: "MonsterMagnet",
    to: "...",
    time: "2 days ago",
  },
  {
    id: 1,
    activity: "Sale",
    item: "Infinity#495",
    price: "1.76",
    qty: "1",
    from: "MonsterMagnet",
    to: "TheCollector",
    time: "2 days ago",
  },
  {
    id: 1,
    activity: "Transfer",
    item: "Infinity#495",
    price: "---",
    qty: "1",
    from: "MonsterMagnet",
    to: "TheCollector",
    time: "2 days ago",
  },
  {
    id: 1,
    activity: "List",
    item: "Infinity#495",
    price: "1.76",
    qty: "1",
    from: "MonsterMagnet",
    to: "...",
    time: "2 days ago",
  },
];
type DType = {
  id: number;
  activity: string;
  item: string;
  price: string;
  qty: string;
  from: string;
  to: string;
  time: string;
};

function TrendingPane(props: any) {
  const { theme } = useContext(ThemeContext),
  labelColor = theme === 'dark' ? "white" : "black",
  subLabelColor = theme === 'dark' ? "#999999" : "#444444",
  chart_color= theme === 'dark' ? "#FFFFFF" : "#999999"

  const [options, setOptions] = useState(
    {chart: {id: 'apexchart-example', toolbar: {show: false}}, 
    dataLabels:{enabled: false},  
    xaxis: {enabled: false, labels:{show: false}},
    yaxis: {enabled: true, labels:{show: false}},
    grid: {show: false}
  })
const [series, setSeries] = useState([{name: 'series-1', data: [1.8, 1.7, 0.8, 1.4, 1.5, 1.7, 1.0]}])
  return (
    <Row className="mb-3 collection-body" style={{border:"none", overflow:"auto"}}>
      <Col>
        <Row className="pt-1 justify-content-center align-items-center">
          <Row>
            <Table  className="mt-4 tbody_color ">
              <thead>
                <tr>
                  {heads.map((item, index) => (
                    <th
                      className="thead_color text-center"
                      key={index}
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className='tbody_color'>
                {data.map((item: DType, index: number) => {
                  return (
                    <tr key={index}>
                      <td className="text-center">{index+1}</td>
                      <td className="text-center">{item["activity"]}</td>
                      <td>
                        <div className="d-flex align-items-center"> 
                          <Image
                            src={`/images/nft/${index + 1}.png`}
                            width={56}
                            height={56}
                            roundedCircle
                            className="me-2"
                          />
                          {item["item"]}
                        </div>
                      </td>
                      <td className="align-items-center">
                        <div className='d-flex '>
                          <Image src={`/icons/eth.png`} />
                          {item["price"]}
                        </div>
                      </td>
                      <td className='text-center'>{item["qty"]}</td>
                      <td className=" text-center align-middle">{item["from"]}</td>
                      <td className=" text-center align-middle">{item["to"]}</td>
                      <td className='w-10'>
                        <Chart options={options} series={series} type="area" height="100px" width="250px" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>
        </Row>
      </Col>
    </Row>
  );
}

export { TrendingPane };
