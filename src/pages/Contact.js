import React, { Component } from 'react';
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
          CONTACT
        </div>
      </Layout>
    );
  }
}

export default Contact;
