import React from 'react'
import styles from "../../styles/Post.module.css"
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ProfilePic from "../../components/ProfilePic";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";

const Post = (props) => {
    const {
      id,
      owner,
      profile_id,
      profile_image,
      comments_count,
      likes_count,
      like_id,
      title,
      content,
      image,
      theme,
      location,
      updated_on,
      postPage,
    } = props;
  
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

  return <Card className={styles.post}>
    <Card.Body>
        <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
            <ProfilePic src={profile_image} height={55} />
            {owner}
            </Link>
            <div className="d-flex align-items-center">
            <span>{updated_on}</span>
            {is_owner && postPage && "..."}
          </div>

        </Media>
    </Card.Body>
    <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
    <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <Card.Text>Venue Theme: {theme}</Card.Text>
        <Card.Text>Venue Location: {location}</Card.Text>
        <div className={styles.PostBar}>
        {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You cannot love your own post.</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={() => {}}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to love posts.</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
    </Card.Body>
  </Card>
}

export default Post