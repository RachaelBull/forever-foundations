import React from "react";
import { Container } from "react-bootstrap";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";

const PopularVenueOwners = () => {
    const { popularOwners } = useProfileData();

  return (
    // WILL COME BACK TO THIS STATEMENT //
<Container>
      {popularOwners.results.length ? (
        <>
          <p>Popular Venue Owners</p>
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