import { connect } from 'react-redux';
import Map from '../components/Map';
import { getOnsens } from '../actions/index';

const mapStateToProps = state => ({
  onsens: state.onsenList.onsens,
});

const mapDispatchToProps = dispatch => ({
  getOnsensData: () => dispatch(getOnsens()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
