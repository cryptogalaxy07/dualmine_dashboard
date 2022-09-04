
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBoxOpen, faChartPie, faCog, faFileAlt, faHandHoldingUsd, faSignOutAlt, faTable, faTimes, faCalendarAlt, faMapPin, faInbox, faRocket } from "@fortawesome/free-solid-svg-icons";
import {
  faHome,
  faList,
  faShoppingCart,
  faAngleDoubleLeft,
  faCreditCard,
  faGift,
  faDatabase,
  faSync,
  faBars,
  faSignal,
  faDotCircle,
  faLink,
  faDollarSign,
  faCodeBranch,
  faUsers,
  faPlay,
  faPowerOff,
  // faTimes
} from "@fortawesome/free-solid-svg-icons";
import {
  Nav,
  Badge,
  Image,
  Button,
  Navbar,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";

import { Routes } from "../routes";
import Logo from "../assets/img/logo.png";
import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  

  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar
        expand={false}
        collapseOnSelect
        variant="dark"
        className="navbar-theme-primary px-4 d-md-none"
      >
        <Navbar.Brand
          className="me-lg-5"
          as={Link}
          to={Routes.DashboardOverview.path}
        >
          <Image src={Logo} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle
          as={Button}
          aria-controls="main-navbar"
          onClick={onCollapse}
        >
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar
          className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}
        >
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image
                    src={ProfilePicture}
                    className="card-img-top rounded-circle border-white"
                  />
                </div>
                <div className="d-block">
                  <h6>Hi, Jane</h6>
                  <Button
                    as={Link}
                    variant="secondary"
                    size="xs"
                    to={Routes.Signin.path}
                    className="text-dark"
                  >
                    <FontAwesomeIcon icon={faPowerOff} className="me-2" />{" "}
                    Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link
                className="collapse-close d-md-none"
                onClick={onCollapse}
              >
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              <a href="/" className="py-2 text-center"
              ><Image src={Logo} height="45"/></a>
              <NavItem
                title="Dashboard"
                link={Routes.DashboardOverview.path}
                icon={faHome}
              />

              <NavItem
                title="Profile"
                link={Routes.Profile.path}
                icon={faBars}
              />
              <NavItem
                title="Tickets"
                icon={faList}
                link={Routes.Ticket.path}
              />
              <NavItem
                title="Orders"
                icon={faShoppingCart}
                link={Routes.OrderOverview.path}
              />
              <NavItem
                title="Deposit CRT"
                icon={faAngleDoubleLeft}
                link={Routes.DepositCRT.path}
              />
              <NavItem
                title="Payouts"
                icon={faCreditCard}
                link={Routes.Payouts.path}
              />
              <NavItem
                title="Special offers"
                icon={faGift}
                badgeText="NEW"
                link={Routes.SpecialOffer.path}
              />
              <NavItem
                title="Stake CRT"
                icon={faDatabase}
                link={Routes.StakeCRT.path}
              />
              <NavItem
                title="Reinvest"
                icon={faSync}
                link={Routes.Reinvest.path}
              />
              <NavItem
                title="Profits"
                icon={faSignal}
                link={Routes.Profits.path}
              />
              <NavItem
                title="Cryptonits"
                icon={faDotCircle}
                link={Routes.Cryptonits.path}
              />
              <NavItem
                title="Transfer CRT"
                icon={faLink}
                link={Routes.TransferCRT.path}
              />
              <NavItem
                title="Exchange"
                icon={faDollarSign}
                link={Routes.Exchange.path}
              />
              <NavItem
                title="Convert"
                icon={faCodeBranch}
                link={Routes.Convert.path}
              />
              <NavItem
                title="Referrals"
                icon={faUsers}
                link={Routes.Referrals.path}
              />
              <NavItem
                title="Playroom"
                icon={faPlay}
                link={Routes.Playroom.path}
              />
              <hr />              
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
