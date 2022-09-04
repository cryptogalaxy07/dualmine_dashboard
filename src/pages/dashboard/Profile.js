import { Card, Form, Button } from "@themesberg/react-bootstrap";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Authenticate";
import api from '../../utils/api';

export default () => {

  const username = useRef("");
  const email = useRef("");
  const firstname = useRef("");
  const lastname = useRef("");
  const btc_wallet = useRef("");
  const eth_wallet = useRef("");
  const crt_wallet = useRef("");
  const ltc_wallet = useRef("");
  const bch_wallet = useRef("");
  const dash_wallet = useRef("");
  const doge_wallet = useRef("");
  const zcash_wallet = useRef("");
  const monero_wallet = useRef("");
  const etc_wallet = useRef("");
  const password = useRef("");
  const confirm = useRef("");

  const { user } = useContext(AuthContext)

  const [userData, setUserData] = useState({});

  const formSubmit = async () => {

    if (password.current.value != confirm.current.value) {
      return false;
    }

    try {
      const result = await api.post(`/update-profile/${user.id}`, {
        firstname: firstname.current.value,
        lastname: lastname.current.value,
        username: username.current.value,
        email: email.current.value,
        btc_wallet: password.current.value,
        eth_wallet: eth_wallet.current.value,
        crt_wallet: crt_wallet.current.value,
        ltc_wallet: ltc_wallet.current.value,
        bch_wallet: bch_wallet.current.value,
        dash_wallet: dash_wallet.current.value,
        doge_wallet: doge_wallet.current.value,
        zcash_wallet: zcash_wallet.current.value,
        monero_wallet: monero_wallet.current.value,
        etc_wallet: etc_wallet.current.value,
        password: password.current.value,        

      });
    }
    catch {
      console.log('error')
    }
  }
  
  useEffect(() => {
    
    const fetchData = async () => {      
      try {
        const result = await api.post(`/user/profile/${user.id}`)
        setUserData(result)
      }
      catch {
        console.log('ERROR-user/profile')
      }

    }

    fetchData()

  }, [])

  return (
    <div className="mt-5">
      <Card>
        <Card.Body>
          <div>
          <span>Edit Profile</span>
          </div>
          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="" defaultValue={userData.username} ref={username} style={{ width: "80%" }} />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="" defaultValue={userData.email} ref={email} style={{ width: "80%" }} />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="" defaultValue={userData.firstname} ref={firstname} style={{ width: "80%" }} />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="" defaultValue={userData.lastname} ref={lastname} style={{ width: "80%" }} />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Label>BTC Wallet address</Form.Label>
            <Form.Control type="text" placeholder="" defaultValue={userData.btc_wallet} ref={btc_wallet} style={{ width: "80%" }} />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Label>ETH Wallet address</Form.Label>
            <Form.Control type="text" placeholder="" defaultValue={userData.eth_wallet} ref={eth_wallet} style={{ width: "80%" }} />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Label>CRT Wallet address</Form.Label>
            <Form.Control type="text" placeholder="" defaultValue={userData.crt_wallet} ref={crt_wallet} style={{ width: "80%" }} />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Label>LTC Wallet address</Form.Label>
            <Form.Control type="text" placeholder="" defaultValue={userData.ltc_wallet} ref={ltc_wallet} style={{ width: "80%" }} />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Label>BCH Wallet address</Form.Label>
            <Form.Control type="text" placeholder="" defaultValue={userData.bch_wallet} ref={bch_wallet} style={{ width: "80%" }} />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Label>DASH Wallet address</Form.Label>
            <Form.Control type="text" placeholder="" defaultValue={userData.dash_wallet} ref={dash_wallet} style={{ width: "80%" }} />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Label>DOGE Wallet address</Form.Label>
            <Form.Control type="text" placeholder="" defaultValue={userData.doge_wallet} ref={doge_wallet} style={{ width: "80%" }} />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Label>ZCASH Wallet address</Form.Label>
            <Form.Control type="text" placeholder="" defaultValue={userData.zcash_wallet} ref={zcash_wallet} style={{ width: "80%" }} />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Label>MONERO Wallet address</Form.Label>
            <Form.Control type="text" placeholder="" defaultValue={userData.monero_wallet} ref={monero_wallet} style={{ width: "80%" }} />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Label>ETC Wallet address</Form.Label>
            <Form.Control type="text" placeholder="" defaultValue={userData.etc_wallet} ref={etc_wallet} style={{ width: "80%" }} />
          </Form.Group>          
          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="" defaultValue={userData.password} ref={password} style={{ width: "80%" }} />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Label>Password confirmation</Form.Label>
            <Form.Control type="text" placeholder="" defaultValue={userData.password} ref={confirm} style={{ width: "80%" }} />
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Label>Password confirmation</Form.Label>
            <Form.Check
              defaultChecked
              type="radio"
              defaultValue="option1"
              label="Yes"
              name="exampleRadios"
              id="radio1"
              htmlFor="radio1"
            />
            <Form.Check
              defaultChecked
              type="radio"
              defaultValue="option1"
              label="No"
              name="exampleRadios"
              id="radio1"
              htmlFor="radio1"
            />
          </Form.Group>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" className="m-1" onClick={() => { formSubmit() }}>Save</Button>
          <Button variant="danger" className="m-1">Reset changes</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};
