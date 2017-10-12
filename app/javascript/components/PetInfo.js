import React, { Component } from 'react';
import {
  Col,
  Grid,
  Image,
  Label,
  Row,
} from 'react-bootstrap';

import Header from './Header';

class PetInfo extends Component {
  render () {
    const { pet } = this.props;

    return (
      <div>
        <Header />
        <Grid>
          <Row>
            <a href="/">Voltar</a>
          </Row>
          <Row>
            <h1>{pet.name}</h1>
          </Row>
          <Row>
            <Col>
              <Image src={pet.picture_url} circle />
              <Label>{pet.breed}</Label>
            </Col>
            <Col>
              <p>{pet.biography}</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default PetInfo;
