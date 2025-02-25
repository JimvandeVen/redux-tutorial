/* eslint-disable linebreak-style */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.setVisibilityFilter,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  },
})

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink
