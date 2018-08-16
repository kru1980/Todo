import R from 'ramda'

const getTracksById = (state, id) => R.prop(id, state.tracks)

export const getTracks = state => {
  const tracks = R.map(id => getTracksById(state, id), state.tracksPage.ids )
  return tracks
}
