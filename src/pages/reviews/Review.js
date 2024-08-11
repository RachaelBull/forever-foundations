import React, { useState } from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ProfilePic from "../../components/ProfilePic";
import { Media } from "react-bootstrap";
import ReviewEditForm from './ReviewEditForm';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";

const Review = (props) => {
  const { profile_id, profile_image, owner, review, created_on, content, setReviews, id, setProfile } = props;

  const [showEditForm, setShowEditForm] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/reviews/${id}/`);
      setProfile((prevProfile) => ({
        results: [
          {
            ...prevProfile.results[0]
          },
        ],
      }));

      setReviews((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.filter((review) => review.id !== id),
      }));
    } catch (err) {}
  };

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
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </div>
  )
}

export default Review;