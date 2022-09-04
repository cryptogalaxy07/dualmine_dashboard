import React from "react";
import {
    Card,
    Col,
    Container,
    Row,
    Table,
    Button,
} from "@themesberg/react-bootstrap";
import api from "../../utils/api";
import moment from "moment-timezone";
import toast, { Toaster } from "react-hot-toast";

export default () => {
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                const result = await api.post(`/user/transaction/${user.id}`);

                if (result.length != 0 || result) {
                    toast.error(
                        "You need to finish first order in order to access full feature!"
                    );
                    window.location.href = `https://dualmine.io/`;
                    return false;
                }               

                return false;
            }

            return false;

        };

        fetchData();
    }, []);

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
                                        className="m-1 text-white "
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
                                        {order_data.map((item, index) => (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.type}</td>
                                                <td>{item.active}</td>
                                                <td>{item.power}</td>
                                                <td>{item.amount}</td>
                                                <td>{item.created_at}</td>
                                                <td>{item.expire_date}</td>
                                                <td>{item.action}</td>
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
