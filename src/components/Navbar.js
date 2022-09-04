
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,  faDollarSign, faPowerOff, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Nav, Image, Navbar, Dropdown, Container } from '@themesberg/react-bootstrap';

import Profile3 from "../assets/img/dual_icon.png";
import { AuthContext } from "../Authenticate";

export default (props) => {

  const { user } = useContext(AuthContext)

  const goTo = (url) => {
    window.location.href = `https://dualmine.io/dashboard/#/${url}`
  }

  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
    <Container fluid className="px-0">
      <div className="d-flex justify-content-end w-100">
        <Nav className="align-items-center">

          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
              <div className="media d-flex align-items-center">                  
                <div className="media-body ms-2 me-3 d-flex flex-column text-dark align-items-end ">
                  <span className="mb-0 font-small fw-bold">{user.username}</span> 
                  <span className="mb-0 font-small fw-bold">{user.email}</span>
                </div>
                <Image src={Profile3} className="user-avatar md-avatar rounded-circle"/>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
              <Dropdown.Item className="fw-bold" onClick={() => {goTo('profile')}}> 
                <FontAwesomeIcon icon={faUser} className="me-2" /> Edit Profile
              </Dropdown.Item>
              <Dropdown.Item className="fw-bold" onClick={() => {goTo('ticket')}}>
                <FontAwesomeIcon icon={faEnvelope} className="me-2"  /> tickets
              </Dropdown.Item>
              <Dropdown.Item className="fw-bold" onClick={() => {goTo('payouts')}}>
                <FontAwesomeIcon icon={faDollarSign} className="me-2" /> Payouts
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item className="fw-bold">
                <FontAwesomeIcon icon={faPowerOff} className=" me-2" /> Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </div>
    </Container>
  </Navbar>
  );
};
