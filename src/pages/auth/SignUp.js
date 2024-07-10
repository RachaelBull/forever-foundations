import React from "react";
import { Link } from "react-router-dom";
import signuppic from "../../assets/sign-up-pic.jpg"
import appStyles from "../../App.module.css";

import { Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className= "p-4">
          <h1>sign up</h1>

            {/* add your form here */}

        </Container>
        <Container>
          <Link to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className="my-auto d-none d-md-block p-2"
      >
        <Image className={`${appStyles.FillerImage}`}
          src={signuppic}
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;