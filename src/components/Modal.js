import React, { useState } from "react";
import { Button } from "@themesberg/react-bootstrap";
import { Modal } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import browserHistory from "../browserHistory";
import { BrowserRouter } from "react-router-dom";

export default function WarningModal() {
    const [showDefault, setShowDefault] = useState(true);
    const handleClose = () => setShowDefault(false);

    const goTo = () => {
        window.location.href = "https://dualmine.io/#calculate";
    };

    const goBack = () => {
        browserHistory.goBack();
    };

    return (
        <div>
            <Modal as={Modal.Dialog} centered show={showDefault}>
                <Modal.Body>
                    <div className="d-flex flex-row">
                        <div className="warning-content">
                            <h4>Dear Customer!</h4>
                            <p>
                                Place your first order in order to enjoy the
                                full features.Thank you.
                            </p>
                        </div>
                    </div>
                    <div className="action-buttons text-right">
                        <Button
                            variant="white"
                            className="m-1"
                            onClick={() => {
                                goBack();
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="danger"
                            className="m-1"
                            onClick={() => {
                                goTo();
                            }}
                        >
                            Create Order
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}
