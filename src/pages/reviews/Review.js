import React, { useState } from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ProfilePic from "../../components/ProfilePic";
import { Media } from "react-bootstrap";
import ReviewEditForm from './ReviewEditForm';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";

const Review = (props) => {
  const { profile_id, profile_image, owner, created_on, content, setReviews, id } = props;

  const [showEditForm, setShowEditForm] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

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
          {showEditForm ? (
            <ReviewEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setReviews={setReviews}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <></>
          )}
        </Media.Body>
        {!is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
          />
        )}
      </Media>
    </div>
  )
}

export default Review;