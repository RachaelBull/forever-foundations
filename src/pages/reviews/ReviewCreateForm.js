import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import reviewStyles from "../../styles/Reviews.module.css"

import ProfilePic from "../../components/ProfilePic";
import { axiosRes } from "../../api/axiosDefaults";

function ReviewCreateForm({
    profile,
    setProfile,
    setReviews,
    profileImage,
    profile_id,
  }) {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [errors, setErrors] = useState({});
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      if (name === "content") setContent(value);
      if (name === "title") setTitle(value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const newErrors = {};
      if (!title.trim()) newErrors.title = ["Please Enter A Title"];
      if (!content.trim()) newErrors.content = ["Please Enter Review Content"];
  
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
  
      try {
        const { data } = await axiosRes.post("/reviews/", {
          content,
          profile,
          title,
        });
        setReviews((prevReviews) => ({
          ...prevReviews,
          results: [data, ...prevReviews.results],
        }));
        setContent("");
        setTitle("");
        setErrors({});
      } catch (err) {
        // console.log(err);
        if (err.response?.status !== 401) {  // If form is not properly filled in, this should trigger an error response
          setErrors(err.response?.data);
        }
      }
    };

    return (
        <Form onSubmit={handleSubmit} className={`mt-2 ${reviewStyles.CreateForm}`}>
          <Form.Group>
            <Form.Label className={reviewStyles.CreateForm}>
                Review Title
            </Form.Label>
            <Form.Control className={reviewStyles.InputBoxes} type="text" name="title" value={title} onChange={handleChange} />
            {errors?.title?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Form.Group>
          <Form.Group>
            <Form.Label>
                Review Content
            </Form.Label>
            <InputGroup>
              <Link to={`/profiles/${profile_id}`}>
                <ProfilePic src={profileImage} />
              </Link>
              <Form.Control
                placeholder="Enter Your Review Here..."
                as="textarea"
                name="content"
                value={content}
                onChange={handleChange}
                rows={2}
              />
            </InputGroup>
            {errors?.content?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Form.Group>
          <button
            className= "btn d-block ml-auto"
            disabled={!content.trim() || !title.trim()}
            type="submit"
          >
            Submit
          </button>
        </Form>
      )};

export default ReviewCreateForm;