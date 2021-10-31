import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container, CardHeader  } from 'reactstrap';
import { useHistory } from "react-router-dom";
import './LoginForm.scss'
import '../../styles/commons/NavLink.scss'


export default (props) => {
  let history = useHistory();

  const onHandleSubmit = (e) => {
    e.preventDefault()
    history.push("/chat");
  }

  return (
    <Container>
      <Row form className={'m-auto'} >
        <Col className={'py-5'}>
        <CardHeader className={"header"}>
          Sports and bets chat app
        </CardHeader>
          <Form onSubmit={onHandleSubmit} className={'form'} col={3}>
            <Col md={6} className={'mx-auto  py-5'}>
              <FormGroup>
                <Input
                  // valid
                  id="user-name"
                  name="name"
                  placeholder="User name"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  // valid
                  id="login-email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="channel-select">
                  Choose your channel
                </Label>
                <Input
                  id="channel-select"
                  name="select"
                  type="select"
                >
                  <option>
                    Sport
                  </option>
                  <option>
                    Bets
                  </option>
                </Input>
              </FormGroup>
              <Button type={'submit'} className={''}>
                  Submit
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};