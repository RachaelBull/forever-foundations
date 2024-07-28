import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import signinbg from "../../assets/sign-up-pic.jpg"
import axios from "axios";

import { Button, Form, Col, Row, Container, Alert} from "react-bootstrap";
import { useRedirect } from "../../hooks/useRedirect";

const SignUpForm = () => {
    useRedirect("loggedIn");
    const [signUpData, setSignUpData] = useState({
      username: "",
      password1: "",
      password2: "",
    });
    const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };


  return (
    <div className={styles.background} style={{ backgroundImage: `url(${signinbg})`}}>
    <Row>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${styles.signincontainer} p-4 `}>
          <h1 className={styles.header}>sign up</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control 
                    className={styles.input} 
                    type="text" 
                    placeholder="Enter Username" 
                    name="username" 
                    value={username}
                    onChange={handleChange} />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password1">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control 
                    className={styles.input} 
                    type="password" 
                    placeholder="Password" 
                    name="password1" 
                    value={password1}
                    onChange={handleChange} />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group controlId="password2">
                <Form.Label className="d-none">Confirm Password</Form.Label>
                <Form.Control 
                    className={styles.input} 
                    type="password" 
                    placeholder="Confirm Password" 
                    name="password2" 
                    value={password2}
                    onChange={handleChange} />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check className={styles.input} type="checkbox" label="Create an account for a business" />
            </Form.Group>
            <Button type="submit" className={btnStyles.signupbtn}>
            Sign Up
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert variant="warning" key={idx} className="mt-3">
                {message}
              </Alert>
            ))}
                      <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign In</span>
          </Link>
          </Form>

        </Container>
      </Col>
    </Row>
    </div>
  );
};

export default SignUpForm;