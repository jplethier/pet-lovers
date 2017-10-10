import React, { Component } from 'react';

class PetsList extends Component {
  render () {
    const { pets } = this.props;

    return (
      <div>
        {
          pets.map(pet => (
            <p key={pet.id}>{pet.name}</p>
          ))
        }
      </div>
    );
  }
}

export default PetsList;
