import {
  Card,
  Col,
  Container,
  Image,
  Row,
  Form,
  Button,
  Alert,
  Badge,
  Modal
} from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import BitcoinQRCode from 'react-bitcoin-qr'
import { useParams } from "react-router-dom";
import EthereumQRCode from '../components/EthereumQRCode'
import api from '../../utils/api';
import { FaHourglassStart } from 'react-icons/fa';
import toast, { Toaster } from "react-hot-toast";

const PaymentType = ['BTC', 'ETH', 'LTC', 'USDT'];
const paymentAddresses = ['1JuQWKtfiuKxuGMNrxqJXDy9Eri5dphugr', '0xEF8d8eF029d83810a389371285dF6a51495025c4', 'LURzVQrcRF5s6JkKFMthnHvN5dnvWAQZq3', 'TNqMtkZLX9MTh6DkRzEGraYHAHGpPUsZj6']
// const paymentAddresses = ['1JuQWKtfiuKxuGMNrxqJXDy9Eri5dphugr', '0xEF8d8eF029d83810a389371285dF6a51495025c4', '0xEF8d8eF029d83810a389371285dF6a51495025c4', '0xEF8d8eF029d83810a389371285dF6a51495025c4']

export default () => {

  const { id } = useParams();

  const [payType, setPayType] = useState(0);
  const [payAmount, setPayAmount] = useState(0.00200001);
  const [showDefault, setShowDefault] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get(`/transaction/${id}`)

        // if (result.length == 0 || !result) {                  
        //   toast.error("You need to finish first order in order to access full feature!")
        //   window.location.href = `https://dualmine.io/`
        //   return false;
        // }
        
        setPayType(result.payType);
        setPayAmount(result.payAmount)
      }
      catch {
        console.log('error')        
      }

    }

    fetchData()

  }, [])
  const handleClose = () => setShowDefault(false);

  const [hiddenAlerts, setHiddenAlerts] = useState([]);

  const onClose = (alertId) => {
    const hiddenAlertsUpdated = [...hiddenAlerts, alertId];
    setHiddenAlerts(hiddenAlertsUpdated);
  };

  const confirmPay = async () => {
    try {
      const result = await api.post(`/transaction/confirm/${id}`)
      //console.log(result)
      return false;
    }
    catch {
      console.log('error')
    }

  }

  const shouldShowAlert = (alertId) => (
    hiddenAlerts.indexOf(alertId) === -1
  );
  const alert_data = [
    { title: "4th Anniversary bonus! Get 25% extra!", content: "Buy today any hash power and get 25% extra power! Create an order for hash power, pay for it and you will get automatically extra power. <br/> <br/>*For example: Order and pay for 100 GH/s and you will get extra 25 GH/s <br/> ** Pay by CRT_TRX or TRX and you will get also CRT Airdrop (Automatic Order Activation)<br/>*** Reinvest option not working with this promotion.", badge: "success", badgetitle: "PROMOTION" },
    { title: "CRT Airdrop - Only for the orders paid by CRT_TRX or TRX", content: "Buy today any hash power and you will get free CRT power of our own cryptocurrency - Cryptonits. For example, if you buy for 100$, you will receive, a CRT power worth 100$ for free. Payment needs to be from your Tron wallet or exchange where you have TRX! If you don't have enough CRT_TRX you need to buy it and here you have simple instruction: >BUY CRT_TRX<", badge: "success", badgetitle: "PROMOTION" },
    { title: "How to pay for this order by CRT?", content: "1. If you have enough CRT in your wallet you only need to send exactly the same amount like in order from your CRT wallet or directly from Exchange!<br/>2. If you don't have CRT you need to buy it and here you have simple instruction: >BUY CRT<<br/>3. You can send this CRT payment directly from the Exchange or your CRT wallet! Order will be activated automatically after payment confirmation.<br/><br/>*If you want to pay via BTC, USDT or ETH please set up: Pay by another currency and click button Change. ", badge: "secondary", badgetitle: "INFO" },
    { title: "New product - Bitcoin+", content: "We have the pleasure to introduce you to our new Bitcoin mining opportunity without any limits and with guaranteed profit! Profit is less than simple BTC hash power order but it's guaranteed not estimated. You will get exactly what you see in the profit calculation tab not less, not more. You can payout only in BTC without any minimum, so you can payout even 1$.<br/>Bitcoin+ hash power package difference:<br/>- Less profit but Guaranteed not estimated!<br/>- Payout only in BTC without minimum!", badge: "secondary", badgetitle: "INFO" },
  ];

  const changeType = (value) => {
    setPayType(value)
  }

  return (
    <>
      <Container>
        <Row className="justify-content-around">
          <Col lg={10} md={10} sm={12}>
            <Card>
              <Card.Body>
                <div className="fs-4 fw-semibold">Your order</div>
                <div className="fs-6 border d-flex align-items-center justify-content-between p-2">
                  <span>Order #3</span>
                  <span>660.07 GH/s</span>
                </div>
                <div className="fs-4 fw-semibold text-end">
                  Total: {payAmount} {PaymentType[payType]}
                </div>
                <div className="mt-5 fs-6 d-flex justify-content-between align-items-center mb-2">
                  <span>Send using {PaymentType[payType]} address</span>
                  <span>
                    <strong>Time left: </strong> 10:02
                  </span>
                </div>
                <Row>
                  <Col lg={3} md={3} sm={12}>
                    {payType == 0 ? <BitcoinQRCode address={paymentAddresses[payType]} amount={payAmount} message='One hundred thousand satoshi (1 mBTC) donation to BitGive' /> : <EthereumQRCode value={1} gas={1300} to={paymentAddresses[payType]} />}
                  </Col>
                  <Col lg={9} md={9} sm={12}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Send Exactly {payAmount} {PaymentType[payType]} to:</Form.Label>
                      <Form.Control
                        type="text"
                        className="w-75"
                        placeholder={paymentAddresses[payType]}
                      />
                      <Form.Text className="text-muted">
                        After sending to the above address click "confirm
                        payment" below.
                      </Form.Text>
                    </Form.Group>
                    <div className="">
                      <Button variant="success" className="m-1" onClick={() => { setShowDefault(true); confirmPay() }}>
                        Confirm payment
                      </Button>
                      <Button variant="light" className="m-1 text-white">
                        Copy address
                      </Button>
                    </div>
                    <Row className="align-items-center mt-4">
                      <Col lg={6} md={6} smd={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Example select</Form.Label>
                          <Form.Select defaultValue={payType} onChange={(e) => { changeType(e.target.value) }}>
                            <option value="">Pay by another currency</option>
                            <option value={0}>BTC</option>
                            <option value={1}>ETH</option>
                            <option value={2}>LTC</option>
                            <option value={3}>USDT</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <Button variant="secondary" className="m-1 text-white">Change</Button>
                      </Col>
                    </Row><hr />
                    <Row className="align-items-center">
                      <Col lg={8} md={8} sm={8}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Promo code</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Promo code"
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={4} sm={4}>
                        <Button variant="secondary" className="m-1 text-white">Activate</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Modal
          as={Modal.Dialog}
          centered
          show={showDefault}
          onHide={handleClose}
        >
          <Modal.Body>
            <div className="fs-4 fw-semibold">Your order</div>
            <div className="fs-6 border d-flex align-items-center justify-content-between p-2 my-2">
              <span>Order #3</span>
              <span>660.07 GH/s</span>
            </div>
            <div className="fs-3 fw-semibold">Waiting for payment confirmation</div>
            <div className="text-center m-5"><FaHourglassStart className="hour-watch-start" /></div>
            <div className="p-3 mb-2 bg-light text-dark border-top border-dark text-center">Time left: <span className="text-danger">15:55</span></div>
          </Modal.Body>
        </Modal>
        <Row className="my-5">
          {
            alert_data.map((item, index) => (
              <Alert
                variant="primary"
                className="my-2"
                show={shouldShowAlert(index)}
                onClose={() => onClose(index)} key={`alert-${index}`}>

                <div className="d-flex justify-content-between">
                  <div>
                    <Badge bg={item.badge} className="me-1">{item.badgetitle}</Badge>
                    <strong>{item.title}</strong>
                    <div>{item.content}</div>
                  </div>
                  <Button variant="close" size="xs" onClick={() => onClose(index)} />
                </div>
              </Alert>
            ))
          }

        </Row>
      </Container>
    </>
  );
};
