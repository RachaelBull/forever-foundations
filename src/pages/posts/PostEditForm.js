import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import PostBackground from "../../assets/post-bg.jpg"

import styles from "../../styles/Post.module.css";
import btnStyles from "../../styles/Button.module.css";
import bgStyles from "../../styles/SignInUpForm.module.css"
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function PostEditForm() {

    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
      title: "",
      content: "",
      image: "",
      theme: "",
      location: "",
    });

    const { title, content, image, theme, location } = postData;

    const imageInput = useRef(null);
    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/posts/${id}/`);
            const { title, content, image, theme, location, is_owner } = data;
    
            is_owner ? setPostData({ title, content, image, theme, location }) : history.push("/");
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [history, id]);

    const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('title', title)
    formData.append('content', content)
    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }
    formData.append('theme', theme)
    formData.append('location', location)

    try {
      await axiosReq.put(`/posts/${id}/`, formData);
      history.push(`/posts/${id}`);
      } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }
    };

  const textFields = (
    <div className="text-center">
        <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control 
                type="text" 
                name="title"
                value={title}
                onChange={handleChange} 
            />
        </Form.Group>
        {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
        ))}

        <Form.Group>
            <Form.Label>Post Content</Form.Label>
            <Form.Control 
                as="textarea" 
                rows={6} 
                name="content"
                value={content}
                onChange={handleChange}
            />
        </Form.Group>
        {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
        ))}

        <Form.Group>
            <Form.Label>What is the theme of your venue?</Form.Label>
            <Form.Control
                as="select"
                name="theme"
                value={theme}
                onChange={handleChange}
            />
            <option>Fairytale</option>
            <option>Rustic</option>
            <option>Traditional</option>
        </Form.Group>
        {errors?.theme?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
        ))}
        
        <Form.Group>
            <Form.Label>Where is your venue?</Form.Label>
            <Form.Control
                as="select"
                name="location"
                value={location}
                onChange={handleChange}
            />
            <option>England</option>
            <option>Italy</option>
            <option>Greece</option>
            <option>Spain</option>
        </Form.Group>
        {errors?.location?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
        ))}


    
    
      <Button
        className={`${btnStyles.postbtn} ${styles.pushed}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={btnStyles.postbtn} type="submit">
        Save Changes
      </Button>
    </div>
  );

  return (
    <div className={bgStyles.background} style={{ backgroundImage: `url(${PostBackground})`}}>
    <Container>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${styles.Container} d-flex flex-column justify-content-center`}
                    >
                        <Form.Group className="text-center">
                                    <figure>
                                        <Image 
                                            className={styles.imgupload}
                                            src={image}
                                            rounded
                                        />
                                    </figure>
                                    <div>
                                        <Form.Label
                                            className={`${btnStyles.postbtn} btn`}
                                            htmlFor="image-upload"
                                        >
                                            Change Image
                                        </Form.Label>
                                    </div>
                        <Form.File 
                            id="image-upload" 
                            accept="image/*"
                            onChange={handleChangeImage}
                            ref={imageInput}
                        />
                        </Form.Group>
                        {errors?.image?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                        {message}
                        </Alert>
                        ))}

                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={styles.Container}>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    </Container>
    </div>
  );
}

export default PostEditForm;