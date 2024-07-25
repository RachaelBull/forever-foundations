import React from "react";
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import ProfilePic from "../../components/ProfilePic";
import { Button } from "react-bootstrap";

const Profile = (props) => {
  const { profile, imageSize = 55 } = props;
  const { id, following_id, image, owner } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <div
      className={"my-3 d-flex align-items-center"}
    >
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <ProfilePic src={image} height={imageSize} />
        </Link>
      </div>
      <div className={`mx-2 ${styles.WordBreak}`}>
        <strong>{owner}</strong>
      </div>
      <div className={"text-right"}>
        {currentUser &&
          !is_owner &&
          (following_id ? (
            <Button
              className={btnStyles.SideUnfollowBtn}
              onClick={() => {}}
            >
              unfollow
            </Button>
          ) : (
            <Button
              className={btnStyles.SideFollowBtn}
              onClick={() => {}}
            >
              follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;