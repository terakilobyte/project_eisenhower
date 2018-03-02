import React from 'react'
import PropTypes from 'prop-types'
import bindActionCreators from 'redux'
import { connect } from 'react-redux'

import * as eventDetailActionCreators from 'redux/modules/eventDetail'
import { EventDetail } from 'components'

const EventDetailContainer = () => {
  return <EventDetail details={this.props} />
}

EventDetailContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  opName: PropTypes.string.isRequired,
  airsoftField: PropTypes.bool.isRequired,
  dates: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fpsRange: PropTypes.object.isRequired,
  roe: PropTypes.array.isRequired,
}

const mapStateToProps = ({ detail }) => ({
  detail,
  // isFetching: detail.get('isFetching'),
  // opName: detail.get('opName'),
  // airsoftField: detail.get('airsoftField'),
  // dates: detail.get('dates'),
  // location: detail.get('location'),
  // description: detail.get('description'),
  // fpsRange: detail.get('fpsRange'),
  // roe: detail.get('roe'),
})

const mapDispatchToProps = (dispatch) => bindActionCreators(eventDetailActionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailContainer)
