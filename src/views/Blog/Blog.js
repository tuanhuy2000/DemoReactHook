import useFetch from "../../customize/fetch";
import "./Blog.scss";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import AddNewBlog from "../AddNewBlog/AddNewBlog";

const Blog = () => {
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { list: blogs, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    false
  );

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      let newBlogs = blogs.slice(0, 12);
      setNewData(newBlogs);
    }
  }, [blogs]);

  const handleAddNew = (blog) => {
    let data = newData;
    data.unshift(blog);
    setShow(false);
    setNewData(data);
  };

  const deletePost = (id) => {
    let data = newData;
    data = data.filter((item) => item.id !== id);
    setNewData(data);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="my-3">
        + Add new Blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBlog handleAddNew={handleAddNew} />
        </Modal.Body>
        {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
      </Modal>

      <div className="blogs-container">
        {!loading &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">
                  <span>{item.title}</span>
                  <span onClick={() => deletePost(item.id)}>X</span>
                </div>
                <div className="content">{item.body}</div>
                <div className="btn-detail">
                  <Link to={`blog/${item.id}`}>
                    <button type="button">Detail</button>
                  </Link>
                </div>
              </div>
            );
          })}
        {loading && <div>loading...</div>}
      </div>
    </>
  );
};

export default Blog;
