import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import ProfilePic from "../../components/ProfilePic";
import { axiosRes } from "../../api/axiosDefaults";

function ReviewCreateForm(props) {
  const { profile, setProfile, setReviews, profileImage, profile_id } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/reviews/", {
        content,
        profile,
      });
      setReviews((prevReviews) => ({
        ...prevReviews,
        results: [data, ...prevReviews.results],
      }));
      setProfile((prevProfile) => ({
        results: [
          {
            ...prevProfile.results[0],
          },
        ],
      }));
      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <ProfilePic src={profileImage} />
          </Link>
          <Form.Control
            placeholder="my review..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={3}
          />
        </InputGroup>
      </Form.Group>
      <button
        className='btn d-block ml-auto'
        disabled={!content.trim()}
        type="submit"
      >
        Submit Review
      </button>
    </Form>
  );
}

export default ReviewCreateForm;