// Realworld example that demonstrates a Redux module's flow including immutable.js

import { fetchHeroData } from 'helpers/api'
import { fromJS } from 'immutable'

const UPDATE_HERO_WAYPOINT = 'UPDATE_HERO_WAYPOINT'

export const updateHeroWaypoint = (waypoint) => ({
  type: UPDATE_HERO_WAYPOINT,
  waypoint,
})

const initialState = fromJS({
  isFetching: true,
  opName: 'Fallen Warrior',
  airsoftField: false,
  dates: {
    startDate: '',
    endDate: '',
  },
  location: '',
  description: '',
  fpsRange: {
    boltAction: [600, 500],
    polarStar: [500, 400],
    aeg: [450, 300],
  },
  roe: [],
})

const eventDetail = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HERO_WAYPOINT:
      return state.merge({
        waypointState: action.waypoint,
      })
    default:
      return state
  }
}

export default eventDetail
