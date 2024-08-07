import React from "react";
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import ProfilePic from "../../components/ProfilePic";
import { Button } from "react-bootstrap";
import { useSetProfileData } from "../../contexts/ProfileDataContext";

const Profile = (props) => {
  const { profile, imageSize = 55 } = props;
  const { id, following_id, image, owner } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const {handleFollow, handleUnfollow} = useSetProfileData();

  return (
    <div
      className={"my-3 d-flex align-items-center"}
    >
      <div className={styles.Padding}>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <ProfilePic src={image} height={imageSize} />
        </Link>
      </div>
      <div className={`mx-2 ${styles.WordBreak}`}>
        <strong>{owner}</strong>
      </div>
      <div className={styles.FollowerLine}>
        {profile?.followers_count} followers
      </div>
      <div className={btnStyles.AlignedProfileBtns}>
        {currentUser &&
          !is_owner &&
          (following_id ? (
            <Button
              className={btnStyles.SideUnfollowBtn}
              onClick={() => handleUnfollow(profile)}
            >
              Unfollow
            </Button>
          ) : (
            <Button
              className={btnStyles.SideFollowBtn}
              onClick={() => handleFollow(profile)}
            >
              Follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;