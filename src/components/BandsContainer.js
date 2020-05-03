import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from "./Band"

import { connect } from 'react-redux'

class BandsContainer extends Component {

  render() {
    const {addBand, bands, removeBand} = this.props
    return (
      <div>
        <BandInput addBand={addBand}/>
        {bands.map(band => <Band removeBand={removeBand} key={band.id} band={band} />)}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  removeBand: id => dispatch({type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
