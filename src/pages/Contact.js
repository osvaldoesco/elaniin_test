import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


import Layout from '../components/Layout';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'contact'
    }
  }

  render() {

    return (
      <Layout page={this.state.page}>
        <div className="contact-container">
          <div className0="contact-header">
            <Container>
              <Row>
                <Col xs="12">
                  <h2 className="contact-header__title">
                    Let’s chat
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="3">
                  <div className="contact-description">
                    <p>
                      A photo — is a search for what can get
                      into the frame. When you limit events
                      to a frame — You change these events
                    </p>
                    <div className="leave-a-message">
                      <label className="title-with-blue">
                        <span>Leave a message</span>
                      </label>
                    </div>
                  </div>
                </Col>
                <Col xs="12" md="9">
                  <img alt="map" src="map.jpg" className="contact-map" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Contact;
