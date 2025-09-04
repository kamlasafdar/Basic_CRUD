import { Container, Card, Button } from "react-bootstrap";
import { useState } from "react";
import Edituser from "./edituser";

export default function User() {
    const [users, setUsers] = useState([
        { id: 1, firstname: "ali", lastname: "khan", email: "ali@example.com" },
        { id: 2, firstname: "sehar", lastname: "ajmal", email: "sehar@example.com" },
        { id: 3, firstname: "john", lastname: "doe", email: "john@example.com" },
    ]);
    const [showeditModal, setShoweditModal] = useState(false); //for edit user
    const [editingUser, setEditingUser] = useState(null);


    const edituser = (firstname, lastname, email, id) => {
        const updatedUsers = users.map(user =>
            user.id === id ? { ...user, firstname: firstname, lastname: lastname, email: email } : user
        );
        setUsers(updatedUsers);
    };

    const handledelete = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
    }


    if (users.length === 0) {
        return (<h1>There is no user</h1>)
    }
    return (
        <>
            <Container>
                {users.map(user => (
                    <Card key={user.id} className="mt-3">
                        <Card.Body>
                            <Card.Title>{user.firstname} {user.lastname}</Card.Title>
                            <Card.Text> Email: {user.email}</Card.Text>
                        </Card.Body>
                        <div className="d-flex gap-3 p-3">
                            <Button variant="success"
                                onClick={() => {
                                    setShoweditModal(true);
                                    setEditingUser(user);
                                }}
                            >Edit</Button>
                            <Button variant="danger"
                                onClick={() => handledelete(user.id)}
                            >Delete</Button>
                        </div>
                    </Card>
                ))}
                <Edituser
                    show={showeditModal}
                    handleClose={() => setShoweditModal(false)}
                    user={editingUser}
                    edituser={edituser}

                />
            </Container>
        </>
    )

}
