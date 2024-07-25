import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Profile from "./Profile";

const PopularVenueOwners = () => {
  const [profileData, setProfileData] = useState({
    // we will use the pageProfile later!
    pageProfile: { results: [] },
    popularOwners: { results: [] },
  });
  const { popularOwners } = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );
        setProfileData((prevState) => ({
          ...prevState,
          popularOwners: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

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