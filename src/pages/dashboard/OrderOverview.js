import React, { useContext, useEffect, useState } from "react";
import {
    Card,
    Col,
    Container,
    Row,
    Table,
    Button,
} from "@themesberg/react-bootstrap";
import api from "../../utils/api";
import { AuthContext } from "../../Authenticate";
import moment from "moment-timezone";
import toast, { Toaster } from "react-hot-toast";

export default () => {
    const [orderData, setOrderData] = useState([]);
    const PaymentType = ["BTC", "ETH", "LTC", "USDT"];
    const { user, isLogin } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                const result = await api.post(`/user/transaction/${user.id}`);

                if (result.length == 0 || !result) {
                    toast.error(
                        "You need to finish first order in order to access full feature!"
                    );
                    window.location.href = `https://dualmine.io/`;
                    return false;
                }

                setOrderData(result);
                console.log(result);

                return false;
            }

            setLoading(false);
            return setOrderData([]);
        };

        fetchData();
    }, []);

    const createOrder = async () => {
        if (isLogin) {
            try {
                const result = await api.post("/user/create-order", {
                    email: user.email,
                    payType: 0,
                    payAmount: 0.005,
                });

                window.location.href = `https://dualmine.io/dashboard/#/calculator`;
            } catch {
                return false;
            }
        }

        return false;
    };

    return (
        <>
            <Container className="p-4">
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <Card>
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between my-3">
                                    <span className="fs-4">My orders</span>
                                    <Button
                                        variant="secondary"
                                        className="m-1 text-white"
                                        onClick={() => {
                                            createOrder();
                                        }}
                                    >
                                        + Create new order
                                    </Button>
                                </div>
                                <Table>
                                    <thead className="">
                                        <tr>
                                            <th className="border-0">#</th>
                                            <th className="border-0">Type</th>
                                            <th className="border-0">Active</th>
                                            <th className="border-0">Power</th>
                                            <th className="border-0">Amount</th>
                                            <th className="border-0">
                                                Created at
                                            </th>
                                            <th className="border-0">
                                                Expire date
                                            </th>
                                            <th className="border-0">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderData.map((item, index) => (
                                            <tr key={`order-${index}`}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    {PaymentType[item.payType]}
                                                </td>
                                                <td>
                                                    {!item.active
                                                        ? "Active"
                                                        : "Canceled"}
                                                </td>
                                                <td>{item.power | 0}GH/s</td>
                                                <td>{item.payAmount}</td>
                                                <td>{item.created_at}</td>
                                                <td>
                                                    {moment(item.created_at)
                                                        .add(30, "minutes")
                                                        .format(
                                                            "YYYY-MM-D h:mm"
                                                        )}
                                                </td>
                                                <td></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
