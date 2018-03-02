import React from 'react'
import PropTypes from 'prop-types'

const EventDetail = ({ isFetching, opName, airsoftField, dates, location, description, fpsRange, roe }) => {
  console.log(opName)
  return (
    <div>
      <div>{opName}</div>
    </div>
  )
}

EventDetail.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  opName: PropTypes.string.isRequired,
  airsoftField: PropTypes.bool.isRequired,
  dates: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fpsRange: PropTypes.object.isRequired,
  roe: PropTypes.array.isRequired,
}
