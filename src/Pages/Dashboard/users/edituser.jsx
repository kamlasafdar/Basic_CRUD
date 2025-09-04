import { Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Edituser({ show, handleClose, user, edituser }) {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (user) {
            setfirstname(user.firstname);
            setlastname(user.lastname);
            setEmail(user.email);
        }
    }, [user]);

    const handleSave = () => {
        edituser(firstname, lastname, email, user.id);
        setfirstname("");
        setlastname("");
        setEmail("");
        handleClose();
    };

    return (
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Edit Your Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>FirstName</Form.Label>
                        <Form.Control
                            type="text"
                            value={firstname}
                            onChange={(e) => setfirstname(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>LastName</Form.Label>
                        <Form.Control
                            type="text"
                            value={lastname}
                            onChange={(e) => setlastname(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="success" onClick={handleSave}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
