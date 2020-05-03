import React, { Component } from 'react';

class Band extends Component {

  render() {
    const {band, removeBand} = this.props
    return(
      <div>
        <li>{band.name}<button onClick={() => removeBand(band.id)}></button></li>
      </div>
    );
  }
};

export default Band;
