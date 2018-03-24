import { connect } from 'react-redux';
import Map from '../components/Map';
import { getOnsens, toggleInfoWindow } from '../actions/index';

const mapStateToProps = state => ({
  onsens: state.onsenList.onsens,
});

const mapDispatchToProps = dispatch => ({
  getOnsensData: () => dispatch(getOnsens()),
  toggleOnsenInfoWindow: index => dispatch(toggleInfoWindow(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
