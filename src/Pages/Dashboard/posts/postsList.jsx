import { Container, Card, Button } from "react-bootstrap";
import { useState } from "react";
import AddPosts from "./addpost.jsx";
import Editpost from "./editpost.jsx";

export default function Posts() {
    const [posts, setPosts] = useState([
        { id: 1, title: "First Post", content: "This is the first post." },
        { id: 2, title: "Second Post", content: "This is the second post." },
        { id: 3, title: "Third Post", content: "This is the third post." },
    ]);
    const [showModal, setShowModal] = useState(false); //for add post
    const [showeditModal, setShoweditModal] = useState(false); //for edit post
    const [editingPost, setEditingPost] = useState(null);



    const addPost = (title, text) => {
        if (title && text) {
            const newPost = {
                id: posts.length + 1,
                title: title,
                content: text,
            };
            setPosts([...posts, newPost]);
        }
    };
    const editPost = (title, text, id) => {
        const updatedPosts = posts.map(post =>
            post.id === id ? { ...post, title: title, content: text } : post
        );
        setPosts(updatedPosts);
    };

    const handledelete = (id) => {
        const updatedPosts = posts.filter(post => post.id !== id);
        setPosts(updatedPosts);
    }


    if (posts.length === 0) {
        return(
        <>
            <h1>There is no post</h1>
            <Button className="mt-3 d-flex align-items-center"
                onClick={() => setShowModal(true)}
            >
                Add
            </Button>
            <AddPosts
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                    addPost={addPost} />

        </>
        )}
    return (
        <>
            <Container>
                {posts.map(post => (
                    <Card key={post.id} className="mt-3">
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.content}</Card.Text>
                        </Card.Body>
                        <div className="d-flex gap-3 p-3">
                            <Button variant="success"
                                onClick={() => {
                                    setShoweditModal(true);
                                    setEditingPost(post);
                                }}
                            >Edit</Button>
                            <Button variant="danger"
                                onClick={() => handledelete(post.id)}
                            >Delete</Button>
                        </div>
                    </Card>
                ))}
                <Button className="mt-3 d-flex align-items-center"
                    onClick={() => setShowModal(true)}
                >
                    Add
                </Button>
                <AddPosts
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                    addPost={addPost} />
                <Editpost
                    show={showeditModal}
                    handleClose={() => setShoweditModal(false)}
                    post={editingPost}
                    editpost={editPost}

                />
            </Container>
        </>
    )

}
