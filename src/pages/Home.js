import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import Layout from '../components/Layout';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'home'
    }
  }

  render() {
    return (
      <Layout page={this.state.page}>
        <div className="home-container">
          <div className="home__pricing-container">
            <Container>
              <Row>
                <Col xs="12">
                  <h2 className="contact-header__title">
                    Pricing.
                  </h2>
                </Col>
                <Col xs="12">
                  <p className="padding-40 poppins">
                    The photo leaves open moments, which immediately
                    overlap with the <br /> pressure of time.
                  </p>
                </Col>
              </Row>
            </Container>
            <div className="home__pricing-boxes">
              <Row className="no-margin">
                <Col xs="12" sm="6" md="3" className="pricing__img">
                  <img alt="pr1cing1" src="placeholder.jpg"  />
                  <div className="pricing__info">
                    <h4>Model <br /> Photography. </h4>
                    <div className="title-decoration"></div>
                    <p>
                      photos
                      <span>Package of 50</span>
                      processing
                      <span>Retouch</span>
                      Type of camera
                      <span>Semi-professional</span>
                      resolution
                      <span>12 MP</span>
                      Term
                      <span>14 days</span>
                    </p>
                    <Row className="no-padding">
                      <Col xs="6">
                        <label class="price"> $39 </label>
                      </Col>
                      <Col xs="6">
                        <label class="explore"> explore </label>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col xs="12" sm="6" md="3" className="pricing__img--even">
                  <img alt="pr1cing2" src="placeholder.jpg" />
                </Col>
                <Col xs="12" sm="6" md="3" className="pricing__img">
                  <img alt="pr1cing3" src="placeholder.jpg" />
                </Col>
                <Col xs="12" sm="6" md="3" className="pricing__img--even">
                  <img alt="pr1cing4" src="placeholder.jpg" />
                </Col>
              </Row>
            </div>
          </div>
          <div className="home__logotype-container">
            <Container>
              <Row>
                <Col xs="6" md="3" className="logotype-box">
                  <img alt="logotype1" src="logotype.png" />
                </Col>
                <Col xs="6" sm="6" md="3" className="logotype-box">
                  <img alt="logotype1" src="logotype.png" />
                </Col>
                <Col xs="6" md="3" className="logotype-box">
                  <img alt="logotype1" src="logotype.png" />
                </Col>
                <Col xs="6" md="3" className="logotype-box">
                  <img alt="logotype1" src="logotype.png" />
                </Col>
                <Col xs="6" md="3" className="logotype-box">
                  <img alt="logotype1" src="logotype.png" />
                </Col>
                <Col xs="6" md="3" className="logotype-box">
                  <img alt="logotype1" src="logotype.png" />
                </Col>
                <Col xs="6" md="3" className="logotype-box">
                  <img alt="logotype1" src="logotype.png" />
                </Col>
                <Col xs="6" md="3" className="logotype-box">
                  <img alt="logotype1" src="logotype.png" />
                </Col>
              </Row>
            </Container>
          </div>
          <div className="about-newsletter">
            <h2 className="newsletter__title">
              Sign up for our newsletter <br />
              to receive special offers. <br />
            </h2>
            <div className="vertical-line">
            </div>
            <div className="newsletter__input-container">
              <Form inline className="newsletter__form">
                <FormGroup>
                  <Label for="Email" hidden>Email</Label>
                  <Input type="email" name="email" id="Email" placeholder="Enter your email address" />
                </FormGroup>
                {' '}
                <Button>OK</Button>
              </Form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
