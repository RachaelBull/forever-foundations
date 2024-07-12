import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import axios from "axios";
import signinbg from "../../assets/sign-up-pic.jpg"

import { Button, Form, Col, Row, Container} from "react-bootstrap";


const SignInForm = () => {
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password} = signInData;

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/login/", signInData);
      history.push("/");
    } catch (err) {
    }
  };
  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

    return (
        <div className={styles.background} style={{ backgroundImage: `url(${signinbg})`}}>
          <Row className={styles.Row}>
      <Col className="my-auto p-0 p-md-2" md={6}>
        <Container className={`${styles.signincontainer} p-4 `}>
          <h1 className={styles.header}>sign in</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control 
                className={styles.input} 
                type="text" 
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control 
                className={styles.input} 
                type="password" 
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange} />
            </Form.Group>
            <Button type="submit" className={btnStyles.signupbtn}>
              Sign In
            </Button>
            <Link className={styles.Link} to="/signup">
            Don't have an account yet? <span>Sign up.</span>
          </Link>
          </Form>

        </Container>
      </Col>
    </Row>
    </div>
      );
    }
    
export default SignInForm;
