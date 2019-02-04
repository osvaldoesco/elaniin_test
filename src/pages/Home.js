import React, { Component } from 'react';
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
          HOME
        </div>
      </Layout>
    );
  }
}

export default Home;
