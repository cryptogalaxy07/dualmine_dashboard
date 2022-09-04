import React from "react";
import {
  Alert,
  Button,
  Badge,
  Table,
  Image,
  Card,
} from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default () => {
  const [hiddenAlerts, setHiddenAlerts] = React.useState([]);

  const onClose = (alertId) => {
    const hiddenAlertsUpdated = [...hiddenAlerts, alertId];
    setHiddenAlerts(hiddenAlertsUpdated);
  };

  const special_offer_data = [
    {coin: "BTC_PLUS", name: "BTC+ Hash Power - 4th Anniversary!", power:"900GH/s", price:"34$", expiration:"23:01:50"},
    {coin: "BTC_PLUS", name: "BTC+ Hash Power - 4th Anniversary!", power:"900GH/s", price:"34$", expiration:"23:01:50"},
    {coin: "BTC_PLUS", name: "BTC+ Hash Power - 4th Anniversary!", power:"900GH/s", price:"34$", expiration:"23:01:50"},
    {coin: "BTC_PLUS", name: "BTC+ Hash Power - 4th Anniversary!", power:"900GH/s", price:"34$", expiration:"23:01:50"},
    {coin: "BTC_PLUS", name: "BTC+ Hash Power - 4th Anniversary!", power:"900GH/s", price:"34$", expiration:"23:01:50"},
    {coin: "BTC_PLUS", name: "BTC+ Hash Power - 4th Anniversary!", power:"900GH/s", price:"34$", expiration:"23:01:50"},
    {coin: "BTC_PLUS", name: "BTC+ Hash Power - 4th Anniversary!", power:"900GH/s", price:"34$", expiration:"23:01:50"},
  ];

  const shouldShowAlert = (alertId) => hiddenAlerts.indexOf(alertId) === -1;
  return (
    <div className="mt-5">
      <Alert
        variant="light"
        show={shouldShowAlert("light")}
        onClose={() => onClose("light")}
      >
        <div className="d-flex justify-content-between">
          <div className="mb-3">
            <Badge bg="secondary" className="me-1">
              INFO
            </Badge>
            <strong>It's Time! Final counting has just begun!</strong>
            <div>
              Tomorrow (Thursday) we will take a snapshot! Everyone who has a
              minimum of one active paid contract will get a Premium lifetime
              subscription for free! The World Premiere of our new product will
              be shortly after snapshot.
            </div>
          </div>
          <Button variant="close" size="xs" onClick={() => onClose("light")} />
        </div>
      </Alert>
      <Alert
        variant="light"
        show={shouldShowAlert("light")}
        onClose={() => onClose("light")}
      >
        <div className="d-flex justify-content-between">
          <div className="mb-3">
            <Badge bg="success" className="me-1">
              PROMOTION
            </Badge>
            <strong>4th Anniversary bonus Get 25% extra!</strong>
            <div>
              Buy today any hash power and get 25% extra power! Create an order
              for hash power, pay for it and you will get automatically extra
              power.
              <br />
              <br />
              *For example: Order and pay for 100 GH/s and you will get extra 25
              GH/s
              <br />
              ** Pay by CRT_TRX or TRX and you will get also CRT Airdrop
              (Automatic Order Activation)
              <br />
              *** Reinvest option not working with this promotion.
              <br />
            </div>
          </div>
          <Button variant="close" size="xs" onClick={() => onClose("light")} />
        </div>
      </Alert>
      <Alert
        variant="light"
        show={shouldShowAlert("light")}
        onClose={() => onClose("light")}
      >
        <div className="d-flex justify-content-between">
          <div className="mb-3">
            <Badge bg="success" className="me-1">
              PROMOTION
            </Badge>
            <strong>
              {" "}
              CRT Airdrop - Only for the orders paid by CRT_TRX or TRX
            </strong>
            <div>
              Tomorrow (Thursday) we will take a snapshot! Everyone who has a
              minimum of one active paid contract will get a Premium lifetime
              subscription for free! The World Premiere of our new product will
              be shortly after snapshot.
            </div>
          </div>
          <Button variant="close" size="xs" onClick={() => onClose("light")} />
        </div>
      </Alert>
      <Card>
        <Card.Body>
        <h4>Your special offers</h4>
        <Table>
          <thead className="thead-light">
            <tr>
              <th className="border-0">Coin</th>
              <th className="border-0">Name</th>
              <th className="border-0">Power</th>
              <th className="border-0">Price</th>
              <th className="border-0">Expiration</th>
              <th className="border-0">Anction</th>
            </tr>
          </thead>
          <tbody>
               {
                special_offer_data.map((item, index) => (
                    <tr>
                        <td>{item.coin}</td>
                        <td>{item.name}</td>
                        <td>{item.power}</td>
                        <td>{item.price}</td>
                        <td>{item.expiration}</td>
                        <td><Button variant="secondary" className="m-1 text-white">BUY</Button></td>
                    </tr>
                ))
                }
          </tbody>
        </Table>
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Body>
        <h4>Your special offers</h4>
        <Table>
        
          <thead className="thead-light">
            <tr>
              <th className="border-0">Name</th>
              <th className="border-0">Code</th>
              <th className="border-0">Expiration</th>
            </tr>
          </thead>
          <tbody>
               <tr>
                <td><h5>CRT Airdrop</h5></td>
                <td><h5>CRT Airdrop</h5></td>
                <td><h5>17:51:03</h5></td>
               </tr>
          </tbody>
        </Table>
        </Card.Body>
      </Card>
    </div>
  );
};
