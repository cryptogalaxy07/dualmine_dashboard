import React, { useContext, useEffect, useState } from "react";
import {
    Alert,
    Button,
    Badge,
    Table,
    Image,
    Card,
    Container,
    Row,
    Col,
} from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Authenticate";
import api from "../../utils/api";
import moment from "moment-timezone";
import toast, { Toaster } from "react-hot-toast";
import WarningModal from "../../components/Modal";
import { Modal } from '@themesberg/react-bootstrap';

export default () => {
    const [hiddenAlerts, setHiddenAlerts] = React.useState([]);

    const onClose = (alertId) => {
        const hiddenAlertsUpdated = [...hiddenAlerts, alertId];
        setHiddenAlerts(hiddenAlertsUpdated);
    };

    const shouldShowAlert = (alertId) => hiddenAlerts.indexOf(alertId) === -1;

    const [orderData, setOrderData] = useState([]);
    const PaymentType = ["BTC", "ETH", "LTC", "USDT"];
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                const result = await api.post(`/user/transaction/${user.id}`);

                // if (result.length == 0 || !result) {                  
                //   toast.error("You need to finish first order in order to access full feature!")
                //   window.location.href = `https://dualmine.io/`
                //   return false;
                // }

                setOrderData(result);
                console.log(result);

                return false;
            }

            return setOrderData([]);
        };

        fetchData();
    }, []);

    return (
        <div className="mt-5">
            <div>            
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
                            <strong>
                                It's Time! Final counting has just begun!
                            </strong>
                            <div>
                                Tomorrow (Thursday) we will take a snapshot!
                                Everyone who has a minimum of one active paid
                                contract will get a Premium lifetime
                                subscription for free! The World Premiere of our
                                new product will be shortly after snapshot.
                            </div>
                        </div>
                        <Button
                            variant="close"
                            size="xs"
                            onClick={() => onClose("light")}
                        />
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
                                4th Anniversary bonus Get 25% extra!
                            </strong>
                            <div>
                                Buy today any hash power and get 25% extra
                                power! Create an order for hash power, pay for
                                it and you will get automatically extra power.
                                <br />
                                <br />
                                *For example: Order and pay for 100 GH/s and you
                                will get extra 25 GH/s
                                <br />
                                ** Pay by CRT_TRX or TRX and you will get also
                                CRT Airdrop (Automatic Order Activation)
                                <br />
                                *** Reinvest option not working with this
                                promotion.
                                <br />
                            </div>
                        </div>
                        <Button
                            variant="close"
                            size="xs"
                            onClick={() => onClose("light")}
                        />
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
                                CRT Airdrop - Only for the orders paid by
                                CRT_TRX or TRX
                            </strong>
                            <div>
                                Tomorrow (Thursday) we will take a snapshot!
                                Everyone who has a minimum of one active paid
                                contract will get a Premium lifetime
                                subscription for free! The World Premiere of our
                                new product will be shortly after snapshot.
                            </div>
                        </div>
                        <Button
                            variant="close"
                            size="xs"
                            onClick={() => onClose("light")}
                        />
                    </div>
                </Alert>
            </div>
            <div className="mt-5">
                <Container>
                    <Row>
                        <Col lg={4} md={3} sm={12}>
                            <Card className="my-2">
                                <Card.Body>
                                    <div className="d-flex ms-3 align-items-center">
                                        <div className="crypto-icons me-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="50px"
                                                height="50px"
                                                viewBox="0 0 256 417"
                                                version="1.1"
                                                preserveAspectRatio="xMidYMid"
                                            >
                                                {" "}
                                                <g>
                                                    {" "}
                                                    <polygon
                                                        fill="#343434"
                                                        points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
                                                    />{" "}
                                                    <polygon
                                                        fill="#8C8C8C"
                                                        points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"
                                                    />{" "}
                                                    <polygon
                                                        fill="#3C3C3B"
                                                        points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
                                                    />{" "}
                                                    <polygon
                                                        fill="#8C8C8C"
                                                        points="127.962 416.9052 127.962 312.1852 0 236.5852"
                                                    />{" "}
                                                    <polygon
                                                        fill="#141414"
                                                        points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
                                                    />{" "}
                                                    <polygon
                                                        fill="#393939"
                                                        points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
                                                    />{" "}
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="d-flex flex-column justify-content-between align-items-center">
                                            <div className="d-flex flex-column mb-2 justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                            <div className="d-flex flex-column justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={3} sm={12}>
                            <Card className="my-2">
                                <Card.Body>
                                    <div className="d-flex ms-3 align-items-center">
                                        <div className="crypto-icons me-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="50px"
                                                height="50px"
                                                viewBox="0 0 256 417"
                                                version="1.1"
                                                preserveAspectRatio="xMidYMid"
                                            >
                                                {" "}
                                                <g>
                                                    {" "}
                                                    <polygon
                                                        fill="#343434"
                                                        points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
                                                    />{" "}
                                                    <polygon
                                                        fill="#8C8C8C"
                                                        points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"
                                                    />{" "}
                                                    <polygon
                                                        fill="#3C3C3B"
                                                        points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
                                                    />{" "}
                                                    <polygon
                                                        fill="#8C8C8C"
                                                        points="127.962 416.9052 127.962 312.1852 0 236.5852"
                                                    />{" "}
                                                    <polygon
                                                        fill="#141414"
                                                        points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
                                                    />{" "}
                                                    <polygon
                                                        fill="#393939"
                                                        points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
                                                    />{" "}
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="d-flex flex-column justify-content-between align-items-center">
                                            <div className="d-flex flex-column mb-2 justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                            <div className="d-flex flex-column justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={3} sm={12}>
                            <Card className="my-2">
                                <Card.Body>
                                    <div className="d-flex ms-3 align-items-center">
                                        <div className="crypto-icons me-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="50px"
                                                height="50px"
                                                viewBox="0 0 256 417"
                                                version="1.1"
                                                preserveAspectRatio="xMidYMid"
                                            >
                                                {" "}
                                                <g>
                                                    {" "}
                                                    <polygon
                                                        fill="#343434"
                                                        points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
                                                    />{" "}
                                                    <polygon
                                                        fill="#8C8C8C"
                                                        points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"
                                                    />{" "}
                                                    <polygon
                                                        fill="#3C3C3B"
                                                        points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
                                                    />{" "}
                                                    <polygon
                                                        fill="#8C8C8C"
                                                        points="127.962 416.9052 127.962 312.1852 0 236.5852"
                                                    />{" "}
                                                    <polygon
                                                        fill="#141414"
                                                        points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
                                                    />{" "}
                                                    <polygon
                                                        fill="#393939"
                                                        points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
                                                    />{" "}
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="d-flex flex-column justify-content-between align-items-center">
                                            <div className="d-flex flex-column mb-2 justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                            <div className="d-flex flex-column justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={3} sm={12}>
                            <Card className="my-2">
                                <Card.Body>
                                    <div className="d-flex ms-3 align-items-center">
                                        <div className="crypto-icons me-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="50px"
                                                height="50px"
                                                viewBox="0 0 256 417"
                                                version="1.1"
                                                preserveAspectRatio="xMidYMid"
                                            >
                                                {" "}
                                                <g>
                                                    {" "}
                                                    <polygon
                                                        fill="#343434"
                                                        points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
                                                    />{" "}
                                                    <polygon
                                                        fill="#8C8C8C"
                                                        points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"
                                                    />{" "}
                                                    <polygon
                                                        fill="#3C3C3B"
                                                        points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
                                                    />{" "}
                                                    <polygon
                                                        fill="#8C8C8C"
                                                        points="127.962 416.9052 127.962 312.1852 0 236.5852"
                                                    />{" "}
                                                    <polygon
                                                        fill="#141414"
                                                        points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
                                                    />{" "}
                                                    <polygon
                                                        fill="#393939"
                                                        points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
                                                    />{" "}
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="d-flex flex-column justify-content-between align-items-center">
                                            <div className="d-flex flex-column mb-2 justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                            <div className="d-flex flex-column justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={3} sm={12}>
                            <Card className="my-2">
                                <Card.Body>
                                    <div className="d-flex ms-3 align-items-center">
                                        <div className="crypto-icons me-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="50px"
                                                height="50px"
                                                style={{
                                                    width: 50,
                                                    position: "relative",
                                                    top: 5,
                                                    height: 25,
                                                    overflow: "visible",
                                                }}
                                                viewBox="0.847 0.876 329.254 329.256"
                                            >
                                                <path
                                                    d="M330.102 165.503c0 90.922-73.705 164.629-164.626 164.629C74.554 330.132.848 256.425.848 165.503.848 74.582 74.554.876 165.476.876c90.92 0 164.626 73.706 164.626 164.627"
                                                    fill="#bebebe"
                                                />
                                                <path
                                                    d="M295.15 165.505c0 71.613-58.057 129.675-129.674 129.675-71.616 0-129.677-58.062-129.677-129.675 0-71.619 58.061-129.677 129.677-129.677 71.618 0 129.674 58.057 129.674 129.677"
                                                    fill="#bebebe"
                                                />
                                                <path
                                                    d="M155.854 209.482l10.693-40.264 25.316-9.249 6.297-23.663-.215-.587-24.92 9.104 17.955-67.608h-50.921l-23.481 88.23-19.605 7.162-6.478 24.395 19.59-7.156-13.839 51.998h135.521l8.688-32.362h-84.601"
                                                    fill="#fff"
                                                />
                                            </svg>
                                        </div>
                                        <div className="d-flex flex-column justify-content-between align-items-center">
                                            <div className="d-flex flex-column mb-2 justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                            <div className="d-flex flex-column justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={3} sm={12}>
                            <Card className="my-2">
                                <Card.Body>
                                    <div className="d-flex ms-3 align-items-center">
                                        <div className="crypto-icons me-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                id="btccash"
                                                width="50px"
                                                height="50px"
                                                data-name="Layer 1"
                                                viewBox="0 0 962.02 594.313"
                                            >
                                                <defs>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "#btccash .cls-1{fill:#f7941d;}#btccash .cls-2{fill:#fff;}",
                                                        }}
                                                    />
                                                </defs>
                                                <title>
                                                    4-bitcoin-cash-logo-flag
                                                </title>
                                                <path
                                                    className="cls-1"
                                                    d="M689.315,594.313c93.5-65.6,154.6-174.2,154.6-297.106S782.817,65.6,689.315,0h272.7V594.313Z"
                                                />
                                                <path
                                                    className="cls-1"
                                                    d="M118.4,297.107c0,122.9,61.1,231.5,154.6,297.106H0V0H273.006C179.5,65.6,118.4,174.2,118.4,297.107Z"
                                                />
                                                <circle
                                                    className="cls-1"
                                                    cx="481.01"
                                                    cy="296.963"
                                                    r="296.905"
                                                />
                                                <path
                                                    className="cls-2"
                                                    d="M620.266,309.3l-.165-.307-.028-.051c-.1-.309-.175-.632-.289-.966l-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026-.028-.051a60.65,60.65,0,0,0-19.831-29.671l-.014-.026c-.279-.213-.572-.451-.852-.663l-.386-.287-.279-.212-.12-.1-.266-.187-.12-.1-.266-.187-.12-.1-.279-.212-.146-.087-.279-.212-.146-.087-.3-.2-.146-.087-.177-.268-.159-.112-.3-.2-.159-.112-.305-.2-.159-.112-.3-.2-.159-.112-.319-.224-.159-.112-.344-.211-.159-.112-.344-.211-.159-.112-.344-.211-.159-.112-.344-.211-.185-.1-.344-.211-.185-.1-.37-.2-.185-.1-.384-.222-.185-.1-.384-.222-.185-.1-.384-.222-.2-.124-.384-.222-.2-.124-.409-.209-.2-.124-.409-.209-.277-.148-.014-.026c-.2-.124-.409-.209-.608-.333a84.659,84.659,0,0,0-27.11-8.566,75.8,75.8,0,0,0,7.263-9.122l.348-.517.026-.014.161-.252.211-.344.112-.159.211-.344.112-.159.211-.344.112-.159.211-.344.112-.159.211-.344.112-.159.185-.331.112-.159.185-.331.087-.146.185-.331.087-.146.185-.331.087-.146.159-.317.087-.146.159-.317.087-.146.159-.317.087-.146.172-.291.087-.146.173-.291.087-.146.148-.277.087-.146.148-.277.061-.132.148-.277.061-.132.148-.277.061-.132.148-.277.061-.132.122-.264.061-.132.122-.264.061-.132.122-.264.061-.132.134-.3.183-.4c.134-.3.242-.592.376-.895l.026-.014a53.867,53.867,0,0,0,2.737-31.626l-.014-.026-.028-.051-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026c-.061-.3-.122-.594-.208-.878l0-.065-.014-.026-.014-.026-.014-.026.014.026-.124-.23c-.09-.413-.181-.826-.311-1.251-.09-.413-.22-.838-.336-1.238l-.151-.281-.028-.051c-.087-.283-.173-.567-.26-.85l-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026-.013-.026a53.88,53.88,0,0,0-17.641-26.4l-.013-.026c-.24-.2-.506-.388-.746-.588l-.332-.25-.266-.187-.12-.1-.226-.175-.12-.1-.226-.175-.12-.1-.252-.161-.12-.1-.266-.187-.12-.1-.266-.187-.12-.1-.266-.187-.146-.087-.266-.187-.146-.087-.266-.187-.146-.087-.291-.173-.146-.087-.291-.173-.146-.087-.291-.173-.146-.087-.291-.173-.146-.087-.305-.2-.146-.087-.305-.2-.146-.087-.331-.185-.146-.087-.33-.185-.159-.112-.331-.185-.159-.112-.33-.185-.159-.112-.344-.211-.185-.1-.344-.211-.185-.1-.37-.2-.185-.1-.37-.2-.264-.122-.014-.026-.555-.3c-16.214-8.427-36.813-10.964-57.538-5.647l-5.391,1.384-13.636-53.1-31.6,8.1,13.591,52.89L425.2,178.5l-13.6-52.721-31.6,8.1,13.591,52.89-65.167,16.769,8.671,33.7,26.258-6.744a16.25,16.25,0,0,1,19.8,11.711h0L419.6,384.022a10.857,10.857,0,0,1-7.8,13.206l-23.008,5.919,1.352,40.08,65.09-16.727L469,479.294l31.584-8.127-13.6-52.916,25.278-6.481,13.605,52.915,31.584-8.127L543.8,403.436c5.352-1.4,9.956-2.588,13.141-3.412,23.356-6.007,42.243-19.7,53.672-36.775l.386-.57.026-.014.187-.266.248-.4.124-.2.248-.4.124-.2.222-.384.124-.2.222-.384.1-.185.222-.384.1-.185.222-.384.1-.185.2-.37.1-.185.2-.37.1-.185.211-.344.1-.185.211-.344.1-.185.185-.331.1-.185.185-.33.1-.185.185-.33.073-.171.185-.33.073-.171.159-.317.087-.146.159-.317.087-.146.159-.317.087-.146.159-.317.087-.146.159-.317.087-.146.159-.317.087-.146.134-.3.087-.146.134-.3.061-.132.146-.342.2-.435c.146-.342.3-.659.425-.988l.012-.039a60.716,60.716,0,0,0,3.086-35.574l-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026c-.075-.323-.149-.645-.224-.968l0-.065-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026-.014-.026-.055-.1c-.118-.464-.21-.942-.354-1.393C620.362,310.332,620.295,309.84,620.266,309.3ZM434.605,214.429c5.391-1.384,27.681-6.982,35.031-8.893,11.685-2.991,23.2-1.83,32.19,2.5l.3.134h0l.132.061.185.1.092.049.185.1.092.049.185.1.092.049.185.1.092.049.185.1.092.049.185.1.092.049.185.1.092.049.185.1.092.049.185.1.092.049.159.112.092.049.159.112.092.049.159.112.092.049.146.087.092.049.146.087.092.049.146.087.092.049.146.087.092.049.146.087.067.063.146.087.053.037.146.087.053.037.146.087.053.037.146.087.053.037.12.1.053.037.146.087.2.124c.146.087.279.213.425.3h0a27.251,27.251,0,0,1,9.658,13.836h0l.041.077c.043.142.1.309.143.451l.014.026.083.153c.059.232.13.425.189.657a3.953,3.953,0,0,1,.126.724l.083.153.014.026a2.2,2.2,0,0,0,.118.464l.041.077h0a27.341,27.341,0,0,1-1.8,16.768h0l-.207.474-.11.224-.087.146-.024.079-.061.132-.024.079-.087.146-.024.079-.087.146-.024.079-.087.146-.024.079-.087.146-.024.079-.087.146-.024.079-.087.146-.049.092-.087.146-.049.092-.087.146-.049.092-.087.146-.049.092-.112.159-.049.092-.112.159-.049.092-.112.159-.049.092-.112.159-.049.092-.112.159-.049.092-.112.159-.049.092-.112.159-.049.092-.112.159-.049.092-.138.173-.049.092-.138.173-.049.092-.138.173-.049.092-.138.173-.1.12h0l-.187.266c-5.811,8.142-15.334,14.72-27.019,17.711-7.364,1.886-29.6,7.716-34.986,9.1ZM558.117,323.152l.083.153.014.026c.031.181.075.323.106.5h0l.014.026h0l.014.026.014.026.014.026h0a28.087,28.087,0,0,1-2.541,18.324h0l-.283.515-.136.238-.1.185-.049.092-.087.146-.049.092-.087.146-.049.092-.112.159-.049.092-.112.159-.049.092-.112.159-.049.092-.112.159-.049.092-.112.159-.049.092-.112.159-.049.092-.112.159-.049.092-.112.159-.049.092-.112.159-.049.092-.138.173-.049.092-.138.173-.049.092-.124.2-.049.092-.124.2-.049.092-.124.2-.075.106-.124.2-.075.106-.15.212-.075.106-.15.212-.075.106-.15.212-.075.106-.151.212-.075.106-.15.212-.126.134h0l-.238.293c-7.057,9.012-18.44,16.425-32.265,19.974-8.719,2.251-35.063,9.141-41.473,10.777l-17.935-69.785c6.4-1.662,32.814-8.294,41.532-10.545,13.826-3.549,27.4-2.542,37.891,1.938l.342.146h0l.171.073.25.1.118.035.224.11.118.035.224.11.118.035.224.11.092.049.224.11.092.049.224.11.092.049.224.11.092.049.185.1.092.049.185.1.092.049.185.1.092.049.185.1.092.049.185.1.092.049.185.1.092.049.185.1.092.049.185.1.092.049.185.1.092.049.159.112.092.049.159.112.092.049.159.112.092.049.159.112.092.049.159.112.092.049.146.087.092.049.159.112.212.15c.159.112.344.211.5.323h0a28.172,28.172,0,0,1,11.053,14.834h0l.055.1c.057.167.1.309.157.476l.014.026.083.153c.059.232.118.464.191.722.129.057.15.342.109.694Z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="d-flex flex-column justify-content-between align-items-center">
                                            <div className="d-flex flex-column mb-2 justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                            <div className="d-flex flex-column justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={3} sm={12}>
                            <Card className="my-2">
                                <Card.Body>
                                    <div className="d-flex ms-3 align-items-center">
                                        <div className="crypto-icons me-5">
                                            <svg
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="50px"
                                                height="50px"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 552.1 464.7"
                                                style={{
                                                    enableBackground:
                                                        "new 0 0 552.1 464.7",
                                                }}
                                                xmlSpace="preserve"
                                            >
                                                <style
                                                    type="text/css"
                                                    dangerouslySetInnerHTML={{
                                                        __html: "\t.st0{fill:#008DE4;}",
                                                    }}
                                                />
                                                <g>
                                                    {" "}
                                                    <g>
                                                        {" "}
                                                        <path
                                                            className="st0"
                                                            d="M355.6,24H168.7l-15.5,86.6l168.7,0.2c83.1,0,107.6,30.2,106.9,80.2c-0.4,25.6-11.5,69-16.3,83.1			c-12.8,37.5-39.1,80.2-137.7,80.1l-164-0.1l-15.5,86.7h186.5c65.8,0,93.7-7.7,123.4-21.3C470.9,389,510,324.2,525.7,239.6			C549,113.6,520,24,355.6,24"
                                                        />{" "}
                                                        <path
                                                            className="st0"
                                                            d="M88,188.9c-49,0-56,31.9-60.6,51.2c-6.1,25.2-8.1,35.5-8.1,35.5h191.4c49,0,56-31.9,60.6-51.2			c6.1-25.2,8.1-35.5,8.1-35.5H88z"
                                                        />{" "}
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="d-flex flex-column justify-content-between align-items-center">
                                            <div className="d-flex flex-column mb-2 justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                            <div className="d-flex flex-column justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={3} sm={12}>
                            <Card className="my-2">
                                <Card.Body>
                                    <div className="d-flex ms-3 align-items-center">
                                        <div className="crypto-icons me-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 2000 2000"
                                                width={50}
                                                height={50}
                                            >
                                                <g fill="#c2a633">
                                                    <path d="M1024 659H881.12v281.69h224.79v117.94H881.12v281.67H1031c38.51 0 316.16 4.35 315.73-327.72S1077.44 659 1024 659z" />
                                                    <path d="M1000 0C447.71 0 0 447.71 0 1000s447.71 1000 1000 1000 1000-447.71 1000-1000S1552.29 0 1000 0zm39.29 1540.1H677.14v-481.46H549.48V940.7h127.65V459.21h310.82c73.53 0 560.56-15.27 560.56 549.48 0 574.09-509.21 531.41-509.21 531.41z" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="d-flex flex-column justify-content-between align-items-center">
                                            <div className="d-flex flex-column mb-2 justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                            <div className="d-flex flex-column justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={3} sm={12}>
                            <Card className="my-2">
                                <Card.Body>
                                    <div className="d-flex ms-3 align-items-center">
                                        <div className="crypto-icons me-5">
                                            <svg
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="50px"
                                                height="50px"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 493.3 490.2"
                                                style={{
                                                    enableBackground:
                                                        "new 0 0 493.3 490.2",
                                                }}
                                                xmlSpace="preserve"
                                            >
                                                <style
                                                    type="text/css"
                                                    dangerouslySetInnerHTML={{
                                                        __html: ".sdt0{fill:#231F20;}.dst1{fill:#F4B728;}",
                                                    }}
                                                />
                                                <title>headerArtboard 7</title>
                                                <path
                                                    className="dst0"
                                                    d="M245.4,20C121.1,20,20,121.1,20,245.4s101.1,225.4,225.4,225.4s225.4-101.1,225.4-225.4S369.7,20,245.4,20z	 M245.4,433.6c-103.8,0-188.2-84.4-188.2-188.2S141.6,57.2,245.4,57.2s188.2,84.4,188.2,188.2S349.2,433.6,245.4,433.6z"
                                                />
                                                <circle
                                                    className="dst1"
                                                    cx="245.4"
                                                    cy="245.4"
                                                    r="177.6"
                                                />
                                                <polygon
                                                    className="dst0"
                                                    points="165,315.5 165,349.9 226.5,349.9 226.5,387.6 264.3,387.6 264.3,349.9 325.8,349.9 325.8,304.4 	230.4,304.4 325.8,175 325.8,140.6 264.3,140.6 264.3,103 226.5,103 226.5,140.6 165,140.6 165,186.2 260.4,186.2 "
                                                />
                                            </svg>
                                        </div>
                                        <div className="d-flex flex-column justify-content-between align-items-center">
                                            <div className="d-flex flex-column mb-2 justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                            <div className="d-flex flex-column justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={3} sm={12}>
                            <Card className="my-2">
                                <Card.Body>
                                    <div className="d-flex ms-3 align-items-center">
                                        <div className="crypto-icons me-5">
                                            <svg
                                                width={50}
                                                height={50}
                                                viewBox="0 0 256 256"
                                                xmlns="http://www.w3.org/2000/svg"
                                                preserveAspectRatio="xMidYMid"
                                            >
                                                <path
                                                    d="M127.998 0C57.318 0 0 57.317 0 127.999c0 14.127 2.29 27.716 6.518 40.43H44.8V60.733l83.2 83.2 83.198-83.2v107.695h38.282c4.231-12.714 6.521-26.303 6.521-40.43C256 57.314 198.681 0 127.998 0"
                                                    fill="#F60"
                                                />
                                                <path
                                                    d="M108.867 163.062l-36.31-36.311v67.765H18.623c22.47 36.863 63.051 61.48 109.373 61.48s86.907-24.617 109.374-61.48h-53.933V126.75l-36.31 36.31-19.13 19.129-19.128-19.128h-.002z"
                                                    fill="#4C4C4C"
                                                />
                                            </svg>
                                        </div>
                                        <div className="d-flex flex-column justify-content-between align-items-center">
                                            <div className="d-flex flex-column mb-2 justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                            <div className="d-flex flex-column justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={3} sm={12}>
                            <Card className="my-2">
                                <Card.Body>
                                    <div className="d-flex ms-3 align-items-center">
                                        <div className="crypto-icons me-5">
                                            <svg
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="50px"
                                                height="50px"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 133.7 220.5"
                                                style={{
                                                    enableBackground:
                                                        "new 0 0 133.7 220.5",
                                                }}
                                                xmlSpace="preserve"
                                            >
                                                <style
                                                    type="text/css"
                                                    dangerouslySetInnerHTML={{
                                                        __html: ".st0{fill:#49FCD4;}",
                                                    }}
                                                />
                                                <path
                                                    className="st0"
                                                    d="M2.4,98.8l65-27.4l63,28.1L67.3,0L2.4,98.8z M2.6,129.2l64.9,37.6l66.2-37.6l-65.6,91.3L2.6,129.2z"
                                                />
                                                <path
                                                    className="st0"
                                                    d="M67.7,84.8L0,113.3l67.7,37.6l65.8-36.8L67.7,84.8z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="d-flex flex-column justify-content-between align-items-center">
                                            <div className="d-flex flex-column mb-2 justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                            <div className="d-flex flex-column justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={3} sm={12}>
                            <Card className="my-2">
                                <Card.Body>
                                    <div className="d-flex ms-3 align-items-center">
                                        <div className="crypto-icons me-5">
                                            <svg
                                                version="1.1"
                                                id="Capa_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="50px"
                                                height="50px"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 600 600"
                                                style={{
                                                    enableBackground:
                                                        "new 0 0 600 600",
                                                }}
                                                xmlSpace="preserve"
                                            >
                                                <style
                                                    type="text/css"
                                                    dangerouslySetInnerHTML={{
                                                        __html: ".btg0{fill:#FFFFFF;}.btg1{fill:url(#SVGID_1_);}.btg2{fill:#132365;}",
                                                    }}
                                                />
                                                <g>
                                                    <g>
                                                        <circle
                                                            className="btg0"
                                                            cx={300}
                                                            cy={300}
                                                            r="223.4"
                                                        />
                                                        <linearGradient
                                                            id="SVGID_1_"
                                                            gradientUnits="userSpaceOnUse"
                                                            x1="163.539"
                                                            y1="93.4842"
                                                            x2="469.1968"
                                                            y2="556.0573"
                                                        >
                                                            <stop
                                                                offset="5.128205e-03"
                                                                style={{
                                                                    stopColor:
                                                                        "#F1D200",
                                                                }}
                                                            />
                                                            <stop
                                                                offset={1}
                                                                style={{
                                                                    stopColor:
                                                                        "#D27D00",
                                                                }}
                                                            />
                                                        </linearGradient>
                                                        <path
                                                            className="btg1"
                                                            d="M300,45C159.2,45,45,159.2,45,300s114.2,255,255,255s255-114.2,255-255S440.8,45,300,45z M300,496.3c-108.4,0-196.3-87.9-196.3-196.3S191.6,103.7,300,103.7S496.3,191.6,496.3,300S408.4,496.3,300,496.3z"
                                                        />
                                                        <g>
                                                            <g>
                                                                <path
                                                                    id="XMLID_145_"
                                                                    className="btg2"
                                                                    d="M215,387.2l9.8-19.6h117.7c16.2,0,29.4-13.2,29.4-29.4v0c0-16.2-13.2-29.4-29.4-29.4h-98.1v-19.6h98.1c27.1,0,49,22,49,49v0c0,27.1-22,49-49,49H215z"
                                                                />
                                                                <path
                                                                    className="btg2"
                                                                    d="M342.5,392.6H206.2l15.3-30.5h121.1c13.2,0,24-10.8,24-24c0-13.2-10.8-24-24-24H239v-30.5h103.5c30,0,54.5,24.4,54.5,54.5C397,368.2,372.5,392.6,342.5,392.6z M223.8,381.7h118.7c24,0,43.6-19.6,43.6-43.6c0-24-19.6-43.6-43.6-43.6h-92.6v8.7h92.6c19.2,0,34.9,15.6,34.9,34.9c0,19.2-15.6,34.9-34.9,34.9H228.2L223.8,381.7z"
                                                                />
                                                            </g>
                                                            <g>
                                                                <path
                                                                    id="XMLID_144_"
                                                                    className="btg2"
                                                                    d="M215,209.6l9.8,19.6h104.6c16.2,0,29.4,13.2,29.4,29.4v0c0,16.2-13.2,29.4-29.4,29.4h-75.2v19.6h75.2c27.1,0,49-22,49-49v0c0-27.1-22-49-49-49H215z"
                                                                />
                                                                <path
                                                                    className="btg2"
                                                                    d="M329.4,313.1h-80.6v-30.5h80.6c13.2,0,24-10.8,24-24c0-13.2-10.8-24-24-24h-108l-15.3-30.5h123.2c30,0,54.5,24.4,54.5,54.5C383.9,288.6,359.5,313.1,329.4,313.1z M259.7,302.2h69.7c24,0,43.6-19.6,43.6-43.6S353.5,215,329.4,215H223.8l4.4,8.7h101.2c19.2,0,34.9,15.6,34.9,34.9s-15.6,34.9-34.9,34.9h-69.7V302.2z"
                                                                />
                                                            </g>
                                                            <g>
                                                                <rect
                                                                    id="XMLID_143_"
                                                                    x="244.4"
                                                                    y="210.6"
                                                                    className="btg2"
                                                                    width="19.6"
                                                                    height="176.5"
                                                                />
                                                                <path
                                                                    className="btg2"
                                                                    d="M269.5,392.6H239V205.2h30.5V392.6z M249.9,381.7h8.7V216.1h-8.7V381.7z"
                                                                />
                                                            </g>
                                                            <g>
                                                                <rect
                                                                    id="XMLID_142_"
                                                                    x="268.4"
                                                                    y="180.1"
                                                                    className="btg2"
                                                                    width="19.6"
                                                                    height="39.2"
                                                                />
                                                                <path
                                                                    className="btg2"
                                                                    d="M290.7,222.1h-25.1v-44.7h25.1V222.1z M271.1,216.6h14.2v-33.8h-14.2V216.6z"
                                                                />
                                                            </g>
                                                            <g>
                                                                <rect
                                                                    id="XMLID_141_"
                                                                    x="310.9"
                                                                    y="180.1"
                                                                    className="btg2"
                                                                    width="19.6"
                                                                    height="39.2"
                                                                />
                                                                <path
                                                                    className="btg2"
                                                                    d="M333.2,222.1h-25.1v-44.7h25.1V222.1z M313.6,216.6h14.2v-33.8h-14.2V216.6z"
                                                                />
                                                            </g>
                                                            <g>
                                                                <rect
                                                                    id="XMLID_140_"
                                                                    x="268.4"
                                                                    y="376.3"
                                                                    className="btg2"
                                                                    width="19.6"
                                                                    height="39.2"
                                                                />
                                                                <path
                                                                    className="btg2"
                                                                    d="M290.7,418.2h-25.1v-44.7h25.1V418.2z M271.1,412.8h14.2V379h-14.2V412.8z"
                                                                />
                                                            </g>
                                                            <g>
                                                                <rect
                                                                    id="XMLID_139_"
                                                                    x="310.9"
                                                                    y="376.3"
                                                                    className="btg2"
                                                                    width="19.6"
                                                                    height="39.2"
                                                                />
                                                                <path
                                                                    className="btg2"
                                                                    d="M333.2,418.2h-25.1v-44.7h25.1V418.2z M313.6,412.8h14.2V379h-14.2V412.8z"
                                                                />
                                                            </g>
                                                        </g>
                                                        <path
                                                            className="btg2"
                                                            d="M300,473.8c-95.8,0-173.8-77.9-173.8-173.8c0-95.8,77.9-173.8,173.8-173.8c95.8,0,173.8,77.9,173.8,173.8C473.8,395.8,395.8,473.8,300,473.8z M300,143.6c-86.2,0-156.4,70.2-156.4,156.4S213.8,456.4,300,456.4S456.4,386.2,456.4,300S386.2,143.6,300,143.6z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="d-flex flex-column justify-content-between align-items-center">
                                            <div className="d-flex flex-column mb-2 justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                            <div className="d-flex flex-column justify-content-between align-items-center">
                                                <span>BTC+ Power</span>
                                                <span>0.00 GH/s</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="my-3">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={5} md={5} sm={12} className="card px-0">
                            <div className="d-flex justify-content-between align-items-center card-body px-0">
                                <div className="icons"></div>
                                <div className="d-flex justify-content-between align-items-center flex-column">
                                    <span>Active contracts</span>
                                    <span>1</span>
                                </div>
                                <div>
                                    <Button
                                        variant="success"
                                        className="m-1 text-white"
                                    >
                                        + Buy more!
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} md={5} sm={12} className="card px-0">
                            <div className="d-flex justify-content-between align-items-center card-body px-0">
                                <div>
                                    <Button
                                        variant="success"
                                        className="m-1 text-white"
                                    >
                                        + Buy more!
                                    </Button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center flex-column">
                                    <span>Active contracts</span>
                                    <span>1</span>
                                </div>
                                <div className="icons"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Card className="my-3">
                    <Card.Body>
                        <h4>My last 10 contracts</h4>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Power</th>
                                    <th>Active</th>
                                    <th>Created at</th>
                                    <th>Expire date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderData.map((item, index) => (
                                    <tr key={`order-${index}`}>
                                        <td>{index + 1}</td>
                                        <td>{PaymentType[item.payType]}</td>
                                        <td>
                                            {item.payAmount}
                                            {PaymentType[item.payType]}
                                        </td>
                                        <td>{item.power | 0}GH/s</td>
                                        <td>
                                            {!item.active
                                                ? "Active"
                                                : "Canceled"}
                                        </td>
                                        <td>{item.created_at}</td>
                                        <td>
                                            {moment(item.created_at)
                                                .add(30, "minutes")
                                                .format("YYYY-MM-D h:mm")}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
                <Card className="my-3">
                    <Card.Body>
                        <h4>My last 10 payout</h4>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Active</th>
                                    <th>Created at</th>
                                    <th>Expire date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <td>Nothing found</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
                <Card className="my-3">
                    <Card.Body>
                        <h4>My last 10 referrals</h4>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Type</th>
                                    <th>Power</th>
                                    <th>Created at</th>
                                    <th>Expire date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <td>Nothing found</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>            
        </div>
    );
};
