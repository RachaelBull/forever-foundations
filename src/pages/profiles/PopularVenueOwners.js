import React from "react";
import { Container } from "react-bootstrap";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";
import styles from "../../styles/Profile.module.css"

const PopularVenueOwners = () => {
    const { popularOwners } = useProfileData();

  return (
    // WILL COME BACK TO THIS STATEMENT //
<Container className={styles.ProfilesBox}>
      {popularOwners.results.length ? (
        <>
          <p className={styles.SideProfileTitle}>Profiles You May Like</p>
          <hr></hr>
          {popularOwners.results.map((profile) => (
            <Profile key={profile.id} profile={profile} />
        ))}
        </>
      ) : (
        <Asset spinner />
        )}
    </Container>
  );
};

export default PopularVenueOwners;