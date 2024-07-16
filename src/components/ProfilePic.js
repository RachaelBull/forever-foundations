import React from "react";
import styles from "../styles/ProfilePic.module.css";

const ProfilePicture = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.profilepic}
        src={src}
        height={height}
        width={height}
        alt="profile avatar"
      />
      {text}
    </span>
  );
};

export default ProfilePicture;