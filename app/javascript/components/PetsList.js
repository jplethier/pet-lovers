import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import Pet from './Pet';

class PetsList extends Component {
  render () {
    const { pets } = this.props;

    return (
      <Grid>
        <Row>
          {
            pets.map(pet => (
              <Pet key={pet.id} pet={pet} />
            ))
          }
        </Row>
      </Grid>
    );
  }
}

export default PetsList;
