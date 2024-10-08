import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";

import ReviewCreateForm from "../reviews/ReviewCreateForm.js";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import {
    useProfileData,
    useSetProfileData,
  } from "../../contexts/ProfileDataContext";
import { Image, Button } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";
import Review from "../reviews/Review"; //
import NoResults from "../../assets/no-results.png";
import { fetchMoreData } from "../../utils/utils";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

function ProfilePage() {
  const [reviews, setReviews] = useState({ results: [] }); 
  const { pageProfile } = useProfileData();
  const [ profileOther, setProfile ] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const {id} = useParams();
  const {setProfileData, handleFollow, handleUnfollow} = useSetProfileData();
  const [profilePosts, setProfilePosts] = useState({ results: [] });
  const [profile] = pageProfile.results;
  const owner = currentUser?.username;
 
  const profile_image = currentUser?.profile_image; 
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePosts }] =
        await Promise.all([
        axiosReq.get(`/profiles/${id}/`),
        axiosReq.get(`/posts/?owner__profile=${id}`),
    ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePosts(profilePosts);
        setHasLoaded(true);
      } catch (err) {
        //console.log(err);
      }
    };
    fetchData();
    
  }, [id, setProfileData]);

  useEffect(() => {
    const handleMount = async () => {
     try {
        const [{ data: pageProfile }, { data: reviews }] = await Promise.all([
          axiosReq.get(`/profiles/${id}`),
          axiosReq.get(`/reviews/?profile=${id}`),
        ]);
        setProfile({ results: [pageProfile] });
        setReviews(reviews);
      } catch (err) {
        //console.log(err);
      }
    };

    handleMount();
  }, [id]);


  const mainProfile = (
    <>
    {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
        <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.posts_count}</div>
              <div>posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
          {profile?.bio && (
            <Row className="px-3 justify-content-center">
              <Col className="text-center">
                <h4 className={styles.BioHeader}>
                A LITTLE ABOUT MYSELF...
                </h4>
                <hr />
                <div className={styles.bio}>
                  {profile?.bio}
                </div>
              </Col>
            </Row>
            )}
            {profile?.email && (
            <Row className="px-3">
              <Col>
                <p className={styles.Email}>Contact Email: {profile?.email}</p>
              </Col>

            </Row>
            )}

        </Col>
        <Col lg={3} className={`${styles.Followbtn} text-lg-right`}>
        {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
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
        </Col>
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className={styles.PostHeader}>{profile?.owner}'s posts</p>
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`${profile?.owner} has not posted yet.`}
        />
      )}
    </>
  );

  return (
    <Container className={styles.pushed}>
    <Row className={styles.Row}>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Container>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
      <Container className={styles.ProfilesBox}>
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <Container>
                { profile?.is_owner ? (
                    <span>
                      Your Reviews.
                      <br></br>
                      <hr />
                    </span>
                  ) : currentUser ? (
                    <ReviewCreateForm
                    profile_id={currentUser.profile_id}
                    profileImage={profile_image}
                    name={owner}
                    profile={id}
                    setProfile={setProfile}
                    setReviews={setReviews}
                  />
                  ) 
                  : reviews.results.length ? (
                    "Reviews"
                    ) : null}
                   {reviews.results.length ? (
                  <InfiniteScroll
                   children={reviews.results.map((review) => (
                  <Review
                  key={review.id}
                  {...review}
                  setProfile={setProfile}
                  setReviews={setReviews}
                />
              ))}
              dataLength={reviews.results.length}
              loader={<Asset spinner />}
              hasMore={!!reviews.next}
              next={() => fetchMoreData(reviews, setReviews)}
            />
          ) : currentUser ? (
                    <span>No reviews to display</span>
                    ) : (
                    <span>No reviews to display.</span>
                    )}
                </Container>
            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
            </Col>
          </Container>
      </Col>
    </Row>
    </Container>

  );
}

export default ProfilePage;