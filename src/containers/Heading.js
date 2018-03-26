import { connect } from 'react-redux';
import Heading from '../components/Heading';
import { getOnsens } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  getOnsensDataWithFilter: filter => dispatch(getOnsens(filter)),
});

export default connect(null, mapDispatchToProps)(Heading);
