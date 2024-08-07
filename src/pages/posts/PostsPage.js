import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Post from "./Post";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/Post.module.css";
import PopularVenueOwners from "../profiles/PopularVenueOwners";

function PostsPage({ message, filter = "" }) {
    const [posts, setPosts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
            setPosts(data);
            setHasLoaded(true);
          } catch (err) {
            console.log(err);
          }
        };
    
        setHasLoaded(false);
        const timer = setTimeout(() => {
          fetchPosts();
        }, 1000);
    
        return () => {
          clearTimeout(timer);
        };
      }, [filter, query, pathname]);
  
  return (
    <div className={styles.greyed}>
    <Container>
        <Row className={`${styles.postcontainer} h-100 `}>
            <Col className="py-2 p-0 p-lg-2" lg={8}>
            <i className={`fas fa-search ${styles.searchicon}`} />
            <Form
                className={styles.SearchBar}
                onSubmit={(event) => event.preventDefault()}
            >
            <Form.Control
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                className="mr-sm-2"
                placeholder="Enter keywords to search by post or user"
            />
            </Form>

            {hasLoaded ? (
             <>
            {posts.results.length ? (
                <InfiniteScroll
                children={posts.results.map((post) => (
                <Post key={post.id} {...post} setPosts={setPosts} />
              ))}
              dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : (
              <Container>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container>
            <Asset spinner />
          </Container>
        )}
            </Col>
            <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
            <PopularVenueOwners />
            </Col>
        </Row>
    </Container>
    </div>
  );
}

export default PostsPage;