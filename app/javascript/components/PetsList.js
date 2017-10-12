import React, { Component } from 'react';
import {
  Grid,
  Row
} from 'react-bootstrap';

import Header from './Header';
import Pet from './Pet';

class PetsList extends Component {
  render () {
    const { pets } = this.props;

    return (
      <div>
        <Header />
        <Grid>
          <Row>
            {
              pets.map(pet => (
                <Pet key={pet.id} pet={pet} />
              ))
            }
          </Row>
        </Grid>
      </div>
    );
  }
}

export default PetsList;
