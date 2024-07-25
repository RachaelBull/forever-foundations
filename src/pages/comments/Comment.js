import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfilePic from "../../components/ProfilePic";
import styles from "../../styles/Post.module.css";

const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_on, content } = props;

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <ProfilePic src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.CommentOwner}>{owner}</span>
          <span className={styles.CommentDate}>{updated_on}</span>
          <p>{content}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;