import React, { useState } from "react";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import ProfilePic from "../../components/ProfilePic";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";

const Review = (props) => {
    const {
      profile_id,
      profile_image,
      owner,
      created_on,
      title,
      content,
      id,
      setProfile,
      setReviews,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

return (
    <>
      <Media>
        <Link to={`/profiles/${profile_id}`}>
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span>{owner}</span>
          <span>{created_on}</span>
            <>
              <p><u>{title}</u></p>
              <p>{content}</p>
            </>
        </Media.Body>
    </Media>
    </>
  )};

export default Review;