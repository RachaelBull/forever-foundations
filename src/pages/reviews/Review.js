import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ProfilePic from "../../components/ProfilePic";
import { Media } from "react-bootstrap";

const Review = (props) => {
  const { profile_id, profile_image, owner, created_on, content } = props;

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <ProfilePic src={profile_image} />
        </Link>
        <Media.Body>
          <span>
            {owner}
          </span>
          <span>
            {created_on}
          </span>
          <p>
            {content}
          </p>
        </Media.Body>
      </Media>
    </div>
  )
}

export default Review;