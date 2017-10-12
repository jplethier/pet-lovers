import React, { Component } from 'react';
import { Col, Thumbnail } from 'react-bootstrap'

class Pet extends Component {
  render () {
    const { pet } = this.props;

    return (
      <Col md={4} sm={6} >
        <Thumbnail src={pet.picture_url} >
          <h1>{pet.name}</h1>
        </Thumbnail>
      </Col>
    );
  }
}

export default Pet;
