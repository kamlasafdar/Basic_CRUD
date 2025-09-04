import {Button , Modal , Form } from "react-bootstrap";
import { useState } from "react";

export default function Addpost({show , handleClose , addPost}) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleSave=()=>{
        addPost(title , text);
        setTitle("");
        setText("");
        handleClose();
    }

    return (
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Add New Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                        type="text"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        
                        />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Content</Form.Label>
                        <Form.Control
                        type="textarea"
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                        
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
    )

}
