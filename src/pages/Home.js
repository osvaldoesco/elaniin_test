import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import Layout from '../components/Layout';
import Slider from '../components/Slider';

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


          <div className="home__intro-container">
            <div className0="contact-header">
              <Container>
                <Row>
                  <Col xs="12">
                    <label className="intro-title">introduction</label>
                    <h2 className="contact-header__title">
                      Photography is <br />
                      a journey.
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" md="6">
                    <div className="contact-description">
                      <p>
                        My advice to everyone is to create life, not to consume
                        it. I'm curious to see how many emotions now appear in
                        things created with the help of complex technologies.
                        They are so loaded with different feelings that it is no
                        longer possible to separate emotions and work from the
                        instrument on which it is done.
                      </p>
                      <div className="leave-a-message">
                        <label className="title-with-blue">
                          <span>Discover</span>
                        </label>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="social-net">
              <label> Facebook </label>
              <label> Instagram </label>
              <label> Twitter </label>
            </div>
            <div className="net--explore explore-gallery">
              <label>explore more</label>
            </div>
          </div>


          <div className="home__hello-container padding-100">
            <Container>
              <Row>
                <Col sm={{size: 8, offset: 2}} md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}}>

                  <div className="hello__img-container">
                    <div className="hello__img">
                      <img alt="decoration triangle" src="decoration-triangle.jpg" className="de-triangle" />
                      <img alt="hello" src="image-home.png" className="photo-center"/>
                      <img alt="decoration square" src="photo_decoration.png" className="de-square" />
                    </div>
                  </div>
                  <div className="vertical-line">
                  </div>
                  <div className="hello__description">
                    <h2> Hello. </h2>
                    <div className="title-decoration"></div>
                    <p>
                      All that we do is work on the style of life, on "being." The object
                      as such is not very interesting. I wonder how people will live with
                      him, what metamorphoses he will undergo in the house.
                      I always liked very simple things. In all. Doing simple things is
                      the most difficult thing.
                      If we talk about simplicity, then it is a synthesis.
                      <span> – Edward Oliver </span>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="home__works-container padding-40">
            <div className0="contact-header">
              <Container>
                <Row>
                  <Col xs="12">
                    <h2 className="contact-header__title">
                      My Works.
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" md="6">
                    <div className="contact-description">
                      <p>
                        A photo — is a search for what can get
                        into the frame. When you limit events to
                        a frame — You change these events
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="home__work-boxes padding-40">
              <Row className="no-margin">
                <Col xs="6" sm="6" md="3" className="work-box">
                  <div className="box1 sigle-work-box">
                    <img alt="work1" src="box_small.jpg" />
                    <div className="pricing__info">
                      <p>
                        photos
                        <span>Canon</span>
                        MODEL
                        <span>Canon EOS 5D Mark II</span>
                        SHUTTER SPEED
                        <span>1/4000s</span>
                        APERTURE
                        <span>ƒ/4.5</span>
                        FOCAL LENGTH
                        <span>230mm</span>
                        ISO
                        <span>250</span>
                      </p>
                    </div>
                  </div>

                  <div className="box2 sigle-work-box">
                    <img alt="work2" src="box_small.jpg" />
                  </div>
                </Col>
                <Col xs="6" sm="6" md="3" className="work-box">
                  <div className="box3 sigle-work-box">
                    <img alt="work3" src="box_tall.jpg" />
                  </div>
                </Col>
                <Col xs="12" sm="6" md="6" className="work-box">
                  <Row className="no-margin">
                    <Col xs="12" sm="12" md="12" className="work-box">
                      <div className="box4 sigle-work-box">
                        <img alt="work4" src="box_large.jpg" />

                      </div>
                    </Col>
                    <Col xs="6" sm="6" md="6" className="work-box">
                      <div className="box5 sigle-work-box">
                        <img alt="work2" src="box_small.jpg" />
                      </div>
                    </Col>
                    <Col xs="6" sm="6" md="6" className="work-box">
                      <div className="box6 sigle-work-box">
                        <img alt="work2" src="box_small.jpg" />
                      </div>
                    </Col>
                  </Row>
                </Col>

              </Row>
            </div>
            <div className="explore-gallery">
              <label> Explore Gallery </label>
            </div>
          </div>

          <div className="home__testimonials-container padding-100">
            <Slider />
          </div>

          <div className="home__pricing-container padding-40">
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
                    <Row className="no-padding  margin-top-40">
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
                  <div className="pricing__info">
                    <h4>  Photography of<br /> events. </h4>
                    <div className="title-decoration--short"></div>
                    <p>
                      photos
                      <span>Package of 150</span>
                      processing
                      <span>Correction</span>
                      Type of camera
                      <span>Semi-professional</span>
                      resolution
                      <span>32 MP</span>
                      Term
                      <span>114 - 21 days</span>
                    </p>
                    <Row className="no-padding margin-top-40">
                      <Col xs="6">
                        <label class="price"> $59 </label>
                      </Col>
                      <Col xs="6">
                        <label class="explore"> explore </label>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col xs="12" sm="6" md="3" className="pricing__img">
                  <img alt="pr1cing3" src="placeholder.jpg" />
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
                    <Row className="no-padding  margin-top-40">
                      <Col xs="6">
                        <label class="price"> $99 </label>
                      </Col>
                      <Col xs="6">
                        <label class="explore"> explore </label>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col xs="12" sm="6" md="3" className="pricing__img--even">
                  <img alt="pr1cing4" src="placeholder.jpg" />
                  <div className="pricing__info">
                    <h4>  Photography for<br /> movies. </h4>
                    <div className="title-decoration"></div>
                    <p>
                      photos
                      <span>Package of 500</span>
                      processing
                      <span>Correction, Retouch</span>
                      Type of camera
                      <span>Professional</span>
                      resolution
                      <span>48 MP</span>
                      Term
                      <span>30 days</span>
                    </p>
                    <Row className="no-padding margin-top-40">
                      <Col xs="6">
                        <label class="price--small"> Individual </label>
                      </Col>
                      <Col xs="6">
                        <label class="explore"> explore </label>
                      </Col>
                    </Row>
                  </div>
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
