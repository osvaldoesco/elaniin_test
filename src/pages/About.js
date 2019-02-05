import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/Layout';

class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'about'
    }
  }


  render() {
    return (
      <Layout page={this.state.page}>
        <div className="about-container">
          <div className="about-header">
            <img alt="quote" src="icon-quote.png" />
            <h3>
              Photography —is the most democratic of all arts.
            </h3>
            <div className="vertical-line">
            </div>
          </div>
          <div className="about-photos-container">
            <Container>
              <Row className="single-history">
                <Col md="5">
                  <div className="about-photos-container__photo">
                    <label className="number">
                      01.
                    </label>
                    <img alt="phot" src="placeholder.jpg" className="photo" />
                    <img alt="phot-decoration" src="photo_decoration.png" className="photo-decoration" />

                  </div>
                </Col>
                <Col md="7">
                  <div className="about-photos-container__caption">
                    <label className="date">2015 year</label>
                    <h3 className="photo_title">Beginning of a photographer's career.</h3>
                    <div className="description-decoration">
                      <div className="decoration"> </div>
                      <p>
                         The world of design is ruled by diversity, and its good. Another question is whether to consider a lot of pieces of furniture as trash. Thats it is this responsibility — to create things, not junk,
                        — lies on the designer and the company-manufacturer. Bad architecture is even more harmful. <br />
                        If you make an ugly, uncomfortable and expensive chair, then it will be forgotten very quickly, but if you build a terrible building — it will stay for twenty years and make many unhappy.
                        I have desires and emotions. Principles, if there are certain rules to be taken into account under this word.
                      </p>
                    </div>
                </div>
                </Col>
              </Row>

              <Row className="single-history">
                <Col md="7">
                  <div className="about-photos-container__caption">
                    <label className="date">2016 year</label>
                    <h3 className="photo_title">Opening of the office.</h3>
                    <div className="description-decoration">
                      <div className="decoration"> </div>
                      <p>
                        More than the design process itself, I am interested in inventions, engineering and marketing
                        ... I think that a good designer is someone who manages to unite all the elements:
                        the understanding of materials and the belief in increasing functionality. Then the
                        reduction to the form, if you like, becomes the result of all these experiments ...
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="5">
                  <div className="about-photos-container__photo--right">
                    <label className="number--right">
                      02.
                    </label>
                    <img alt="phot1" src="placeholder.jpg" className="photo" />
                    <img alt="phot-decoration1" src="photo_decoration.png" className="photo-decoration--oposite" />

                  </div>
                </Col>
              </Row>

              <Row className="single-history">
                <Col md="5">
                  <div className="about-photos-container__photo">
                    <label className="number">
                      03.
                    </label>
                    <img alt="photo2" src="placeholder.jpg" className="photo" />
                    <img alt="phot-blocks2" src="photo_decoration.png" className="photo-decoration" />

                  </div>
                </Col>
                <Col md="7">
                  <div className="about-photos-container__caption">
                    <label className="date">2017 year</label>
                    <h3 className="photo_title">Cooperation with world brands.</h3>
                    <div className="description-decoration">
                      <div className="decoration"> </div>
                      <p>
                         My work is simple and sophisticated, so it can be described in
                         both simple and florid language. I love sophistication and I feel
                         its superiority. I like people with a sophisticated mind and at the
                         same time simple in communication. These qualities can be combined
                         quite naturally. However, objects, like people, look pathetic if these
                         properties are connected in them artificially.
                      </p>
                    </div>
                </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="about-text-container">
            <Container>
              <Row>
                <Col xs="12" sm="6" md="4">
                  <div className="text-item">
                    <h4>Experience.</h4>
                    <div className="text-caption">
                      <label>Photo Agency Shutter</label>
                      <p>Photographer-intern <br /> 2016–2017</p>
                      <label>Studio e.Oliver</label>
                      <p>Photographer-retoucher <br /> 2017–Present</p>
                    </div>

                  </div>
                </Col>
                <Col xs="12" sm="6" md="4">
                  <div className="text-item">
                    <h4>Education.</h4>
                    <div className="text-caption">
                      <label>Photography School</label>
                      <p>New York Film Academy <br />2010–2012 </p>
                      <label>Photography Universities</label>
                      <p>Bloomfield Hills, MI <br />2013–2015 </p>
                    </div>
                  </div>
                </Col>
                <Col xs="12" sm="6" md="4">
                  <div className="text-item">
                    <h4>Equipment.</h4>
                    <div className="text-caption">
                      <label>Digital cameras</label>
                      <p>Canon EOS 5D Mark IV <br />Sony Alpha A7R II </p>
                      <label>Video camera</label>
                      <p>Sony AX53 4K Handycam <br />4K 24p Cinema/60p Video Camcorder </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="about-video">
            <img alt="about-video" src="overlay.jpg" className/>
            <div className="video-play">
              Play
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default About;
