import { Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Editpost({ show, handleClose, post,editpost }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setText(post.content);
    }
  }, [post]);

  const handleSave = () => {
    editpost(title , text , post.id)
    setTitle("");
    setText("");
    handleClose();
  };

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Edit Your Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
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
