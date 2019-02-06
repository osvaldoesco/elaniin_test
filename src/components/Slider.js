import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container, Row, Col } from 'reactstrap';

class Slider extends Component {
  render() {
    return (
      <Carousel>
        <div className="slider-item-container">
        <div className="slider-item">
          <div className="slide-number">
            <label>01.</label>
            <div></div>
          </div>
          <img src="box_testimonial.jpg" />
          <div className="slide-name">
            <p className="person-name">Alison <span>Cooper</span></p>
            <p className="company">LEX Сompany</p>
          </div>
          <div className="description-slide">
            For me design — is a quality of life.
            Good design has little to do with trends.
            Tired of listening to him trying to give a frivolous
            status of a fashion phenomenon. In my opinion,
            the designer should strive to do something more
            than individual things.
          </div>
        </div>
        </div>
        <div className="slider-item-container">
        <div className="slider-item">
          <div className="slide-number">
            <label>02.</label>
            <div></div>
          </div>
          <img src="box_testimonial.jpg" />
          <div className="slide-name">
            <p className="person-name">Cristian  <span>Newman</span></p>
            <p className="company">Flex Production</p>
          </div>
          <div className="description-slide">
            For me design — is a quality of life.
            Good design has little to do with trends.
            Tired of listening to him trying to give a frivolous
            status of a fashion phenomenon. In my opinion,
            the designer should strive to do something more
            than individual things.
          </div>
        </div>
        </div>
        <div className="slider-item-container">
          <div className="slider-item">
            <div className="slide-number">
              <label>03.</label>
              <div></div>
            </div>
            <img src="box_testimonial.jpg" />
            <div className="slide-name">
              <p className="person-name">Osvaldo <span>Escobar</span></p>
              <p className="company">LEX Сompany</p>
            </div>
            <div className="description-slide">
              For me design — is a quality of life.
              Good design has little to do with trends.
              Tired of listening to him trying to give a frivolous
              status of a fashion phenomenon. In my opinion,
              the designer should strive to do something more
              than individual things.
            </div>
          </div>
          <img alt="qe" src="no-xe.jpg" className="d-none" />
        </div>
      </Carousel>
    );
  }
}

export default Slider;
